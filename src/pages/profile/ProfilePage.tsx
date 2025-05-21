
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, BookOpen, Bookmark, Book, Users } from "lucide-react";

const profileFormSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  fullName: z.string(),
  email: z.string().email(),
  userType: z.enum(["student", "client", "worker"]),
  bio: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileFormSchema>;

// Mock user data
const mockUserData = {
  username: "techlearner",
  fullName: "Alex Johnson",
  email: "alex@example.com",
  userType: "student",
  bio: "Web developer passionate about learning new technologies and building innovative solutions.",
  progress: {
    completedCourses: 2,
    inProgressCourses: 1,
    completionRate: 67,
  },
  enrolledCourses: [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      progress: 75,
      lastAccessed: "2023-05-15",
    },
    {
      id: "2",
      title: "Data Science Fundamentals with Python",
      progress: 45,
      lastAccessed: "2023-05-10",
    },
    {
      id: "3",
      title: "AWS Cloud Practitioner Certification",
      progress: 100,
      lastAccessed: "2023-04-30",
    }
  ],
  savedPaths: [
    {
      id: "1",
      title: "Full-Stack Web Developer",
      courses: 5,
      estimated: "6 months",
    },
    {
      id: "2",
      title: "Machine Learning Engineer",
      courses: 7,
      estimated: "8 months",
    }
  ],
  savedCourses: [
    {
      id: "4",
      title: "Machine Learning with TensorFlow",
      level: "Advanced",
      duration: "14 weeks",
    }
  ]
};

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: mockUserData.username,
      fullName: mockUserData.fullName,
      email: mockUserData.email,
      userType: mockUserData.userType as "student" | "client" | "worker",
      bio: mockUserData.bio,
    }
  });
  
  const onSubmit = (data: ProfileFormData) => {
    // Simulate update process
    setTimeout(() => {
      toast({
        title: "Profile updated",
        description: "Your profile information has been successfully updated.",
      });
      setIsEditing(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-gray-600">Manage your account and track your learning progress</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="https://via.placeholder.com/150" alt={mockUserData.fullName} />
                      <AvatarFallback>{mockUserData.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="text-xl font-bold">{mockUserData.fullName}</h3>
                      <p className="text-gray-600">@{mockUserData.username}</p>
                      <div className="mt-1 text-sm bg-primary/10 text-primary px-2 py-1 rounded-full inline-block">
                        {mockUserData.userType.charAt(0).toUpperCase() + mockUserData.userType.slice(1)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Completed Courses</span>
                      <span className="font-medium">{mockUserData.progress.completedCourses}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">In Progress</span>
                      <span className="font-medium">{mockUserData.progress.inProgressCourses}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Completion Rate</span>
                      <span className="font-medium">{mockUserData.progress.completionRate}%</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/profile/certificates">
                        View Certificates
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main content */}
            <div className="col-span-1 lg:col-span-3">
              <Tabs defaultValue="account">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="courses">My Courses</TabsTrigger>
                  <TabsTrigger value="paths">Learning Paths</TabsTrigger>
                  <TabsTrigger value="saved">Saved Items</TabsTrigger>
                </TabsList>
                
                {/* Account Tab */}
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Account Information</CardTitle>
                          <CardDescription>Manage your profile details</CardDescription>
                        </div>
                        <Button onClick={() => setIsEditing(!isEditing)}>
                          {isEditing ? "Cancel" : "Edit Profile"}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {isEditing ? (
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                              control={form.control}
                              name="username"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Username</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="fullName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="userType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Account Type</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select your role" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="student">Student</SelectItem>
                                      <SelectItem value="client">Client</SelectItem>
                                      <SelectItem value="worker">Freelancer/Worker</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="bio"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Bio</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button type="submit">Save Changes</Button>
                          </form>
                        </Form>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Username</h3>
                            <p>{mockUserData.username}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                            <p>{mockUserData.fullName}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Email</h3>
                            <p>{mockUserData.email}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Account Type</h3>
                            <p>{mockUserData.userType.charAt(0).toUpperCase() + mockUserData.userType.slice(1)}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Bio</h3>
                            <p>{mockUserData.bio}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="border-t pt-6 flex flex-col space-y-4">
                      <div className="w-full">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Manage Account</h3>
                        <div className="flex space-x-4">
                          <Button variant="outline" className="flex-1">Change Password</Button>
                          <Button variant="outline" className="flex-1">Notification Settings</Button>
                        </div>
                      </div>
                      <Button variant="destructive" className="w-full mt-4">Delete Account</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                {/* Courses Tab */}
                <TabsContent value="courses">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Courses</CardTitle>
                      <CardDescription>Track your progress on enrolled courses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {mockUserData.enrolledCourses.length > 0 ? (
                        <div className="space-y-6">
                          {mockUserData.enrolledCourses.map((course) => (
                            <div key={course.id} className="border rounded-lg p-4 bg-white">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">{course.title}</h3>
                                <div className="text-sm text-gray-500 flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  Last accessed: {course.lastAccessed}
                                </div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                <div 
                                  className="bg-primary h-2.5 rounded-full" 
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">{course.progress}% complete</span>
                                <Button size="sm" asChild>
                                  <Link to={`/courses/${course.id}`}>
                                    Continue Learning
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                          <h3 className="text-xl font-medium">No courses yet</h3>
                          <p className="text-gray-500 mt-1">You haven't enrolled in any courses</p>
                          <Button className="mt-4" asChild>
                            <Link to="/courses">Explore Courses</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Learning Paths Tab */}
                <TabsContent value="paths">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Learning Paths</CardTitle>
                      <CardDescription>Track your career progression</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {mockUserData.savedPaths.length > 0 ? (
                        <div className="space-y-6">
                          {mockUserData.savedPaths.map((path) => (
                            <div key={path.id} className="border rounded-lg p-4 bg-white">
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="font-semibold">{path.title}</h3>
                                <span className="bg-secondary/10 text-secondary text-sm px-2 py-1 rounded">
                                  {path.estimated}
                                </span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600 mb-4">
                                <Book className="w-4 h-4 mr-1" />
                                {path.courses} courses
                              </div>
                              <div className="flex justify-end">
                                <Button size="sm" variant="outline" className="mr-2">View Details</Button>
                                <Button size="sm">Start Path</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <Book className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                          <h3 className="text-xl font-medium">No learning paths</h3>
                          <p className="text-gray-500 mt-1">You haven't saved any learning paths yet</p>
                          <Button className="mt-4" asChild>
                            <Link to="/paths">Explore Learning Paths</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Saved Items Tab */}
                <TabsContent value="saved">
                  <Card>
                    <CardHeader>
                      <CardTitle>Saved Items</CardTitle>
                      <CardDescription>Courses and resources you've saved for later</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {mockUserData.savedCourses.length > 0 ? (
                        <div className="space-y-6">
                          {mockUserData.savedCourses.map((course) => (
                            <div key={course.id} className="border rounded-lg p-4 bg-white">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">{course.title}</h3>
                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                  {course.level}
                                </span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600 mb-4">
                                <Calendar className="w-4 h-4 mr-1" />
                                {course.duration}
                              </div>
                              <div className="flex justify-end">
                                <Button size="sm" variant="outline" className="mr-2">View Details</Button>
                                <Button size="sm">Enroll Now</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <Bookmark className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                          <h3 className="text-xl font-medium">No saved items</h3>
                          <p className="text-gray-500 mt-1">You haven't saved any courses or resources</p>
                          <Button className="mt-4" asChild>
                            <Link to="/courses">Browse Courses</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
