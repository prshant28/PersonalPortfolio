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
  const x = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.9, 1], 
    isLeft ? [-60, 0, 0, -60] : [60, 0, 0, 60]
  );
  
  const Icon = event.icon || Calendar;
  
  return (
    <motion.div 
      ref={itemRef}
      style={{ opacity, x, scale }}
      className={`timeline-item ${isLeft ? 'left' : 'right'} overflow-hidden`}
    >
      <motion.div 
        className="timeline-content group overflow-hidden"
        whileHover={{ scale: 1.03 }}
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
            whileHover={{ x: 5 }}
          >
            Learn more <ArrowRight size={12} />
          </motion.a>
        )}
        
        {/* Animated decoration */}
        <motion.div 
          className="absolute bottom-2 right-2 w-16 h-16 opacity-10"
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
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Parallax effect for title and description
  const titleY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const descY = useTransform(scrollYProgress, [0, 0.3], [70, 0]);
  
  return (
    <section 
      id="timeline" 
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Dynamic gradient background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-background/90 z-0"
        style={{ y: backgroundY }}
      />
      
      {/* Animated background particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${i % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'}`}
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15],
            x: [0, Math.random() * 30 - 15],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      
      <div className="container mx-auto relative z-10 overflow-hidden">
        <motion.div 
          style={{ opacity, y: titleY }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-lg font-medium mb-2"
          >
            MY JOURNEY
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins font-bold text-3xl sm:text-4xl mb-4 relative inline-block"
          >
            Project Timeline
            <motion.span
              className="absolute -top-8 -right-8 text-secondary"
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Clock size={32} className="text-primary opacity-70" />
            </motion.span>
          </motion.h2>
          
          <motion.p 
            style={{ y: descY }}
            className="max-w-2xl mx-auto text-muted-foreground font-poppins"
          >
            A chronological overview of my recent projects and achievements from November 2024 onwards.
          </motion.p>
        </motion.div>
        
        <div className="timeline-container relative min-h-[800px] pb-10 overflow-hidden">
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
          className="mt-16 text-center max-w-2xl mx-auto bg-card/20 backdrop-blur-sm p-4 rounded-lg border border-primary/10"
        >
          <h3 className="text-sm font-medium text-secondary mb-2">Professional Web Developer Journey</h3>
          <p className="text-xs text-muted-foreground font-poppins">Tracking my growth as a web developer since November 2024, from launching WordPress sites to winning app contests. Explore my journey through various tech projects and achievements.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;