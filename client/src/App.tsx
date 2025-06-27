import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import MouseInteractionProvider from "./components/MouseInteractionProvider";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import TechStackCarousel from "./components/TechStackCarousel";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import Timeline from "./components/Timeline";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MouseInteractionProvider>
          <div className="relative min-h-screen overflow-x-hidden w-full max-w-full">
            <Navbar />
            <main id="main" className="overflow-x-hidden w-full">
              <HeroSection />
              <ProjectsSection />
              <TechStackCarousel />
              <SkillsSection />
              <Timeline />
              <AboutSection />
              <BlogSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
          <Toaster />
        </MouseInteractionProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;