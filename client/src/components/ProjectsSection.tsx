import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Get unique categories from projects
  const categories = ["all", ...Array.from(new Set(projects.map(p => p.category.toLowerCase())))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter);

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-primary/5 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-primary/5 filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-alegreya text-sm sm:text-lg uppercase tracking-widest mb-2 inline-block">Portfolio</span>
          <h2 className="font-alegreya font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 tracking-wide uppercase">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-poppins text-sm sm:text-base">
            Here are some of my recent works that showcase my skills and expertise in UI/UX design and development.
          </p>
        </motion.div>
        
        {/* Filter buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 overflow-hidden"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className={`rounded-full font-alegreya uppercase text-xs tracking-wider px-4 sm:px-6 ${
                filter === category 
                  ? "bg-primary shadow-lg shadow-primary/20" 
                  : "hover:bg-primary/10 hover:text-primary border-primary/20"
              }`}
            >
              {category === "all" ? "All" : category}
              {filter === category && <span className="ml-2 flex h-2 w-2 rounded-full bg-white"></span>}
            </Button>
          ))}
        </motion.div>
        
        {/* Projects grid with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-hidden">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project Card with hover effects */}
                <motion.div 
                  className="rounded-xl overflow-hidden bg-card border border-muted hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Card Header with Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    
                    {/* Project image */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-primary/90 hover:bg-primary text-white font-alegreya uppercase tracking-wide py-1 px-3 text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    {/* Quick action buttons - visible on hover */}
                    <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink size={14} />
                      </a>
                      <a 
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                        aria-label="View source code"
                      >
                        <Code size={14} />
                      </a>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4 sm:p-6">
                    {/* Project title with animated underline on hover */}
                    <h3 className="font-alegreya font-bold text-lg sm:text-xl mb-2 relative inline-block group-hover:text-primary transition-colors">
                      {project.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </h3>
                    
                    {/* Project description */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-poppins">
                      {project.description}
                    </p>
                    
                    {/* Technologies used */}
                    <div className="flex flex-wrap gap-2 mb-3 overflow-hidden">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="rounded-full text-xs font-medium bg-muted/50 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* View details link */}
                    <div className="pt-2 border-t border-muted">
                      <a 
                        href="#" 
                        className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm font-medium group/link font-poppins"
                      >
                        <span>View Project Details</span>
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
                
                {/* Glow effect on hover */}
                {hoveredIndex === index && (
                  <motion.div 
                    className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/30 rounded-xl blur-lg -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* "View All Projects" button with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-12 sm:mt-16"
        >
          <Button 
            size="lg" 
            className="gap-2 rounded-full px-6 sm:px-8 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow group"
          >
            View All Projects 
            <span className="relative transition-all duration-300 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;