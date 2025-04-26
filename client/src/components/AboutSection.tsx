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
    <section id="about" className="py-20 px-6 bg-muted/50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-lg font-medium mb-2">ABOUT ME</h2>
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl mb-4">My Journey</h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Learn more about my professional journey, experience, and what drives my passion for web development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h4 className="font-poppins font-semibold text-2xl mb-4">UI/UX Designer & Full Stack Developer</h4>
            <p className="text-foreground mb-4">
              Hello! I'm Prashant, a passionate UI/UX Designer and Full Stack Developer with 5+ years of experience creating beautiful and functional web experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in web development started during my university years when I discovered my passion for creating user-centric digital experiences. I've since worked with startups, agencies, and established companies to build products that users love.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download size={18} /> Download Resume
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="w-full max-w-md bg-card rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Prashant working" 
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h5 className="font-poppins font-semibold text-xl mb-4">Professional Experience</h5>
                
                {experiences.map((exp, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex justify-between text-sm text-muted-foreground mb-1">
                      <span>{exp.title}</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-foreground">{exp.company}</p>
                  </div>
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
