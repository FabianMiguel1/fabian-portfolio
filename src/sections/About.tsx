import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="portfolio-section about-section" id="sobre">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">01 / ABOUT ME</span>
        <h2>
          Além do <span>código.</span>
        </h2>
      </motion.div>

      <div className="about-layout">
        <motion.div
          className="about-main"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="about-lead">
            Sou Fabian Xavier Miguel, estudante de Análise e
            Desenvolvimento de Sistemas e apaixonado por construir
            soluções que unem <strong>tecnologia, dados e criatividade.</strong>
          </p>

          <p>
            Atualmente atuo como estagiário em Análise de Dados no
            SERPRO, trabalhando com Business Intelligence, SQL,
            automação e desenvolvimento de soluções orientadas por dados.
          </p>

          <p>
            Também desenvolvo aplicações web e mobile, explorando
            tecnologias como React, TypeScript, React Native,
            Node.js e Python.
          </p>

          <p>
            Meu objetivo é evoluir continuamente como profissional,
            criando experiências digitais funcionais, eficientes
            e bem construídas.
          </p>

          <a href="#contato" className="text-link">
            Vamos conversar <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <motion.div
          className="about-details"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="detail-item">
            <span>LOCALIZAÇÃO</span>
            <strong>Rio de Janeiro, Brasil</strong>
          </div>

          <div className="detail-item">
            <span>FORMAÇÃO</span>
            <strong>Análise e Desenvolvimento de Sistemas</strong>
          </div>

          <div className="detail-item">
            <span>ATUAÇÃO ATUAL</span>
            <strong>Análise de Dados · SERPRO</strong>
          </div>

          <div className="detail-item">
            <span>ÁREAS DE INTERESSE</span>
            <strong>Software Development · Data · BI</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}