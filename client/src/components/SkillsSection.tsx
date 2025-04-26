import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Skill } from "@shared/schema";

// Import static skills data as a fallback
import { skills as staticSkills } from "@/data/skills";

const SkillProgress = ({ skill, percentage, delay = 0 }) => {
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true, margin: "-100px" });
  
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div 
        ref={progressRef}
        className="h-2 w-full bg-muted rounded-full overflow-hidden"
      >
        <div 
          className={`skill-bar ${isInView ? 'animate' : ''}`} 
          style={{ "--width": `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const StatCounter = ({ value, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseInt(value);
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    
    return () => {
      clearInterval(timer);
    };
  }, [isInView, value]);
  
  return (
    <motion.div 
      ref={counterRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card p-6 rounded-xl text-center"
    >
      <div className="text-primary text-4xl font-bold mb-2">{count}+</div>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const SkillsSection = () => {
  // Fetch skills for each category from the API
  const { data: frontendSkills, isLoading: frontendLoading } = useQuery({
    queryKey: ['/api/skills/category/frontend'],
    select: (response) => response?.data as Skill[]
  });

  const { data: backendSkills, isLoading: backendLoading } = useQuery({
    queryKey: ['/api/skills/category/backend'],
    select: (response) => response?.data as Skill[]
  });

  const { data: designSkills, isLoading: designLoading } = useQuery({
    queryKey: ['/api/skills/category/design'],
    select: (response) => response?.data as Skill[]
  });

  // Fetch statistics
  const { data: statisticsData, isLoading: statsLoading } = useQuery({
    queryKey: ['/api/statistics/1'], // Assuming user ID 1 for portfolio owner
    select: (response) => response?.data,
  });

  // Group skills loading state
  const isLoadingSkills = frontendLoading || backendLoading || designLoading;

  // Use API data if available, otherwise fallback to static data
  const frontendData = frontendSkills?.length ? frontendSkills : staticSkills.frontend;
  const backendData = backendSkills?.length ? backendSkills : staticSkills.backend;
  const designData = designSkills?.length ? designSkills : staticSkills.design;
  const otherData = staticSkills.other; // Keeping static data for "other" category

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-lg font-medium mb-2">MY SKILLS</h2>
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl mb-4">Technical Expertise</h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here's a comprehensive overview of my technical skills and expertise in various technologies and tools.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="mb-10">
              <h4 className="font-poppins font-semibold text-xl mb-6">Frontend Development</h4>
              {isLoadingSkills ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="mb-5">
                    <div className="flex justify-between mb-2">
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-5 w-10" />
                    </div>
                    <Skeleton className="h-2 w-full rounded-full" />
                  </div>
                ))
              ) : (
                frontendData.map((skill, index) => (
                  <SkillProgress 
                    key={skill.id || skill.name} 
                    skill={skill.name} 
                    percentage={skill.percentage} 
                    delay={index * 0.1} 
                  />
                ))
              )}
            </div>
            
            <div>
              <h4 className="font-poppins font-semibold text-xl mb-6">UI/UX Design</h4>
              {isLoadingSkills ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="mb-5">
                    <div className="flex justify-between mb-2">
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-5 w-10" />
                    </div>
                    <Skeleton className="h-2 w-full rounded-full" />
                  </div>
                ))
              ) : (
                designData.map((skill, index) => (
                  <SkillProgress 
                    key={skill.id || skill.name} 
                    skill={skill.name} 
                    percentage={skill.percentage} 
                    delay={index * 0.1} 
                  />
                ))
              )}
            </div>
          </div>
          
          <div>
            <div className="mb-10">
              <h4 className="font-poppins font-semibold text-xl mb-6">Backend Development</h4>
              {isLoadingSkills ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="mb-5">
                    <div className="flex justify-between mb-2">
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-5 w-10" />
                    </div>
                    <Skeleton className="h-2 w-full rounded-full" />
                  </div>
                ))
              ) : (
                backendData.map((skill, index) => (
                  <SkillProgress 
                    key={skill.id || skill.name} 
                    skill={skill.name} 
                    percentage={skill.percentage} 
                    delay={index * 0.1} 
                  />
                ))
              )}
            </div>
            
            <div>
              <h4 className="font-poppins font-semibold text-xl mb-6">Other Skills</h4>
              {otherData.map((skill, index) => (
                <SkillProgress 
                  key={skill.name} 
                  skill={skill.name} 
                  percentage={skill.percentage} 
                  delay={index * 0.1} 
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {statsLoading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="bg-card p-6 rounded-xl text-center">
                <Skeleton className="h-8 w-16 mx-auto mb-2" />
                <Skeleton className="h-5 w-32 mx-auto" />
              </div>
            ))
          ) : (
            <>
              <StatCounter 
                value={statisticsData?.projectsCompleted?.toString() || "10"} 
                label="Projects Completed" 
              />
              <StatCounter 
                value={statisticsData?.yearsExperience?.toString() || "5"} 
                label="Years Experience" 
                delay={0.1} 
              />
              <StatCounter 
                value={statisticsData?.happyClients?.toString() || "15"} 
                label="Happy Clients" 
                delay={0.2} 
              />
              <StatCounter 
                value={statisticsData?.technologiesMastered?.toString() || "8"} 
                label="Technologies Mastered" 
                delay={0.3} 
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
