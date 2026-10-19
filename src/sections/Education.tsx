import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  Award,
  ArrowUpRight,
  Languages,
  Database,
  BarChart3,
  Code2,
} from "lucide-react";

const certifications = [
  {
    number: "01",
    institution: "Yes! Idiomas",
    course: "Curso de Inglês",
    category: "IDIOMAS",
    period: "FEV 2016 — NOV 2021",
    description:
      "Formação em língua inglesa ao longo de cinco anos, com desenvolvimento de habilidades de comunicação, compreensão, leitura e escrita.",
    icon: Languages,
    skills: [
      "Inglês",
      "Comunicação",
      "Leitura",
      "Compreensão",
    ],
  },
  {
    number: "02",
    institution: "FIAP",
    course: "Big Data & Analytics",
    category: "DADOS",
    period: "CURSO COMPLEMENTAR",
    description:
      "Capacitação em Big Data & Analytics, abordando conceitos de análise de dados, governança, qualidade da informação e aplicação de dados para suporte à tomada de decisões.",
    icon: Database,
    skills: [
      "Big Data",
      "Analytics",
      "Governança de Dados",
      "Qualidade de Dados",
    ],
  },
  {
    number: "03",
    institution: "FIAP",
    course: "Business Intelligence (BI)",
    category: "BUSINESS INTELLIGENCE",
    period: "CURSO COMPLEMENTAR",
    description:
      "Estudo dos fundamentos de Business Intelligence, incluindo Data Warehouse, ETL, OLAP e conceitos relacionados à análise e transformação de dados em informações estratégicas.",
    icon: BarChart3,
    skills: [
      "Business Intelligence",
      "Data Warehouse",
      "ETL",
      "OLAP",
    ],
  },
  {
    number: "04",
    institution: "Formação Complementar",
    course: "Desenvolvedor Qlik Sense 2.0",
    category: "DESENVOLVIMENTO BI",
    period: "CURSO COMPLEMENTAR",
    description:
      "Formação voltada ao desenvolvimento de aplicações de Business Intelligence com Qlik Sense, explorando modelagem de dados, construção de visualizações, indicadores e desenvolvimento de dashboards.",
    icon: Code2,
    skills: [
      "Qlik Sense",
      "Dashboards",
      "Modelagem de Dados",
      "KPIs",
      "Visualização de Dados",
    ],
  },
];

export default function Education() {
  return (
    <section
      className="portfolio-section education-section"
      id="formacao"
    >
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">
          03 / EDUCATION & CERTIFICATIONS
        </span>

        <h2>
          Formação & <span>certificações.</span>
        </h2>

        <p>
          Aprendizado contínuo em desenvolvimento de software,
          análise de dados, Business Intelligence e idiomas.
        </p>
      </motion.div>

      {/* GRADUAÇÃO */}

      <motion.div
        className="education-featured"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="education-featured-icon">
          <GraduationCap size={34} strokeWidth={1.3} />
        </div>

        <div className="education-featured-content">
          <span className="education-small-label">
            FORMAÇÃO ACADÊMICA
          </span>

          <h3>
            Análise e Desenvolvimento
            <br />
            de Sistemas
          </h3>

          <p>
            Graduação na área de tecnologia, com foco em
            desenvolvimento de software, programação,
            banco de dados e construção de soluções digitais.
          </p>

          <span className="education-status">
            <span className="career-current-dot" />
            EM ANDAMENTO
          </span>
        </div>

        <ArrowUpRight
          className="education-featured-arrow"
          size={25}
        />
      </motion.div>

      {/* CERTIFICAÇÕES */}

      <div className="education-subheading">
        <div>
          <BookOpen size={20} strokeWidth={1.5} />
          <h3>Cursos & especializações</h3>
        </div>

        <span>
          {String(certifications.length).padStart(2, "0")} CURSOS
        </span>
      </div>

      <div className="certification-grid">
        {certifications.map((certification, index) => {
          const Icon = certification.icon;

          return (
            <motion.article
              className="certification-card"
              key={certification.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
            >
              <div className="certification-top">
                <div className="certification-icon">
                  <Icon size={25} strokeWidth={1.4} />
                </div>

                <span>{certification.number} / 04</span>
              </div>

              <span className="certification-category">
                {certification.category}
              </span>

              <h3>{certification.course}</h3>

              <div className="certification-institution">
                <Award size={15} />
                <span>{certification.institution}</span>
              </div>

              <p>{certification.description}</p>

              <div className="certification-skills">
                {certification.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="certification-bottom">
                <span>{certification.period}</span>
                <ArrowUpRight size={18} />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}