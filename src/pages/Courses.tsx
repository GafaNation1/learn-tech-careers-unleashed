
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Clock, Calendar } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  
  // Mock instructors data
  const instructors = [
    { name: "David Lee", role: "Web Development Expert", courses: 12, students: 15430, rating: 4.8, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" },
    { name: "Sarah Johnson", role: "Data Science Instructor", courses: 8, students: 8920, rating: 4.7, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" },
    { name: "Michael Brown", role: "Cloud Computing Specialist", courses: 10, students: 12150, rating: 4.9, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" },
    { name: "Emily Chen", role: "AI & ML Researcher", courses: 6, students: 6780, rating: 4.6, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" },
  ];
  
  // Mock upcoming events/webinars
  const upcomingEvents = [
    {
      id: 1,
      title: "Full-Stack Development Masterclass",
      date: "June 15, 2025",
      time: "10:00 AM - 12:00 PM PT",
      instructor: "David Lee",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Introduction to Machine Learning with Python",
      date: "June 20, 2025",
      time: "1:00 PM - 3:00 PM PT",
      instructor: "Emily Chen",
      category: "AI & ML"
    },
    {
      id: 3,
      title: "AWS Certification Preparation",
      date: "June 25, 2025",
      time: "11:00 AM - 1:00 PM PT",
      instructor: "Michael Brown",
      category: "Cloud Computing"
    }
  ];

  // Comprehensive course data
  const courses: CourseCardProps[] = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React and Node.js to become a full-stack web developer.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      category: "Web Development",
      level: "Beginner",
      duration: "12 weeks",
      students: 15430,
      rating: 4.8,
      instructor: "David Lee"
    },
    {
      id: "2",
      title: "Data Science Fundamentals with Python",
      description: "Master data analysis, visualization, and machine learning with Python.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      category: "Data Science",
      level: "Intermediate",
      duration: "10 weeks",
      students: 8920,
      rating: 4.7,
      instructor: "Sarah Johnson"
    },
    {
      id: "3",
      title: "AWS Cloud Practitioner Certification",
      description: "Prepare for the AWS Certified Cloud Practitioner exam with hands-on practice.",
      image: "https://images.unsplash.com/photo-1599484205751-0fc4e0800d06?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      category: "Cloud Computing",
      level: "Beginner",
      duration: "6 weeks",
      students: 12150,
      rating: 4.9,
      instructor: "Michael Brown"
    },
    {
      id: "4",
      title: "Machine Learning with TensorFlow",
      description: "Learn to build and deploy machine learning models using TensorFlow and Keras.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      category: "AI & ML",
      level: "Advanced",
      duration: "14 weeks",
      students: 6780,
      rating: 4.6,
      instructor: "Emily Chen"
    },
    {
      id: "5",
      title: "Advanced React.js for Enterprise Applications",
      description: "Master advanced React concepts including hooks, context, Redux, and performance optimization.",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      category: "Web Development",
      level: "Advanced",
      duration: "8 weeks",
      students: 7645,
      rating: 4.7,
      instructor: "David Lee"
    },
    {
      id: "6",
      title: "Deep Learning Specialization",
      description: "Dive into neural networks, computer vision, and natural language processing.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      category: "AI & ML",
      level: "Advanced",
      duration: "16 weeks",
      students: 5430,
      rating: 4.9,
      instructor: "Emily Chen"
    },
    {
      id: "7",
      title: "Azure DevOps Engineering",
      description: "Learn to implement DevOps practices on the Microsoft Azure platform.",
      image: "https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      category: "Cloud Computing",
      level: "Intermediate",
      duration: "9 weeks",
      students: 6820,
      rating: 4.5,
      instructor: "Michael Brown"
    },
    {
      id: "8",
      title: "Big Data Analysis with Python",
      description: "Process and analyze large datasets using Python, Pandas, and PySpark.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      category: "Data Science",
      level: "Intermediate",
      duration: "11 weeks",
      students: 7240,
      rating: 4.6,
      instructor: "Sarah Johnson"
    }
  ];

  // Filter courses based on search and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLevel = levelFilter ? course.level.toLowerCase() === levelFilter.toLowerCase() : true;
    const matchesDuration = durationFilter ? filterDuration(course.duration, durationFilter) : true;
    const matchesCategory = categoryFilter === "all" ? true : course.category.toLowerCase() === categoryFilter.toLowerCase();
    
    return matchesSearch && matchesLevel && matchesDuration && matchesCategory;
  });

  // Helper function to filter duration
  function filterDuration(duration: string, filter: string): boolean {
    const weeks = parseInt(duration.split(" ")[0]);
    
    switch(filter) {
      case "short":
        return weeks <= 6;
      case "medium":
        return weeks > 6 && weeks <= 10;
      case "long":
        return weeks > 10;
      default:
        return true;
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumbs navigation */}
        <div className="bg-muted py-2 px-4">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Courses</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Gain the skills you need to succeed in the tech industry with courses taught by industry experts.
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
          </div>
        </section>
        
        {/* Course Listings Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
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
                        <option value="long">Long (> 10 weeks)</option>
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
                                alt={instructor.name} 
                                className="w-8 h-8 rounded-full mr-2" 
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
                      onClick={() => {
                        setSearchTerm("");
                        setLevelFilter("");
                        setDurationFilter("");
                        setCategoryFilter("all");
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
                  <h3 className="font-bold text-lg mb-4">Upcoming Events</h3>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="border-b pb-4 last:border-0 last:pb-0">
                        <h4 className="font-medium text-sm">{event.title}</h4>
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
              </div>
              
              {/* Course Listings */}
              <div className="lg:col-span-3">
                <Tabs defaultValue="all" className="w-full mb-8">
                  <div className="flex justify-center">
                    <TabsList>
                      <TabsTrigger 
                        value="all" 
                        onClick={() => setCategoryFilter("all")}
                      >
                        All Categories
                      </TabsTrigger>
                      <TabsTrigger 
                        value="web" 
                        onClick={() => setCategoryFilter("web development")}
                      >
                        Web Development
                      </TabsTrigger>
                      <TabsTrigger 
                        value="data" 
                        onClick={() => setCategoryFilter("data science")}
                      >
                        Data Science
                      </TabsTrigger>
                      <TabsTrigger 
                        value="cloud" 
                        onClick={() => setCategoryFilter("cloud computing")}
                      >
                        Cloud Computing
                      </TabsTrigger>
                      <TabsTrigger 
                        value="ai" 
                        onClick={() => setCategoryFilter("ai & ml")}
                      >
                        AI & ML
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="all" className="mt-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">All Courses</h2>
                      <div className="text-sm text-muted-foreground">
                        Showing {filteredCourses.length} of {courses.length} courses
                      </div>
                    </div>
                    
                    {filteredCourses.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map((course) => (
                          <CourseCard key={course.id} {...course} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Search className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-medium">No courses found</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Try adjusting your search or filter criteria
                        </p>
                        <Button 
                          variant="outline" 
                          className="mt-4"
                          onClick={() => {
                            setSearchTerm("");
                            setLevelFilter("");
                            setDurationFilter("");
                            setCategoryFilter("all");
                          }}
                        >
                          Reset Filters
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                  
                  {/* Repeat for other tabs with similar content structure */}
                  <TabsContent value="web" className="mt-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">Web Development Courses</h2>
                      <div className="text-sm text-muted-foreground">
                        Showing {filteredCourses.length} courses
                      </div>
                    </div>
                    
                    {filteredCourses.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map((course) => (
                          <CourseCard key={course.id} {...course} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Search className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-medium">No courses found</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Try adjusting your search or filter criteria
                        </p>
                        <Button 
                          variant="outline" 
                          className="mt-4"
                          onClick={() => {
                            setSearchTerm("");
                            setLevelFilter("");
                            setDurationFilter("");
                            setCategoryFilter("web development");
                          }}
                        >
                          Reset Filters
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                  
                  {/* Content for other tabs would be similar */}
                  <TabsContent value="data" className="mt-6">
                    {/* Similar structure to "all" tab */}
                  </TabsContent>
                  <TabsContent value="cloud" className="mt-6">
                    {/* Similar structure to "all" tab */}
                  </TabsContent>
                  <TabsContent value="ai" className="mt-6">
                    {/* Similar structure to "all" tab */}
                  </TabsContent>
                </Tabs>
                
                {/* Pagination */}
                {filteredCourses.length > 0 && (
                  <Pagination className="mt-8">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
            <p className="text-xl mb-8">
              Join over 100,000 students who have advanced their careers with GAFANATION courses.
              Get unlimited access to all courses with a subscription plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
                View Pricing Plans
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-8">
                Try For Free
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
