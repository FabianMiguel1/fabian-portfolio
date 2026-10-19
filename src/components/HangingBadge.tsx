import {
  Suspense,
  useRef,
  useState,
  useEffect,
  Component,
} from "react";

import type {
  ReactNode,
  ErrorInfo,
  RefObject,
} from "react";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

import type { ThreeEvent } from "@react-three/fiber";

import {
  RoundedBox,
  Text,
  useTexture,
} from "@react-three/drei";

import {
  Physics,
  RigidBody,
  CuboidCollider,
  useRopeJoint,
} from "@react-three/rapier";

import type { RapierRigidBody } from "@react-three/rapier";

import * as THREE from "three";

/* =========================================
   CONFIGURAÇÕES
========================================= */

const ANCHOR_Y = 3.6;
const CORD_LENGTH = 1.55;
const BADGE_TOP = 1.12;

const BADGE_INITIAL_Y =
  ANCHOR_Y - CORD_LENGTH - BADGE_TOP;

/* =========================================
   PROTEÇÃO CONTRA ERROS
========================================= */

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class BadgeErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(
      "Erro no crachá 3D:",
      error,
      info
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="badge-fallback">
          <div className="badge-fallback-card">
            <img
              src="/fabian-badge.jpg"
              alt="Fabian Miguel"
            />

            <h3>FABIAN MIGUEL</h3>

            <p>Software Developer</p>

            <span>DATA & BUSINESS INTELLIGENCE</span>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/* =========================================
   FOTO DO CRACHÁ
========================================= */

function BadgePhoto() {
  const texture = useTexture("/fabian-badge.jpg");

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
  }, [texture]);

  return (
    <group position={[0, 0.18, 0.105]}>
      <mesh>
        <planeGeometry args={[1.43, 1.65]} />

        <meshStandardMaterial
          map={texture}
          roughness={0.85}
          metalness={0}
        />
      </mesh>
    </group>
  );
}

/* =========================================
   CORDA DINÂMICA
========================================= */

type CordProps = {
  badge: RefObject<RapierRigidBody>;
};

function DynamicCord({ badge }: CordProps) {
  const cord = useRef<THREE.Mesh>(null);

  const anchorPosition = useRef(
    new THREE.Vector3(0, ANCHOR_Y, 0)
  );

  const attachmentPosition = useRef(
    new THREE.Vector3()
  );

  const direction = useRef(
    new THREE.Vector3()
  );

  const quaternion = useRef(
    new THREE.Quaternion()
  );

  useFrame(() => {
    if (!badge.current || !cord.current) {
      return;
    }

    const position = badge.current.translation();
    const rotation = badge.current.rotation();

    quaternion.current.set(
      rotation.x,
      rotation.y,
      rotation.z,
      rotation.w
    );

    attachmentPosition.current
      .set(0, BADGE_TOP, 0)
      .applyQuaternion(quaternion.current)
      .add(
        new THREE.Vector3(
          position.x,
          position.y,
          position.z
        )
      );

    direction.current
      .copy(attachmentPosition.current)
      .sub(anchorPosition.current);

    const length = direction.current.length();

    if (length < 0.001) return;

    cord.current.position
      .copy(anchorPosition.current)
      .add(attachmentPosition.current)
      .multiplyScalar(0.5);

    cord.current.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.current.normalize()
    );

    cord.current.scale.set(1, length, 1);
  });

  return (
    <mesh ref={cord}>
      <cylinderGeometry
        args={[0.045, 0.045, 1, 12]}
      />

      <meshStandardMaterial
        color="#555555"
        roughness={0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* =========================================
   DESIGN DO CRACHÁ
========================================= */

function BadgeDesign() {
  return (
    <group>
      {/* BASE BRANCA */}

      <RoundedBox
        args={[1.65, 2.3, 0.12]}
        radius={0.09}
        smoothness={5}
      >
        <meshStandardMaterial
          color="#eeeeee"
          roughness={0.35}
        />
      </RoundedBox>

      {/* FUNDO DA FOTO */}

      <RoundedBox
        args={[1.5, 1.75, 0.015]}
        radius={0.04}
        position={[0, 0.18, 0.075]}
      >
        <meshStandardMaterial
          color="#171717"
        />
      </RoundedBox>

      {/* FOTO */}

      <BadgePhoto />

      {/* TEXTO SUPERIOR */}

      <Text
        position={[0, -0.785, 0.105]}
        fontSize={0.075}
        color="#555555"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.09}
      >
        DEVELOPER ID
      </Text>

      {/* NOME */}

      <Text
        position={[0, -0.905, 0.105]}
        fontSize={0.125}
        color="#111111"
        anchorX="center"
        anchorY="middle"
      >
        FABIAN MIGUEL
      </Text>

      {/* CARGO */}

      <Text
        position={[0, -1.025, 0.105]}
        fontSize={0.064}
        color="#555555"
        anchorX="center"
        anchorY="middle"
      >
        SOFTWARE DEVELOPER | DATA & BI
      </Text>

      {/* ARGOLA */}

      <mesh position={[0, 1.17, 0]}>
        <torusGeometry
          args={[0.075, 0.02, 8, 24]}
        />

        <meshStandardMaterial
          color="#aaaaaa"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
}

/* =========================================
   FÍSICA DO CRACHÁ
========================================= */

function BadgePhysics() {
  const anchor = useRef<RapierRigidBody>(null!);
  const badge = useRef<RapierRigidBody>(null!);

  const [dragging, setDragging] =
    useState(false);

  const target = useRef(
    new THREE.Vector3()
  );

  const { camera, gl } = useThree();

  useRopeJoint(anchor, badge, [
    [0, 0, 0],
    [0, BADGE_TOP, 0],
    CORD_LENGTH,
  ]);

  useFrame((_, delta) => {
    if (!badge.current || !dragging) {
      return;
    }

    const current =
      badge.current.translation();

    const force = new THREE.Vector3(
      target.current.x - current.x,
      target.current.y - current.y,
      target.current.z - current.z
    );

    force.multiplyScalar(18);

    const dt = Math.min(delta, 0.033);

    badge.current.applyImpulse(
      {
        x: force.x * dt,
        y: force.y * dt,
        z: force.z * dt,
      },
      true
    );
  });

  function onDown(
    event: ThreeEvent<PointerEvent>
  ) {
    event.stopPropagation();

    target.current.copy(event.point);

    setDragging(true);

    gl.domElement.setPointerCapture(
      event.pointerId
    );

    badge.current?.wakeUp();
  }

  function onMove(
    event: ThreeEvent<PointerEvent>
  ) {
    if (!dragging) return;

    event.stopPropagation();

    const raycaster =
      new THREE.Raycaster();

    raycaster.setFromCamera(
      new THREE.Vector2(
        event.pointer.x,
        event.pointer.y
      ),
      camera
    );

    const plane = new THREE.Plane(
      new THREE.Vector3(0, 0, 1),
      0
    );

    const intersection =
      new THREE.Vector3();

    if (
      raycaster.ray.intersectPlane(
        plane,
        intersection
      )
    ) {
      target.current.copy(intersection);
    }
  }

  function onUp(
    event: ThreeEvent<PointerEvent>
  ) {
    event.stopPropagation();

    setDragging(false);

    if (
      gl.domElement.hasPointerCapture(
        event.pointerId
      )
    ) {
      gl.domElement.releasePointerCapture(
        event.pointerId
      );
    }
  }

  return (
    <>
      {/* ÂNCORA */}

      <RigidBody
        ref={anchor}
        type="fixed"
        position={[0, ANCHOR_Y, 0]}
        colliders={false}
      />

      {/* CORPO FÍSICO */}

      <RigidBody
        ref={badge}
        position={[0, BADGE_INITIAL_Y, 0]}
        colliders={false}
        linearDamping={2.5}
        angularDamping={5}
        mass={1}
        enabledRotations={[
          false,
          false,
          true,
        ]}
      >
        <CuboidCollider
          args={[0.8, 1.1, 0.06]}
        />

        <group
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          <BadgeDesign />
        </group>
      </RigidBody>

      <DynamicCord badge={badge} />
    </>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function HangingBadge() {
  return (
    <div className="badge-container">
      <BadgeErrorBoundary>
        <Canvas
          camera={{
            position: [0, 0.8, 9],
            fov: 38,
          }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
          }}
          style={{
            touchAction: "none",
          }}
        >
          <ambientLight intensity={2} />

          <directionalLight
            position={[3, 5, 5]}
            intensity={2}
          />

          <Suspense fallback={null}>
            <Physics
              gravity={[0, -9.81, 0]}
              timeStep={1 / 60}
            >
              <BadgePhysics />
            </Physics>
          </Suspense>
        </Canvas>
      </BadgeErrorBoundary>

      <div className="badge-hint">
        ↗ ARRASTE PARA INTERAGIR
      </div>
    </div>
  );
}