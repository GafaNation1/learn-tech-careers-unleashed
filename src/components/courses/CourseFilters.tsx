
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock } from "lucide-react";

interface Instructor {
  name: string;
  role: string;
  courses: number;
  students: number;
  rating: number;
  image: string;
}

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  instructor: string;
  category: string;
  image: string;
}

interface CourseFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  levelFilter: string;
  setLevelFilter: (value: string) => void;
  durationFilter: string;
  setDurationFilter: (value: string) => void;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
}

const CourseFilters = ({
  searchTerm,
  setSearchTerm,
  levelFilter,
  setLevelFilter,
  durationFilter,
  setDurationFilter,
  categoryFilter,
  setCategoryFilter
}: CourseFiltersProps) => {
  // Mock instructors data
  const instructors: Instructor[] = [
    { name: "David Lee", role: "Web Development Expert", courses: 12, students: 15430, rating: 4.8, image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" },
    { name: "Sarah Johnson", role: "Data Science Instructor", courses: 8, students: 8920, rating: 4.7, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" },
    { name: "Michael Brown", role: "Cloud Computing Specialist", courses: 10, students: 12150, rating: 4.9, image: "https://images.unsplash.com/photo-1599484205751-0fc4e0800d06?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" },
    { name: "Emily Chen", role: "AI & ML Researcher", courses: 6, students: 6780, rating: 4.6, image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" },
  ];
  
  // Mock upcoming events/webinars
  const upcomingEvents: UpcomingEvent[] = [
    {
      id: 1,
      title: "Full-Stack Development Masterclass",
      date: "June 15, 2025",
      time: "10:00 AM - 12:00 PM PT",
      instructor: "David Lee",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: 2,
      title: "Introduction to Machine Learning with Python",
      date: "June 20, 2025",
      time: "1:00 PM - 3:00 PM PT",
      instructor: "Emily Chen",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: 3,
      title: "AWS Certification Preparation",
      date: "June 25, 2025",
      time: "11:00 AM - 1:00 PM PT",
      instructor: "Michael Brown",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
    },
    {
      id: 4,
      title: "Data Visualization Best Practices",
      date: "July 2, 2025",
      time: "2:00 PM - 4:00 PM PT",
      instructor: "Sarah Johnson",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
    }
  ];

  const resetFilters = () => {
    setSearchTerm("");
    setLevelFilter("");
    setDurationFilter("");
    setCategoryFilter("all");
  };

  return (
    <div className="lg:col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-lg mb-4">Filter Courses</h3>
        
        <div className="space-y-5">
          <div>
            <Label htmlFor="level">Skill Level</Label>
            <select 
              id="level" 
              className="w-full mt-1 p-2 border rounded-md" 
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          
          <div>
            <Label htmlFor="duration">Course Duration</Label>
            <select 
              id="duration" 
              className="w-full mt-1 p-2 border rounded-md" 
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
            >
              <option value="">Any Duration</option>
              <option value="short">Short (≤ 6 weeks)</option>
              <option value="medium">Medium (7-10 weeks)</option>
              <option value="long">Long (&gt; 10 weeks)</option>
            </select>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Popular Instructors</h4>
            <ul className="space-y-2">
              {instructors.map((instructor, index) => (
                <li key={index} className="text-sm">
                  <button 
                    onClick={() => setSearchTerm(instructor.name)}
                    className="flex items-center hover:text-primary w-full text-left"
                  >
                    <img 
                      src={instructor.image} 
                      alt={`Course by ${instructor.name}`} 
                      className="w-8 h-8 rounded-lg mr-2 object-cover"
                    />
                    <div>
                      <div>{instructor.name}</div>
                      <div className="text-xs text-muted-foreground">{instructor.role}</div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={resetFilters}
          >
            Reset Filters
          </Button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
        <h3 className="font-bold text-lg mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="border-b pb-4 last:border-0 last:pb-0 group">
              <div className="mb-2 overflow-hidden rounded-md">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{event.title}</h4>
              <div className="flex items-center mt-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center mt-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                <span>{event.time}</span>
              </div>
              <div className="mt-2">
                <Button variant="link" className="h-auto p-0 text-xs">
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg shadow-sm mt-6">
        <h3 className="font-bold text-lg mb-2">Need Help Choosing?</h3>
        <p className="text-sm text-gray-600 mb-4">Schedule a free consultation with our career advisors to find the right course path for your goals.</p>
        <Button className="w-full">Book Consultation</Button>
      </div>
    </div>
  );
};

export default CourseFilters;
