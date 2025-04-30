
import React from 'react';

const Problem = () => {
  const problems = [
    "Long wait times during peak hours frustrating customers",
    "Staff overwhelmed with repetitive questions",
    "Inconsistent answers to common inquiries",
    "Reduced focus on crafting quality beverages",
    "Customer dissatisfaction due to delayed responses"
  ];

  return (
    <section className="py-20 bg-coffee-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">The Problem We Solve</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Coffee shops face unique challenges when it comes to customer service, especially during busy hours.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-coffee-accent/10 p-1 rounded-full mt-1 mr-3">
                  <svg className="h-4 w-4 text-coffee-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-coffee-dark">{problem}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Problem;
