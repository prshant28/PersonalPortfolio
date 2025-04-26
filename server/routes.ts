import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const validatedData = contactSchema.parse(req.body);
      
      // In a real-world app, you might want to store this in a database
      // or send an email using a service like nodemailer
      
      // For now, we'll just log it and return success
      console.log("Contact form submission:", validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Your message has been received! I'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to process your request. Please try again later." 
        });
      }
    }
  });

  // Download CV route
  app.get("/api/download-cv", (req: Request, res: Response) => {
    // In a real implementation, this would serve an actual file
    // For now, we'll just respond with a message
    res.status(200).json({
      success: true,
      message: "CV download functionality will be implemented soon."
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
