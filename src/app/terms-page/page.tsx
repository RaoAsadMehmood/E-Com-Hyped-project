"use client"; // This page will use client-side features like motion

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // For internal links
import Navbar from "../components/Navbar";


const TermsOfUsePage: React.FC = () => {
  // Common heading class as provided for consistency
  const headingClass = "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4";


  return (
    <>
      <Navbar />

      <div className="overflow-x-hidden">
        {/* Hero Section for Terms of Use Title */}
        <section
          className="w-full min-h-[300px] flex items-center justify-center relative px-4 py-16"
          style={{
            backgroundImage: 'url("/images/hero-cover.png")', 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
          <motion.h1
            className="text-white font-semibold leading-tight text-center text-shadow-lg/40 text-[40px] sm:text-[60px] md:text-[75px] lg:text-[87px] relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Terms of <span className="text-[#F7A51E]">Use</span> 
          </motion.h1>
        </section>

        {/* Main Terms of Use Content Section */}
        <section className="my-[80px] px-4 sm:px-6 md:px-10 lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl w-full mx-auto text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed space-y-6"
          >
            <p>
              Accessing and using our website, landing pages, or any of our services is completely your decision. Any concerns or disputes arising from this usage are governed by our Privacy Policy and these Terms of Use. This includes limitations on liability, dispute resolution, and applicable governing law. If you have questions about these policies, please contact us using the information provided on our website.
            </p>
            <p>
              We reserve the right to update or modify these terms at any time. We advise you to review our policies carefully before browsing our site or engaging with our services.
            </p>
            <p>
              We collect data regarding user behavior on our site—such as the pages visited, time spent, and navigation patterns—to better understand how our visitors interact with our website and to enhance our services accordingly.
            </p>

            <h2 className={headingClass}>Content Ownership & Usage</h2>
            <p>
              All content and materials on this website—including images, graphics, icons, illustrations, text, and design elements—are the property of Cartup Inn LLC (DBA EcomHyped). Visitors may download or copy materials for personal use only. However, this does not transfer any ownership or license. You are strictly prohibited from reproducing, distributing, modifying, selling, or exploiting any content from this site for commercial purposes.
            </p>

            <h2 className={headingClass}>Testimonials</h2>
            <p>
              Any comments, feedback, suggestions, ideas, or other content submitted by users through this website will become the sole property of EcomHyped.
            </p>
            <p>
              We reserve full rights to use, reproduce, display, or distribute such content for any purpose without restriction and without any obligation to:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>Keep your submission confidential</li>
              <li>Offer compensation</li>
              <li>Provide a response</li>
            </ul>
            <p>
              We may also use your submitted testimonials and logos on our digital and print materials, with or without additional notice.
            </p>

            <h2 className={headingClass}>Electronic Communication</h2>
            <p>
              By using our website or reaching out via email, you are engaging with EcomHyped electronically. You agree to receive communications from us through electronic channels such as email or website postings. These communications are considered legally binding and fulfill any legal requirement for written communication.
            </p>

            <h2 className={headingClass}>Copyright & Trademarks</h2>
            <p>
              All materials, including but not limited to images, logos, content, icons, data, and software on this site are the intellectual property of Cartup Inn LLC or its content suppliers. All such assets are protected by international copyright and trademark laws.
            </p>
            <p>
              Any brand names or trademarks mentioned are the property of their respective owners and may not be used in association with any unrelated products or services.
            </p>

            <h3 className={headingClass}>Copyright Infringement Claims</h3>
            <p>
              We respect intellectual property rights. If you believe your copyrighted work has been copied or used in a way that constitutes infringement, please follow the proper procedures to submit a claim.
            </p>

            <h2 className={headingClass}>Refund Policy</h2>
            <p>
              We offer full refunds if a project has not been initiated within 20 days of the original purchase. This refund policy is applicable only under the following conditions:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>Refund requests must be made before proceeding beyond the initial design concept stage (a 10% processing fee will apply).</li>
              <li>If revisions are requested after the first concept, the project is considered active and non-refundable.</li>
              <li>Discounted services are not eligible for a refund.</li>
              <li>Refunds will not be issued if the client has been inactive for more than 20 days.</li>
              <li>Clients may request a project hold, but no refunds apply in such cases.</li>
              <li>Refunds are void if cancellation reasons are unrelated to EcomHyped (e.g., business closure or internal disagreements).</li>
              <li>Rush/urgent projects are non-refundable.</li>
              <li>No refunds for clients whose work was subcontracted to us by third parties.</li>
              <li>Once refunded, clients are not allowed to use any of the work shared prior. Doing so constitutes a breach of contract, and legal action may be taken.</li>
              <li>No refund is provided if the client files a payment dispute. This action results in immediate termination of service.</li>
              <li>If a billing error (duplicate charge) occurs, a 100% refund will be issued.</li>
            </ul>

            <h3 className={headingClass}>Refund Timeline:</h3>
            <p>
              Refunds will be processed within 10–15 business days after cancellation is confirmed. In case of bundled service packages, only the relevant service will be refunded.
            </p>

            <h3 className={headingClass}>How to request a refund:</h3>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>Call us at <Link href="tel:+15128286650" className="text-[#026F72] hover:underline">+1 (512) 828 6650</Link></li>
              <li>Use our live chat feature at <Link href="https://ecomhyped.com" className="text-[#026F72] hover:underline">https://ecomhyped.com</Link></li>
              <li>Email us at <Link href="mailto:info@ecomhyped.com" className="text-[#026F72] hover:underline">info@ecomhyped.com</Link></li>
            </ul>
            <p>
              Once a refund is issued, EcomHyped retains full rights to all work created.
            </p>

            <h2 className={headingClass}>Delivery Policy</h2>
            <p>
              Orders are fulfilled according to the timeline stated in your Order Confirmation email. You will receive a confirmation message containing your order number to track progress and request revisions. We also offer Rapid Delivery for an extra fee. Please contact our support team for more details.
            </p>

            <h2 className={headingClass}>Revision Policy</h2>
            <p>
              We offer unlimited revisions to ensure client satisfaction. Each revision request will be processed within 48 hours.
            </p>

            <h2 className={headingClass}>Customer Rights</h2>
            <p>
              When you use our services, you&apos;re joining a trusted group of customers who have safely done business with us. Orders can be placed via phone, email, or live chat.
            </p>
            <p>
              You have the right to unsubscribe from our emails at any time. Any major changes to our site or policies will be communicated to you via email.
            </p>

            <h2 className={headingClass}>INFORMATION SECURITY POLICY</h2>
            <p>
              At EcomHyped, we recognize that information management is a vital component of our IT governance. Our security framework follows industry standards and includes system-level policies, risk management strategies, and operational protocols.
            </p>
            <p>
              We follow internationally recognized guidelines, customized for our business environment, covering:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>Risk assessment and management</li>
              <li>Information security roles and responsibilities</li>
              <li>Secure human resource practices</li>
              <li>Operations and communication safeguards</li>
              <li>Secure development and maintenance processes</li>
              <li>Incident management and response</li>
              <li>Business continuity planning</li>
              <li>Legal and regulatory compliance</li>
            </ul>
            <p>
              Our policies are compliant with the data protection laws and regulations of Pakistan and applicable international standards.
            </p>

            <h3 className={headingClass}>Email Security</h3>
            <p>
              EcomHyped ensures that all emails—whether incoming or outgoing—are encrypted and treated as confidential. Only authorized personnel may access these communications.
            </p>
            <p>
              We use secure SSL/TLS protocols for email connections to ensure encrypted and protected data transmission. Our email system is also protected from spam and unauthorized access.
            </p>
            <p>
              You can safely communicate with us through email and be assured that any messages you receive from <Link href="mailto:info@ecomhyped.com" className="text-[#026F72] hover:underline">info@ecomhyped.com</Link> are authentic.
            </p>
          </motion.div>
        </section>

       
      </div>
    </>
  );
};

export default TermsOfUsePage;
