
import React from 'react';
import { Clock, MessageSquare, Users, Coffee } from 'lucide-react';

const featureItems = [
  {
    icon: <MessageSquare className="h-8 w-8 text-coffee-accent" />,
    title: 'Instant Responses',
    description: 'Answer customer questions immediately, even during your busiest hours, with our AI chat assistant.',
  },
  {
    icon: <Clock className="h-8 w-8 text-coffee-accent" />,
    title: 'Reduced Wait Times',
    description: 'Decrease lines and improve customer flow by handling inquiries and basic orders through the chatbot.',
  },
  {
    icon: <Coffee className="h-8 w-8 text-coffee-accent" />,
    title: 'Menu Expertise',
    description: 'Provide detailed information about your menu items, including ingredients, allergens, and preparation methods.',
  },
  {
    icon: <Users className="h-8 w-8 text-coffee-accent" />,
    title: 'Staff Focus',
    description: 'Free your team to focus on crafting exceptional drinks and creating memorable customer experiences.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-coffee-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">How BaristaBot Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our intelligent chatbot enhances your coffee shop operations and improves the customer experience with these powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="mb-4 p-3 bg-coffee-accent/10 inline-block rounded-lg group-hover:bg-coffee-accent/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-coffee-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
