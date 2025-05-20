
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

  return (
    <Card className="card-hover overflow-hidden">
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            variant="secondary" 
            size="sm" 
            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Preview
          </Button>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge className="bg-accent hover:bg-accent/90">{category}</Badge>
          <Badge variant="outline">{level}</Badge>
        </div>
        <h3 className="font-bold text-lg mt-2 line-clamp-2 hover:text-primary cursor-pointer">{title}</h3>
        <p className="text-sm text-muted-foreground">by {instructor}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-3 text-sm">
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
      <CardFooter className="flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1" 
          onClick={handleSave}
        >
          {isSaved ? "Saved" : "Save"}
        </Button>
        <Button className="flex-1" onClick={handleEnroll}>Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
