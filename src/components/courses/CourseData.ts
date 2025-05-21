
import { CourseCardProps } from "@/components/CourseCard";

// Comprehensive course data
export const courses: CourseCardProps[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React and Node.js to become a full-stack web developer. Build real-world projects for your portfolio and gain job-ready skills.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Web Development",
    level: "Beginner",
    duration: "12 weeks",
    students: 15430,
    rating: 4.8,
    instructor: "David Lee"
  },
  {
    id: "2",
    title: "Data Science Fundamentals with Python",
    description: "Master data analysis, visualization, and machine learning with Python. This course covers pandas, NumPy, Matplotlib and scikit-learn in depth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Data Science",
    level: "Intermediate",
    duration: "10 weeks",
    students: 8920,
    rating: 4.7,
    instructor: "Sarah Johnson"
  },
  {
    id: "3",
    title: "AWS Cloud Practitioner Certification",
    description: "Prepare for the AWS Certified Cloud Practitioner exam with hands-on practice. Learn cloud concepts, AWS services, security, architecture, pricing, and support.",
    image: "https://images.unsplash.com/photo-1599484205751-0fc4e0800d06?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Cloud Computing",
    level: "Beginner",
    duration: "6 weeks",
    students: 12150,
    rating: 4.9,
    instructor: "Michael Brown"
  },
  {
    id: "4",
    title: "Machine Learning with TensorFlow",
    description: "Learn to build and deploy machine learning models using TensorFlow and Keras. From basics to advanced neural networks and deep learning architectures.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    category: "AI & ML",
    level: "Advanced",
    duration: "14 weeks",
    students: 6780,
    rating: 4.6,
    instructor: "Emily Chen"
  },
  {
    id: "5",
    title: "Advanced React.js for Enterprise Applications",
    description: "Master advanced React concepts including hooks, context, Redux, and performance optimization. Build scalable front-end architectures for large applications.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Web Development",
    level: "Advanced",
    duration: "8 weeks",
    students: 7645,
    rating: 4.7,
    instructor: "David Lee"
  },
  {
    id: "6",
    title: "Deep Learning Specialization",
    description: "Dive into neural networks, computer vision, and natural language processing. Implement cutting-edge AI algorithms and solve real-world problems.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    category: "AI & ML",
    level: "Advanced",
    duration: "16 weeks",
    students: 5430,
    rating: 4.9,
    instructor: "Emily Chen"
  },
  {
    id: "7",
    title: "Azure DevOps Engineering",
    description: "Learn to implement DevOps practices on the Microsoft Azure platform. Master CI/CD pipelines, infrastructure as code, and cloud native development.",
    image: "https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Cloud Computing",
    level: "Intermediate",
    duration: "9 weeks",
    students: 6820,
    rating: 4.5,
    instructor: "Michael Brown"
  },
  {
    id: "8",
    title: "Big Data Analysis with Python",
    description: "Process and analyze large datasets using Python, Pandas, and PySpark. Learn distributed computing techniques and big data workflow optimization.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Data Science",
    level: "Intermediate",
    duration: "11 weeks",
    students: 7240,
    rating: 4.6,
    instructor: "Sarah Johnson"
  },
  {
    id: "9",
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps for iOS and Android using React Native. Create beautiful user interfaces and implement native functionalities.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Web Development",
    level: "Intermediate",
    duration: "10 weeks",
    students: 5870,
    rating: 4.7,
    instructor: "David Lee"
  },
  {
    id: "10",
    title: "Cybersecurity Fundamentals",
    description: "Learn essential cybersecurity principles, threat detection, encryption, network security, and ethical hacking techniques to protect systems and data.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    category: "Cybersecurity",
    level: "Beginner",
    duration: "8 weeks",
    students: 9340,
    rating: 4.8,
    instructor: "Michael Brown"
  }
];

// Helper function to filter duration
export function filterDuration(duration: string, filter: string): boolean {
  const weeks = parseInt(duration.split(" ")[0]);
  
  switch(filter) {
    case "short":
      return weeks <= 6;
    case "medium":
      return weeks > 6 && weeks <= 10;
    case "long":
      return weeks > 10;
    default:
      return true;
  }
}
