import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  ArrowUpRight,
  Code2,
  Database,
  BarChart3,
  Layers3,
  Plane,
  ShoppingBag,
  GitBranch,
  Smartphone,
} from "lucide-react";

type Category = "Todos" | "Dados & BI" | "Desenvolvimento";

type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "Todos">;
  subtitle: string;
  description: string;
  stack: string[];
  url: string;
  icon: typeof Code2;
  visual: string;
  inProgress?: boolean;
};

const projects: Project[] = [
  {
    id: "01",
    title: "Conciliação Bancária",
    category: "Dados & BI",
    subtitle: "Automação financeira e integração de dados.",
    description:
      "Sistema desenvolvido em Python, Pandas e MySQL para importar planilhas, comparar registros financeiros e atualizar automaticamente o status de conciliação das vendas.",
    stack: ["Python", "Pandas", "MySQL", "SQL"],
    url: "https://github.com/FabianMiguel1/conciliacao-bancaria",
    icon: Database,
    visual: "finance",
  },
  {
    id: "02",
    title: "SwiftDesk",
    category: "Desenvolvimento",
    subtitle: "Central inteligente de triagem de chamados.",
    description:
      "Aplicação web com backend Python e Flask, interface responsiva e recursos de processamento de texto para classificação e direcionamento de chamados de suporte.",
    stack: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    url: "https://github.com/FabianMiguel1/SwiftDesk",
    icon: Layers3,
    visual: "support",
  },
  {
    id: "03",
    title: "Chelsea FC Dashboard",
    category: "Dados & BI",
    subtitle: "Football Analytics com Power BI.",
    description:
      "Painel analítico de desempenho esportivo com indicadores de partidas, gols, pontos e resultados, utilizando Power BI, Power Query e modelagem de dados.",
    stack: ["Power BI", "Power Query", "Data Analytics"],
    url: "https://github.com/FabianMiguel1/chelsea-fc-performance-dashboard",
    icon: BarChart3,
    visual: "football",
  },
  {
    id: "04",
    title: "Controle de Estoque",
    category: "Desenvolvimento",
    subtitle: "Gestão de vendas, produtos e relatórios.",
    description:
      "Sistema em Python integrado ao MySQL para cadastro de produtos, controle de estoque, identificação de itens com baixa quantidade e geração de relatórios.",
    stack: ["Python", "MySQL", "Backend"],
    url: "https://github.com/FabianMiguel1/Relatorio-controle-de-vendas-e-produtos.",
    icon: Database,
    visual: "inventory",
  },
  {
    id: "05",
    title: "Dashboard de Aviação",
    category: "Dados & BI",
    subtitle: "Exploração visual de dados aeronáuticos.",
    description:
      "Projeto de análise e visualização de dados de aviação utilizando Python e Streamlit.",
    stack: ["Python", "Streamlit", "Data Visualization"],
    url: "https://github.com/FabianMiguel1/dashboard-aviacao-streamlit",
    icon: Plane,
    visual: "aviation",
  },
  {
    id: "06",
    title: "GoalStyle E-commerce",
    category: "Desenvolvimento",
    subtitle: "Interface para comércio eletrônico.",
    description:
      "Projeto web de e-commerce voltado à prática de desenvolvimento de interfaces, organização de páginas e apresentação de produtos.",
    stack: ["HTML", "CSS", "Web"],
    url: "https://github.com/FabianMiguel1/goalstyle-ecommerce",
    icon: ShoppingBag,
    visual: "commerce",
  },
  {
    id: "07",
    title: "RESET",
    category: "Desenvolvimento",
    subtitle: "Aplicativo mobile de acompanhamento de hábitos.",
    description:
      "Aplicativo em desenvolvimento utilizando React Native, Expo e TypeScript. O projeto tem como objetivo auxiliar usuários no acompanhamento de hábitos, registro de progresso, visualização de estatísticas e desenvolvimento pessoal.",
    stack: ["React Native", "Expo", "TypeScript"],
    url: "",
    icon: Smartphone,
    visual: "reset",
    inProgress: true,
  },
];

const categories: Category[] = [
  "Todos",
  "Dados & BI",
  "Desenvolvimento",
];

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div
      className={`portfolio-project-visual visual-${project.visual}`}
    >
      <div className="portfolio-project-grid" />

      <div className="portfolio-project-visual-top">
        <span>FM / PROJECT {project.id}</span>
        <ArrowUpRight size={17} />
      </div>

      <div className="portfolio-project-symbol">
        <Icon size={42} strokeWidth={1.2} />
      </div>

      <div className="portfolio-project-visual-bottom">
        <span>{project.category.toUpperCase()}</span>
        <span>{project.id} / 07</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Todos");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "Todos" ||
      project.category === activeCategory
  );

  return (
    <section
      className="portfolio-section projects-section"
      id="projetos"
    >
      {/* CABEÇALHO */}

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">
          04 / SELECTED WORK
        </span>

        <h2>
          Projetos em <span>destaque.</span>
        </h2>

        <p>
          Uma seleção de projetos que demonstram minhas
          habilidades em desenvolvimento de software,
          automação, análise de dados e Business Intelligence.
        </p>
      </motion.div>

      {/* FILTROS */}

      <div className="portfolio-projects-toolbar">
        <div className="portfolio-projects-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "portfolio-filter active"
                  : "portfolio-filter"
              }
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <span className="portfolio-projects-count">
          {String(filteredProjects.length).padStart(2, "0")}
          {" / "}
          {String(projects.length).padStart(2, "0")}
          {" PROJECTS"}
        </span>
      </div>

      {/* GRID DE PROJETOS */}

      <motion.div
        layout
        className="portfolio-projects-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35 }}
              className="portfolio-project-card"
            >
              {/* VISUAL */}

              {project.url ? (
                <a
                  className="portfolio-project-image-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver projeto ${project.title}`}
                >
                  <ProjectVisual project={project} />
                </a>
              ) : (
                <div className="portfolio-project-image-link">
                  <ProjectVisual project={project} />
                </div>
              )}

              {/* INFORMAÇÕES */}

              <div className="portfolio-project-body">
                <div className="portfolio-project-meta">
                  <span>PROJECT {project.id}</span>
                  <span>{project.category}</span>
                </div>

                {/* STATUS RESET */}

                {project.inProgress && (
                  <span className="portfolio-project-status">
                    <span className="portfolio-project-status-dot" />
                    EM DESENVOLVIMENTO
                  </span>
                )}

                <h3>{project.title}</h3>

                <p className="portfolio-project-subtitle">
                  {project.subtitle}
                </p>

                <p className="portfolio-project-description">
                  {project.description}
                </p>

                {/* TECNOLOGIAS */}

                <div className="portfolio-project-tags">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {/* LINK */}

                {project.url ? (
                  <a
                    className="portfolio-project-action"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitBranch size={16} />
                    Ver repositório
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="portfolio-project-action portfolio-project-pending">
                    <Code2 size={16} />
                    Projeto em desenvolvimento
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* RODAPÉ */}

      <div className="portfolio-projects-end">
        <span>
          MORE CODE. MORE IDEAS. MORE TO COME.
        </span>

        <a
          href="https://github.com/FabianMiguel1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explorar todos os repositórios
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}