import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
  const lastUpdated = "May 22, 2025";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-center">Cookie Policy</h1>
            <p className="mt-2 text-xl text-center">Last updated: {lastUpdated}</p>
          </div>
        </div>

        <section className="py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4">What are Cookies?</h2>
            <p className="mb-4 text-gray-700">
              Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
            </p>

            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <p className="mb-4 text-gray-700">
              We use cookies to understand how you use our site and to improve your experience. This includes:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Remembering your preferences and settings.</li>
              <li>Analyzing site traffic and trends.</li>
              <li>Personalizing content and advertisements.</li>
              <li>Enabling social media features.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            <p className="mb-4 text-gray-700">
              We use both first-party and third-party cookies on our site:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>
                <strong>First-party cookies:</strong> These are cookies set by our website directly.
              </li>
              <li>
                <strong>Third-party cookies:</strong> These are cookies set by external websites or services, such as analytics providers or advertising networks.
              </li>
            </ul>
            <p className="mb-4 text-gray-700">
              The following types of cookies may be used when you visit the GAFANATION website:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>
                <strong>Advertising Cookies:</strong> These cookies are used to serve you with advertisements that may be relevant to you and your interests.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These cookies monitor how users reached the website, and how they interact with and move around once on the website. These cookies let us know what features on the website are working the best and what features on the website can be improved.
              </li>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary to allow us to offer you the best possible experience when accessing and navigating through our website and using its features.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies let us operate the website according to the choices you make.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Your Choices</h2>
            <p className="mb-4 text-gray-700">
              You have the right to choose whether or not to accept cookies. You can do this by:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Adjusting your browser settings to block cookies.</li>
              <li>Using cookie consent tools provided on our website.</li>
            </ul>
            <p className="mb-4 text-gray-700">
              Please note that disabling cookies may affect your experience on our site and may prevent certain features from working properly.
            </p>

            <h2 className="text-2xl font-bold mb-4">More Information</h2>
            <p className="mb-4 text-gray-700">
              For more information about cookies and how to manage them, you can visit <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">allaboutcookies.org</a>.
            </p>

            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about our Cookie Policy, please contact us at <a href="mailto:mikealoo2005@gmail.com" className="text-primary hover:underline">mikealoo2005@gmail.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
