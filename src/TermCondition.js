import React from "react";
import UserHeader from "./Header/UserHeader";
import Footer from "./Footer";

const TermCondition = () => {
  return (
    <>
      <UserHeader />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 mt-10">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Last Updated: <strong>November 8, 2024</strong>
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Introduction
            </h2>
            <p className="text-lg text-gray-700">
              Welcome to <strong>ArtistryHub</strong>. By accessing and using
              our website, you agree to comply with and be bound by these Terms
              and Conditions. Please read this document carefully before using
              our services.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-lg text-gray-700">
              By accessing or using the ArtistryHub website and services, you
              agree to abide by these Terms and Conditions and all applicable
              laws and regulations. If you do not agree with any part of these
              terms, you are prohibited from using this website.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              User Account
            </h2>
            <p className="text-lg text-gray-700">
              To access certain features of our website, you may need to create
              an account. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account. If you suspect unauthorized access
              to your account, you must notify us immediately.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              User Conduct
            </h2>
            <p className="text-lg text-gray-700">
              You agree to use ArtistryHub only for lawful purposes and in
              accordance with these Terms. You agree not to engage in any
              conduct that could:
            </p>
            <ul className="list-inside list-disc pl-5 text-lg text-gray-700">
              <li>Violate any applicable laws or regulations;</li>
              <li>Infringe upon the intellectual property rights of others;</li>
              <li>Interfere with or disrupt the functioning of the website;</li>
              <li>
                Transmit harmful or unlawful content, including viruses and
                malware;
              </li>
              <li>Engage in any form of harassment or abusive behavior.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Intellectual Property
            </h2>
            <p className="text-lg text-gray-700">
              All content, including artwork, text, graphics, logos, images, and
              software, available on ArtistryHub is the property of ArtistryHub
              or its licensors and is protected by copyright, trademark, and
              other intellectual property laws. You may not use, modify, or
              reproduce any content from the site without proper authorization.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Purchases and Payments
            </h2>
            <p className="text-lg text-gray-700">
              When making purchases on ArtistryHub, you agree to provide
              accurate and complete payment information. You are responsible for
              paying all applicable taxes, shipping fees, and other charges.
              ArtistryHub reserves the right to cancel or refuse any order at
              its discretion.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-lg text-gray-700">
              ArtistryHub is not liable for any indirect, incidental, special,
              or consequential damages arising out of or in connection with the
              use of our website or services. Our total liability to you for any
              claim is limited to the amount you paid for the service or product
              in question.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Indemnification
            </h2>
            <p className="text-lg text-gray-700">
              You agree to indemnify, defend, and hold harmless ArtistryHub, its
              affiliates, employees, agents, and licensors from any claims,
              liabilities, damages, or expenses (including reasonable attorney’s
              fees) arising from your use of the website or violation of these
              Terms.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Termination
            </h2>
            <p className="text-lg text-gray-700">
              ArtistryHub reserves the right to suspend or terminate your access
              to the website, without notice, for any reason, including if you
              violate these Terms and Conditions.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Changes to the Terms
            </h2>
            <p className="text-lg text-gray-700">
              ArtistryHub may update these Terms from time to time. We will
              notify you of any material changes by posting the updated Terms on
              this page. Your continued use of the website after such changes
              constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Governing Law
            </h2>
            <p className="text-lg text-gray-700">
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction where ArtistryHub operates. Any
              disputes arising under these Terms shall be subject to the
              exclusive jurisdiction of the courts in that jurisdiction.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700">
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at:
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
      <Footer/>
    </>
  );
};

export default TermCondition;
