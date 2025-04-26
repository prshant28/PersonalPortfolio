import { motion } from "framer-motion";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Nov 2024",
    title: "Gadgets Fever Website Launch",
    description: "Apna tech news website start kiya (WordPress)"
  },
  {
    date: "Dec 2024",
    title: "Blog Published",
    description: "First big smartphone blog published"
  },
  {
    date: "Jan 2025",
    title: "Edu Connect 247 Launch",
    description: "IIT Jodhpur AI-DS Platform banaya"
  },
  {
    date: "Feb 2025",
    title: "GrabHostDeals Affiliate Site",
    description: "Hosting deals website launch kiya"
  },
  {
    date: "Apr 2025",
    title: "Portfolio Website (Prashant.dev)",
    description: "Apna advanced portfolio banaya"
  },
  {
    date: "Apr 2025",
    title: "Hostinger Horizon Program",
    description: "Hostinger ke official partner program join kiya"
  },
  {
    date: "Apr 2025",
    title: "Hostinger App Contest Participation",
    description: "App contest me second position tak pahuche"
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 px-6 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-secondary text-lg font-medium mb-2">MY JOURNEY</h2>
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl mb-4">Project Timeline</h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A chronological overview of my recent projects and achievements.
          </p>
        </motion.div>
        
        <div className="timeline-container relative min-h-[800px] pb-10">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <span className="timeline-date">{event.date}</span>
                <h4 className="timeline-title">{event.title}</h4>
                <p className="timeline-description">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;