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
    <div className="py-10 bg-background overflow-hidden max-w-full">
      <div className="container mx-auto px-6 max-w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="font-poppins font-semibold text-xl text-primary">Technologies I Work With</h3>
        </motion.div>
        
        <div className="flex space-x-12 overflow-hidden max-w-full">
          <div className="tech-stack-carousel flex space-x-16 overflow-hidden">
            {techIcons.map((tech, index) => (
              <div 
                key={index}
                className="flex items-center justify-center w-20 h-20 bg-card rounded-lg p-4 opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
                title={tech.name}
              >
                <tech.icon size={42} color={tech.color} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;