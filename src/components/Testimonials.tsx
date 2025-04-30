
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "BaristaBot has transformed our busy morning rush. Our customers love getting immediate answers while waiting in line, and my staff can focus on making drinks instead of answering the same questions over and over.",
    name: "Sarah Johnson",
    title: "Owner, Sunrise Brew Coffee",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=60"
  },
  {
    quote: "We've seen a 20% increase in customer satisfaction scores since implementing BaristaBot. The AI handles all the routine questions, freeing our baristas to have more meaningful interactions with customers.",
    name: "Michael Chen",
    title: "Manager, Urban Grind",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
  },
  {
    quote: "Our customers often comment on how helpful and responsive our chatbot is. It's become an essential part of our customer service strategy and has significantly improved our operations.",
    name: "Emma Rodriguez",
    title: "Director, Coffee Culture Co.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-coffee-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Coffee shops around the world are transforming their customer experience with BaristaBot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
            >
              <div className="absolute -top-5 left-8 text-5xl text-coffee-accent">"</div>
              <p className="text-gray-700 mb-6 pt-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-coffee-accent/10 text-coffee-accent">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-coffee-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
