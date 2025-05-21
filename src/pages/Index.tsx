import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";
import JobCard, { JobCardProps } from "@/components/JobCard";
import LearningPath from "@/components/LearningPath";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import CourseStats from "@/components/courses/CourseStats";
import CourseCTA from "@/components/courses/CourseCTA";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Book, BookOpen, Users, Award, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [courseCategory, setCourseCategory] = useState("all");

  // Mock course data
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
  ];

  // Mock job data
  const jobs: JobCardProps[] = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      salary: "$120K - $150K",
      postedDate: "2 days ago",
      logo: "https://via.placeholder.com/100?text=TC",
      tags: ["React", "TypeScript", "Redux", "5+ years"]
    },
    {
      id: "2",
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130K - $160K",
      postedDate: "1 week ago",
      logo: "https://via.placeholder.com/100?text=AP",
      tags: ["Python", "Machine Learning", "SQL", "3+ years"]
    },
    {
      id: "3",
      title: "Cloud Solutions Architect",
      company: "CloudWave",
      location: "Austin, TX (Hybrid)",
      type: "Contract",
      salary: "$70 - $90/hour",
      postedDate: "3 days ago",
      logo: "https://via.placeholder.com/100?text=CW",
      tags: ["AWS", "Azure", "Terraform", "7+ years"]
    }
  ];

  // Learning paths data
  const webDevPath = {
    title: "Web Development Career Path",
    description: "Become a full-stack web developer and build modern web applications.",
    steps: [
      {
        id: 1,
        title: "Frontend Fundamentals",
        description: "Learn HTML, CSS and JavaScript basics",
        courses: 4,
        completed: true
      },
      {
        id: 2,
        title: "Advanced JavaScript",
        description: "Master modern JavaScript and ES6+ features",
        courses: 3
      },
      {
        id: 3,
        title: "Frontend Frameworks",
        description: "Build applications with React or Angular",
        courses: 5
      },
      {
        id: 4,
        title: "Backend Development",
        description: "Create APIs with Node.js and Express",
        courses: 4
      },
      {
        id: 5,
        title: "Database Integration",
        description: "Work with SQL and NoSQL databases",
        courses: 3
      }
    ]
  };

  const dataPath = {
    title: "Data Science Career Path",
    description: "Master data analytics, visualization, and build machine learning models.",
    steps: [
      {
        id: 1,
        title: "Python Programming",
        description: "Learn Python basics for data science",
        courses: 3
      },
      {
        id: 2,
        title: "Data Analysis and Visualization",
        description: "Use pandas, NumPy, and matplotlib",
        courses: 4
      },
      {
        id: 3,
        title: "Statistics and Probability",
        description: "Master statistical concepts for data science",
        courses: 2
      },
      {
        id: 4,
        title: "Machine Learning Basics",
        description: "Implement supervised and unsupervised learning",
        courses: 5
      },
      {
        id: 5,
        title: "Advanced ML and Deep Learning",
        description: "Neural networks and production ML systems",
        courses: 3
      }
    ]
  };

  const filteredCourses = courseCategory === "all" 
    ? courses 
    : courses.filter(course => course.category.toLowerCase() === courseCategory);

  // Testimonials data
  const testimonials = [
    {
      text: "GAFANATION completely transformed my career. Within 3 months of completing the web development course, I landed a job at a top tech company.",
      author: "Alex Johnson",
      role: "Frontend Developer at TechCorp"
    },
    {
      text: "The data science track was incredibly comprehensive. The instructors were experts from the field and the hands-on projects prepared me for real-world challenges.",
      author: "Samantha Lee",
      role: "Data Scientist at DataPro"
    },
    {
      text: "The career support was outstanding. From resume reviews to mock interviews, they prepared me for every step of the job search process.",
      author: "Michael Chen",
      role: "Cloud Engineer at CloudWave"
    },
    {
      text: "The community of students and instructors is amazing. Even after completing my course, I still participate in discussions and networking events.",
      author: "Priya Sharma",
      role: "ML Engineer at AI Solutions"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        {/* Stats Section */}
        <CourseStats />
        
        {/* Featured Courses Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-semibold mb-3">
                FEATURED COURSES
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Master In-Demand Skills</h2>
              <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded"></div>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                Learn from industry experts and boost your career with our top-rated courses
              </p>
            </div>
            
            <Tabs defaultValue="all" className="w-full mb-8">
              <div className="flex justify-center">
                <TabsList className="bg-gray-100 p-1">
                  <TabsTrigger 
                    value="all" 
                    onClick={() => setCourseCategory("all")}
                    className="data-[state=active]:bg-white data-[state=active]:text-primary"
                  >
                    All Categories
                  </TabsTrigger>
                  <TabsTrigger 
                    value="web" 
                    onClick={() => setCourseCategory("web development")}
                    className="data-[state=active]:bg-white data-[state=active]:text-primary"
                  >
                    Web Development
                  </TabsTrigger>
                  <TabsTrigger 
                    value="data" 
                    onClick={() => setCourseCategory("data science")}
                    className="data-[state=active]:bg-white data-[state=active]:text-primary"
                  >
                    Data Science
                  </TabsTrigger>
                  <TabsTrigger 
                    value="cloud" 
                    onClick={() => setCourseCategory("cloud computing")}
                    className="data-[state=active]:bg-white data-[state=active]:text-primary"
                  >
                    Cloud Computing
                  </TabsTrigger>
                  <TabsTrigger 
                    value="ai" 
                    onClick={() => setCourseCategory("ai & ml")}
                    className="data-[state=active]:bg-white data-[state=active]:text-primary"
                  >
                    AI & ML
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="web" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="data" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="cloud" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="ai" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/courses">
                  <BookOpen className="mr-2 h-5 w-5" /> View All Courses
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-purple-50 text-secondary rounded-full text-sm font-semibold mb-3">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl font-bold text-gray-900">The GAFANATION Advantage</h2>
              <div className="mt-2 h-1 w-20 bg-secondary mx-auto rounded"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-lg mb-4">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Industry-Relevant Curriculum</h3>
                <p className="text-gray-600">
                  Our courses are designed by experts from top tech companies to ensure you learn skills that are in demand.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-purple-50 rounded-lg mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from professionals with experience at GAFAM companies who bring real-world expertise to the classroom.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-lg mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Recognized Certifications</h3>
                <p className="text-gray-600">
                  Earn industry-recognized certifications that will help you stand out to employers in the job market.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-purple-50 rounded-lg mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Career Support</h3>
                <p className="text-gray-600">
                  From resume reviews to interview prep to job placement, we help you land your dream tech job.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Learning Paths Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 bg-green-50 text-accent rounded-full text-sm font-semibold mb-3">
                CAREER PATHS
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Structured Learning Journeys</h2>
              <div className="mt-2 h-1 w-20 bg-accent mx-auto rounded"></div>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                Follow our carefully designed learning paths to reach your career goals
              </p>
            </div>
            
            <div className="space-y-10">
              <LearningPath {...webDevPath} />
              <LearningPath {...dataPath} />
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
                <Link to="/paths">
                  <Book className="mr-2 h-5 w-5" /> Explore All Paths
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-semibold mb-3">
                STUDENT SUCCESS
              </span>
              <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>
              <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded"></div>
            </div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto px-4"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                    <Card className="bg-white rounded-xl shadow-sm border border-gray-100 h-full">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                            {testimonial.author.split(' ').map(name => name[0]).join('')}
                          </div>
                          <div className="ml-3">
                            <div className="font-semibold">{testimonial.author}</div>
                            <div className="text-gray-500 text-sm">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="relative inset-0 translate-y-0" />
                <CarouselNext className="relative inset-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </section>
        
        {/* Job Opportunities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 bg-indigo-50 text-secondary rounded-full text-sm font-semibold mb-3">
                CAREER OPPORTUNITIES
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Find Your Dream Job</h2>
              <div className="mt-2 h-1 w-20 bg-secondary mx-auto rounded"></div>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                Explore top tech jobs from our network of hiring partners
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10">
                <Link to="/jobs">
                  <Users className="mr-2 h-5 w-5" /> Browse All Jobs
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CourseCTA />

        {/* Partners Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-gray-500">TRUSTED BY LEADING COMPANIES</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {/* Using grayscale logos for a professional look */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-bold">
                    LOGO {i}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
