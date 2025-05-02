import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail, Code, Palette, Lightbulb, Star, Sparkles, Trophy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingEffect from "./TypingEffect";
import { useRef } from "react";
import profileImage from "../assets/profile.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
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

  // Animated particles - will use framer motion to create a parallax effect
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2
  }));

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex items-center pt-20 pb-16 px-6 relative overflow-hidden"
    >
      {/* Parallax particles background */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-tr from-secondary to-primary opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            x: useTransform(scrollYProgress, [0, 1], [0, particle.x > 50 ? -100 : 100]),
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
            rotate: [0, 180]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay
          }}
        />
      ))}
      
      {/* Hero background gradients with animation */}
      <div className="absolute top-20 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-primary/20 to-primary/5 blur-3xl animate-blob"></div>
      <div className="absolute top-60 right-10 w-96 h-96 rounded-full bg-gradient-to-l from-secondary/20 to-secondary/5 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-0 left-0 mx-auto w-[40rem] h-60 rounded-full bg-gradient-to-t from-secondary/10 via-primary/10 to-transparent blur-3xl animate-blob animation-delay-4000"></div>
      
      <motion.div 
        className="container mx-auto relative z-10"
        style={{ y, opacity }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-alegreya uppercase tracking-widest bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 block">Portfolio</span>
              <motion.h1 
                className="font-alegreya font-bold text-4xl sm:text-5xl lg:text-6xl mb-2 tracking-wide uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Hello, It's Me
              </motion.h1>
              <motion.h2 
                className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                  Prashant
                </span>
                <motion.span 
                  className="absolute -top-8 -right-8 text-secondary text-4xl"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.5, type: "spring" }}
                >
                  <Sparkles size={32} className="animate-pulse" />
                </motion.span>
              </motion.h2>
            </motion.div>
            
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
            
            {/* SEO-optimized section - enhanced with more details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mb-8 bg-card/20 backdrop-blur-sm p-4 rounded-lg border border-primary/10"
            >
              <h3 className="text-sm font-medium text-secondary mb-2">Web Developer & UI/UX Designer in India</h3>
              <p className="text-xs text-muted-foreground">
                Specializing in React, Next.js, Node.js and modern web technologies. Creating beautiful, responsive and 
                user-friendly websites with focus on performance and accessibility. Offering comprehensive web development 
                services including e-commerce solutions, portfolio websites, and business applications.
              </p>
              <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
                <div>• React/Next.js Expert</div>
                <div>• UI/UX Designer</div>
                <div>• Responsive Web Design</div>
                <div>• Web Performance Expert</div>
              </div>
            </motion.div>
            
            {/* Social Icons with improved animations */}
            <div className="flex gap-6 mb-10">
              {[
                { icon: Github, label: "GitHub", color: "bg-[#333]/10 hover:bg-[#333]/20" },
                { icon: Linkedin, label: "LinkedIn", color: "bg-[#0077b5]/10 hover:bg-[#0077b5]/20" },
                { icon: Mail, label: "Email", color: "bg-secondary/10 hover:bg-secondary/20" }
              ].map((social, index) => (
                <motion.a 
                  key={social.label}
                  href="#" 
                  className={`w-12 h-12 rounded-full ${social.color} flex items-center justify-center backdrop-blur-sm relative group overflow-hidden z-10`}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 500, delay: index * 0.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} className="relative z-10 text-foreground group-hover:text-primary transition-colors" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.a>
              ))}
            </div>
            
            {/* CTA Buttons with improved design */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button size="lg" className="gap-2 rounded-full px-8 font-medium relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80 group-hover:opacity-100 transition-opacity"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-x opacity-0 group-hover:opacity-100"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={18} /> Download CV
                </span>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-8 font-medium border-2 border-primary/50 hover:border-primary relative overflow-hidden group" asChild>
                <a href="#projects">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
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
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative">
              {/* Rotating circles around profile */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-[calc(100%+3rem)] h-[calc(100%+3rem)] rounded-full border-2 border-dashed border-primary/20 absolute"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="w-[calc(100%+6rem)] h-[calc(100%+6rem)] rounded-full border-2 border-dashed border-secondary/20 absolute"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              {/* Floating elements */}
              {[
                { icon: Star, position: "top-0 left-10", delay: 0, color: "text-primary" },
                { icon: Trophy, position: "bottom-20 -left-10", delay: 0.2, color: "text-secondary" },
                { icon: Sparkles, position: "top-20 -right-10", delay: 0.4, color: "text-primary" },
                { icon: RefreshCw, position: "bottom-0 right-10", delay: 0.6, color: "text-secondary" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} z-10 bg-card/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-primary/20`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + item.delay, type: "spring" }}
                >
                  <item.icon className={item.color} size={20} />
                </motion.div>
              ))}

              {/* Decorative circle behind profile image */}
              <motion.div 
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/10 blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Profile image with simple border */}
              <motion.div 
                className="profile-image w-64 h-64 sm:w-80 sm:h-80 xl:w-96 xl:h-96 shadow-2xl rounded-full overflow-hidden relative z-10"
                whileHover={{ scale: 1.03 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 150, 
                  damping: 15 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animate-gradient-rotation rounded-full opacity-70"></div>
                <div className="absolute inset-[4px] rounded-full overflow-hidden bg-card">
                  <img 
                    src={profileImage} 
                    alt="Prashant - Web Developer and UI/UX Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Floating badges with enhanced animations */}
              <motion.div 
                className="absolute top-5 -left-10 bg-card/90 backdrop-blur-md p-3 rounded-xl shadow-lg flex items-center gap-2 border border-primary/20 overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(var(--primary), 0.3)" 
                }}
              >
                <div className="text-primary font-semibold">5+</div>
                <div className="text-sm">Years Experience</div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 -right-5 bg-card/90 backdrop-blur-md p-3 rounded-xl shadow-lg flex items-center gap-2 border border-secondary/20 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(var(--secondary), 0.3)" 
                }}
              >
                <div className="text-secondary font-semibold">40+</div>
                <div className="text-sm">Projects Completed</div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Features grid with enhanced animations */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card/30 backdrop-blur-md p-6 rounded-xl border border-muted group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: "hsl(var(--card)/0.6)",
                borderColor: index % 2 === 0 ? "hsl(var(--primary)/0.4)" : "hsl(var(--secondary)/0.4)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out z-0"
                style={{
                  background: index % 2 === 0 
                    ? "linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--secondary)))" 
                    : "linear-gradient(to bottom right, hsl(var(--secondary)), hsl(var(--primary)))"
                }}
              />
              
              <motion.div 
                className={`w-12 h-12 rounded-full ${index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 relative z-10`}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className={index % 2 === 0 ? 'text-primary' : 'text-secondary'} size={22} />
              </motion.div>
              
              <h3 className="font-alegreya text-xl font-semibold mb-2 relative z-10">{feature.title}</h3>
              <p className="text-muted-foreground text-sm relative z-10">{feature.description}</p>
              
              <motion.div 
                className="absolute bottom-0 right-0 w-20 h-20 opacity-10"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className={`w-full h-full rounded-full border-2 ${index % 2 === 0 ? 'border-primary' : 'border-secondary'} border-dashed`}></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
