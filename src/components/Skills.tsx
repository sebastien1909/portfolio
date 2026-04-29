import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillsData = [
  {
    category: "Développement Web",
    icon: "🌐",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Node.js", "Express"],
    color: "from-primary to-secondary",
  },
  {
    category: "Web Design",
    icon: "✨",
    skills: ["Figma", "Wireframe", "Maquettes", "UX/UI"],
    color: "from-pink-500 to-purple-500",
  },
  {
    category: "Création Graphique",
    icon: "🎨",
    skills: ["Affinity Designer", "Affinity Publisher", "Adobe Illustrator"],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Montage Photo",
    icon: "📸",
    skills: ["Affinity Photo", "Adobe Photoshop"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Montage Vidéo",
    icon: "🎬",
    skills: ["DaVinci Resolve", "Adobe Premiere Pro"],
    color: "from-green-500 to-teal-500",
  },
  {
    category: "Gestion de Projet",
    icon: "📋",
    skills: ["Cahier des charges", "SWOT", "PESTEL", "Gantt", "SCRUM"],
    color: "from-yellow-500 to-orange-500",
  },
];

const softSkills = [
  { name: "Curieux", icon: "🔍" },
  { name: "Persévérant", icon: "💪" },
  { name: "Sérieux", icon: "🎯" },
  { name: "Esprit logique", icon: "🧠" },
  { name: "Flexible", icon: "🤸" },
  { name: "Esprit d'équipe", icon: "🤝" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="gradient-text">Mes Compétences</span>
        </motion.h2>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 text-xl group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.icon}
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.skills.map((s, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-muted/50 text-foreground border border-border/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
            Savoir-Être
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-xl p-4 text-center hover:border-primary/50 hover:glow-soft transition-all duration-300 group cursor-default"
              >
                <span className="text-2xl mb-2 block group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
