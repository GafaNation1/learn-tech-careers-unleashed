
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LearningPath from "@/components/LearningPath";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";

const Paths = () => {
  // Web Development path
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

  // Data Science path
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
  
  // Cloud Computing path
  const cloudPath = {
    title: "Cloud Engineering Career Path",
    description: "Become a certified cloud engineer with expertise in major cloud platforms.",
    steps: [
      {
        id: 1,
        title: "Cloud Fundamentals",
        description: "Understanding cloud computing concepts",
        courses: 2
      },
      {
        id: 2,
        title: "AWS Essentials",
        description: "Core AWS services and architecture",
        courses: 4
      },
      {
        id: 3,
        title: "Azure Fundamentals",
        description: "Microsoft Azure core services",
        courses: 3
      },
      {
        id: 4,
        title: "Cloud Security",
        description: "Securing cloud infrastructure and applications",
        courses: 3
      },
      {
        id: 5,
        title: "DevOps for Cloud",
        description: "CI/CD, Infrastructure as Code, monitoring",
        courses: 4
      }
    ]
  };
  
  // Machine Learning path
  const mlPath = {
    title: "AI & Machine Learning Career Path",
    description: "Build intelligent systems and implement cutting-edge AI algorithms.",
    steps: [
      {
        id: 1,
        title: "Math for Machine Learning",
        description: "Linear algebra, calculus, probability",
        courses: 3
      },
      {
        id: 2,
        title: "Python for AI",
        description: "Python programming for AI applications",
        courses: 2
      },
      {
        id: 3,
        title: "Machine Learning Foundations",
        description: "Supervised and unsupervised learning algorithms",
        courses: 4
      },
      {
        id: 4,
        title: "Deep Learning",
        description: "Neural networks, CNNs, RNNs",
        courses: 5
      },
      {
        id: 5,
        title: "Applied AI Projects",
        description: "Computer vision, NLP, reinforcement learning",
        courses: 3
      }
    ]
  };
  
  // Cybersecurity path
  const securityPath = {
    title: "Cybersecurity Career Path",
    description: "Protect systems and networks from digital attacks.",
    steps: [
      {
        id: 1,
        title: "Security Fundamentals",
        description: "Core concepts of information security",
        courses: 3
      },
      {
        id: 2,
        title: "Network Security",
        description: "Securing networks and communications",
        courses: 4
      },
      {
        id: 3,
        title: "Ethical Hacking",
        description: "Penetration testing and vulnerability assessment",
        courses: 5
      },
      {
        id: 4,
        title: "Security Operations",
        description: "SIEM, incident response, threat hunting",
        courses: 3
      },
      {
        id: 5,
        title: "Governance and Compliance",
        description: "Security frameworks, policies, standards",
        courses: 2
      }
    ]
  };

  // Featured companies that recognize certifications
  const featuredCompanies = [
    "Google", "Amazon", "Microsoft", "Meta", "IBM", 
    "Oracle", "Salesforce", "Adobe", "Cisco", "Intel"
  ];

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
                  <BreadcrumbPage>Learning Paths</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Structured Learning Paths</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Follow our carefully designed learning paths to acquire the skills needed 
              for your dream career in technology.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </section>
        
        {/* Paths Introduction */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Choose Your Path</h2>
              <p className="mt-2 text-xl text-gray-600 max-w-3xl mx-auto">
                Each learning path is designed by industry experts to take you from beginner 
                to job-ready professional. Earn certificates that are recognized by top employers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-2 bg-blue-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Web Development</h3>
                  <p className="text-gray-600 mb-4">Become a full-stack developer and build interactive websites and applications.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">17 courses</div>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link to="#webdev">View Path</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-2 bg-green-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Data Science</h3>
                  <p className="text-gray-600 mb-4">Master data analysis and build machine learning models to solve business problems.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">19 courses</div>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link to="#data">View Path</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-2 bg-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cloud Engineering</h3>
                  <p className="text-gray-600 mb-4">Learn to design, deploy and manage applications in the cloud.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">15 courses</div>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link to="#cloud">View Path</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-2 bg-amber-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
                  <p className="text-gray-600 mb-4">Build intelligent systems and implement cutting-edge AI algorithms.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">18 courses</div>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link to="#ai">View Path</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-2 bg-red-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
                  <p className="text-gray-600 mb-4">Learn to protect systems and networks from digital attacks.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">16 courses</div>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link to="#security">View Path</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-dashed border-gray-300">
                <div className="p-6 flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl font-bold mb-2 text-center">Coming Soon</h3>
                  <p className="text-gray-600 mb-4 text-center">More career paths are being developed. Stay tuned!</p>
                  <Button variant="outline">Get Notified</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Detailed Learning Paths */}
        <section id="webdev" className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Web Development Path</h2>
            <LearningPath {...webDevPath} />
            <div className="mt-8 text-center">
              <Button>Start This Path</Button>
            </div>
          </div>
        </section>
        
        <section id="data" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Data Science Path</h2>
            <LearningPath {...dataPath} />
            <div className="mt-8 text-center">
              <Button>Start This Path</Button>
            </div>
          </div>
        </section>
        
        <section id="cloud" className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Cloud Engineering Path</h2>
            <LearningPath {...cloudPath} />
            <div className="mt-8 text-center">
              <Button>Start This Path</Button>
            </div>
          </div>
        </section>
        
        <section id="ai" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">AI & Machine Learning Path</h2>
            <LearningPath {...mlPath} />
            <div className="mt-8 text-center">
              <Button>Start This Path</Button>
            </div>
          </div>
        </section>
        
        <section id="security" className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Cybersecurity Path</h2>
            <LearningPath {...securityPath} />
            <div className="mt-8 text-center">
              <Button>Start This Path</Button>
            </div>
          </div>
        </section>
        
        {/* Company Recognition Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Industry-Recognized Certifications</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Our certification programs are recognized by leading technology companies.
              Showcase your credentials to stand out in the job market.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {featuredCompanies.map((company, index) => (
                <div key={index} className="bg-white py-3 px-6 rounded-md shadow-sm min-w-32 text-lg font-semibold">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
            <p className="text-xl mb-8">
              Join thousands of students who have successfully transitioned to tech careers 
              through our learning paths. Get personalized guidance from experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
                Explore All Paths
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-8">
                Talk to an Advisor
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Paths;
