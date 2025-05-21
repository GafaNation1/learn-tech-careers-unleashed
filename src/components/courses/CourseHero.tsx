
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TechBadge {
  name: string;
  color: string;
}

interface CourseHeroProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const CourseHero = ({ searchTerm, setSearchTerm }: CourseHeroProps) => {
  // Popular technology badges with colors
  const techBadges: TechBadge[] = [
    { name: "JavaScript", color: "bg-amber-100 text-amber-800 border-amber-200" },
    { name: "Python", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "React", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
    { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200" },
    { name: "AWS", color: "bg-orange-100 text-orange-800 border-orange-200" },
    { name: "TensorFlow", color: "bg-red-100 text-red-800 border-red-200" },
    { name: "SQL", color: "bg-purple-100 text-purple-800 border-purple-200" },
    { name: "Docker", color: "bg-sky-100 text-sky-800 border-sky-200" },
    { name: "Git", color: "bg-rose-100 text-rose-800 border-rose-200" }
  ];

  const handleTechnologyFilter = (tech: string) => {
    setSearchTerm(tech);
  };

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Accelerate Your Tech Career</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Gain the skills you need to succeed in today's fast-moving tech industry with courses taught by industry experts with experience at top GAFAM companies.
        </p>
        
        <div className="bg-white rounded-lg p-4 shadow-md max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search for courses, topics, or instructors" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {techBadges.map((tech, index) => (
            <button
              key={index}
              onClick={() => handleTechnologyFilter(tech.name)}
              className={`${tech.color} px-3 py-1 rounded-full text-sm font-medium border transition-all hover:scale-105`}
            >
              {tech.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
