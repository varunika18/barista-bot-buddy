
import React from 'react';

const testimonials = [
  {
    quote: "BaristaBot has transformed our busy morning rush. Our customers love getting immediate answers while waiting in line, and my staff can focus on making drinks instead of answering the same questions over and over.",
    name: "Sarah Johnson",
    title: "Owner, Sunrise Brew Coffee",
    image: "https://source.unsplash.com/photo-1721322800607-8c38375eef04"
  },
  {
    quote: "We've seen a 20% increase in customer satisfaction scores since implementing BaristaBot. The AI handles all the routine questions, freeing our baristas to have more meaningful interactions with customers.",
    name: "Michael Chen",
    title: "Manager, Urban Grind",
    image: "https://source.unsplash.com/photo-1721322800607-8c38375eef04"
  },
  {
    quote: "Our customers often comment on how helpful and responsive our chatbot is. It's become an essential part of our customer service strategy and has significantly improved our operations.",
    name: "Emma Rodriguez",
    title: "Director, Coffee Culture Co.",
    image: "https://source.unsplash.com/photo-1721322800607-8c38375eef04"
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
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
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
