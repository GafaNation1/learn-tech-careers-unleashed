
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface PathStep {
  id: number;
  title: string;
  description: string;
  courses: number;
  completed?: boolean;
}

interface LearningPathProps {
  title: string;
  description: string;
  steps: PathStep[];
  image?: string;
}

const LearningPath = ({ title, description, steps, image }: LearningPathProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-5">
        <div className={`md:col-span-2 ${image ? '' : 'bg-gradient-to-br from-primary to-secondary'} text-white p-6 flex flex-col justify-center`}>
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-white/80">{description}</p>
              <div className="mt-4">
                <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                  Start Path
                </Button>
              </div>
            </>
          )}
        </div>
        <div className="md:col-span-3 p-6">
          {image && (
            <CardHeader className="px-0 pt-0">
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          )}
          <CardContent className="px-0 py-4">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step.completed ? 'bg-green-100' : index === 0 ? 'bg-primary' : 'bg-gray-200'} text-sm`}>
                      {step.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <span className={index === 0 ? 'text-white' : 'text-gray-600'}>{step.id}</span>
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                    )}
                  </div>
                  <div className={`pb-4 ${index === steps.length - 1 ? '' : 'border-b border-gray-100'}`}>
                    <h4 className="font-medium">{step.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                      <span>{step.courses} courses</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default LearningPath;
