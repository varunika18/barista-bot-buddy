
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotDemo from '@/components/ChatbotDemo';

const TryItNow = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-coffee-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-4">See BaristaBot in Action</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Try out our interactive demo to experience how BaristaBot can transform your customer service.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <ChatbotDemo />
            </div>
            
            <div className="flex-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-coffee-dark">Ready for a Custom Demo?</CardTitle>
                  <CardDescription>
                    Fill out this quick form to request a personalized demo for your coffee shop.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Name
                      </label>
                      <Input id="name" placeholder="Your Coffee Shop Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="(123) 456-7890" />
                    </div>
                    <div>
                      <label htmlFor="locations" className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Locations
                      </label>
                      <Input id="locations" type="number" placeholder="1" min="1" />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-coffee-accent hover:bg-coffee-accent/90">
                    Request Custom Demo
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TryItNow;
