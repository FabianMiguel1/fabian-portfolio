import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import HangingBadge from "../components/HangingBadge";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <motion.div
          className="availability"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <span className="availability-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        <div className="hero-title">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Software
            <span>Developer.</span>
          </motion.h1>
        </div>

        <motion.div
          className="hero-introduction"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-terminal">
            <span className="terminal-arrow">&gt;</span>
            hello, i'm fabian miguel
            <span className="terminal-cursor">_</span>
          </div>

          <p>
            Desenvolvedor de software e profissional de dados,
            apaixonado por transformar ideias em soluções digitais
            modernas, funcionais e inteligentes.
          </p>

          <p>
            Atualmente atuo com Análise de Dados e Business
            Intelligence no SERPRO, enquanto desenvolvo projetos
            utilizando React, TypeScript, Python e SQL.
          </p>
        </motion.div>

        <motion.div
          className="hero-tech"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <span>TypeScript</span>
          <span>React</span>
          <span>Python</span>
          <span>SQL</span>
          <span>Business Intelligence</span>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <a href="#projetos" className="primary-button">
            Explorar projetos
            <ArrowUpRight size={17} />
          </a>

           <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
      >
        Meu currículo
      </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <a
            href="https://github.com/FabianMiguel1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <ExternalLink size={19} />
          </a>

          <a
            href="https://linkedin.com/in/fabianmiguel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <ExternalLink size={19} />
          </a>

          <span className="social-divider" />
          <span>RIO DE JANEIRO, BRASIL</span>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.1,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <HangingBadge />
      </motion.div>

      <div className="hero-bottom">
        <div className="hero-bottom-left">
          <span>↓ EXPLORE MY WORK BELOW</span>
          <span>DEVELOPMENT · DATA · BUSINESS INTELLIGENCE</span>
        </div>

        <a href="#sobre" className="scroll-indicator">
          SCROLL
          <ArrowDownRight size={17} />
        </a>
      </div>
    </section>
  );
}