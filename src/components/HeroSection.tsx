
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold mb-4">
                Launch Your Tech Career
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Master the skills for</span>
                <span className="block gradient-text">tomorrow's tech industry</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Learn from industry experts and get placed in top tech companies. GAFANATION helps you master in-demand skills and connects you with leading employers.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button asChild className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:-translate-y-1">
                    <Link to="/courses">
                      Explore Courses
                    </Link>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button asChild variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 border-primary md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:-translate-y-1">
                    <Link to="/jobs">
                      View Jobs <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center lg:justify-start">
                <div className="flex -space-x-1 overflow-hidden">
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-primary text-white flex items-center justify-center text-xs font-medium">GA</div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-secondary text-white flex items-center justify-center text-xs font-medium">FA</div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-accent text-white flex items-center justify-center text-xs font-medium">NA</div>
                </div>
                <span className="ml-2 text-sm text-gray-500">Join 150,000+ tech professionals</span>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-br from-primary via-secondary to-accent sm:h-72 md:h-96 lg:w-full lg:h-full">
          <div className="w-full h-full bg-opacity-50 flex items-center justify-center relative overflow-hidden">
            {/* Abstract tech pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 10 L40 10 M10 0 L10 40" stroke="white" strokeWidth="1" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            {/* Circuit board patterns */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="75" cy="25" r="3" fill="white" fillOpacity="0.5" />
              <circle cx="25" cy="75" r="3" fill="white" fillOpacity="0.5" />
              <line x1="75" y1="25" x2="25" y2="75" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
              <circle cx="65" cy="40" r="2" fill="white" fillOpacity="0.5" />
              <line x1="65" y1="40" x2="75" y2="25" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
              <circle cx="40" cy="65" r="2" fill="white" fillOpacity="0.5" />
              <line x1="40" y1="65" x2="25" y2="75" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
            </svg>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4 p-4 z-10">
              <div className="bg-white p-4 rounded-lg shadow-lg opacity-90 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Expert Courses</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg opacity-90 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-2xl font-bold text-secondary">95%</div>
                <div className="text-sm text-gray-600">Completion Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg opacity-90 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-gray-600">Tech Partners</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg opacity-90 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
