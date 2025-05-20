
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Start your tech</span>
                <span className="block gradient-text">career journey</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Learn from industry experts and get placed in top tech companies. GAFANATION helps you master the skills needed for today's tech industry and connects you with employers.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10">
                    Explore Courses
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    View Jobs <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-br from-primary/80 to-secondary/80 sm:h-72 md:h-96 lg:w-full lg:h-full">
          <div className="w-full h-full bg-opacity-50 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="bg-white p-4 rounded-lg shadow-lg opacity-90">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Courses Available</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg opacity-90">
                <div className="text-2xl font-bold text-secondary">95%</div>
                <div className="text-sm text-gray-600">Placement Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg opacity-90">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-gray-600">Industry Partners</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg opacity-90">
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
