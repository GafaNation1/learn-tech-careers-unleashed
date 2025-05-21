
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";

interface CourseGridProps {
  courses: CourseCardProps[];
  filteredCourses: CourseCardProps[];
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  searchTerm: string;
  levelFilter: string;
  durationFilter: string;
  resetFilters: () => void;
}

const CourseGrid = ({
  courses,
  filteredCourses,
  categoryFilter,
  setCategoryFilter,
  searchTerm,
  levelFilter,
  durationFilter,
  resetFilters
}: CourseGridProps) => {
  return (
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
                onClick={resetFilters}
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
                  onClick={resetFilters}
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
  );
};

export default CourseGrid;
