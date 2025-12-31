import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 text-center">
            <span className="gradient-text">Qui suis-je ?</span>
          </h2>

          <div className="glass-card rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              <span className="text-foreground font-semibold italic">
                "Je jongle entre guidons et claviers, mais toujours avec la même agilité."
              </span>
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Actuellement étudiant en <span className="text-primary font-medium">BUT MMI</span>, ma vie est régie par deux passions :
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-xl bg-muted/30 border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Le monde numérique</h3>
                <p className="text-muted-foreground text-sm">
                  À travers les jeux-vidéos comme Minecraft ou World of Tanks, j'ai voulu voir de l'autre côté du miroir. Me voilà dans l'exploration du développement web et de jeux-vidéos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-xl bg-muted/30 border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
                  <span className="text-2xl">🏍️</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Les deux roues</h3>
                <p className="text-muted-foreground text-sm">
                  Que ce soit la moto, le vélo, ou la trottinette — tout deux roues est la bienvenue ! C'est sur ces 2 roues que je suis en quête d'une alternance.
                </p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-8 text-lg text-foreground font-medium"
            >
              Mon objectif : allier <span className="text-primary">fonctionnalité</span> et <span className="text-secondary">esthétique</span> dans mes projets.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
