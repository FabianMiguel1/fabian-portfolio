import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* SEÇÃO DE CONTATO */}

      <section
        className="portfolio-section contact-section"
        id="contato"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="section-eyebrow">
            05 / GET IN TOUCH
          </span>

          {/* TÍTULO */}

          <h2>
            Vamos construir
            <span> algo juntos?</span>
          </h2>

          {/* DESCRIÇÃO */}

          <p>
            Estou aberto a oportunidades em desenvolvimento
            de software, análise de dados e Business Intelligence.
          </p>

          {/* EMAIL PRINCIPAL */}

          <a
            href="mailto:fabianxp9@gmail.com"
            className="contact-email"
            aria-label="Enviar e-mail para Fabian Miguel"
          >
            fabianxp9@gmail.com
            <ArrowUpRight size={30} />
          </a>

          {/* REDES SOCIAIS */}

          <div className="contact-links">

            {/* EMAIL */}

            <a
              href="mailto:fabianxp9@gmail.com"
              aria-label="Enviar e-mail"
            >
              <Mail size={17} />
              Email
            </a>

            {/* GITHUB */}

            <a
              href="https://github.com/FabianMiguel1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar GitHub"
            >
              <ExternalLink size={17} />
              GitHub
            </a>

            {/* LINKEDIN */}

            <a
              href="https://linkedin.com/in/fabianmiguel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar LinkedIn"
            >
              <ExternalLink size={17} />
              LinkedIn
            </a>

          </div>
        </motion.div>
      </section>

      {/* RODAPÉ */}

      <footer className="portfolio-footer">

        <span>
          © {new Date().getFullYear()} FABIAN MIGUEL
        </span>

        <span>
          DESIGNED & DEVELOPED WITH PURPOSE.
        </span>

        <a
          href="#home"
          aria-label="Voltar ao início"
        >
          BACK TO TOP ↑
        </a>

      </footer>
    </>
  );
}