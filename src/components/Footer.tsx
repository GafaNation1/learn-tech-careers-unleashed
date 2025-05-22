import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo variant="white" />
            <p className="mt-2 text-gray-400 text-sm">
              Empowering tech careers through education and job placement.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">Contact us:</p>
              <a href="mailto:mikealoo2005@gmail.com" className="text-gray-400 hover:text-white text-sm">mikealoo2005@gmail.com</a>
              <p className="text-gray-400 text-sm">+254705047204</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Courses</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/courses/web-development" className="text-gray-400 hover:text-white text-sm">Web Development</Link>
              </li>
              <li>
                <Link to="/courses/data-science" className="text-gray-400 hover:text-white text-sm">Data Science</Link>
              </li>
              <li>
                <Link to="/courses/cloud-computing" className="text-gray-400 hover:text-white text-sm">Cloud Computing</Link>
              </li>
              <li>
                <Link to="/courses/ai-ml" className="text-gray-400 hover:text-white text-sm">AI & Machine Learning</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white text-sm">All Courses</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white text-sm">Careers</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white text-sm">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center text-accent hover:text-accent/80">
                <Mail className="h-5 w-5 mr-2" />
                <span>Contact Support</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GAFANATION. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">Designed with ❤️ for tech enthusiasts</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
