
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";
import JobCard, { JobCardProps } from "@/components/JobCard";
import LearningPath from "@/components/LearningPath";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        {/* Featured Courses Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Featured Courses</h2>
              <p className="mt-2 text-xl text-gray-600">Learn from industry experts and boost your career</p>
            </div>
            
            <Tabs defaultValue="all" className="w-full mb-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger 
                    value="all" 
                    onClick={() => setCourseCategory("all")}
                  >
                    All Categories
                  </TabsTrigger>
                  <TabsTrigger 
                    value="web" 
                    onClick={() => setCourseCategory("web development")}
                  >
                    Web Development
                  </TabsTrigger>
                  <TabsTrigger 
                    value="data" 
                    onClick={() => setCourseCategory("data science")}
                  >
                    Data Science
                  </TabsTrigger>
                  <TabsTrigger 
                    value="cloud" 
                    onClick={() => setCourseCategory("cloud computing")}
                  >
                    Cloud Computing
                  </TabsTrigger>
                  <TabsTrigger 
                    value="ai" 
                    onClick={() => setCourseCategory("ai & ml")}
                  >
                    AI & ML
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="web" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="data" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="cloud" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="ai" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All Courses
              </Button>
            </div>
          </div>
        </section>
        
        {/* Learning Paths Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Learning Paths</h2>
              <p className="mt-2 text-xl text-gray-600">Structured learning paths to reach your career goals</p>
            </div>
            
            <div className="space-y-8">
              <LearningPath {...webDevPath} />
              <LearningPath {...dataPath} />
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Explore All Paths
              </Button>
            </div>
          </div>
        </section>
        
        {/* Job Opportunities Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Job Opportunities</h2>
              <p className="mt-2 text-xl text-gray-600">Find your dream job in tech</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Browse All Jobs
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">Ready to Start Your Tech Journey?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">Join thousands of students who have advanced their careers through GAFANATION's courses and job placement services.</p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
