
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Calendar, Award, Clock, Users, BookOpen, Bookmark, CreditCard } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Mock course data
const courses = [
  {
    id: "web-development",
    title: "Complete Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React and Node.js to become a full-stack developer",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    level: "Beginner",
    duration: "12 weeks",
    students: 15430,
    rating: 4.8,
    instructor: "David Lee",
    price: 499,
    discountPrice: 399,
    outcomes: [
      "Build responsive websites using HTML5, CSS3, and JavaScript",
      "Develop full-stack web applications with React and Node.js",
      "Work with databases like MongoDB and MySQL",
      "Deploy applications to production environments",
      "Implement authentication and authorization in web apps"
    ],
    curriculum: [
      {
        title: "HTML & CSS Fundamentals",
        lessons: 12,
        duration: "2 weeks"
      },
      {
        title: "JavaScript Programming",
        lessons: 15,
        duration: "3 weeks"
      },
      {
        title: "Frontend Development with React",
        lessons: 18,
        duration: "3 weeks"
      },
      {
        title: "Backend Development with Node.js",
        lessons: 14,
        duration: "3 weeks"
      },
      {
        title: "Database Integration",
        lessons: 8,
        duration: "1 week"
      }
    ],
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: 399,
        features: [
          "All course videos",
          "Course materials",
          "Certificate of completion",
          "3 months access"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: 599,
        features: [
          "All Basic features",
          "One-on-one mentoring sessions",
          "Priority support",
          "Lifetime access",
          "Job placement assistance"
        ]
      },
      {
        id: "team",
        name: "Team",
        price: 299,
        perUser: true,
        features: [
          "All Premium features",
          "Group enrollment (min. 5 people)",
          "Team progress tracking",
          "Custom corporate training"
        ]
      }
    ]
  },
  {
    id: "data-science",
    title: "Data Science Fundamentals with Python",
    description: "Master data analysis, visualization, and machine learning with Python",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    level: "Intermediate",
    duration: "10 weeks",
    students: 8920,
    rating: 4.7,
    instructor: "Sarah Johnson",
    price: 599,
    discountPrice: 499,
    outcomes: [
      "Analyze and visualize data using Python libraries",
      "Build machine learning models using scikit-learn",
      "Clean and preprocess raw data for analysis",
      "Develop predictive models for business applications",
      "Present data insights through effective visualization"
    ],
    curriculum: [
      {
        title: "Python Programming Basics",
        lessons: 10,
        duration: "2 weeks"
      },
      {
        title: "Data Analysis with Pandas",
        lessons: 12,
        duration: "2 weeks"
      },
      {
        title: "Data Visualization",
        lessons: 8,
        duration: "2 weeks"
      },
      {
        title: "Machine Learning Fundamentals",
        lessons: 15,
        duration: "3 weeks"
      },
      {
        title: "Capstone Project",
        lessons: 5,
        duration: "1 week"
      }
    ],
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: 499,
        features: [
          "All course videos",
          "Course materials",
          "Certificate of completion",
          "3 months access"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: 699,
        features: [
          "All Basic features",
          "One-on-one mentoring sessions",
          "Priority support",
          "Lifetime access",
          "Job placement assistance"
        ]
      },
      {
        id: "team",
        name: "Team",
        price: 399,
        perUser: true,
        features: [
          "All Premium features",
          "Group enrollment (min. 5 people)",
          "Team progress tracking",
          "Custom corporate training"
        ]
      }
    ]
  }
];

const EnrollmentPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  
  // Find the course by ID
  const course = courses.find(c => c.id === courseId) || courses[0];
  
  const handleSaveCourse = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Removed from saved courses" : "Course saved",
      description: isSaved ? "The course has been removed from your saved list" : "The course has been saved for future reference",
    });
  };
  
  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };
  
  const handleEnroll = () => {
    if (!selectedPlan) {
      toast({
        title: "Please select a plan",
        description: "You must select a plan before enrolling",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Enrollment successful!",
      description: "You've been enrolled in " + course.title,
    });
    
    // Navigate to payment page or show payment modal
    // In a real application, this would redirect to a payment gateway
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="col-span-2">
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()} students
                  </div>
                  <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                    <Award className="w-4 h-4 mr-1" />
                    {course.level}
                  </div>
                  <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                </div>
                
                <div className="flex items-center mb-8">
                  <div className="mr-2">
                    <span className="font-bold text-2xl text-primary">${course.discountPrice}</span>
                    {course.price > course.discountPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">${course.price}</span>
                    )}
                  </div>
                  {course.price > course.discountPrice && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {Math.round((1 - course.discountPrice / course.price) * 100)}% OFF
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    className="px-8"
                    onClick={() => {
                      if (!selectedPlan) {
                        toast({
                          title: "Please select a plan",
                          description: "Scroll down to select an enrollment plan",
                          variant: "destructive"
                        });
                      } else {
                        handleEnroll();
                      }
                    }}
                  >
                    Enroll Now
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleSaveCourse}
                  >
                    {isSaved ? (
                      <>
                        <Bookmark className="w-4 h-4 mr-2 fill-current" />
                        Saved
                      </>
                    ) : (
                      <>
                        <Bookmark className="w-4 h-4 mr-2" />
                        Save for Later
                      </>
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="col-span-1">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold mb-1">Instructor</h3>
                    <p className="text-gray-600 mb-3">{course.instructor}</p>
                    
                    <h3 className="font-semibold mb-1">Rating</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-gray-600">{course.rating}/5</span>
                    </div>
                    
                    <h3 className="font-semibold mb-1">Includes</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Lifetime access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Certificate of completion</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Downloadable resources</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Community access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs defaultValue="overview">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="plans">Enrollment Plans</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="curriculum">
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                  <CardDescription>
                    Total: {course.curriculum.reduce((acc, module) => acc + module.lessons, 0)} lessons ({course.duration})
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {course.curriculum.map((module, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold">Module {index + 1}: {module.title}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {module.lessons} lessons
                            <span className="mx-2">•</span>
                            <Clock className="w-4 h-4 mr-1" />
                            {module.duration}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Preview Module</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="plans">
              <CardTitle className="mb-8">Choose an Enrollment Plan</CardTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {course.plans.map((plan) => (
                  <Card 
                    key={plan.id} 
                    className={`border-2 transition-all ${selectedPlan === plan.id ? 'border-primary shadow-lg' : 'border-gray-200'}`}
                  >
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>
                        <div className="flex items-baseline mt-2">
                          <span className="text-2xl font-bold">${plan.price}</span>
                          {plan.perUser && <span className="ml-1 text-sm text-gray-500">/per user</span>}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant={selectedPlan === plan.id ? "default" : "outline"}
                        className="w-full"
                        onClick={() => handleSelectPlan(plan.id)}
                      >
                        {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button
                  size="lg"
                  onClick={handleEnroll}
                  disabled={!selectedPlan}
                  className="px-8"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Proceed to Payment
                </Button>
                <p className="mt-4 text-sm text-gray-500">
                  By enrolling, you agree to our <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnrollmentPage;
