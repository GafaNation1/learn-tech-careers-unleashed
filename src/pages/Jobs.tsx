import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard, { JobCardProps } from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, Search, MapPin, Building } from "lucide-react";
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  
  // Featured companies data
  const featuredCompanies = [
    { name: "Google", jobs: 156, logo: "https://via.placeholder.com/100?text=G" },
    { name: "Amazon", jobs: 241, logo: "https://via.placeholder.com/100?text=A" },
    { name: "Facebook", jobs: 127, logo: "https://via.placeholder.com/100?text=F" },
    { name: "Apple", jobs: 98, logo: "https://via.placeholder.com/100?text=AP" },
    { name: "Netflix", jobs: 64, logo: "https://via.placeholder.com/100?text=N" },
  ];
  
  // Job locations data
  const popularLocations = [
    { name: "San Francisco, CA", count: 432 },
    { name: "New York, NY", count: 376 },
    { name: "Seattle, WA", count: 289 },
    { name: "Austin, TX", count: 245 },
    { name: "Boston, MA", count: 187 },
    { name: "Remote", count: 864 },
  ];

  // Comprehensive job data
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
    },
    {
      id: "4",
      title: "DevOps Engineer",
      company: "InfraStack",
      location: "Remote",
      type: "Full-time",
      salary: "$110K - $135K",
      postedDate: "5 days ago",
      logo: "https://via.placeholder.com/100?text=IS",
      tags: ["Kubernetes", "Docker", "CI/CD", "4+ years"]
    },
    {
      id: "5",
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "Boston, MA (Hybrid)",
      type: "Full-time",
      salary: "$95K - $120K",
      postedDate: "2 weeks ago",
      logo: "https://via.placeholder.com/100?text=DH",
      tags: ["Figma", "Adobe XD", "User Research", "3+ years"]
    },
    {
      id: "6",
      title: "Mobile App Developer",
      company: "AppWorks",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$115K - $140K",
      postedDate: "1 week ago",
      logo: "https://via.placeholder.com/100?text=AW",
      tags: ["React Native", "iOS", "Android", "4+ years"]
    }
  ];

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = locationFilter ? job.location.toLowerCase().includes(locationFilter.toLowerCase()) : true;
    const matchesCompany = companyFilter ? job.company.toLowerCase() === companyFilter.toLowerCase() : true;
    const matchesJobType = jobTypeFilter ? job.type.toLowerCase() === jobTypeFilter.toLowerCase() : true;
    
    return matchesSearch && matchesLocation && matchesCompany && matchesJobType;
  });

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
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Jobs</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Tech Job</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Browse thousands of opportunities from top tech companies and startups.
              Leverage your GAFANATION skills to land your perfect role.
            </p>
            
            <div className="bg-white rounded-lg p-4 shadow-md max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Job title, skills, or keyword" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Location" 
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button type="submit" className="px-8">Search</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Job Listings Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="font-bold text-lg mb-4">Filter By</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="jobType">Job Type</Label>
                      <select 
                        id="jobType" 
                        className="w-full mt-1 p-2 border rounded-md" 
                        value={jobTypeFilter}
                        onChange={(e) => setJobTypeFilter(e.target.value)}
                      >
                        <option value="">All Types</option>
                        <option value="full-time">Full-time</option>
                        <option value="contract">Contract</option>
                        <option value="part-time">Part-time</option>
                        <option value="internship">Internship</option>
                      </select>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Popular Locations</h4>
                      <ul className="space-y-2">
                        {popularLocations.map((location, index) => (
                          <li key={index}>
                            <button 
                              onClick={() => setLocationFilter(location.name)}
                              className="text-sm flex items-center justify-between w-full hover:text-primary"
                            >
                              <span>{location.name}</span>
                              <span className="bg-muted rounded-full px-2 py-1 text-xs">
                                {location.count}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Featured Companies</h4>
                      <ul className="space-y-2">
                        {featuredCompanies.map((company, index) => (
                          <li key={index}>
                            <button 
                              onClick={() => setCompanyFilter(company.name)}
                              className="text-sm flex items-center justify-between w-full hover:text-primary"
                            >
                              <div className="flex items-center">
                                <img 
                                  src={company.logo} 
                                  alt={company.name} 
                                  className="w-6 h-6 rounded-full mr-2" 
                                />
                                <span>{company.name}</span>
                              </div>
                              <span className="bg-muted rounded-full px-2 py-1 text-xs">
                                {company.jobs}
                              </span>
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
                        setLocationFilter("");
                        setCompanyFilter("");
                        setJobTypeFilter("");
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our career advisors can help you find the right job and prepare for interviews.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
              
              {/* Job Listings */}
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Job Listings</h2>
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredJobs.length} of {jobs.length} jobs
                  </div>
                </div>
                
                {filteredJobs.length > 0 ? (
                  <div className="space-y-6">
                    {filteredJobs.map((job) => (
                      <JobCard key={job.id} {...job} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Briefcase className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No jobs found</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchTerm("");
                        setLocationFilter("");
                        setCompanyFilter("");
                        setJobTypeFilter("");
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
                
                {/* Pagination */}
                {filteredJobs.length > 0 && (
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
        
        {/* Top Companies Table */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">Top Hiring Companies</h2>
            
            <Table>
              <TableCaption>A list of top companies hiring through GAFANATION.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Company</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Locations</TableHead>
                  <TableHead>Open Positions</TableHead>
                  <TableHead className="text-right">Avg. Salary</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      Google
                    </div>
                  </TableCell>
                  <TableCell>Technology</TableCell>
                  <TableCell>Mountain View, CA</TableCell>
                  <TableCell>156</TableCell>
                  <TableCell className="text-right">$180K</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      Amazon
                    </div>
                  </TableCell>
                  <TableCell>E-commerce, Cloud</TableCell>
                  <TableCell>Seattle, WA</TableCell>
                  <TableCell>241</TableCell>
                  <TableCell className="text-right">$160K</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      Microsoft
                    </div>
                  </TableCell>
                  <TableCell>Technology</TableCell>
                  <TableCell>Redmond, WA</TableCell>
                  <TableCell>168</TableCell>
                  <TableCell className="text-right">$165K</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      Meta
                    </div>
                  </TableCell>
                  <TableCell>Social Media</TableCell>
                  <TableCell>Menlo Park, CA</TableCell>
                  <TableCell>127</TableCell>
                  <TableCell className="text-right">$175K</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      Apple
                    </div>
                  </TableCell>
                  <TableCell>Technology</TableCell>
                  <TableCell>Cupertino, CA</TableCell>
                  <TableCell>98</TableCell>
                  <TableCell className="text-right">$190K</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Tech Career?</h2>
            <p className="text-lg mb-8">
              Join thousands of professionals who found their dream jobs through GAFANATION. 
              Complete our courses and get matched with top employers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Browse All Jobs
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Upload Your Resume
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
