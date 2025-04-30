
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-coffee-accent/10">
      <div className="container mx-auto px-4">
        <div className="bg-coffee rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNjAgMzBjMC0xNi41NjgtMTMuNDMyLTMwLTMwLTMwQzEzLjQzMiAwIDAgMTMuNDMyIDAgMzBjMCAxNi41NjggMTMuNDMyIDMwIDMwIDMwIDEwLjAwOCAwIDE4Ljg4NS00LjkzOSAyNC4zNDUtMTIuNDc3bC0uMDM2LjAyNkM1Ny44NzYgNDMuMDQzIDYwIDM2Ljg0MiA2MCAzMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Coffee Shop Experience?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join hundreds of coffee shops already using BaristaBot to improve customer satisfaction and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-coffee hover:bg-white/90 px-8">
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
