import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const interestsData = [
  {
    title: "Développement Web",
    icon: "💻",
    description:
      "L'informatique a toujours été une passion. Des jeux vidéos à la découverte du développement, jusqu'à ma rencontre avec le web au lycée grâce au NSI.",
  },
  {
    title: "Motocross",
    icon: "🏍️",
    description:
      "Le motocross a toujours été présent dans ma vie. En septembre 2024, j'ai enfin commencé les entraînements, suivant les traces de mon père.",
  },
  {
    title: "Ski",
    icon: "⛷️",
    description:
      "Le ski est un sport que j'adore ! Chaque descente mêle vitesse et maîtrise, procurant un réel sentiment de liberté.",
  },
  {
    title: "Vélo & VTT",
    icon: "🚵",
    description:
      "Le vélo m'accompagne depuis l'enfance. La découverte de la descente en VTT (DH) a intensifié ma passion pour les sensations fortes.",
  },
  {
    title: "Musique",
    icon: "🎺",
    description:
      "Pratique au sein de l'association Lacenh — Lacenh Orchestra et Big Band. Le trombone est mon instrument de prédilection.",
  },
  {
    title: "Jeux-Vidéos",
    icon: "🎮",
    description:
      "Des premiers jeux sur PlayStation 2 à Minecraft et Assetto Corsa aujourd'hui. Cette passion m'a conduit vers le développement.",
  },
];

const Interests = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="interests" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Centres d'Intérêts</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {interestsData.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                {interest.icon}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {interest.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
