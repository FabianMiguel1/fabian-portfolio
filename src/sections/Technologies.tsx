import { motion } from "motion/react";
import { Code2, Database, Wrench } from "lucide-react";

const groups = [
  {
    title: "Desenvolvimento",
    icon: Code2,
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Expo",
      "Node.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Dados & BI",
    icon: Database,
    technologies: [
      "Python",
      "SQL",
      "Qlik Sense",
      "Impala",
      "ETL",
      "Business Intelligence",
    ],
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    technologies: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
    ],
  },
];

export default function Technologies() {
  return (
    <section
      className="portfolio-section technologies-section"
      id="tecnologias"
    >
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">04 / TECH STACK</span>
        <h2>
          Tecnologias & <span>ferramentas.</span>
        </h2>
      </motion.div>

      <div className="technology-grid">
        {groups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              className="technology-card"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className="technology-card-header">
                <Icon size={25} strokeWidth={1.4} />
                <span>0{index + 1}</span>
              </div>

              <h3>{group.title}</h3>

              <div className="technology-list">
                {group.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}