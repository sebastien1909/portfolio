import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-50 scale-110" />
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-br from-primary to-secondary">
              <img
                src={profilePhoto}
                alt="Sébastien Confrère"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">Sébastien Confrère</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              Recherche d'alternance en
            </p>
            <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Développement Web
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="https://sebastien1909.github.io/Portfolio_beta/img/1B2-Confrere%20Sebastien-CVV1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:glow-purple transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir mon CV
            </motion.a>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold glass-card border border-border/50 text-foreground hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mes Projets
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
