"use client"; // This page will use client-side features like motion

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // For internal links
import Navbar from "../components/Navbar";
 // Adjust path if necessary

const PrivacyPolicyPage: React.FC = () => {
  // Common heading class as provided
  const headingClass = "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4";

  return (
    <>
      <Navbar />

      <div className="overflow-x-hidden">
        {/* Hero Section for Privacy Policy Title */}
        <section
          className="w-full min-h-[300px] flex items-center justify-center relative px-4 py-16"
          style={{
            backgroundImage: 'url("/images/hero-cover.png")', // Using existing hero background
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
            Privacy <span className="text-[#F7A51E]"> Policy</span>
          </motion.h1>
        </section>

        {/* Main Privacy Policy Content Section */}
        <section className="my-[80px] px-4 sm:px-6 md:px-10 lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl w-full mx-auto text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed space-y-6"
          >
            <p>
              This Privacy Policy outlines how Cartup Inn LLC, doing business as EcomHyped (“Company,” “we,” or “us”), collects, uses, and shares information that you provide when you visit our website at ecomhyped.com or use any of our services.
            </p>
            <p>
              This document also informs you of your rights regarding your personal data and how you can reach out with questions or concerns about our privacy practices.
            </p>
            <p>
              We reserve the right to update this Privacy Policy at any time. When changes are made, we will reflect them in this section of our website and update the revision date accordingly.
            </p>
            <p>
              By visiting our website or using our services, you agree to the terms of this Privacy Policy and consent to the collection and use of your information in accordance with applicable laws governing personal and non-personal data.
            </p>
            <p>
              We encourage you to review this Privacy Policy along with our Cookie Policy carefully. For any questions, please reach out using the contact information provided at the end of this document.
            </p>

            <h2 className={headingClass}>Who Does This Policy Apply To?</h2>
            <p>We may collect and process personal data if:</p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>You are a visitor, customer, or vendor of EcomHyphed, or are interested in becoming one;</li>
              <li>You use our products or services;</li>
              <li>You work for a company that is our client or vendor, or uses our services/products;</li>
              <li>You are a potential client or business contact we wish to engage;</li>
              <li>You are an employee, contractor, or interested in joining our team.</li>
            </ul>

            <h2 className={headingClass}>What Information Do We Collect?</h2>
            <p>We collect both personal and technical data, either directly from you or from third parties. This includes:</p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>Full name;</li>
              <li>Employer and job-related details;</li>
              <li>Contact information such as address, phone number, and email;</li>
              <li>Details shared through calls, emails, forms, or website interactions (newsletter signups, order placements, contest entries, etc.);</li>
              <li>Information related to your interactions or business relations with EcomHyped;</li>
              <li>Technical data such as IP address, browser type, operating system, plugins, time zone, etc.;</li>
              <li>Website usage data including visited URLs, page views, time spent, click paths, and activity on our site (scrolls, clicks, hovers).</li>
            </ul>
            <p>If you provide us with personal data of other individuals, you confirm that you have the right to do so.</p>

            <h3 className="text-[#334047] text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-snug mt-6 mb-3">Collection and Use of Amazon Data</h3>
            <p>When utilizing Amazon services or APIs, we also collect and process data in compliance with Amazon’s terms. This may include:</p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>Order details, customer info, and shipping data;</li>
              <li>Product data like inventory, SKUs, and pricing;</li>
              <li>Sales performance and customer engagement metrics.</li>
            </ul>
            <p>We use Amazon data to:</p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>Provide and manage Amazon-related services and orders;</li>
              <li>Improve operations such as inventory control and customer support;</li>
              <li>Analyze sales and performance data, ensuring alignment with Amazon’s policies.</li>
            </ul>

            <h2 className={headingClass}>Data Security Measures</h2>
            <p>We prioritize the security of your information and have implemented strong technical and organizational safeguards, such as:</p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>Data encryption during transmission and storage;</li>
              <li>Role-based access control ensuring only authorized personnel access sensitive data;</li>
              <li>Regular audits to verify compliance with data protection standards.</li>
            </ul>

            <h2 className={headingClass}>Data Retention and Disposal</h2>
            <p>We retain personal and Amazon-related data only as long as necessary for the intended purposes or as legally required. Once no longer needed, we securely dispose of the data to ensure complete removal from our systems.</p>

            <h2 className={headingClass}>Who We Share Your Information With</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>Our business partners, service providers, and subcontractors;</li>
              <li>Legal, accounting, and professional consultants.</li>
            </ul>
            <p>Amazon customer data is never shared with unauthorized third parties. It is only shared with approved vendors who follow Amazon’s confidentiality and security requirements.</p>

            <h3 className="text-[#334047] text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-snug mt-6 mb-3">Data Sharing with Third Parties</h3>
            <p>We may also share anonymized or aggregated website data with:</p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>Advertisers and advertising networks for delivering relevant ads. Personally identifiable information is not shared with advertisers.</li>
            </ul>
            <p>We may disclose data to third parties (including law enforcement) when necessary to protect the rights, property, or safety of Cartup Inn LLC, our clients, staff, or the public, or to prevent fraudulent activity.</p>

            <h2 className={headingClass}>Outbound Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external sites once you leave our domain.</p>

            <h2 className={headingClass}>Contact Information</h2>
            <p>To get in touch with us regarding this policy, visit:</p>
            <p><Link href="/contact" className="text-[#026F72] hover:underline">Contact</Link></p>
            <a href="tel:+15128286650" className="text-[#026F72] hover:underline">Phone: +1(512) 828 6650</a>
            <p>Email: info@ecomhyped.com</p>
            <p>
              By providing your contact details and submitting an inquiry on our website, you give EcomHyped express permission to reach out to you by phone, SMS, or email to address your query or provide relevant service information. We may communicate with you through various channels based on your interest or interaction with our services. Standard messaging and data rates may apply.
            </p>
            <p>
              You may opt out of these communications at any time by texting <b>STOP</b> or request support by texting <b>HELP</b>. Please note that opting out will prevent us from contacting you regarding any ongoing or future services or inquiries you may have initiated.
            </p>
          </motion.div>
        </section>

       
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
