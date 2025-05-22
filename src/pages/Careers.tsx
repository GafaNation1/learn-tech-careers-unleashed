import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">Careers at GAFANATION</h1>
            <p className="mt-2 text-xl">Join our mission to empower tech careers worldwide</p>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why Work With Us?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                At GAFANATION, we're building the future of tech education and career development.
                Join our team of passionate individuals committed to making a difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Mission-Driven</h3>
                <p className="text-gray-600">
                  Be part of a company that's focused on creating positive impact in tech education worldwide.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Work with cutting-edge technologies and contribute to innovative solutions in education and career development.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Growth</h3>
                <p className="text-gray-600">
                  Develop your skills in a fast-growing company with opportunities for professional advancement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Current Openings</h2>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Senior Frontend Developer",
                  location: "Remote",
                  type: "Full-time",
                  description: "We're looking for an experienced frontend developer proficient in React, TypeScript, and modern web technologies."
                },
                {
                  title: "Curriculum Developer",
                  location: "Remote",
                  type: "Full-time",
                  description: "Help us develop comprehensive tech education curricula that prepare learners for real-world careers."
                },
                {
                  title: "AI Education Specialist",
                  location: "Remote",
                  type: "Full-time",
                  description: "Join our team to develop cutting-edge AI education content and curriculum for our platform."
                },
                {
                  title: "Technical Content Writer",
                  location: "Remote",
                  type: "Contract",
                  description: "Create engaging, technical content that educates and inspires our community of learners."
                }
              ].map((job, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">{job.location}</span>
                        <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">{job.type}</span>
                      </div>
                      <p className="mt-3 text-gray-600">{job.description}</p>
                    </div>
                    <a href="#" className="mt-4 md:mt-0 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90">
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg">Don't see a position that matches your skills?</p>
              <a href="#" className="mt-4 inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90">
                Submit a General Application
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Hiring Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white mb-4">1</div>
                <h3 className="text-xl font-semibold mb-3">Application Review</h3>
                <p className="text-gray-600">
                  We review your application and resume to assess your qualifications and fit for the role.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white mb-4">2</div>
                <h3 className="text-xl font-semibold mb-3">Initial Interview</h3>
                <p className="text-gray-600">
                  A conversation with our hiring team to learn more about you and your experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white mb-4">3</div>
                <h3 className="text-xl font-semibold mb-3">Technical Assessment</h3>
                <p className="text-gray-600">
                  A task or project relevant to the role to showcase your skills and approach.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white mb-4">4</div>
                <h3 className="text-xl font-semibold mb-3">Final Interview</h3>
                <p className="text-gray-600">
                  Meet with team members and leadership to discuss the role in depth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're looking for passionate individuals who share our mission to democratize tech education worldwide.
            </p>
            <a href="#" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 inline-block">
              View All Openings
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
