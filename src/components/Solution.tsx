
import React from 'react';
import { Button } from '@/components/ui/button';

const Solution = () => {
  const solutions = [
    "Instant answers to common questions without waiting",
    "Reduced stress on staff during peak hours",
    "24/7 customer support even when the shop is closed",
    "Consistent and accurate information across all inquiries",
    "More time for baristas to focus on crafting perfect drinks"
  ];

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-coffee-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">How Our Chatbot Helps</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            BaristaBot transforms your customer service experience with intelligent automation.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <ul className="space-y-4">
            {solutions.map((solution, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-coffee-accent/10 p-1 rounded-full mt-1 mr-3">
                  <svg className="h-4 w-4 text-coffee-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-coffee-dark">{solution}</p>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 flex justify-center">
            <Button 
              onClick={scrollToFeatures}
              className="bg-coffee-accent hover:bg-coffee-accent/90 text-white"
            >
              Learn How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
