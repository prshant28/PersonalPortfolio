import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download } from "lucide-react";

const AboutSection = () => {
  const services = [
    "UI/UX Design",
    "Web Development",
    "Mobile App Development",
    "Technical Consultation",
    "Brand Identity",
    "SEO Optimization"
  ];

  const experiences = [
    {
      title: "Senior UI/UX Designer",
      company: "TechFusion Inc.",
      period: "2020 - Present"
    },
    {
      title: "Full Stack Developer",
      company: "WebWorks Agency",
      period: "2018 - 2020"
    },
    {
      title: "Junior Web Developer",
      company: "Creative Solutions Ltd.",
      period: "2016 - 2018"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-primary text-sm sm:text-lg font-medium mb-2 font-alegreya uppercase tracking-widest">ABOUT ME</h2>
          <h3 className="font-alegreya font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 tracking-wide uppercase">My Journey</h3>
          <p className="max-w-2xl mx-auto text-muted-foreground font-poppins text-sm sm:text-base">
            Learn more about my professional journey, experience, and what drives my passion for web development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h4 className="font-alegreya font-semibold text-xl sm:text-2xl mb-4">UI/UX Designer & Full Stack Developer</h4>
            <p className="text-foreground mb-4 font-poppins text-sm sm:text-base leading-relaxed">
              Hello! I'm Prashant, a passionate UI/UX Designer and Full Stack Developer with 5+ years of experience creating beautiful and functional web experiences.
            </p>
            <p className="text-muted-foreground mb-6 font-poppins text-sm sm:text-base leading-relaxed">
              My journey in web development started during my university years when I discovered my passion for creating user-centric digital experiences. I've since worked with startups, agencies, and established companies to build products that users love.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CheckCircle size={16} className="text-primary mr-2 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-poppins group-hover:text-primary transition-colors">{service}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild size="lg" className="gap-2 w-full sm:w-auto rounded-full px-6 sm:px-8 font-poppins">
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto rounded-full px-6 sm:px-8 font-poppins border-2 hover:border-primary">
                <Download size={18} /> Download Resume
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="w-full max-w-sm sm:max-w-md bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-muted hover:border-primary/30 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Prashant working" 
                className="w-full h-60 sm:h-72 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h5 className="font-alegreya font-semibold text-lg sm:text-xl mb-4">Professional Experience</h5>
                
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-3 sm:mb-4 last:mb-0 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-muted-foreground mb-1">
                      <span className="font-medium font-poppins">{exp.title}</span>
                      <span className="text-xs font-poppins">{exp.period}</span>
                    </div>
                    <p className="text-foreground text-sm sm:text-base font-poppins">{exp.company}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;