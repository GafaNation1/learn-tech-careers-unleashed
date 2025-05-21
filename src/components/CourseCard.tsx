
import { useState } from "react";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  instructor: string;
}

const CourseCard = ({
  id,
  title,
  description,
  image,
  category,
  level,
  duration,
  students,
  rating,
  instructor,
}: CourseCardProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleEnroll = () => {
    // In a real app, this would handle the enrollment process
    toast({
      title: "Course Enrollment",
      description: `You've successfully enrolled in "${title}"`,
    });
  };
  
  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Course Removed" : "Course Saved",
      description: isSaved 
        ? `"${title}" has been removed from your saved courses.` 
        : `"${title}" has been added to your saved courses.`,
    });
  };

  // Generate a badge color based on category
  const getBadgeColor = () => {
    switch(category.toLowerCase()) {
      case "web development":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "data science":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "cloud computing":
        return "bg-sky-100 text-sky-800 hover:bg-sky-200";
      case "ai & ml":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "cybersecurity":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      default:
        return "bg-accent hover:bg-accent/90";
    }
  };

  // Generate level badge variant
  const getLevelVariant = () => {
    switch(level.toLowerCase()) {
      case "beginner":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-200";
      case "intermediate":
        return "bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200";
      case "advanced":
        return "bg-rose-100 text-rose-800 hover:bg-rose-200 border-rose-200";
      default:
        return "outline";
    }
  };

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 flex items-end justify-between p-3 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
          <Badge className={`${getBadgeColor()} mt-auto`}>{category}</Badge>
          <Badge variant="outline" className={`${getLevelVariant()} mt-auto`}>{level}</Badge>
        </div>
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button 
            variant="secondary" 
            size="sm" 
            className={`transform transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Preview Course
          </Button>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg line-clamp-2 hover:text-primary cursor-pointer group">
            {title}
            <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">by {instructor}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{description}</p>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center text-amber-500">
            <Star className="h-4 w-4 mr-1 fill-amber-500" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-2 border-t">
        <Button 
          variant={isSaved ? "secondary" : "outline"} 
          className={`flex-1 ${isSaved ? 'bg-secondary/10 text-secondary' : ''}`}
          onClick={handleSave}
        >
          {isSaved ? "Saved" : "Save"}
        </Button>
        <Button 
          className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" 
          onClick={handleEnroll}
        >
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
