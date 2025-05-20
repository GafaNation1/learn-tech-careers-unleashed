
import { Building, MapPin, Clock, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // Full-time, Part-time, Contract, etc.
  salary: string;
  postedDate: string;
  logo: string;
  tags: string[];
}

const JobCard = ({
  title,
  company,
  location,
  type,
  salary,
  postedDate,
  logo,
  tags,
}: JobCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="h-10 w-10 overflow-hidden rounded-md mr-3">
              <img src={logo} alt={company} className="h-full w-full object-contain" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{title}</h3>
              <div className="flex items-center text-muted-foreground">
                <Building className="h-4 w-4 mr-1" />
                <span className="text-sm">{company}</span>
              </div>
            </div>
          </div>
          <Badge variant={type === "Full-time" ? "default" : "outline"}>
            {type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-muted/50">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>{salary}</span>
          </div>
          <div className="flex items-center text-muted-foreground col-span-2">
            <Clock className="h-4 w-4 mr-1" />
            <span>Posted {postedDate}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Save</Button>
        <Button>Apply Now</Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
