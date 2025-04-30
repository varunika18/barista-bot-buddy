
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 md:pt-28 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-coffee-light-gradient opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-coffee-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-coffee-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-1">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark leading-tight animate-fade-in">
              <span className="text-coffee-accent">Smarter Service</span> for Every Sip
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Elevate your coffee shop experience with our AI-powered chatbot. Reduce wait times, answer customer questions instantly, and free your baristas to craft the perfect cup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/signup">
                <Button size="lg" className="bg-coffee-accent hover:bg-coffee-accent/90 text-white px-8">
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-coffee hover:bg-coffee/10">
                  Book a Demo
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <p>Trusted by 500+ coffee shops worldwide</p>
            </div>
          </div>

          {/* Chat demonstration */}
          <div className="flex-1 w-full md:max-w-md lg:max-w-lg animate-bounce-in">
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-2 pb-3 border-b">
                <MessageSquare size={20} className="text-coffee-accent" />
                <h3 className="font-medium">BaristaBot Chat</h3>
              </div>
              <div className="py-4 space-y-4">
                <div className="chat-bubble chat-bubble-user">
                  Do you serve oat milk lattes?
                </div>
                <div className="chat-bubble chat-bubble-bot">
                  Yes! We offer oat milk as a non-dairy alternative for all our espresso drinks at no extra charge. Would you like to know about our other milk options?
                </div>
                <div className="chat-bubble chat-bubble-user">
                  What time do you close today?
                </div>
                <div className="chat-bubble chat-bubble-bot">
                  We close at 9 PM today. Our morning hours start at 6 AM if you need your early coffee fix!
                </div>
              </div>
              <div className="pt-2 border-t flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type your question..."
                  className="flex-1 bg-gray-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-coffee-accent"
                />
                <Button size="sm" className="bg-coffee-accent hover:bg-coffee-accent/90">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
