
import { Button } from "@/components/ui/button";
import { Rocket, Award } from "lucide-react";

const CourseCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-95 z-0"></div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="white" />
            <circle cx="90" cy="10" r="2" fill="white" />
            <circle cx="90" cy="90" r="2" fill="white" />
            <circle cx="10" cy="90" r="2" fill="white" />
            <circle cx="50" cy="50" r="3" fill="white" />
            <line x1="10" y1="10" x2="50" y2="50" stroke="white" strokeWidth="1" />
            <line x1="90" y1="10" x2="50" y2="50" stroke="white" strokeWidth="1" />
            <line x1="90" y1="90" x2="50" y2="50" stroke="white" strokeWidth="1" />
            <line x1="10" y1="90" x2="50" y2="50" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20 shadow-xl">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              <Award className="w-4 h-4 mr-2" /> Globally Recognized Certifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Accelerate Your Tech Career Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join over 150,000 students who have advanced their careers with GAFANATION's industry-recognized courses. Get unlimited access with our flexible subscription plans.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="text-primary font-bold text-xl mb-2">Monthly Plan</div>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-extrabold">$49</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Access to all courses
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Career counseling
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Project reviews
                  </li>
                </ul>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Choose Monthly
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                <div className="absolute -top-3 -right-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </div>
                <div className="text-secondary font-bold text-xl mb-2">Annual Plan</div>
                <div className="flex items-end mb-1">
                  <span className="text-4xl font-extrabold">$399</span>
                  <span className="text-gray-600 ml-1">/year</span>
                </div>
                <div className="text-sm text-green-600 font-medium mb-4">Save $189 (32%)</div>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Access to all courses
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Priority career counseling
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Unlimited project reviews
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Job placement assistance
                  </li>
                </ul>
                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                  Choose Annual
                </Button>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                <Rocket className="mr-2 h-5 w-5" /> Try 7 Days For Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCTA;
