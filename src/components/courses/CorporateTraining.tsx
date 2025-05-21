
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Star } from "lucide-react";

const CorporateTraining = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Corporate Training Solutions</h2>
            <p className="text-lg mb-6 opacity-90">
              Upskill your team with customized training programs designed for your company's specific needs.
              From technical workshops to comprehensive learning paths, we help organizations build in-house expertise.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <div className="mr-2 bg-white/20 rounded-full p-1">
                  <BookOpen className="h-4 w-4" />
                </div>
                <span>Customized learning paths for your team</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 bg-white/20 rounded-full p-1">
                  <Users className="h-4 w-4" />
                </div>
                <span>Group and individual training options</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 bg-white/20 rounded-full p-1">
                  <Star className="h-4 w-4" />
                </div>
                <span>Expert-led workshops and mentorship</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8">
                Request Information
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8">
                Download Brochure
              </Button>
            </div>
          </div>
          <div>
            <div className="bg-white/10 border border-white/20 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-primary mr-4">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Companies We've Trained</h3>
                  <p className="text-sm opacity-80">Join these organizations in upskilling their teams</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold">Microsoft</div>
                    <div className="text-xs opacity-80">200+ employees</div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold">Amazon</div>
                    <div className="text-xs opacity-80">150+ employees</div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold">Google</div>
                    <div className="text-xs opacity-80">180+ employees</div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold">IBM</div>
                    <div className="text-xs opacity-80">120+ employees</div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold">Oracle</div>
                    <div className="text-xs opacity-80">90+ employees</div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold">Adobe</div>
                    <div className="text-xs opacity-80">80+ employees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTraining;
