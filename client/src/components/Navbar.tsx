import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-muted" 
        : "bg-transparent border-transparent"
    }`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-primary font-poppins font-bold text-2xl tracking-wider"
        >
          Prashant.dev
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-primary transition-colors duration-300">Home</a>
          <a href="#projects" className="hover:text-primary transition-colors duration-300">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors duration-300">Skills</a>
          <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
          <a href="#blog" className="hover:text-primary transition-colors duration-300">Blog</a>
          <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
          
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-16 left-0 right-0 border-b border-muted z-50 bg-background transition-all duration-300 ${
        mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      }`}>
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          <a 
            href="#home" 
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            Home
          </a>
          <a 
            href="#projects" 
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            Skills
          </a>
          <a 
            href="#about" 
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a 
            href="#blog" 
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            Blog
          </a>
          <a 
            href="#contact" 
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
          <div className="py-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
