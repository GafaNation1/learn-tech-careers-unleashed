
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Privacy = () => {
  const lastUpdated = "May 22, 2025";

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | GAFANATION</title>
      </Helmet>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="py-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p className="mt-2">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <p>
              At GAFANATION, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our platform, or participate in our courses.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third parties.
            </p>

            <h3>Information You Provide to Us</h3>
            <ul>
              <li>
                <strong>Account Information:</strong> When you create an account, we collect your name, email address, password, and other details you provide during registration.
              </li>
              <li>
                <strong>Profile Information:</strong> Information you add to your profile, such as your photo, biography, education, and work experience.
              </li>
              <li>
                <strong>Course Information:</strong> Data related to your course enrollments, progress, completions, and certifications.
              </li>
              <li>
                <strong>Payment Information:</strong> When you make a purchase, we collect payment information, including credit card details, billing address, and transaction history.
              </li>
              <li>
                <strong>Communications:</strong> Information you provide when you contact us, participate in surveys, or interact with our support team.
              </li>
            </ul>

            <h3>Information We Collect Automatically</h3>
            <ul>
              <li>
                <strong>Usage Information:</strong> We collect information about how you use our platform, including the pages you visit, features you use, and actions you take.
              </li>
              <li>
                <strong>Device Information:</strong> Data about the device you use to access our services, including device type, operating system, and browser type.
              </li>
              <li>
                <strong>Location Information:</strong> General location information derived from your IP address.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> We use cookies and similar technologies to collect information about your browsing activities.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and managing your account</li>
              <li>Personalizing your experience and delivering relevant content</li>
              <li>Communicating with you about our services, updates, and promotions</li>
              <li>Monitoring and analyzing trends, usage, and activities</li>
              <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>
              We may share your information in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>With Service Providers:</strong> We share information with third-party vendors who provide services on our behalf, such as payment processing, data analysis, email delivery, and customer service.
              </li>
              <li>
                <strong>With Educational Partners:</strong> We may share information with educational institutions, instructors, or employers that collaborate with us for educational or career development purposes.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> We may disclose information if required by law, legal process, or government request, or to protect our rights, property, or safety.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share information with third parties when you give us consent to do so.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information from unauthorized access, loss, or alteration. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul>
              <li>Access, correct, or delete your personal information</li>
              <li>Object to our processing of your data</li>
              <li>Restrict our processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent (where processing is based on consent)</li>
            </ul>
            <p>
              To exercise these rights, please contact us at <a href="mailto:mikealoo2005@gmail.com">mikealoo2005@gmail.com</a>.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have different data protection laws than your country.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we learn that we have collected personal information from a child under 16, we will take steps to delete that information.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:mikealoo2005@gmail.com">mikealoo2005@gmail.com</a><br />
              Phone: +254 705 047 204
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
