
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-coffee-accent" />
              <span className="text-xl font-bold text-coffee-dark">BaristaBot</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Enhancing coffee shop operations and customer experiences through intelligent conversational AI.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-coffee-accent hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-coffee-dark mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Features', path: '/#features' },
                { name: 'Try It Now', path: '/try-it-now' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-600 hover:text-coffee-accent">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-coffee-dark mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">Get the latest updates and news.</p>
            <form className="flex flex-col space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="rounded-r-none focus:z-10"
                />
                <Button
                  type="submit"
                  className="rounded-l-none bg-coffee-accent hover:bg-coffee-accent/90"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BaristaBot Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-coffee-accent">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-coffee-accent">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-gray-500 text-sm hover:text-coffee-accent">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
