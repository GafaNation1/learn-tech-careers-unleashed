
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo size="medium" />
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
              Home
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary inline-flex items-center">
                <span>Courses</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link to="/courses/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Web Development
                  </Link>
                  <Link to="/courses/data-science" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Data Science
                  </Link>
                  <Link to="/courses/cloud-computing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cloud Computing
                  </Link>
                  <Link to="/courses/ai-ml" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    AI & Machine Learning
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/paths" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
              Learning Paths
            </Link>
            <Link to="/jobs" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
              Jobs
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
              About Us
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center">
            <Link to="/auth/signin">
              <Button variant="outline" className="mr-2">Sign In</Button>
            </Link>
            <Link to="/auth/signup">
              <Button>Get Started</Button>
            </Link>
            <Link to="/profile" className="ml-2 p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5 text-gray-600" />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/courses"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link 
              to="/paths"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Learning Paths
            </Link>
            <Link 
              to="/jobs"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Jobs
            </Link>
            <Link 
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/profile"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              My Profile
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <Link to="/auth/signin" onClick={toggleMenu}>
                  <Button variant="outline" className="mr-2 w-full mb-2">Sign In</Button>
                </Link>
                <Link to="/auth/signup" onClick={toggleMenu}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
