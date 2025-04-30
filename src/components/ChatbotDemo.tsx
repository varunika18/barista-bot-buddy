
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare } from 'lucide-react';

// Predefined responses for the demo
const botResponses = {
  "hello": "Hi there! 👋 Welcome to Java Junction. How can I help you today?",
  "menu": "We offer a variety of espresso drinks, pour-overs, cold brews, and seasonal specialties. We also have pastries from local bakeries. Would you like to see our full menu?",
  "hours": "We're open Monday-Friday 6am-8pm, Saturday 7am-9pm, and Sunday 7am-6pm. The kitchen closes 30 minutes before closing time.",
  "location": "We're located at 123 Coffee Lane, Downtown. We have free parking available behind the building.",
  "wifi": "Yes, we offer complimentary WiFi! The network name is 'JavaJunctionGuest' and the password is provided on your receipt.",
  "order": "Your order is being prepared and should be ready in approximately 5 minutes. You'll receive a notification when it's ready for pickup!",
  "almond milk": "Yes, we offer almond milk as a dairy alternative for any of our drinks at a small additional charge of $0.75.",
  "gluten free": "We offer several gluten-free pastry options that are prepared in a separate area to avoid cross-contamination. Just ask your barista for today's selections!",
  "rewards": "Our loyalty program gives you 1 point for every dollar spent. After 100 points, you'll receive a free drink of your choice!",
  "default": "I'd be happy to help with that. In a real implementation, I'd be trained on your coffee shop's specific information to provide accurate answers to customer questions."
};

// Function to get a response based on user input
const getResponse = (userInput) => {
  const input = userInput.toLowerCase().trim();
  
  // Check if any key word is in the input
  for (const [keyword, response] of Object.entries(botResponses)) {
    if (input.includes(keyword.toLowerCase())) {
      return response;
    }
  }
  
  // Return default response if no keywords match
  return botResponses.default;
};

const ChatbotDemo = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'bot', 
      text: 'Hello! I\'m BaristaBot. Ask me about our menu, hours, locations, or anything else about our coffee shop!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Function to simulate bot typing
  const simulateBotResponse = (userInput) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const botResponse = getResponse(userInput);
      setMessages(prev => [
        ...prev, 
        { id: Date.now(), type: 'bot', text: botResponse }
      ]);
      setIsTyping(false);
    }, 1200); // Simulate typing delay
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    
    // Add user message
    setMessages(prev => [
      ...prev, 
      { id: Date.now(), type: 'user', text: input }
    ]);
    
    // Get bot response
    simulateBotResponse(input);
    
    // Clear input
    setInput('');
  };

  // Auto scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Sample suggestions for demo
  const suggestions = [
    "What's on your menu?",
    "What are your hours?",
    "Do you have almond milk?",
    "Where are you located?",
    "Is WiFi available?"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-md w-full mx-auto overflow-hidden">
      <div className="flex items-center gap-2 p-4 border-b bg-coffee-dark text-white">
        <MessageSquare size={20} className="text-coffee-accent" />
        <h3 className="font-medium">BaristaBot Demo</h3>
      </div>
      
      <div className="h-[400px] overflow-y-auto p-4 bg-coffee-light/30">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`${
              message.type === 'user' ? 'chat-bubble chat-bubble-user' : 'chat-bubble chat-bubble-bot'
            } mb-4`}
          >
            {message.text}
          </div>
        ))}
        
        {isTyping && (
          <div className="chat-bubble chat-bubble-bot flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 border-t">
        <div className="flex flex-wrap gap-2 mb-3">
          {suggestions.map((suggestion, index) => (
            <button 
              key={index}
              className="text-xs bg-coffee-light text-coffee-dark px-3 py-1 rounded-full hover:bg-coffee-accent/10 transition-colors"
              onClick={() => {
                setInput(suggestion);
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>
        
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 bg-gray-50 focus:ring-coffee-accent"
          />
          <Button 
            type="submit" 
            className="bg-coffee-accent hover:bg-coffee-accent/90"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotDemo;
