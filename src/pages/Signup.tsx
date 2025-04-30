
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Signup = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="bg-coffee-accent/10 p-3 rounded-full">
                <UserPlus className="h-8 w-8 text-coffee-accent" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-center text-coffee-dark mb-8">Get Started with BaristaBot</h1>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Coffee Shop Name</Label>
                <Input id="name" placeholder="Your coffee shop name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="size">Coffee Shop Size</Label>
                <select 
                  id="size" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="" disabled selected>Select your coffee shop size</option>
                  <option value="small">Small (1 location)</option>
                  <option value="medium">Medium (2-5 locations)</option>
                  <option value="large">Large (6+ locations)</option>
                </select>
              </div>
              <Button className="w-full bg-coffee-accent hover:bg-coffee-accent/90 text-white">
                Create My Account
              </Button>
            </form>
            
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account? <a href="#" className="text-coffee-accent hover:underline">Log in</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
