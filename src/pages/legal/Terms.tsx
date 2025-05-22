import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Terms = () => {
  const lastUpdated = "May 22, 2025";

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service | GAFANATION</title>
      </Helmet>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="py-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Terms of Service</h1>
            <p className="mt-2">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <p>
              Welcome to GAFANATION. These Terms of Service ("Terms") govern your access to and use of the GAFANATION website, mobile applications, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
            </p>

            <h2>2. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. When we make changes, we will update the "Last Updated" date at the top of these Terms. Your continued use of our Services after such changes constitutes your acceptance of the new Terms.
            </p>

            <h2>3. Account Registration</h2>
            <p>
              To access certain features of our Services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to your account.
            </p>

            <h2>4. Course Enrollment and Payments</h2>
            <p>
              When you enroll in a course, you agree to pay all applicable fees. Unless otherwise stated, all fees are quoted in US Dollars and are non-refundable.
            </p>
            <p>
              We offer various payment methods, including credit cards, debit cards, M-Pesa, cryptocurrency, and PayPal. By providing payment information, you represent and warrant that you are authorized to use the designated payment method.
            </p>
            <p>
              For some courses, we may offer payment plans. By enrolling in a payment plan, you agree to make all scheduled payments as outlined at the time of enrollment.
            </p>

            <h2>5. Refund Policy</h2>
            <p>
              Our refund policy varies by course. The specific refund policy applicable to a course will be provided at the time of enrollment. In general, we offer:
            </p>
            <ul>
              <li>A 7-day money-back guarantee for most courses</li>
              <li>Partial refunds for special circumstances at our discretion</li>
              <li>No refunds for completed courses or downloaded materials</li>
            </ul>
            <p>
              To request a refund, please contact us at <a href="mailto:mikealoo2005@gmail.com">mikealoo2005@gmail.com</a>.
            </p>

            <h2>6. Course Content and Access</h2>
            <p>
              Upon enrollment and payment, you will receive access to the course content for the specified duration. Access periods vary by course and are indicated at the time of enrollment.
            </p>
            <p>
              We reserve the right to update, modify, or remove course content at any time to ensure it remains current and relevant.
            </p>

            <h2>7. Intellectual Property Rights</h2>
            <p>
              All content provided through our Services, including but not limited to text, graphics, logos, images, audio, video, and software, is owned by GAFANATION or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may access and view the content for personal, non-commercial use only. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content without our express written permission.
            </p>

            <h2>8. User Content</h2>
            <p>
              You may have the opportunity to submit content, such as forum posts, assignments, or profile information ("User Content"). You retain ownership of your User Content, but you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, publish, and distribute your User Content in connection with our Services.
            </p>
            <p>
              You are solely responsible for your User Content and represent that you have all necessary rights to submit it. You agree not to submit User Content that:
            </p>
            <ul>
              <li>Violates any law or regulation</li>
              <li>Infringes on the rights of any third party</li>
              <li>Contains offensive, discriminatory, or inappropriate content</li>
              <li>Contains malware, viruses, or other harmful code</li>
            </ul>
            <p>
              We reserve the right to remove any User Content at our discretion.
            </p>

            <h2>9. Prohibited Activities</h2>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Use our Services for any illegal purpose</li>
              <li>Share your account credentials with others</li>
              <li>Access or attempt to access other users' accounts</li>
              <li>Interfere with or disrupt our Services</li>
              <li>Circumvent any technological measures used to protect our content</li>
              <li>Use automated systems or software to extract data from our Services</li>
              <li>Share, resell, or distribute course content without our permission</li>
            </ul>

            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your account and access to our Services at any time, without prior notice or liability, for any reason, including if you violate these Terms.
            </p>
            <p>
              Upon termination, your right to use our Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2>11. Disclaimer of Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY DEFECTS WILL BE CORRECTED.
            </p>

            <h2>12. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL GAFANATION OR ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
            </p>
            <p>
              OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO GAFANATION DURING THE 12 MONTHS PRECEDING THE CLAIM.
            </p>

            <h2>13. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless GAFANATION and its affiliates, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of our Services, your violation of these Terms, or your violation of any rights of another.
            </p>

            <h2>14. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or related to these Terms or our Services shall be brought exclusively in the courts of Kenya.
            </p>

            <h2>15. Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
            </p>

            <h2>16. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and GAFANATION concerning our Services.
            </p>

            <h2>17. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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

export default Terms;
