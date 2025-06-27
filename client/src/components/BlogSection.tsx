import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-primary text-sm sm:text-lg font-medium mb-2 font-alegreya uppercase tracking-widest">MY BLOG</h2>
          <h3 className="font-alegreya font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 tracking-wide uppercase">Latest Articles</h3>
          <p className="max-w-2xl mx-auto text-muted-foreground font-poppins text-sm sm:text-base">
            I share my knowledge and insights on web development, design trends, and technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-muted hover:border-primary/30 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 text-xs sm:text-sm">
                  <span className="text-muted-foreground flex items-center gap-1 font-poppins">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="text-primary flex items-center gap-1 font-poppins">
                    <Tag size={12} /> {post.category}
                  </span>
                </div>
                <h4 className="font-alegreya font-semibold text-lg sm:text-xl mb-3 group-hover:text-primary transition-colors">{post.title}</h4>
                <p className="text-muted-foreground mb-4 line-clamp-2 font-poppins text-sm sm:text-base">
                  {post.excerpt}
                </p>
                <a 
                  href={post.url} 
                  className="text-primary hover:text-primary/80 transition-colors flex items-center text-sm gap-1 font-poppins group/link"
                >
                  Read More <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2 rounded-full px-6 sm:px-8 font-poppins border-2 hover:border-primary">
            View All Articles <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;