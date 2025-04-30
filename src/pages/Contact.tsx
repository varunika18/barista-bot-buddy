
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQs = [
  {
    question: "How quickly can BaristaBot be set up?",
    answer: "Most coffee shops can be up and running with BaristaBot in less than 48 hours. Our team will help customize the bot to fit your specific menu and operational needs."
  },
  {
    question: "Does BaristaBot integrate with our existing ordering system?",
    answer: "Yes, BaristaBot can integrate with most popular POS and ordering systems used by coffee shops. During onboarding, we'll evaluate your current setup and ensure a smooth integration."
  },
  {
    question: "How does BaristaBot learn about our specific menu?",
    answer: "During setup, we'll import your menu items, descriptions, and pricing. The bot can also be trained on specific questions unique to your coffee shop. It continuously learns from interactions to improve over time."
  },
  {
    question: "Can customers place orders through BaristaBot?",
    answer: "Yes, BaristaBot can be configured to accept orders, making it a fully functional ordering assistant for your coffee shop."
  },
  {
    question: "What languages does BaristaBot support?",
    answer: "BaristaBot currently supports English, Spanish, French, German, and Japanese. We're continuously adding more languages based on customer needs."
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-12 text-center">Get in Touch</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-semibold text-coffee-dark mb-6">Contact Us</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coffeeshop">Coffee Shop Name</Label>
                    <Input id="coffeeshop" placeholder="Your coffee shop name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="How can we help your coffee shop?"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-coffee-accent hover:bg-coffee-accent/90">Send Message</Button>
                </form>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-coffee-dark mb-4">Connect With Us</h2>
                <p className="text-gray-700 mb-6">
                  Have questions or need immediate assistance? Reach out through any of these channels:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-coffee-accent mr-3" />
                    <a href="mailto:hello@baristabot.com" className="text-coffee-dark hover:text-coffee-accent">hello@baristabot.com</a>
                  </div>
                  <div className="flex space-x-4">
                    {[
                      { icon: Facebook, href: "https://facebook.com" },
                      { icon: Twitter, href: "https://twitter.com" },
                      { icon: Instagram, href: "https://instagram.com" },
                      { icon: Linkedin, href: "https://linkedin.com" }
                    ].map((social, index) => (
                      <a 
                        key={index}
                        href={social.href} 
                        className="w-10 h-10 rounded-full bg-coffee-accent/10 flex items-center justify-center hover:bg-coffee-accent hover:text-white transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-coffee-dark mb-6">Frequently Asked Questions</h2>
              <div className="divide-y divide-gray-100">
                {FAQs.map((faq, index) => (
                  <div key={index} className="py-5">
                    <h3 className="font-medium text-coffee-dark mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
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

export default Contact;
