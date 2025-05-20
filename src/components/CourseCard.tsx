
import { Clock, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
  return (
    <Card className="card-hover overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge className="bg-accent hover:bg-accent/90">{category}</Badge>
          <Badge variant="outline">{level}</Badge>
        </div>
        <h3 className="font-bold text-lg mt-2 line-clamp-2">{title}</h3>
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
      <CardFooter>
        <Button className="w-full">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
