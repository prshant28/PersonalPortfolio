import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble,
  Send
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out, I'll get back to you soon.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@prashant.dev",
      color: "bg-primary/10"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      color: "bg-secondary/10"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, California",
      color: "bg-primary/10"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Dribbble, href: "#", label: "Dribbble" }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-primary text-sm sm:text-lg font-medium mb-2 font-alegreya uppercase tracking-widest">GET IN TOUCH</h2>
          <h3 className="font-alegreya font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 tracking-wide uppercase">Let's Work Together</h3>
          <p className="max-w-2xl mx-auto text-muted-foreground font-poppins text-sm sm:text-base">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 h-full border border-muted hover:border-primary/30 transition-all duration-300">
              <h4 className="font-alegreya font-semibold text-xl sm:text-2xl mb-6">Contact Information</h4>
              
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start mb-6 sm:mb-8 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${info.color} flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <info.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <h5 className="text-base sm:text-lg font-medium mb-1 font-alegreya">{info.title}</h5>
                    <p className="text-muted-foreground font-poppins text-sm sm:text-base">{info.value}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="font-alegreya font-semibold text-lg sm:text-xl mb-4">Connect With Me</h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.href} 
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                      whileHover={{ y: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      aria-label={social.label}
                    >
                      <social.icon size={16} className="group-hover:scale-110 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-muted hover:border-primary/30 transition-all duration-300">
              <h4 className="font-alegreya font-semibold text-xl sm:text-2xl mb-6">Send Me a Message</h4>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-poppins">Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="bg-muted border-muted focus-visible:ring-primary font-poppins"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-poppins">Your Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              type="email"
                              {...field} 
                              className="bg-muted border-muted focus-visible:ring-primary font-poppins"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-poppins">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Project Inquiry" 
                            {...field} 
                            className="bg-muted border-muted focus-visible:ring-primary font-poppins"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-poppins">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Hello, I'd like to discuss a potential project..." 
                            rows={5}
                            {...field} 
                            className="bg-muted border-muted focus-visible:ring-primary resize-none font-poppins"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full gap-2 rounded-full font-poppins" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;