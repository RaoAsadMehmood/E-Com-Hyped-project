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
import MeetingButton from "@/app/components/MeetingButton";

const AmazonListingOptimization = () => {
  // Animated stats data
  const statsData = [
    { endValue: 257, label: "Success Stories", suffix: "+" },
    { endValue: 1.7, label: "Revenue", suffix: "M" },
    { endValue: 1810, label: "Reviews", suffix: "+" },
    { endValue: 10253, label: "Brands Catalog", suffix: "+" },
  ];

  const accordionItems = [
    {
      title: "What is Amazon Listing Optimization?",
      content:
        "Amazon Listing Optimization is the process of improving your product page elements (like title, bullet points, description, images, and backend keywords) to rank higher in Amazon search results, attract more clicks, and increase conversion rates. The goal is to make your listing more visible and compelling to potential buyers.",
    },
    {
      title: "Why is listing optimization important for Amazon sellers?",
      content:
        "Effective listing optimization is crucial because it directly impacts your product's visibility and sales. A well-optimized listing ensures your product is found by relevant customers, conveys value, builds trust, and ultimately converts browsers into buyers, leading to higher revenue and reduced advertising costs.",
    },
    {
      title: "How do you find the best keywords for my listings?",
      content:
        "We utilize advanced keyword research tools and competitor analysis to identify high-volume, relevant, and profitable keywords. This includes short-tail, long-tail, and LSI (Latent Semantic Indexing) keywords to ensure your product appears for a wide range of relevant search queries on Amazon.",
    },
    {
      title: "What is A+ Content and why do I need it?",
      content:
        "A+ Content (also known as Enhanced Brand Content) allows brand-registered sellers to enhance their product descriptions with rich media, engaging text, and custom layouts. It significantly improves conversion rates by providing a more immersive shopping experience, building brand trust, and addressing customer questions visually.",
    },
    {
      title: "How long does it take to see results from listing optimization?",
      content:
        "While immediate improvements in click-through rates can sometimes be seen, significant ranking and sales improvements typically take 2-4 weeks as Amazon's algorithm processes changes and gathers new data. Long-term optimization is an ongoing process for sustained success.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <div
          className="w-full min-h-screen flex items-center justify-center relative"
          style={{
            backgroundImage: 'url("/images/hero-cover.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-white font-semibold leading-tight text-left text-shadow-lg/40 text-[40px] sm:text-[60px] md:text-[70px] lg:text-[87px]">
                Boost Your Amazon Sales: Master Your Listings with{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Expert Optimization Services
                </span>{" "}
              </h1>
              <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full">
                Are your Amazon products struggling to get noticed and convert?
                Our Amazon Listing Optimization services are meticulously
                designed to enhance your product visibility, attract more
                qualified customers, and significantly boost your conversion
                rates. We craft compelling, SEO-rich listings that rank higher,
                inform buyers effectively, and drive profitable sales, ensuring
                your products shine in the crowded Amazon marketplace.
              </p>
              
              <MeetingButton />

            </motion.div>
          </div>
        </div>

        {/* About Service Section */}
        <div className="my-[80px]">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10"
            >
              {/* Left Section */}
              <div className="flex flex-col items-start w-full lg:w-5/12">
                {" "}
                {/* Changed max-w-full lg:max-w-[400px] to w-full lg:w-5/12 */}
                <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-3 sm:mb-4">
                  ABOUT OUR SERVICE
                </h2>
                <p className="text-[#334047] text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-semibold leading-snug">
                  Precision-Driven Amazon Listing Optimization
                </p>
              </div>

              {/* Right Section */}
              <p className="text-[#45565F] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed w-full lg:w-7/12 text-left">
                {" "}
                {/* Changed max-w-full lg:max-w-[700px] to w-full lg:w-7/12 */}
                Our Amazon Listing Optimization service dives deep into product
                data, intensive keyword research, and comprehensive competitor
                analysis to create listings that truly convert. We focus on
                every critical element, from crafting captivating titles and
                persuasive bullet points to designing engaging A+ Content and
                implementing strategic backend keywords, ensuring your products
                are found by the right customers and effectively motivate them
                to buy.
              </p>
            </motion.div>
          </div>
        </div>

        {/* About Us Section */}
        <section className="my-[80px]">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
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
                  Transform Your Product Pages: Achieve Peak Performance on
                  Amazon!
                </p>
                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                  At Ecom Hyped, we specialize in optimizing Amazon product
                  listings to maximize their impact. Our strategic approach
                  combines in-depth keyword research, compelling copywriting,
                  and visual enhancements to ensure your products not only rank
                  higher but also convert visitors into loyal customers. Let us
                  refine your listings to outperform the competition and
                  accelerate your sales growth.
                </p>
                <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
                  <li>
                    <b>In-depth Keyword Research:</b> For maximum visibility and
                    relevant traffic.
                  </li>
                  <li>
                    <b>Compelling Title & Bullet Point Crafting:</b> To attract
                    buyers and highlight key benefits.
                  </li>
                  <li>
                    <b>Persuasive Product Descriptions & A+ Content:</b> To
                    drive conversions and tell your brand story.
                  </li>
                  <li>
                    <b>High-Quality Image & Video Integration:</b> To visually
                    showcase products and build trust.
                  </li>
                  <li>
                    <b>Competitive Analysis:</b> To identify unique selling
                    propositions and market gaps.
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
                  alt="Amazon Listing Optimization Illustration"
                  width={588}
                  height={607}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Animated Stats Section */}
        <div
          className="w-full my-[60px] py-[40px] sm:py-[60px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/stats-cover.png")',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
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
        </div>

        {/* Benefits Section 1 */}
        <div className="my-[80px]">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-[16px]">
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
                  Benefits of Using Our Listing Optimization Services
                </p>

                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                  Our Amazon Listing Optimization Services are designed to
                  elevate your products in the crowded marketplace, attracting
                  more customers and driving higher sales. We leverage strategic
                  keyword research, compelling content creation, and visual
                  enhancements to ensure your listings not only rank higher but
                  also convert browsers into confident buyers. Partner with us
                  to maximize your visibility and profitability on Amazon.
                </p>

                <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
                  <li>
                    <b>Increased Visibility:</b> Rank higher in Amazon search
                    results for relevant keywords, ensuring more potential
                    customers find your products.
                  </li>
                  <li>
                    <b>Higher Conversion Rates:</b> Captivate buyers with
                    persuasive copy, engaging visuals, and clear calls to
                    action, turning clicks into sales.
                  </li>
                  <li>
                    <b>Enhanced Brand Authority:</b> Build trust and credibility
                    with professional A+ Content and consistent brand messaging
                    across your listings.
                  </li>
                  <li>
                    <b>Competitive Edge:</b> Outperform competitors by
                    identifying and leveraging market gaps, optimizing your
                    product pages to stand out.
                  </li>
                  <li>
                    <b>Maximized ROI on Ads:</b> Drive more efficient ad spend
                    with highly optimized listings that convert traffic more
                    effectively, reducing ACoS.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Benefits Section 2 */}
        <div className="my-[80px]">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-[16px]">
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
                  OUR PROCESS
                </h2>

                <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
                  How Our Amazon Listing Optimization Works for You
                </p>

                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                  Our Amazon Listing Optimization process is a meticulously
                  crafted journey designed to enhance your product&apos;s
                  performance. We start with a comprehensive audit, conduct
                  in-depth keyword research, then craft compelling, SEO-rich
                  content and optimize all visual elements. Our continuous
                  monitoring ensures your listings adapt to market changes,
                  driving sustained sales and growth on Amazon.
                </p>

                <ul className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-2 mb-6">
                  <li>
                    <b>Comprehensive Listing Audit:</b> Detailed analysis of
                    current performance, competitor landscape, and optimization
                    opportunities.
                  </li>
                  <li>
                    <b>Strategic Keyword Integration:</b> Researching and
                    embedding high-volume, relevant keywords for maximum search
                    visibility.
                  </li>
                  <li>
                    <b>Compelling Content Creation:</b> Crafting engaging
                    titles, bullet points, descriptions, and A+ Content that
                    converts.
                  </li>
                  <li>
                    <b>Visual & Technical Optimization:</b> Enhancing images,
                    videos, and backend attributes for superior user experience
                    and ranking.
                  </li>
                  <li>
                    <b>Performance Monitoring & Iteration:</b> Continuously
                    tracking results and making data-driven adjustments for
                    ongoing success.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="my-[80px]">
          <StatsHeroSection
            heading={
              "Unlock Unprecedented Sales: Experience the Impact of Professional Amazon Listing Optimization!"
            }
            description={
              "At Ecom Hyped, we transform underperforming Amazon product pages into sales powerhouses. Our expert Amazon Listing Optimization services are designed to maximize visibility, attract qualified buyers, and significantly boost your conversion rates. Partner with us to craft compelling, SEO-rich listings that drive consistent revenue and elevate your brand in the competitive Amazon marketplace."
            }
          />
        </div>

        {/* FAQ Section */}
        <div className="my-[80px]">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex justify-center items-center my-10">
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
                    Frequently Asked Questions About Amazon Listing Optimization
                  </p>
                </motion.div>
              </div>

              <Accordion accordionItems={accordionItems} />

              <MeetingButton />
              
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <StatsHero
          heading={
            "Ready to Dominate Amazon Search? Connect with Ecom Hyped for Listing Optimization!"
          }
          description={
            "Is your Amazon listing performing as well as it could be? Ecom Hyped is ready to help you climb the ranks and convert more sales. Our Amazon Listing Optimization experts are standing by to discuss your product pages, analyze opportunities, and develop a tailored strategy to boost your visibility and profitability. Contact us today and let's make your listings irresistible!"
          }
        />

        {/* Company Logos */}
        <div className="bg-[#ecf9f9]">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-wrap justify-around items-center gap-6 sm:gap-10 py-[55px]">
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
        </div>
      </div>
    </>
  );
};

export default AmazonListingOptimization;
