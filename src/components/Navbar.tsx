
import React from 'react';
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're not on the home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="w-full py-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm fixed top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-coffee-accent" />
          <span className="text-xl font-bold text-coffee-dark">BaristaBot</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-coffee-dark hover:text-coffee-accent transition-colors">Home</Link>
          <Link to="/about" className="text-coffee-dark hover:text-coffee-accent transition-colors">About</Link>
          <a 
            href="#features" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('features');
            }}
            className="text-coffee-dark hover:text-coffee-accent transition-colors"
          >
            Features
          </a>
          <Link to="/contact" className="text-coffee-dark hover:text-coffee-accent transition-colors">Contact</Link>
          <Link to="/try-it-now" className="text-coffee-dark hover:text-coffee-accent transition-colors">Try It Now</Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex border-coffee-accent text-coffee-accent hover:bg-coffee-accent hover:text-white transition-all">
            Log In
          </Button>
          <Link to="/contact">
            <Button className="bg-coffee-accent hover:bg-coffee-accent/90 text-white">
              Book a Demo
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
