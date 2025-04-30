
import React from 'react';
import { Button } from '@/components/ui/button';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-coffee">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-coffee-accent/30 to-coffee-accent blur-lg"></div>
              <img
                src="https://source.unsplash.com/photo-1618160702438-9b02ab6515c9"
                alt="Coffee shop atmosphere"
                className="rounded-2xl shadow-lg relative z-10 w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Brew Better Business with Conversational AI
            </h2>
            <p className="text-coffee-light/90 text-lg">
              More than just answering questions, BaristaBot helps you build a more efficient and profitable coffee business.
            </p>
            
            <div className="space-y-4">
              {[
                "Reduce operational costs by automating routine customer interactions",
                "Collect valuable customer feedback and preferences",
                "Improve order accuracy and decrease waste",
                "Create a tech-forward brand image that appeals to modern customers"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-coffee-accent/20 p-1 rounded-full mt-1 mr-3">
                    <svg className="h-4 w-4 text-coffee-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-coffee-accent hover:bg-coffee-accent/90 text-white mt-4">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
