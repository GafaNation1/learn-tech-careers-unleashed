
import { Button } from "@/components/ui/button";

const CourseCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
        <p className="text-xl mb-8">
          Join over 150,000 students who have advanced their careers with GAFANATION courses.
          Get unlimited access to all courses with a subscription plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
            View Pricing Plans
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-8">
            Try For Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseCTA;
