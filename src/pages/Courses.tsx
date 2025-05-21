
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";

// Import refactored components
import CourseHero from "@/components/courses/CourseHero";
import CourseStats from "@/components/courses/CourseStats";
import CourseFilters from "@/components/courses/CourseFilters";
import CourseGrid from "@/components/courses/CourseGrid";
import CorporateTraining from "@/components/courses/CorporateTraining";
import CourseFAQ from "@/components/courses/CourseFAQ";
import CourseCTA from "@/components/courses/CourseCTA";
import { courses, filterDuration } from "@/components/courses/CourseData";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  
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

  const resetFilters = () => {
    setSearchTerm("");
    setLevelFilter("");
    setDurationFilter("");
    setCategoryFilter("all");
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
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
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
        <CourseHero 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        
        {/* Statistics Section */}
        <CourseStats />
        
        {/* Course Listings Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <CourseFilters 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                levelFilter={levelFilter}
                setLevelFilter={setLevelFilter}
                durationFilter={durationFilter}
                setDurationFilter={setDurationFilter}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
              />
              
              {/* Course Listings */}
              <CourseGrid 
                courses={courses}
                filteredCourses={filteredCourses}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                searchTerm={searchTerm}
                levelFilter={levelFilter}
                durationFilter={durationFilter}
                resetFilters={resetFilters}
              />
            </div>
          </div>
        </section>
        
        {/* Corporate Training Section */}
        <CorporateTraining />
        
        {/* FAQ Section */}
        <CourseFAQ />
        
        {/* CTA Section */}
        <CourseCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
