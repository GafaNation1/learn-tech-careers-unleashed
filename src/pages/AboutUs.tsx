import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">About GAFANATION</h1>
            <p className="mt-2 text-xl">Empowering Tech Careers Worldwide</p>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-6">
                  At GAFANATION, our mission is to democratize tech education and make career opportunities accessible to everyone around the globe. We believe that talent is universal, but opportunities are not. That's why we've built a platform that connects learners with industry-leading courses and job opportunities.
                </p>
                <p className="text-lg">
                  We're committed to creating a world where anyone with dedication and passion can build a successful career in technology, regardless of their background or geographical location.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white h-full flex items-center justify-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg">
                    To be the world's leading platform that transforms passionate learners into successful tech professionals through accessible education and job placement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
                <p>
                  We believe quality education should be accessible to everyone, everywhere. Our platform is designed to break down barriers to entry in the tech industry.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p>
                  We're committed to providing the highest quality education and job opportunities. Our courses are designed by industry experts to ensure relevant, up-to-date content.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p>
                  We foster a supportive community where learners can collaborate, network, and grow together. Learning is more effective when done collectively.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p>
                  We continuously innovate our platform and curriculum to keep pace with the rapidly evolving tech landscape, ensuring our learners are always ahead.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Impact</h3>
                <p>
                  We measure our success by the positive impact we have on our learners' lives and careers. Every successful job placement is a victory for our mission.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Inclusion</h3>
                <p>
                  We celebrate diversity and are committed to creating an inclusive environment where everyone feels welcome and valued regardless of background.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                GAFANATION was founded in 2023 with a simple yet ambitious goal: to bridge the gap between quality tech education and career opportunities. Our founder, seeing the disconnect between traditional education and industry needs, set out to create a platform that not only teaches relevant skills but also connects learners directly with employers.
              </p>
              <p>
                Starting with just a handful of courses and industry partnerships, we've grown into a global platform serving learners from over 150 countries. Our success stories include thousands of career transitions, promotions, and new opportunities for our community members.
              </p>
              <p>
                Today, GAFANATION is recognized as a leader in tech education and job placement, partnering with top companies to ensure our curriculum stays relevant and our learners have access to the best opportunities in the industry.
              </p>
              <p>
                But our journey is just beginning. As the tech landscape continues to evolve, so do we. We're constantly expanding our course offerings, enhancing our platform features, and building new industry partnerships to better serve our community.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                    <span className="text-gray-400">Team Member Photo</span>
                  </div>
                  <h3 className="text-xl font-semibold">Team Member {i}</h3>
                  <p className="text-gray-600 mb-2">Position Title</p>
                  <p className="text-sm">
                    Brief bio about the team member and their expertise in the tech education or industry.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're looking to learn, teach, or hire, GAFANATION has a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/courses" className="bg-white text-primary px-6 py-2 rounded-md font-medium hover:bg-gray-100">
                Explore Courses
              </a>
              <a href="/careers" className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white/10">
                Join Our Team
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
