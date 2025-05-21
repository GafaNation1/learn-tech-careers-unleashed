
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Clock, Calendar, BookOpen, Star, Users } from "lucide-react";
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
    { name: "David Lee", role: "Web Development Expert", courses: 12, students: 15430, rating: 4.8, image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" },
    { name: "Sarah Johnson", role: "Data Science Instructor", courses: 8, students: 8920, rating: 4.7, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" },
    { name: "Michael Brown", role: "Cloud Computing Specialist", courses: 10, students: 12150, rating: 4.9, image: "https://images.unsplash.com/photo-1599484205751-0fc4e0800d06?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" },
    { name: "Emily Chen", role: "AI & ML Researcher", courses: 6, students: 6780, rating: 4.6, image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" },
  ];
  
  // Mock upcoming events/webinars
  const upcomingEvents = [
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

  // Popular technology badges with colors
  const techBadges = [
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

  // Comprehensive course data
  const courses: CourseCardProps[] = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React and Node.js to become a full-stack web developer. Build real-world projects for your portfolio and gain job-ready skills.",
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
      description: "Master data analysis, visualization, and machine learning with Python. This course covers pandas, NumPy, Matplotlib and scikit-learn in depth.",
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
      description: "Prepare for the AWS Certified Cloud Practitioner exam with hands-on practice. Learn cloud concepts, AWS services, security, architecture, pricing, and support.",
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
      description: "Learn to build and deploy machine learning models using TensorFlow and Keras. From basics to advanced neural networks and deep learning architectures.",
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
      description: "Master advanced React concepts including hooks, context, Redux, and performance optimization. Build scalable front-end architectures for large applications.",
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
      description: "Dive into neural networks, computer vision, and natural language processing. Implement cutting-edge AI algorithms and solve real-world problems.",
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
      description: "Learn to implement DevOps practices on the Microsoft Azure platform. Master CI/CD pipelines, infrastructure as code, and cloud native development.",
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
      description: "Process and analyze large datasets using Python, Pandas, and PySpark. Learn distributed computing techniques and big data workflow optimization.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      category: "Data Science",
      level: "Intermediate",
      duration: "11 weeks",
      students: 7240,
      rating: 4.6,
      instructor: "Sarah Johnson"
    },
    {
      id: "9",
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps for iOS and Android using React Native. Create beautiful user interfaces and implement native functionalities.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      category: "Web Development",
      level: "Intermediate",
      duration: "10 weeks",
      students: 5870,
      rating: 4.7,
      instructor: "David Lee"
    },
    {
      id: "10",
      title: "Cybersecurity Fundamentals",
      description: "Learn essential cybersecurity principles, threat detection, encryption, network security, and ethical hacking techniques to protect systems and data.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      category: "Cybersecurity",
      level: "Beginner",
      duration: "8 weeks",
      students: 9340,
      rating: 4.8,
      instructor: "Michael Brown"
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

  const handleTechnologyFilter = (tech: string) => {
    setSearchTerm(tech);
  };

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
        
        {/* Statistics Section */}
        <section className="bg-white py-8 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Expert-Led Courses</div>
              </div>
              <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="text-3xl font-bold text-secondary mb-2">95%</div>
                <div className="text-sm text-gray-600">Completion Rate</div>
              </div>
              <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">150k+</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-gray-600">Job Placement Success</div>
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
              
              {/* Course Listings */}
              <div className="lg:col-span-3">
                <Tabs defaultValue="all" className="w-full mb-8">
                  <div className="flex justify-center overflow-x-auto">
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
                      <TabsTrigger 
                        value="cyber" 
                        onClick={() => setCategoryFilter("cybersecurity")}
                      >
                        Cybersecurity
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
                      <div className="text-center py-12 bg-white rounded-lg shadow-sm">
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
                  
                  {/* Content for other tabs follows the same structure */}
                  {["web", "data", "cloud", "ai", "cyber"].map((tab) => (
                    <TabsContent key={tab} value={tab} className="mt-6">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">
                          {tab === "web" && "Web Development"}
                          {tab === "data" && "Data Science"}
                          {tab === "cloud" && "Cloud Computing"}
                          {tab === "ai" && "AI & Machine Learning"}
                          {tab === "cyber" && "Cybersecurity"}
                          {" Courses"}
                        </h2>
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
                        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
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
                              setCategoryFilter(tab);
                            }}
                          >
                            Reset Filters
                          </Button>
                        </div>
                      )}
                    </TabsContent>
                  ))}
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
        
        {/* Corporate Training Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Corporate Training Solutions</h2>
                <p className="text-lg mb-6 opacity-90">
                  Upskill your team with customized training programs designed for your company's specific needs.
                  From technical workshops to comprehensive learning paths, we help organizations build in-house expertise.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <div className="mr-2 bg-white/20 rounded-full p-1">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <span>Customized learning paths for your team</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 bg-white/20 rounded-full p-1">
                      <Users className="h-4 w-4" />
                    </div>
                    <span>Group and individual training options</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 bg-white/20 rounded-full p-1">
                      <Star className="h-4 w-4" />
                    </div>
                    <span>Expert-led workshops and mentorship</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Button className="bg-white text-primary hover:bg-gray-100 px-8">
                    Request Information
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8">
                    Download Brochure
                  </Button>
                </div>
              </div>
              <div>
                <div className="bg-white/10 border border-white/20 p-6 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-primary mr-4">
                      <Star className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Companies We've Trained</h3>
                      <p className="text-sm opacity-80">Join these organizations in upskilling their teams</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-bold">Microsoft</div>
                        <div className="text-xs opacity-80">200+ employees</div>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-bold">Amazon</div>
                        <div className="text-xs opacity-80">150+ employees</div>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-bold">Google</div>
                        <div className="text-xs opacity-80">180+ employees</div>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-bold">IBM</div>
                        <div className="text-xs opacity-80">120+ employees</div>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-bold">Oracle</div>
                        <div className="text-xs opacity-80">90+ employees</div>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-bold">Adobe</div>
                        <div className="text-xs opacity-80">80+ employees</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-2">Everything you need to know about our courses and learning process</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-lg">How do the online courses work?</h4>
                <p className="text-gray-600 mt-2">
                  Our courses combine pre-recorded video lessons, interactive coding exercises, projects, and live sessions with instructors. You'll have access to a learning community and regular opportunities to ask questions.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-lg">Do I get a certificate after completion?</h4>
                <p className="text-gray-600 mt-2">
                  Yes, upon successful completion of a course, you will receive an industry-recognized certificate that you can share with employers or on your LinkedIn profile.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-lg">What if I'm not satisfied with a course?</h4>
                <p className="text-gray-600 mt-2">
                  We offer a 7-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can request a full refund within the first week of starting the course.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-lg">How long do I have access to course materials?</h4>
                <p className="text-gray-600 mt-2">
                  You'll have lifetime access to all course materials, including future updates. This allows you to revisit content as needed throughout your career.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
            <p className="text-xl mb-8">
              Join over 150,000 students who have advanced their careers with GAFANATION courses.
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
