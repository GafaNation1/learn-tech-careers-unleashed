
import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "default" | "white";
  size?: "small" | "medium" | "large";
}

const Logo = ({ variant = "default", size = "medium" }: LogoProps) => {
  const textColor = variant === "white" ? "text-white" : "text-gray-900";
  
  const sizeClasses = {
    small: {
      container: "h-7 w-7",
      text: "text-lg"
    },
    medium: {
      container: "h-10 w-10",
      text: "text-2xl"
    },
    large: {
      container: "h-14 w-14",
      text: "text-3xl"
    }
  };

  return (
    <Link to="/" className="flex items-center">
      <div 
        className={`${sizeClasses[size].container} rounded-md bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold mr-2`}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-2/3 h-2/3"
        >
          <path 
            d="M7 8H17M7 12H17M13 16H17M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className={`${sizeClasses[size].text} font-bold ${textColor} tracking-tight`}>
        GAFANATION
      </span>
    </Link>
  );
};

export default Logo;
