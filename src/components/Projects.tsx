import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projectsData = [
  {
    title: "Auracle",
    description:
      "Application de musique permettant de créer, écouter, et importer n'importe quelle musique gratuitement. Import depuis YouTube ou la galerie.",
    tags: ["React", "Mobile App", "API"],
    color: "from-purple-500 to-pink-500",
    icon: "🎵",
  },
  {
    title: "Poke'Collec",
    description:
      "Site Pokémon avec un répertoire de 200 Pokémon, système de collection, ouverture de boosters et ajout personnalisé de Pokémon.",
    tags: ["JavaScript", "PHP", "API"],
    color: "from-yellow-500 to-orange-500",
    icon: "⚡",
  },
  {
    title: "Audit Site Web",
    description:
      "Audit complet du site du chantier naval Hénaff : analyses contexte, économie, trafic, ergonomie et accessibilité.",
    tags: ["UX/UI", "Analyse", "Présentation"],
    color: "from-blue-500 to-cyan-500",
    icon: "🔍",
  },
  {
    title: "Affiche Festival",
    description:
      "Conception d'une affiche pour le festival MMI de l'IUT de Lannion. Création graphique et montage photo.",
    tags: ["Graphic Design", "Photoshop", "Illustrator"],
    color: "from-green-500 to-emerald-500",
    icon: "🎨",
  },
  {
    title: "Ray'Newable",
    description:
      "Projet écologique de récupération d'eau de pluie pour réutilisation dans les toilettes de l'IUT. Cahier des charges complet.",
    tags: ["Gestion Projet", "Écologie", "Innovation"],
    color: "from-teal-500 to-blue-500",
    icon: "💧",
  },
  {
    title: "LocFit",
    description:
      "Site de location de matériel de sport entre particuliers, avec réservations et paiements. Réalisé en équipe sur Node.js principalement.",
    tags: ["JavaScript", "Node.js", "API"],
    color: "from-yellow-500 to-gray-500",
    icon: "💪",
  },
  {
    title: "PaddockLife",
    description:
      "Boutique e-commerce de matériel en lien avec la motocross, allant de pièces décoratives, vêtements et accessoires, à des pièces et des produits dédiés à la mécaniques sur de vraies motocross.",
    tags: ["Prestashop", "CSS", "NoSQL"],
    color: "from-red-500 to-blue-500",
    icon: "🏍️",
  },
  {
    title: "QuickSeat",
    description:
      "Réalisation du design d'une application d'aggrégation de spectacle dans les côtes d'armor, avec réservation et achat de billets intégré. Design responsive, ergonomique, et réalisé en fonction d'un persona précis.",
    tags: ["Figma", "Wireframe", "Mock-up", "User Journey Map"],
    color: "from-blue-500 to-cyan-500",
    icon: "🎫",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Mes Projets</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              />
              <div className="relative glass-card rounded-xl p-6 h-full border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 text-2xl`}
                >
                  {project.icon}
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 rounded-md text-xs font-medium bg-muted/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.div
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-xl"
                >
                  <span className="font-display font-semibold text-primary">
                    En savoir plus →
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
