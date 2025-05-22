
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Cookies = () => {
  const lastUpdated = "May 22, 2025";

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Cookie Policy | GAFANATION</title>
      </Helmet>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="py-8 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Cookie Policy</h1>
            <p className="mt-2">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
            <p>
              This Cookie Policy explains how GAFANATION ("we", "us", or "our") uses cookies and similar technologies on our website and platform. By using our website, you consent to the use of cookies as described in this policy.
            </p>

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can be "persistent" or "session" cookies.
            </p>
            <ul>
              <li>
                <strong>Persistent cookies</strong> remain on your device even after you close your browser. They remain until you delete them or they reach their expiry date.
              </li>
              <li>
                <strong>Session cookies</strong> are temporary and are deleted from your device once you close your browser.
              </li>
            </ul>

            <h2>How We Use Cookies</h2>
            <p>
              We use cookies for various purposes, including:
            </p>
            <ul>
              <li>
                <strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.
              </li>
              <li>
                <strong>Performance cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the functionality of our website.
              </li>
              <li>
                <strong>Functionality cookies:</strong> These cookies enable our website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.
              </li>
              <li>
                <strong>Targeting/advertising cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
              </li>
              <li>
                <strong>Social media cookies:</strong> These cookies are set by social media services that we have added to the site to enable you to share our content with your friends and networks.
              </li>
            </ul>

            <h2>Types of Cookies We Use</h2>
            <p>
              The following table provides more information about the specific cookies we use and their purposes:
            </p>

            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Cookie Name</th>
                  <th className="border p-2 text-left">Type</th>
                  <th className="border p-2 text-left">Purpose</th>
                  <th className="border p-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">_ga</td>
                  <td className="border p-2">Performance</td>
                  <td className="border p-2">Used by Google Analytics to distinguish users</td>
                  <td className="border p-2">2 years</td>
                </tr>
                <tr>
                  <td className="border p-2">_gid</td>
                  <td className="border p-2">Performance</td>
                  <td className="border p-2">Used by Google Analytics to distinguish users</td>
                  <td className="border p-2">24 hours</td>
                </tr>
                <tr>
                  <td className="border p-2">_gat</td>
                  <td className="border p-2">Performance</td>
                  <td className="border p-2">Used by Google Analytics to throttle request rate</td>
                  <td className="border p-2">1 minute</td>
                </tr>
                <tr>
                  <td className="border p-2">SESS#</td>
                  <td className="border p-2">Essential</td>
                  <td className="border p-2">Contains information about your session</td>
                  <td className="border p-2">Session</td>
                </tr>
                <tr>
                  <td className="border p-2">auth_token</td>
                  <td className="border p-2">Essential</td>
                  <td className="border p-2">Maintains your authenticated session</td>
                  <td className="border p-2">30 days</td>
                </tr>
                <tr>
                  <td className="border p-2">preferences</td>
                  <td className="border p-2">Functionality</td>
                  <td className="border p-2">Remembers your site preferences</td>
                  <td className="border p-2">1 year</td>
                </tr>
              </tbody>
            </table>

            <h2>Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third parties on our website. These third parties may include:
            </p>
            <ul>
              <li>
                <strong>Analytics providers</strong> (such as Google Analytics) to help us understand how our website is being used
              </li>
              <li>
                <strong>Advertising networks</strong> to help us deliver targeted advertisements
              </li>
              <li>
                <strong>Social media platforms</strong> to enable you to share content on our site
              </li>
            </ul>
            <p>
              These third parties may use cookies, web beacons, and similar technologies to collect information about your use of our website and other websites. This information may be used to provide targeted advertising or to analyze website usage.
            </p>

            <h2>Your Cookie Choices</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. You can set your browser to:
            </p>
            <ul>
              <li>Refuse all cookies</li>
              <li>Accept only first-party cookies</li>
              <li>Alert you when a cookie is being sent</li>
              <li>Delete cookies when you close your browser</li>
            </ul>
            <p>
              Please note that blocking or deleting cookies may impact your experience on our website, as some features may not function properly.
            </p>
            <p>
              In addition to browser settings, we provide a cookie consent banner that allows you to choose which types of cookies you accept when you visit our website.
            </p>

            <h2>Do Not Track Signals</h2>
            <p>
              Some browsers have a "Do Not Track" feature that signals to websites that you visit that you do not want to have your online activity tracked. Due to the lack of a common understanding of how to interpret these signals, our website does not currently respond to "Do Not Track" signals.
            </p>

            <h2>Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes, we will update the "Last Updated" date at the top of this policy. We encourage you to review this policy periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

export default Cookies;
