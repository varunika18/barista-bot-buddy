
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">About BaristaBot</h1>
            
            <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
              <h2 className="text-2xl font-semibold text-coffee-dark mb-4">Our Story</h2>
              <p className="text-gray-700 mb-6">
                BaristaBot was born from a simple observation: baristas were spending more time answering 
                the same questions than making great coffee. As former coffee shop owners ourselves, 
                we witnessed firsthand the challenges that busy cafés face during rush hours.
              </p>
              <p className="text-gray-700 mb-6">
                In 2023, our team of coffee enthusiasts and AI specialists came together with a mission: 
                to create a solution that would allow baristas to focus on their craft while still providing 
                exceptional customer service.
              </p>
              
              <div className="w-full h-64 bg-coffee-light rounded-lg mb-8 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?w=800&auto=format&fit=crop&q=80" 
                  alt="Coffee shop team" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-semibold text-coffee-dark mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                We're on a mission to transform the coffee shop experience for both customers and staff.
                By handling routine questions and providing instant information, BaristaBot reduces wait times,
                improves customer satisfaction, and allows staff to focus on creating the perfect cup of coffee.
              </p>
              
              <h2 className="text-2xl font-semibold text-coffee-dark mb-4">Our Values</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                <li>Craftsmanship: We believe in the art of coffee making and want to help baristas focus on their craft.</li>
                <li>Community: We support the vibrant coffee shop community by creating tools that strengthen connections.</li>
                <li>Innovation: We continuously improve our AI to meet the evolving needs of coffee shops.</li>
                <li>Accessibility: We design our solutions to be intuitive and accessible to cafés of all sizes.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-coffee-dark mb-4">Meet the Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    name: "Alex Morgan",
                    role: "Founder & CEO",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60"
                  },
                  {
                    name: "Jamie Williams",
                    role: "Head of AI Development",
                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60"
                  },
                  {
                    name: "Taylor Reed",
                    role: "Customer Success",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60"
                  }
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-coffee-dark">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
