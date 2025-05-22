
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Land Your First Tech Job in 2025",
      excerpt: "Navigating the tech job market can be challenging, especially for newcomers. Here's our comprehensive guide to landing your first tech role in the current landscape.",
      author: "Alex Johnson",
      date: "May 15, 2025",
      category: "Career Advice",
      image: "https://via.placeholder.com/800x400",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Rise of AI in Education: What Students Need to Know",
      excerpt: "Artificial Intelligence is reshaping how we learn. Discover how AI tools are transforming education and how you can leverage them in your learning journey.",
      author: "Maria Chen",
      date: "May 10, 2025",
      category: "Education",
      image: "https://via.placeholder.com/800x400",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Web Development Trends to Watch in 2025",
      excerpt: "The web development landscape is constantly evolving. Stay ahead of the curve with these emerging trends that are shaping the future of web development.",
      author: "David Kumar",
      date: "May 5, 2025",
      category: "Web Development",
      image: "https://via.placeholder.com/800x400",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "From Bootcamp to Senior Developer: A Journey",
      excerpt: "Read the inspiring story of how one of our students went from a coding bootcamp to becoming a senior developer at a top tech company in just three years.",
      author: "Sarah Williams",
      date: "April 28, 2025",
      category: "Success Stories",
      image: "https://via.placeholder.com/800x400",
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Essential Data Science Skills for 2025",
      excerpt: "The field of data science continues to evolve rapidly. Here are the must-have skills that will keep you competitive in the data science job market.",
      author: "Michael Zhang",
      date: "April 20, 2025",
      category: "Data Science",
      image: "https://via.placeholder.com/800x400",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "How to Build a Portfolio That Gets You Hired",
      excerpt: "Your portfolio is your professional showcase. Learn how to create a standout tech portfolio that will impress employers and help you land your dream job.",
      author: "Jessica Patel",
      date: "April 15, 2025",
      category: "Career Advice",
      image: "https://via.placeholder.com/800x400",
      readTime: "9 min read"
    }
  ];

  const categories = ["All", "Career Advice", "Education", "Web Development", "Data Science", "Success Stories"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-center">GAFANATION Blog</h1>
            <p className="mt-2 text-xl text-center">Insights, guides, and stories from the tech education world</p>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Post */}
            <div className="mb-16 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <img className="h-full w-full object-cover" src="https://via.placeholder.com/800x500" alt="Featured blog post" />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="uppercase tracking-wide text-sm text-primary font-semibold">Featured</div>
                  <h2 className="mt-2 text-2xl font-bold">The Future of Remote Work in Tech: Trends and Predictions</h2>
                  <p className="mt-4 text-gray-600">
                    Remote work has transformed the tech industry. In this comprehensive guide, we explore how remote work will continue to evolve and what it means for tech professionals worldwide.
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">James Wilson</p>
                      <p className="text-sm text-gray-500">May 20, 2025 · 15 min read</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90">
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    index === 0
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
                  <div className="p-6">
                    <div className="flex items-center text-sm">
                      <span className="text-primary font-medium">{post.category}</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
                    <p className="mt-3 text-gray-600 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a href="#" className="text-primary hover:text-primary/80 font-medium">
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Previous
                </a>
                <a href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 bg-primary text-sm font-medium text-white">
                  1
                </a>
                <a href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </a>
                <a href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </a>
                <a href="#" className="inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Next
                </a>
              </nav>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest articles, tutorials, and insights straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
