import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, 
  SiFigma, SiVuedotjs, SiPython, SiTypescript, SiTailwindcss 
} from "react-icons/si";

const TechStackCarousel = () => {
  const techIcons = [
    { icon: SiHtml5, color: "#E34F26", name: "HTML5" },
    { icon: SiCss3, color: "#1572B6", name: "CSS3" },
    { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    { icon: SiReact, color: "#61DAFB", name: "React" },
    { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    { icon: SiFigma, color: "#F24E1E", name: "Figma" },
    { icon: SiVuedotjs, color: "#4FC08D", name: "Vue.js" },
    { icon: SiPython, color: "#3776AB", name: "Python" },
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
    // Duplicate first 4 for continuous scrolling effect
    { icon: SiHtml5, color: "#E34F26", name: "HTML5" },
    { icon: SiCss3, color: "#1572B6", name: "CSS3" },
    { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    { icon: SiReact, color: "#61DAFB", name: "React" },
  ];

  return (
    <div className="py-10 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="font-alegreya font-semibold text-xl sm:text-2xl text-primary">Technologies I Work With</h3>
        </motion.div>
        
        {/* FIXED: Carousel container with proper overflow handling */}
        <div className="flex overflow-hidden max-w-full">
          <div className="tech-stack-carousel flex space-x-12 sm:space-x-16 min-w-max">
            {techIcons.map((tech, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-card/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 opacity-80 hover:opacity-100 transition-opacity border border-muted hover:border-primary/30 flex-shrink-0"
                title={tech.name}
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <tech.icon size={32} color={tech.color} className="sm:w-10 sm:h-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;