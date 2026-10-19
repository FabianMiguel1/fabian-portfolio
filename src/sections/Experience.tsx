import { motion } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Database,
  Building2,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    company: "SERPRO",
    role: "Estagiário em Análise de Dados",
    period: "ATUALMENTE",
    location: "Brasil · Remoto",
    current: true,
    icon: Database,
    description:
      "Atuação na área de Análise de Dados e Business Intelligence, contribuindo para o desenvolvimento de soluções que apoiam a organização, interpretação e apresentação de informações estratégicas.",
        activities: [
    "Desenvolvimento, manutenção e aprimoramento de dashboards, indicadores de desempenho (KPIs) e soluções de Business Intelligence utilizando Qlik Sense.",

    "Desenvolvimento e otimização de consultas SQL para extração, transformação, tratamento e validação de dados em diferentes bases.",

    "Desenvolvimento de scripts e automações utilizando Python para processamento, manipulação e organização de dados.",

    "Modelagem de dados, integração de diferentes fontes e construção de relacionamentos entre tabelas para garantir a consistência das informações.",

    "Desenvolvimento e manutenção de processos de ETL (Extração, Transformação e Carga), utilizando SQL e scripts de carregamento no Qlik Sense.",

    "Investigação e resolução de inconsistências em dados, análise de relacionamentos entre tabelas e validação de indicadores e regras de negócio.",

    "Implementação de expressões, cálculos e filtros dinâmicos utilizando Set Analysis no Qlik Sense para construção de análises interativas.",

    "Utilização de Git para versionamento, organização e manutenção de scripts, consultas SQL e arquivos de projetos.",

    "Apoio no desenvolvimento e evolução de soluções de Business Intelligence, contribuindo para o acompanhamento de resultados e suporte à tomada de decisões.",
    ],  
    technologies: [
      "Qlik Sense",
      "SQL",
      "Python",
      "Business Intelligence",
      "ETL",
      "Git",
      "Análise de Dados",
    ],
  },
{
  number: "02",
  company: "Multi Cargo",
  role: "Área Administrativa",
  period: "1 ANO E 6 MESES",
  location: "Brasil",
  current: false,
  icon: Building2,

  description:
    "Atuação na área administrativa, com experiência em gestão e acompanhamento de processos, suporte ao faturamento, controle fiscal e documental e organização de rotinas operacionais. Utilização de sistemas corporativos para garantir o acompanhamento das demandas e contribuir para a eficiência dos processos internos.",

  activities: [
    "Gestão de Processos: Abertura, acompanhamento e atualização de processos nos sistemas iBroker, Skychart e Sigraweb.",

    "Interface de Faturamento: Preparação, conferência e encaminhamento de informações para solicitação de faturamentos ao setor financeiro.",

    "Controle Fiscal e Documental: Consulta de Notas Fiscais Eletrônicas (NF-e), organização e arquivamento de documentos físicos e digitais.",

    "Apoio Administrativo: Suporte às demandas gerais do escritório, auxiliando na organização de documentos, acompanhamento de solicitações e execução das rotinas administrativas.",

    "Organização de Processos: Contribuição para a padronização das atividades e otimização do fluxo de trabalho entre os setores.",
  ],

  technologies: [
    "iBroker",
    "Skychart",
    "Sigraweb",
    "Gestão de Processos",
    "Faturamento",
    "Controle Fiscal",
    "Gestão Documental",
    "Rotinas Administrativas",
  ],
},
];

export default function Experience() {
  return (
    <section
      className="portfolio-section experience-section"
      id="experiencia"
    >
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">
          02 / PROFESSIONAL JOURNEY
        </span>

        <h2>
          Minha trajetória <span>profissional.</span>
        </h2>

        <p>
          Experiências que contribuíram para minha evolução
          profissional, unindo organização, tecnologia,
          desenvolvimento e análise de dados.
        </p>
      </motion.div>

      <div className="career-timeline">
        {experiences.map((experience, index) => {
          const Icon = experience.icon;

          return (
            <motion.article
              className="career-item"
              key={experience.company}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <div className="career-side">
                <div className="career-icon">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <span className="career-index">
                  EXPERIENCE {experience.number}
                </span>

                <span className="career-period">
                  {experience.period}
                </span>

                {experience.current && (
                  <span className="career-current">
                    <span className="career-current-dot" />
                    EM ATIVIDADE
                  </span>
                )}
              </div>

              <div className="career-content">
                <div className="career-top">
                  <div>
                    <span className="career-location">
                      {experience.location}
                    </span>

                    <h3>{experience.company}</h3>

                    <h4>{experience.role}</h4>
                  </div>

                  <ArrowUpRight
                    size={23}
                    strokeWidth={1.5}
                  />
                </div>

                <p className="career-description">
                  {experience.description}
                </p>

                {experience.activities.length > 0 && (
                  <div className="career-activities">
                    <span className="career-label">
                      PRINCIPAIS ATIVIDADES
                    </span>

                    <ul>
                      {experience.activities.map((activity) => (
                        <li key={activity}>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="career-tags">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="career-footer">
        <BriefcaseBusiness size={17} />
        <span>
          EXPERIÊNCIA EM TECNOLOGIA, DADOS E ADMINISTRAÇÃO
        </span>
      </div>
    </section>
  );
}