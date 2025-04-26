import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-2">
              Hello, It's Me
            </h1>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-primary mb-4">
              Prashant
            </h2>
            <p className="text-xl mb-6 text-muted-foreground">
              And I'm a <span className="text-primary font-medium">UI/UX Designer</span>
            </p>
            <p className="mb-8 text-muted-foreground max-w-lg">
              Passionate about creating beautiful and functional web experiences. Let's build something amazing together!
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-6 mb-10">
              <motion.a 
                href="#" 
                className="social-icon"
                whileHover={{ y: -5, color: "hsl(var(--primary))" }}
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-icon"
                whileHover={{ y: -5, color: "hsl(var(--primary))" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-icon"
                whileHover={{ y: -5, color: "hsl(var(--primary))" }}
                aria-label="Email"
              >
                <Mail size={24} />
              </motion.a>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Download size={18} /> Download CV
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#projects">
                  View Projects <ArrowRight size={18} />
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="profile-image animated-border w-64 h-64 sm:w-80 sm:h-80 xl:w-96 xl:h-96 shadow-xl rounded-full overflow-hidden border-[5px] border-primary">
              <img 
                src="https://images.unsplash.com/photo-1603575448360-153f093fd0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Prashant's profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
