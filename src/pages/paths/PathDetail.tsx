
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Clock, BookOpen, CheckCircle } from "lucide-react";

const PathDetail = () => {
  const { pathId } = useParams();
  
  // This would be fetched from an API in a real application
  const pathData = {
    id: pathId,
    title: "Web Development Career Path",
    description: "Master full-stack web development from HTML basics to advanced React and Node.js applications.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=2070&q=80",
    duration: "6 months",
    courses: 15,
    students: 15420,
    level: "Beginner to Advanced",
    modules: [
      {
        id: 1,
        title: "HTML & CSS Foundations",
        description: "Learn the building blocks of the web with HTML5 and CSS3",
        lessons: 12,
        duration: "3 weeks",
        completed: false
      },
      {
        id: 2,
        title: "JavaScript Essentials",
        description: "Master core JavaScript concepts and DOM manipulation",
        lessons: 15,
        duration: "4 weeks",
        completed: false
      },
      {
        id: 3,
        title: "React Framework",
        description: "Build dynamic user interfaces with React.js",
        lessons: 18,
        duration: "5 weeks",
        completed: false
      },
      {
        id: 4,
        title: "Node.js & Express",
        description: "Create server-side applications with Node.js and Express",
        lessons: 14,
        duration: "4 weeks",
        completed: false
      },
      {
        id: 5,
        title: "Database Integration",
        description: "Work with SQL and NoSQL databases in your applications",
        lessons: 10,
        duration: "3 weeks",
        completed: false
      },
      {
        id: 6,
        title: "Capstone Project",
        description: "Apply all your skills to build a full-stack web application",
        lessons: 8,
        duration: "5 weeks",
        completed: false
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/paths">Learning Paths</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{pathData.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-primary">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center" 
            style={{ backgroundImage: `url(${pathData.image})` }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {pathData.title}
              </h1>
              <p className="text-xl text-white/90 mb-6">
                {pathData.description}
              </p>
              <div className="flex flex-wrap gap-6 text-white/80 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{pathData.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  <span>{pathData.courses} courses</span>
                </div>
                <div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {pathData.level}
                  </span>
                </div>
              </div>
              <div>
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Enroll in Path
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Path Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Path Curriculum</h2>
              <div className="space-y-4">
                {pathData.modules.map((module) => (
                  <Card key={module.id} className="overflow-hidden">
                    <div className="flex items-center p-6">
                      <div className="mr-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          module.completed ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          {module.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <span className="text-gray-500">{module.id}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{module.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{module.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span>{module.lessons} lessons</span>
                          <span>•</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Preview
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Path Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2 text-sm">
                        <span>Your Progress</span>
                        <span>0%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Start Date</span>
                        <span>Not started</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>Estimated Completion</span>
                        <span>--</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Learning</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Build responsive websites with HTML, CSS and JavaScript</span>
                    </li>
                    <li className="flex">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Create dynamic user interfaces with React</span>
                    </li>
                    <li className="flex">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Develop server-side applications with Node.js</span>
                    </li>
                    <li className="flex">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Work with databases like MongoDB and MySQL</span>
                    </li>
                    <li className="flex">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Deploy full-stack applications to production</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Have questions about this learning path? Our advisors are here to help.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Link to="/advisor">Talk to an Advisor</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PathDetail;
