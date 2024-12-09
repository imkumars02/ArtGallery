import React from "react";
import UserHeader from "./Header/UserHeader";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <UserHeader />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 mt-10">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Last Updated: <strong>November 8, 2024</strong>
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Introduction
            </h2>
            <p className="text-lg text-gray-700">
              Welcome to <strong>ArtistryHub</strong>, a platform designed to
              bring the world of art closer to you. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website, use our services, or interact with us in
              other ways.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              We collect the following types of information when you interact
              with ArtistryHub:
            </p>
            <ul className="list-inside list-disc pl-5 text-lg text-gray-700">
              <li>
                <strong>Personal Information:</strong> This includes information
                such as your name, email address, phone number, and payment
                details when you register for an account, make a purchase, or
                sign up for our newsletter.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect
                information about how you interact with our website, such as
                your IP address, browser type, device information, and page
                views.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to enhance your user
                experience by remembering your preferences, login details, and
                other settings.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-lg text-gray-700">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-inside list-disc pl-5 text-lg text-gray-700">
              <li>
                <strong>To provide and personalize our services:</strong> To
                tailor the ArtistryHub experience according to your preferences
                and interests.
              </li>
              <li>
                <strong>To process transactions:</strong> To process your
                payments, fulfill orders, and provide customer support.
              </li>
              <li>
                <strong>To improve our website:</strong> To analyze website
                usage, troubleshoot technical issues, and enhance the overall
                user experience.
              </li>
              <li>
                <strong>To send communications:</strong> To send you marketing
                communications, promotions, and updates (with your consent), or
                to respond to your inquiries.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Share Your Information
            </h2>
            <p className="text-lg text-gray-700">
              We may share your information with the following parties in
              specific circumstances:
            </p>
            <ul className="list-inside list-disc pl-5 text-lg text-gray-700">
              <li>
                <strong>Service Providers:</strong> We may share your
                information with third-party companies that provide services to
                us, such as payment processing, email marketing, and website
                hosting.
              </li>
              <li>
                <strong>Legal Compliance:</strong> If required by law or if we
                believe in good faith that disclosure is necessary to protect
                our rights or comply with a legal obligation, we may share your
                information with legal authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred to the new owner.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Security
            </h2>
            <p className="text-lg text-gray-700">
              We take reasonable steps to protect the security of your personal
              information. However, please be aware that no method of
              transmission over the Internet is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Rights and Choices
            </h2>
            <p className="text-lg text-gray-700">You have the right to:</p>
            <ul className="list-inside list-disc pl-5 text-lg text-gray-700">
              <li>
                <strong>Access and Update Your Information:</strong> You can
                view, update, or correct your account information at any time.
              </li>
              <li>
                <strong>Opt-out of Marketing Emails:</strong> You can
                unsubscribe from marketing communications by following the
                unsubscribe link in the emails we send you.
              </li>
              <li>
                <strong>Request Deletion of Your Data:</strong> You may request
                that we delete your personal information, subject to legal
                requirements.
              </li>
              <li>
                <strong>Cookies Preferences:</strong> You can control your
                cookies settings through your browser, though disabling cookies
                may affect your experience on our site.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Children's Privacy
            </h2>
            <p className="text-lg text-gray-700">
              ArtistryHub does not knowingly collect personal information from
              children under the age of 13. If we become aware that we have
              inadvertently collected such information, we will take steps to
              delete it.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-lg text-gray-700">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the updated policy on this page.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700">
              If you have any questions or concerns about this Privacy Policy or
              how your information is handled, please contact us at:
            </p>
            <p className="text-lg text-gray-700 mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@artistryhub.com"
                className="text-blue-600"
              >
                support@artistryhub.com
              </a>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Address:</strong> ArtistryHub, 123 Art Street, City,
              Country
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
