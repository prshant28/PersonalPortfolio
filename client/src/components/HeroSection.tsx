import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail, Code, Palette, Lightbulb, Star, Sparkles, Trophy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingEffect from "./TypingEffect";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Reduced parallax effect to prevent visibility issues
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  
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

  // Reduced number of particles for better performance
  const particles = Array.from({ length: 10 }).map((_, i) => ({
    size: Math.random() * 6 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 8,
    delay: Math.random() * 2
  }));

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Simplified background particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-tr from-secondary to-primary opacity-10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.05, 0.2, 0.05],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay
          }}
        />
      ))}
      
      {/* Simplified background gradients */}
      <div className="absolute top-20 -left-40 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl"></div>
      <div className="absolute top-60 right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-l from-secondary/10 to-secondary/5 blur-3xl"></div>
      
      <motion.div 
        className="container mx-auto relative z-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 20]), opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-alegreya uppercase tracking-widest bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 block text-sm sm:text-base">Portfolio</span>
              <motion.h1 
                className="font-alegreya font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2 tracking-wide uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Hello, It's Me
              </motion.h1>
              <motion.h2 
                className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Prashant
                </span>
                <motion.span 
                  className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 text-secondary text-xl sm:text-3xl z-20"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.5, type: "spring" }}
                >
                  <Sparkles size={20} className="sm:w-6 sm:h-6 animate-pulse" />
                </motion.span>
              </motion.h2>
            </motion.div>
            
            <p className="text-lg sm:text-xl mb-6 text-muted-foreground font-alegreya tracking-wide">
              And I'm a <TypingEffect texts={typingTexts} className="text-primary font-medium" />
            </p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mb-8 text-muted-foreground max-w-lg mx-auto lg:mx-0 font-poppins text-sm sm:text-base"
            >
              Passionate about creating beautiful and functional web experiences with attention to detail and focus on user experience. Let's build something amazing together!
            </motion.p>
            
            {/* SEO-optimized section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mb-8 bg-card/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-primary/10"
            >
              <h3 className="text-xs sm:text-sm font-medium text-secondary mb-2">Web Developer & UI/UX Designer in India</h3>
              <p className="text-xs text-muted-foreground font-poppins">
                Specializing in React, Next.js, Node.js and modern web technologies. Creating beautiful, responsive and 
                user-friendly websites with focus on performance and accessibility.
              </p>
              <div className="mt-2 grid grid-cols-2 gap-1 text-xs font-poppins">
                <div>• React/Next.js Expert</div>
                <div>• UI/UX Designer</div>
                <div>• Responsive Web Design</div>
                <div>• Web Performance Expert</div>
              </div>
            </motion.div>
            
            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-6 mb-8 sm:mb-10 justify-center lg:justify-start">
              {[
                { icon: Github, label: "GitHub", color: "bg-[#333]/10 hover:bg-[#333]/20" },
                { icon: Linkedin, label: "LinkedIn", color: "bg-[#0077b5]/10 hover:bg-[#0077b5]/20" },
                { icon: Mail, label: "Email", color: "bg-secondary/10 hover:bg-secondary/20" }
              ].map((social, index) => (
                <motion.a 
                  key={social.label}
                  href="#" 
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${social.color} flex items-center justify-center backdrop-blur-sm relative group overflow-hidden z-10`}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, delay: index * 0.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5 relative z-10 text-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button size="lg" className="gap-2 rounded-full px-6 sm:px-8 font-medium relative overflow-hidden group w-full sm:w-auto">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={18} /> Download CV
                </span>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-6 sm:px-8 font-medium border-2 border-primary/50 hover:border-primary relative overflow-hidden group w-full sm:w-auto" asChild>
                <a href="#projects">
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Simplified rotating circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] h-[calc(100%+2rem)] sm:h-[calc(100%+3rem)] rounded-full border border-dashed border-primary/20 absolute"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              {/* Floating elements with proper z-index */}
              {[
                { icon: Star, position: "top-0 left-6 sm:left-10", delay: 0, color: "text-primary" },
                { icon: Trophy, position: "bottom-16 sm:bottom-20 -left-6 sm:-left-10", delay: 0.2, color: "text-secondary" },
                { icon: Sparkles, position: "top-16 sm:top-20 -right-6 sm:-right-10", delay: 0.4, color: "text-primary" },
                { icon: RefreshCw, position: "bottom-0 right-6 sm:right-10", delay: 0.6, color: "text-secondary" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} z-30 bg-card/80 backdrop-blur-sm p-1.5 sm:p-2 rounded-full shadow-lg border border-primary/20`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + item.delay, type: "spring" }}
                >
                  <item.icon className={item.color} size={16} />
                </motion.div>
              ))}

              {/* Simplified decorative circle */}
              <motion.div 
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/5 blur-xl"
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Profile image */}
              <motion.div 
                className="profile-image w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 shadow-2xl rounded-full overflow-hidden relative z-20"
                whileHover={{ scale: 1.02 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 20 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-60 rounded-full"></div>
                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-card">
                  <img 
                    src="/attached_assets/image_1746211336500.png" 
                    alt="Prashant - Web Developer and UI/UX Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Floating badges with proper z-index */}
              <motion.div 
                className="absolute top-3 sm:top-5 -left-6 sm:-left-10 bg-card/90 backdrop-blur-md p-2 sm:p-3 rounded-xl shadow-lg flex items-center gap-1 sm:gap-2 border border-primary/20 z-40"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-primary font-semibold text-sm sm:text-base">5+</div>
                <div className="text-xs sm:text-sm font-poppins">Years Experience</div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-6 sm:bottom-10 -right-3 sm:-right-5 bg-card/90 backdrop-blur-md p-2 sm:p-3 rounded-xl shadow-lg flex items-center gap-1 sm:gap-2 border border-secondary/20 z-40"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-secondary font-semibold text-sm sm:text-base">40+</div>
                <div className="text-xs sm:text-sm font-poppins">Projects Completed</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Features grid with proper spacing */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card/30 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-muted group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
              whileHover={{ 
                y: -5, 
                backgroundColor: "hsl(var(--card)/0.6)",
                borderColor: index % 2 === 0 ? "hsl(var(--primary)/0.4)" : "hsl(var(--secondary)/0.4)"
              }}
            >
              <motion.div 
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 relative z-10`}
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className={index % 2 === 0 ? 'text-primary' : 'text-secondary'} size={20} />
              </motion.div>
              
              <h3 className="font-alegreya text-lg sm:text-xl font-semibold mb-2 relative z-10">{feature.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm relative z-10 font-poppins">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;