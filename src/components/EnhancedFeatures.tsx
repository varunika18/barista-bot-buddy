
import React from 'react';
import { MessageSquare, Menu, Clock, MapPin, Languages } from 'lucide-react';

const featureItems = [
  {
    icon: <MessageSquare className="h-10 w-10 text-coffee-accent" />,
    title: 'Instant FAQs',
    description: 'Answer common questions about your menu, allergens, and policies immediately without customers waiting in line.',
  },
  {
    icon: <Menu className="h-10 w-10 text-coffee-accent" />,
    title: 'Menu Navigation',
    description: 'Help customers explore your menu with interactive recommendations based on preferences and dietary needs.',
  },
  {
    icon: <Clock className="h-10 w-10 text-coffee-accent" />,
    title: 'Order Status Updates',
    description: 'Keep customers informed about their order status and estimated preparation times.',
  },
  {
    icon: <MapPin className="h-10 w-10 text-coffee-accent" />,
    title: 'Store Info Lookup',
    description: 'Provide instant access to store hours, locations, parking information, and special events.',
  },
  {
    icon: <Languages className="h-10 w-10 text-coffee-accent" />,
    title: 'Multilingual Support',
    description: 'Connect with customers in their preferred language to ensure clear communication and inclusive service.',
  },
];

const EnhancedFeatures = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            BaristaBot comes loaded with everything you need to enhance your coffee shop's customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group hover:border-coffee-accent/30"
            >
              <div className="mb-6 p-4 bg-coffee-accent/10 inline-block rounded-lg group-hover:bg-coffee-accent/20 transition-colors">
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

export default EnhancedFeatures;
