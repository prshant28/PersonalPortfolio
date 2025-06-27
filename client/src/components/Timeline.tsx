import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, ExternalLink, Clock, Award, Trophy, Star, Bookmark, ArrowRight } from "lucide-react";
import { useRef } from "react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  iconColor?: string;
  link?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Nov 2024",
    title: "Gadgets Fever Website Launch",
    description: "Apna tech news website start kiya (WordPress)",
    icon: Calendar,
    iconColor: "text-primary"
  },
  {
    date: "Dec 2024",
    title: "Blog Published",
    description: "First big smartphone blog published",
    icon: Bookmark,
    iconColor: "text-secondary"
  },
  {
    date: "Jan 2025",
    title: "Edu Connect 247 Launch",
    description: "IIT Jodhpur AI-DS Platform banaya",
    icon: ExternalLink,
    iconColor: "text-primary"
  },
  {
    date: "Feb 2025",
    title: "GrabHostDeals Affiliate Site",
    description: "Hosting deals website launch kiya",
    icon: Star,
    iconColor: "text-secondary"
  },
  {
    date: "Apr 2025",
    title: "Portfolio Website (Prashant.dev)",
    description: "Apna advanced portfolio banaya",
    icon: Award,
    iconColor: "text-primary"
  },
  {
    date: "Apr 2025",
    title: "Hostinger Horizon Program",
    description: "Hostinger ke official partner program join kiya",
    icon: Clock,
    iconColor: "text-secondary"
  },
  {
    date: "Apr 2025",
    title: "Hostinger App Contest Participation",
    description: "App contest me second position tak pahuche",
    icon: Trophy,
    iconColor: "text-primary"
  }
];

const TimelineItem = ({ event, index, total }: { 
  event: TimelineEvent; 
  index: number; 
  total: number;
}) => {
  const isLeft = index % 2 === 0;
  const itemRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);
  
  // FIXED: Constrained x movement to prevent overflow
  const x = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.9, 1], 
    isLeft ? [-30, 0, 0, -30] : [30, 0, 0, 30] // Reduced movement range
  );
  
  const Icon = event.icon || Calendar;
  
  return (
    <motion.div 
      ref={itemRef}
      style={{ opacity, x, scale }}
      className={`timeline-item ${isLeft ? 'left' : 'right'} max-w-full overflow-hidden`}
    >
      <motion.div 
        className="timeline-content group"
        whileHover={{ scale: 1.02 }} // Reduced scale to prevent overflow
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="timeline-date flex items-center gap-2">
          <Icon className={`${event.iconColor || 'text-primary'}`} size={14} />
          {event.date}
        </span>
        <h4 className="timeline-title">{event.title}</h4>
        <p className="timeline-description">{event.description}</p>
        
        {event.link && (
          <motion.a 
            href={event.link} 
            className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:text-secondary transition-colors"
            whileHover={{ x: 3 }} // Reduced movement
          >
            Learn more <ArrowRight size={12} />
          </motion.a>
        )}
        
        {/* FIXED: Animated decoration with proper containment */}
        <motion.div 
          className="absolute bottom-2 right-2 w-12 h-12 opacity-10 overflow-hidden" // Reduced size
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className={`w-full h-full rounded-full border-2 ${index % 2 === 0 ? 'border-primary' : 'border-secondary'} border-dashed`}></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // FIXED: Constrained background movement
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]); // Reduced movement
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // FIXED: Constrained parallax effect for title and description
  const titleY = useTransform(scrollYProgress, [0, 0.3], [25, 0]); // Reduced movement
  const descY = useTransform(scrollYProgress, [0, 0.3], [35, 0]); // Reduced movement
  
  return (
    <section 
      id="timeline" 
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* FIXED: Dynamic gradient background with constrained parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-background/90 z-0"
        style={{ y: backgroundY }}
      />
      
      {/* FIXED: Animated background particles with proper containment */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => ( // Reduced number of particles
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'}`}
            style={{
              width: Math.random() * 8 + 4, // Reduced size
              height: Math.random() * 8 + 4, // Reduced size
              left: `${Math.random() * 80 + 10}%`, // Keep within bounds
              top: `${Math.random() * 80 + 10}%`, // Keep within bounds
            }}
            animate={{
              y: [0, Math.random() * 20 - 10], // Reduced movement
              x: [0, Math.random() * 20 - 10], // Reduced movement
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10 max-w-full overflow-hidden">
        <motion.div 
          style={{ opacity, y: titleY }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-sm sm:text-lg font-medium mb-2 font-alegreya uppercase tracking-widest"
          >
            MY JOURNEY
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-alegreya font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 relative inline-block tracking-wide uppercase"
          >
            Project Timeline
            <motion.span
              className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 text-secondary"
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Clock size={24} className="sm:w-8 sm:h-8 text-primary opacity-70" />
            </motion.span>
          </motion.h2>
          
          <motion.p 
            style={{ y: descY }}
            className="max-w-2xl mx-auto text-muted-foreground font-poppins text-sm sm:text-base"
          >
            A chronological overview of my recent projects and achievements from November 2024 onwards.
          </motion.p>
        </motion.div>
        
        {/* FIXED: Timeline container with proper overflow handling */}
        <div className="timeline-container relative min-h-[800px] pb-10 max-w-full overflow-hidden">
          {timelineEvents.map((event, index) => (
            <TimelineItem 
              key={index} 
              event={event} 
              index={index} 
              total={timelineEvents.length} 
            />
          ))}
        </div>
        
        {/* SEO-optimized content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto bg-card/20 backdrop-blur-sm p-4 rounded-lg border border-primary/10"
        >
          <h3 className="text-sm font-medium text-secondary mb-2 font-alegreya">Professional Web Developer Journey</h3>
          <p className="text-xs text-muted-foreground font-poppins">Tracking my growth as a web developer since November 2024, from launching WordPress sites to winning app contests. Explore my journey through various tech projects and achievements.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;