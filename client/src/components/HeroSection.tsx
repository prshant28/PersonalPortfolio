import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail, Code, Palette, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  // Texts for the typing effect
  const typingTexts = [
    "UI/UX Designer",
    "Frontend Developer",
    "Creative Thinker",
    "Brand Strategist",
    "Web Architect"
  ];

  // Features/services grid items
  const features = [
    { icon: Palette, title: "UI/UX Design", description: "Intuitive and engaging user experiences" },
    { icon: Code, title: "Development", description: "Clean, efficient and responsive code" },
    { icon: Lightbulb, title: "Creative Ideas", description: "Innovative solutions to complex problems" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary/5 filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <span className="font-alegreya uppercase tracking-widest text-primary mb-2 block">Portfolio</span>
            <h1 className="font-alegreya font-bold text-4xl sm:text-5xl lg:text-6xl mb-2 tracking-wide uppercase">
              Hello, It's Me
            </h1>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-primary mb-4">
              Prashant
            </h2>
            <p className="text-xl mb-6 text-muted-foreground font-alegreya tracking-wide">
              And I'm a <TypingEffect texts={typingTexts} className="text-primary font-medium" />
            </p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mb-8 text-muted-foreground max-w-lg"
            >
              Passionate about creating beautiful and functional web experiences with attention to detail and focus on user experience. Let's build something amazing together!
            </motion.p>
            
            {/* Social Icons with improved animations */}
            <div className="flex gap-6 mb-10">
              <motion.a 
                href="#" 
                className="social-icon w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center backdrop-blur-sm"
                whileHover={{ y: -8, backgroundColor: "hsl(var(--primary)/0.2)" }}
                transition={{ type: "spring", stiffness: 500 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-icon w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center backdrop-blur-sm"
                whileHover={{ y: -8, backgroundColor: "hsl(var(--primary)/0.2)" }}
                transition={{ type: "spring", stiffness: 500, delay: 0.05 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-icon w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center backdrop-blur-sm"
                whileHover={{ y: -8, backgroundColor: "hsl(var(--primary)/0.2)" }}
                transition={{ type: "spring", stiffness: 500, delay: 0.1 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
            
            {/* CTA Buttons with improved design */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 rounded-full px-8 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                <Download size={18} /> Download CV
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-8 font-medium border-2 hover:bg-primary/10" asChild>
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
            <div className="relative">
              {/* Decorative circle behind profile image */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 blur-xl animate-pulse"></div>
              
              {/* Profile image with animated border */}
              <div className="profile-image animated-border w-64 h-64 sm:w-80 sm:h-80 xl:w-96 xl:h-96 shadow-xl rounded-full overflow-hidden border-[5px] border-primary relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1603575448360-153f093fd0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Prashant's profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges around profile image */}
              <motion.div 
                className="absolute top-5 -left-10 bg-card/80 backdrop-blur-md p-3 rounded-xl shadow-lg flex items-center gap-2 border border-primary/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-primary font-semibold">5+</div>
                <div className="text-sm">Years Experience</div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 -right-5 bg-card/80 backdrop-blur-md p-3 rounded-xl shadow-lg flex items-center gap-2 border border-primary/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="text-primary font-semibold">40+</div>
                <div className="text-sm">Projects Completed</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Features grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card/30 backdrop-blur-md p-6 rounded-xl border border-muted hover:border-primary/20 transition-all duration-300 group"
              whileHover={{ y: -10, backgroundColor: "hsl(var(--card)/0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-alegreya text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
