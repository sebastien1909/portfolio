import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold gradient-text mb-2">
              Sébastien Confrère
            </h3>
            <p className="text-muted-foreground text-sm">
              Étudiant en BUT MMI — Développement Web
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <motion.a
              href="https://sebastien1909.github.io/Portfolio_beta/img/1B2-Confrere%20Sebastien-CVV1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg font-medium text-sm bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:glow-purple transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Télécharger mon CV
            </motion.a>
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Sébastien Confrère. Tous droits réservés.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
