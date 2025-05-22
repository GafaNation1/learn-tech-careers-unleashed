
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Mail, Phone, MapPin, MessageSquare, Users, HelpCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us | GAFANATION</title>
      </Helmet>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">Contact Us</h1>
            <p className="mt-2 text-xl">We're here to help with any questions you might have</p>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email address"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our courses, job opportunities, or anything else? Reach out to us using any of the methods below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="mt-1 text-gray-600">
                        <a href="mailto:mikealoo2005@gmail.com" className="hover:text-primary">
                          mikealoo2005@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Phone</h3>
                      <p className="mt-1 text-gray-600">
                        <a href="tel:+254705047204" className="hover:text-primary">
                          +254 705 047 204
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Location</h3>
                      <p className="mt-1 text-gray-600">
                        Online-based with operations worldwide
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Our Support Departments</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                      <div className="flex items-center mb-2">
                        <MessageSquare className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-medium">General Inquiries</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        For general questions about our platform and services
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                      <div className="flex items-center mb-2">
                        <Users className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-medium">Student Support</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Help with courses, enrollment, and learning resources
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                      <div className="flex items-center mb-2">
                        <HelpCircle className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-medium">Technical Support</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Assistance with website issues or technical problems
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                      <div className="flex items-center mb-2">
                        <Users className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-medium">Career Services</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Help with job placement and career development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "How quickly can I expect a response?",
                    answer: "We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate in your message and we'll prioritize your request."
                  },
                  {
                    question: "Can I schedule a call with a course advisor?",
                    answer: "Yes! You can schedule a consultation with one of our course advisors through our Advisor Consultation page or by indicating your interest in your message."
                  },
                  {
                    question: "How do I get technical support for course-related issues?",
                    answer: "If you're a registered student, you can access technical support through your student dashboard. Alternatively, you can contact us via email or phone."
                  },
                  {
                    question: "Do you offer corporate training solutions?",
                    answer: "Yes, we offer customized corporate training programs. Please contact our team with details about your organization's needs for a tailored proposal."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Placeholder */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Interactive Map Would Appear Here</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
