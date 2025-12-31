import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const journeyData = [
  {
    period: "2021 - 2024",
    title: "Baccalauréat général",
    place: "Lycée Eugène-Woillez, Montreuil-sur-Mer",
    description: "Spécialité Maths et NSI",
    highlight: "Mention Très Bien",
  },
  {
    period: "2024 - Présent",
    title: "BUT MMI",
    place: "IUT de Lannion, Bretagne",
    description: "Spécialisation parcours développement web et applications mobiles",
    highlight: "En cours",
  },
];

const Journey = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Mon Parcours</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30" />

          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary -translate-x-1/2 glow-purple z-10" />

              {/* Content Card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary mb-3">
                    {item.period}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.place}</p>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary">
                    {item.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
