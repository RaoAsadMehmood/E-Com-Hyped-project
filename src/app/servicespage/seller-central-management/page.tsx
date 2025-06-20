"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedStats from "../../components/AnimatedStats";
import { StatsHeroSection } from "../../components/StatsSection";
import Accordion from "../../components/Accordion";
import { StatsHero } from "../../components/StatsBG";
import MeetingButton from "@/app/components/MeetingButton";

const SellerCentralManagement = () => {
  // 	{ animated stats data}
  const statsData = [
    { endValue: 257, label: "Success Stories", suffix: "+" },
    { endValue: 1.7, label: "Revenue Generated", suffix: "M" }, // Adjusted label for Seller Central
    { endValue: 1810, label: "Successful Campaigns", suffix: "+" }, // Adjusted label for Seller Central
    { endValue: 10253, label: "Products Managed", suffix: "+" }, // Adjusted label for Seller Central
  ];

  const accordionItems = [
    {
      title: "What is Amazon Seller Central Management?",
      content:
        "Amazon Seller Central Management involves overseeing and optimizing all aspects of your Amazon seller account. This includes listing management, inventory control, order fulfillment, customer service, performance monitoring, and advertising to ensure your business runs efficiently and profitably on Amazon.",
    },
    {
      title: "Why do I need Seller Central Management services?",
      content:
        "Managing an Amazon Seller Central account can be complex and time-consuming. Our services free up your time, prevent costly errors, optimize your listings for better visibility, and implement strategies to boost sales and profitability, allowing you to focus on your core business.",
    },
    {
      title: "How do you improve my Amazon listing performance?",
      content:
        "We optimize your product listings with compelling titles, bullet points, descriptions, and backend keywords. We also focus on high-quality images and A+ Content to improve conversion rates and search rankings, ensuring your products stand out.",
    },
    {
      title: "Can you handle customer service and feedback?",
      content:
        "Yes, our services include professional customer support to manage inquiries, reviews, and feedback. We aim to resolve issues promptly and maintain a high standard of customer satisfaction, which positively impacts your seller metrics.",
    },
    {
      title: "How do you manage inventory and prevent stockouts?",
      content:
        "We implement robust inventory tracking and forecasting systems. By analyzing sales data and trends, we help you maintain optimal stock levels, avoid stockouts, and ensure smooth order fulfillment, crucial for maintaining Amazon's performance standards.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="overflow-x-hidden">
        <div
          className="w-full min-h-screen flex items-center justify-center relative px-4 pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24"
          style={{
            backgroundImage: 'url("/images/hero-cover.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            {/* Animated Text Section */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-white font-semibold leading-tight text-left text-shadow-lg/40 text-[40px] sm:text-[60px] md:text-[70px] lg:text-[87px]">
                Optimize & Grow Your Amazon
                <span className="text-[#f7a51e] inline-block relative z-10 px-2"></span>{" "}
                Business with{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Expert Seller Central Management
                </span>{" "}
              </h1>
              <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full ">
                Are you overwhelmed by the complexities of managing your Amazon
                Seller Central account? Our comprehensive Seller Central
                Management services are designed to take the burden off your
                shoulders, ensuring your operations run smoothly and
                efficiently. From optimizing listings to managing inventory and
                customer service, we handle everything, allowing you to focus on
                strategic growth and profitability.
              </p>

              <MeetingButton />
              
            </motion.div>
          </div>
        </div>

        {/* About Service Section */}
        <div className="my-[80px] px-4 sm:px-6 md:px-10 lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10"
          >
            {/* Left Section */}
            <div className="flex flex-col items-start w-full lg:w-5/12">
              <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-3 sm:mb-4">
                ABOUT OUR SERVICE
              </h2>
              <p className="text-[#334047] text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-semibold leading-snug">
                Professional Seller Central Management
              </p>
            </div>

            {/* Right Section */}
            <p className="text-[#45565F] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed w-full lg:w-7/12 text-left">
              Our Seller Central Management service offers end-to-end solutions
              to optimize your Amazon presence. We handle daily operations,
              performance monitoring, and strategic adjustments to ensure your
              account is healthy and profitable. From listing creation and
              optimization to inventory management and customer support, we
              streamline your workflow, allowing you to focus on business
              expansion without getting bogged down by operational details.
            </p>
          </motion.div>
        </div>

        {/* Feature Section: Unlock Your Amazon Store's Full Potential */}
        <section className="my-[100px] px-4 sm:px-8 md:px-[60px] lg:px-[120px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <motion.div
            className="max-w-xl lg:max-w-[588px] w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
              Unlock Your Amazon Store&apos;s Full Potential
            </h2>
            <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4">
              Comprehensive Seller Central Management for Growth!
            </p>
            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              At Ecom Hyped, we provide expert **Amazon Seller Central
              management** to ensure your account runs smoothly and efficiently.
              We manage all the operational aspects, allowing you to scale your
              business without the daily hassles. Our proactive approach focuses
              on optimizing performance, preventing issues, and driving sales
              growth.
            </p>
            <ul className="list-disc list-inside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-2 mb-6">
              <li>In-depth account audit and performance monitoring.</li>
              <li>Optimized product listings, including SEO and A+ content.</li>
              <li>
                Efficient inventory management to prevent stockouts and
                overstock.
              </li>
              <li>Proactive customer service and reputation management.</li>
              <li>
                Regular performance reports and strategic recommendations.
              </li>
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full max-w-[588px] h-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/wrench-illustration.png" // Suggesting a relevant image
              alt="Seller Central Management Illustration"
              width={588}
              height={607}
              className="w-full h-auto"
            />
          </motion.div>
        </section>

        {/* Animated Stats Section */}
        <div
          className="w-full my-[80px] py-[60px] sm:py-[80px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/stats-cover.png")',
          }}
        >
          <div className="max-w-[1440px] mx-auto px-[20px] sm:px-[60px] lg:px-[120px] flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
            {/* Left Side: Heading */}
            <motion.p
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white text-[46px] sm:text-[40px] lg:text-[46px] font-semibold leading-tight md:max-w-[45%]"
            >
              Partner with Amazon <br className="hidden sm:inline" />
              Experts
            </motion.p>

            {/* Right Side: Services + Description */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 items-start text-left md:max-w-[50%]"
            >
              <p className="text-[20px] sm:text-[22px] md:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide">
                OUR TRACK RECORD
              </p>
              <p className="text-[#FFFFFF] text-[18px] sm:text-[18px] font-semibold leading-relaxed">
                At Ecom Hyped, our proven track record speaks for itself. We are
                dedicated to helping you achieve sustainable growth on Amazon.
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="mt-10">
            <AnimatedStats statsData={statsData} />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-[16px] px-4 py-16 max-w-7xl mx-auto">
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div
              className="w-full max-w-[588px] h-auto sm:h-[695px] rounded-2xl overflow-hidden relative flex flex-col justify-center items-center gap-4 px-4"
              style={{
                background: `
          radial-gradient(circle at top left, rgba(2, 111, 114, 0.75) 0%, transparent 50%),
          radial-gradient(circle at bottom right, rgba(247, 165, 30, 0.55) 0%, transparent 60%),
          radial-gradient(circle at top right, white 0%, white 100%),
          radial-gradient(circle at bottom left, white 0%, white 100%)
        `,
              }}
            >
              {/* Static Image */}
              <div className="relative w-full max-w-[500px] h-[300px] sm:h-[552px]">
                <Image
                  src="/images/static-amazon-frame.png" // Suggesting a relevant image
                  alt="Amazon Seller Central Data Illustration"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 640px) 90vw, 500px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
              OUR PROCESS
            </h2>

            <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
              How Our Seller Central Management Works for You
            </p>

            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              Our Seller Central Management process is designed for maximum
              efficiency and results. We begin with a thorough audit of your
              current account, identify areas for improvement, and implement
              data-driven strategies. Our team then continuously monitors
              performance, manages daily tasks, and adapts to Amazon&apos;s
              evolving landscape to ensure your business thrives.
            </p>

            <ul className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-2 mb-6">
              <li>
                <b>Account Audit & Setup:</b> Comprehensive review and
                optimization of your existing Seller Central account.
              </li>
              <li>
                <b>Listing Optimization:</b> Enhancing product visibility and
                conversion with expert SEO and compelling content.
              </li>
              <li>
                <b>Inventory & Order Management:</b> Streamlining fulfillment
                and preventing stock issues for seamless operations.
              </li>
              <li>
                <b>Customer Service & Feedback:</b> Proactive support to
                maintain high customer satisfaction and seller ratings.
              </li>
              <li>
                <b>Performance Monitoring & Reporting:</b> Regular analysis and
                transparent reporting on key metrics for informed decisions.
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-[16px] px-4 py-16 max-w-7xl mx-auto">
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div
              className="w-full max-w-[588px] h-auto sm:h-[695px] rounded-2xl overflow-hidden relative flex flex-col justify-center items-center gap-4 px-4"
              style={{
                background: `
          radial-gradient(circle at top left, rgba(2, 111, 114, 0.75) 0%, transparent 50%),
          radial-gradient(circle at bottom right, rgba(247, 165, 30, 0.55) 0%, transparent 60%),
          radial-gradient(circle at top right, white 0%, white 100%),
          radial-gradient(circle at bottom left, white 0%, white 100%)
        `,
              }}
            >
              {/* Static Image */}
              <div className="relative w-full max-w-[500px] h-[300px] sm:h-[552px]">
                <Image
                  src="/images/static-amazon-frame.png"
                  alt="Static Amazon Image"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 640px) 90vw, 500px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
              SERVICES
            </h2>

            <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
              How Our Seller Central Management Services Work
            </p>

            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              Our Seller Central Management Services simplify the complexities
              of selling on Amazon. We handle everything from listing
              optimization and inventory management to customer service and
              performance monitoring, freeing you to focus on your core
              business. We aim to enhance your brand&apos;s presence, streamline
              operations, and drive sustainable growth on the Amazon platform.
            </p>

            <ul className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-2 mb-6">
              <li>
                <b>Listing Optimization:</b> We optimize your product listings
                with compelling copy, relevant keywords, and high-quality images
                to improve search visibility and conversion rates.
              </li>
              <li>
                <b>Inventory Management:</b> We proactively monitor and manage
                your inventory levels to prevent stockouts and overstocking,
                ensuring smooth operations and consistent sales.
              </li>
              <li>
                <b>Customer Service & Feedback Management:</b> We handle
                customer inquiries, manage reviews, and address feedback
                promptly and professionally, maintaining a positive brand
                reputation.
              </li>
              <li>
                <b>Performance Monitoring & Reporting:</b> We continuously track
                key performance indicators, providing detailed reports and
                actionable insights to help you make informed business
                decisions.
              </li>
              <li>
                <b>Strategic Growth Planning:</b> We develop and implement
                data-driven strategies to expand your product catalog, identify
                new opportunities, and scale your Amazon business effectively.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Stats Hero Section (from StatsSection component) */}
        <div className="my-[100px]">
          <StatsHeroSection
            heading={
              "Maximize Your Amazon Success: Discover the Power of Expert Seller Central Management!"
            }
            description={
              "At Ecom Hyped, our specialized Seller Central Management services are your key to unlocking sustained growth on Amazon. We handle the intricacies of your account, from daily operations to strategic planning, ensuring efficiency and profitability. Experience transparent partnership and achieve your financial aspirations with a dedicated team by your side."
            }
          />
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col justify-center items-center gap-6 my-[100px]">
          <div className="flex justify-center items-center my-10 px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-[900px] w-full flex flex-col justify-center items-center text-center"
            >
              <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
                GOT QUESTIONS?
              </h2>
              <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-4">
                Frequently Asked Questions About Seller Central Management
              </p>
            </motion.div>
          </div>

          <Accordion accordionItems={accordionItems} />

          <MeetingButton />

        </div>

        {/* Stats Hero Section (from StatsBG component) */}
        <StatsHero
          heading={
            "Let's Connect - Scale Your Amazon Business with Ecom Hyped!"
          }
          description={
            "Ready to take your Amazon business to the next level? Ecom Hyped is here to help. Our team of experts is eager to discuss how our Seller Central Management services can streamline your operations, boost your sales, and maximize your profitability. Reach out to us via phone, email, or our website – we're ready to partner with you for Amazon success."
          }
        />

        {/* Companies Logo */}
        <div className="flex flex-wrap justify-around items-center gap-6 sm:gap-10 py-[60px] px-4 bg-[#ecf9f9]">
          {[
            "/images/company-logo1.png",
            "/images/company-logo2.png",
            "/images/company-logo3.png",
            "/images/company-logo4.png",
            "/images/company-logo5.png",
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={src}
                alt={`Review logo ${index + 1}`}
                width={168}
                height={64}
                className="object-contain w-[120px] sm:w-[150px] md:w-[168px] h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SellerCentralManagement;
