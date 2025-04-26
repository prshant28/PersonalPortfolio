import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-lg font-medium mb-2">MY BLOG</h2>
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl mb-4">Latest Articles</h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I share my knowledge and insights on web development, design trends, and technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="text-primary flex items-center gap-1">
                    <Tag size={14} /> {post.category}
                  </span>
                </div>
                <h4 className="font-poppins font-semibold text-xl mb-3">{post.title}</h4>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <a 
                  href={post.url} 
                  className="text-primary hover:text-primary/80 transition-colors flex items-center text-sm gap-1"
                >
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            View All Articles <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
