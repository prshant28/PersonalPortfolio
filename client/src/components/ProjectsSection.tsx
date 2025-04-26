import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-lg font-medium mb-2">MY WORK</h2>
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl mb-4">Featured Projects</h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of my recent works that showcase my skills and expertise in UI/UX design and development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-sm font-medium rounded-bl-lg">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-poppins font-semibold text-xl mb-2">{project.title}</h4>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="rounded-full">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.liveUrl} 
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Preview</span>
                    <ExternalLink size={14} />
                  </a>
                  <a 
                    href={project.sourceUrl} 
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Source Code</span>
                    <Code size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            View All Projects <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default ProjectsSection;
