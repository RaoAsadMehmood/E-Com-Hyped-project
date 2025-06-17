"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import AnimatedStats from "../../components/AnimatedStats";
import { StatsHeroSection } from "../../components/StatsSection";
import Accordion from "../../components/Accordion";
import { StatsHero } from "../../components/StatsBG";

const BrandManagment = () => {
  //    { animated stats data}
  const statsData = [
    { endValue: 257, label: "Success Stories", suffix: "+" },
    { endValue: 1.7, label: "Revenue", suffix: "M" },
    { endValue: 1810, label: "Reviews", suffix: "+" },
    { endValue: 10253, label: "Brands Catalog", suffix: "+" },
  ];

  const accordionItems = [
    {
      title: "What is Amazon Brand Management?",
      content:
        "Amazon Brand Management involves strategically overseeing all aspects of your brand's presence and performance on the Amazon platform. This includes protecting your brand, enhancing visibility, optimizing product listings, managing advertising campaigns, and ensuring a consistent brand image to drive sales and customer loyalty.",
    },
    {
      title: "Why is Brand Management crucial for Amazon sellers?",
      content:
        "Effective Brand Management helps you differentiate your products from competitors, build trust with customers, and protect your intellectual property. It's essential for long-term success, as it fosters brand recognition, customer loyalty, and ultimately, sustainable growth on Amazon.",
    },
    {
      title: "How do you protect my brand on Amazon?",
      content:
        "We utilize Amazon's Brand Registry tools, monitor for unauthorized sellers, and handle intellectual property infringements. Our proactive approach includes registering your trademarks, enforcing pricing policies, and reporting counterfeit products or listing hijackers to maintain your brand's integrity.",
    },
    {
      title: "Can you help with A+ Content and Storefronts?",
      content:
        "Yes, we specialize in creating compelling A+ Content (Enhanced Brand Content) and designing engaging Amazon Storefronts. These features are vital for showcasing your brand's story, product features, and lifestyle imagery, significantly improving conversion rates and customer engagement.",
    },
    {
      title: "What about Amazon Advertising for brand growth?",
      content:
        "We develop and manage comprehensive Amazon Advertising strategies, including Sponsored Products, Sponsored Brands, and Sponsored Display campaigns. Our goal is to increase your brand's visibility, drive targeted traffic to your listings, and maximize your Return on Ad Spend (ROAS) to accelerate brand growth.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="overflow-x-hidden">
        <div
          className="w-full min-h-screen flex items-center justify-center relative px-4 "
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
                Elevate Your Brand on Amazon with Our Expert{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Brand Management
                </span>{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Services
                </span>{" "}
              </h1>
              <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full ">
                Are you looking to solidify your brand&apos;s presence and
                maximize its potential on Amazon? Our Brand Management services
                are designed to protect your brand, optimize your listings, and
                drive sustainable growth. With our deep understanding of
                Amazon&apos;s ecosystem, we streamline operations, enhance
                customer loyalty, and ensure your brand stands out in a
                competitive marketplace, allowing you to focus on innovation and
                expansion.
              </p>
              <Link href="/contact">
                <button
                  className="mt-[20px] px-[48px] py-[14px] sm:px-[56px] sm:py-[16px] border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md 
        hover:bg-[#F7A51E] hover:text-white hover:shadow-lg 
        active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2 
        transition-all duration-300 ease-out"
                >
                  Schedule a Call
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        {/* text section    */}
        <div className="my-[80px] px-4 sm:px-6 md:px-10 lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-center gap-10"
          >
            {/* Left Section */}
            <div className="flex-shrink-0 w-full lg:w-[40%]">
              <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-3 sm:mb-4">
                ABOUT OUR BRAND MANAGEMENT
              </h2>
              <p className="text-[#334047] text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-semibold leading-snug">
                Comprehensive Amazon Brand Management
              </p>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-[60%]">
              <p className="text-[#45565F] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed text-left">
                Our Brand Management service focuses on elevating your
                brand&apos;s presence and performance on Amazon. We handle
                everything from brand protection and intellectual property
                enforcement to optimizing your product listings, creating
                compelling A+ Content, and managing powerful advertising
                campaigns. With our expert guidance, your brand will thrive,
                building stronger customer loyalty and achieving remarkable
                growth in the competitive Amazon marketplace.
              </p>
            </div>
          </motion.div>
        </div>
        {/* About us section start*/}
        <section className="my-[80px] px-4 sm:px-8 md:px-[60px] lg:px-[120px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <motion.div
            className="max-w-xl lg:max-w-[588px] w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
              Elevate Your Brand on Amazon with
            </h2>
            <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4">
              Expert Brand Management Services!
            </p>
            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              At Ecom Hyped, we empower your brand to thrive on Amazon. Our
              comprehensive brand management services are designed to protect
              your brand identity, optimize your presence, and drive customer
              loyalty. We focus on building a strong foundation for sustainable
              growth in the competitive Amazon marketplace, allowing you to
              concentrate on your product and vision.
            </p>
            <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
              <li>
                Strategic brand development and positioning on the Amazon
                platform
              </li>
              <li>
                Proactive brand protection and monitoring for unauthorized
                activity
              </li>
              <li>
                Enhanced Brand Content (A+ Content) and Storefront design for
                superior product presentation
              </li>
              <li>
                Effective Amazon Advertising management to increase brand
                visibility and sales
              </li>
              <li>
                Consistent brand messaging and customer engagement across all
                touchpoints
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
              src="/images/wrench-illustration.png"
              alt="Product Sourcing Illustration"
              width={588}
              height={607}
              className="w-full h-auto"
            />
          </motion.div>
        </section>
        `{/* Animated Stats Started */}
        <div
          className="w-full  my-[60px] py-[40px] sm:py-[60px] bg-cover bg-center bg-no-repeat"
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
              Work with a Team <br className="hidden sm:inline" />
              of Experts
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
                OUR STATS
              </p>
              <p className="text-[#FFFFFF] text-[18px] sm:text-[18px] font-semibold leading-relaxed">
                At Ecom Hyped, we are dedicated to helping you succeed on
                <br className="hidden sm:block" />
                Amazon.
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="mt-10">
            <AnimatedStats statsData={statsData} />
          </div>
        </div>
        {/* Animated Stats Ended */}
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
            <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
              Unlock Your Brand&apos;s Full Potential on Amazon
            </p>

            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              Our comprehensive Brand Management services are meticulously
              crafted to elevate your presence and performance on Amazon. We go
              beyond basic optimization, focusing on building a resilient brand
              identity, fostering deep customer loyalty, and driving exponential
              growth in the dynamic e-commerce landscape. Partner with us to
              transform your Amazon channel into a powerful asset.
            </p>

            <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
              <li>
                <b>Strategic Brand Fortification:</b> Establish an unshakeable
                brand foundation, safeguarding your intellectual property and
                ensuring market dominance.
              </li>
              <li>
                <b>Maximized Visibility & Reach:</b> Leverage advanced
                techniques in listing optimization and targeted advertising to
                dramatically increase your brand&apos;s discoverability.
              </li>
              <li>
                <b>Cultivating Customer Devotion:</b> Forge lasting connections
                with your audience through consistent brand messaging and an
                unparalleled customer experience.
              </li>
              <li>
                <b>Data-Driven Performance Mastery:</b> Optimize every aspect of
                your Amazon operations with actionable insights, translating
                data into superior sales and profitability.
              </li>
              <li>
                <b>Accelerated, Sustainable Growth:</b> Implement bespoke
                strategies designed for long-term success, propelling your brand
                to new heights in the competitive Amazon ecosystem.
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-between items-stretch gap-[16px] px-4 py-16 max-w-7xl mx-auto">
          {/* Image Section */}

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
              How We Deliver Exceptional Brand Management
            </p>

            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              Our approach to Brand Management on Amazon is a meticulously
              designed journey, ensuring every facet of your brand&apos;s online
              presence is optimized for success. We combine strategic insights
              with hands-on execution to build, protect, and scale your brand,
              allowing you to focus on your core business while we navigate the
              complexities of the Amazon marketplace.
            </p>

            <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
              <li>
                <b>Initial Brand Audit & Strategy:</b> We begin with a deep dive
                into your current brand standing, competitor landscape, and
                market opportunities to craft a tailored growth strategy.
              </li>
              <li>
                <b>Listing & Content Optimization:</b> Our experts refine your
                product listings, A+ Content, and Storefronts with compelling
                copy and visuals that resonate with your target audience and
                convert sales.
              </li>
              <li>
                <b>Proactive Brand Protection:</b> We implement robust measures,
                including Brand Registry utilization and continuous monitoring,
                to safeguard your intellectual property and combat unauthorized
                sellers.
              </li>
              <li>
                <b>Performance Monitoring & Adjustment:</b> Through ongoing
                analysis of key metrics, we identify areas for improvement and
                strategically adjust campaigns to maximize ROI and sustain
                momentum.
              </li>
            </ul>
          </motion.div>

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
        </div>
        <div className="my-[80px]">
          <StatsHeroSection
            heading={
              "Propel Your Brand to Amazon Stardom: Essential Brand Management for Lasting Success!"
            }
            description={
              "At Ecom Hyped, we empower your brand to thrive on Amazon. Our comprehensive brand management services are designed to protect your brand identity, enhance visibility, and cultivate customer loyalty. We provide tailored strategies to optimize your product presence and ensure sustainable growth in the dynamic Amazon marketplace, making us your trusted partner in achieving unparalleled success."
            }
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex justify-center items-center my-10 px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-[900px] w-full flex flex-col justify-center items-center text-center"
            >
              <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
                ASK SOMETHING
              </h2>
              <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-4">
                Frequently Asked Questions
              </p>
            </motion.div>
          </div>

          <Accordion accordionItems={accordionItems} />

          <Link href="/contact">
            <button
              className="my-7 px-12 py-[14px] sm:px-14 sm:py-4 border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md
        hover:bg-[#F7A51E] hover:text-white hover:shadow-lg
        active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2
        transition-all duration-300 ease-out"
            >
              Schedule a Call
            </button>
          </Link>
        </div>
        <StatsHero
          heading={"Lets Connect - Get in Touch Ecom Hyped!"}
          description={
            "At EcomHyped, we are always happy to connect with new and potential clients. If you are interested in learning more about our services or how we can help you succeed in the world of e-commerce, we encourage you to get in touch. You can contact us by phone, email, or through our website, and we will be happy to answer any questions you may have. Lets connect and start working together to achieve your e-commerce goals."
          }
        />
        <div className="flex flex-wrap justify-around items-center gap-6 sm:gap-10 py-[55px] px-4 bg-[#ecf9f9]">
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
        {/* Companies Logo  */}
      </div>
    </>
  );
};

export default BrandManagment;
