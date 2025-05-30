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

const PPCOptimization = () => {
  // Animated stats data
  const statsData = [
    { endValue: 1430, label: "Happy Clients", suffix: "+" },
    { endValue: 250, label: "Revenue", suffix: "M" },
    { endValue: 1810, label: "Reviews", suffix: "+" },
    { endValue: 10253, label: "Brands Catalog", suffix: "+" },
  ];

  const accordionItems = [
    {
      title: "What is Amazon PPC Optimization?",
      content:
        "Amazon PPC (Pay-Per-Click) Optimization involves continuously refining your advertising campaigns on Amazon to maximize their effectiveness. This includes adjusting bids, targeting, keywords, and ad copy to improve ad visibility, reduce ACoS (Advertising Cost of Sale), and increase sales efficiently.",
    },
    {
      title: "Why is PPC optimization essential for Amazon sellers?",
      content:
        "PPC optimization is critical for driving targeted traffic and sales, especially for new products or competitive niches. It ensures your ad spend is efficient, helps you gain market share, improves product ranking, and ultimately contributes significantly to your overall profitability on Amazon.",
    },
    {
      title: "How do you identify the best keywords for PPC campaigns?",
      content:
        "We employ a multi-faceted approach, combining advanced keyword research tools, competitor analysis, and search term reports from existing campaigns. This allows us to discover high-converting keywords, identify negative keywords to reduce wasted spend, and continuously refine targeting for optimal performance.",
    },
    {
      title: "What types of Amazon ad campaigns do you manage?",
      content:
        "We manage a full spectrum of Amazon ad types, including Sponsored Products (for individual product visibility), Sponsored Brands (to promote your brand and product portfolio), and Sponsored Display (for reaching audiences on and off Amazon). Our strategy is tailored to your specific goals and budget.",
    },
    {
      title: "How quickly can I expect to see results from PPC optimization?",
      content:
        "While initial adjustments can show improvements within days, significant and sustainable results from PPC optimization typically become evident within 4-8 weeks. This timeframe allows for data accumulation, strategic adjustments, and Amazon's algorithm to fully recognize the optimized campaigns.",
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
                Maximize Your Amazon ROI: Drive Sales with{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Expert PPC
                </span>{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Optimization
                </span>{" "}
              </h1>
              <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full">
                Are your Amazon advertising campaigns draining your budget
                without delivering the sales you expect? Our Amazon PPC
                Optimization services are meticulously designed to transform
                your ad spend into profitable revenue. We craft highly effective
                campaigns, optimize bids, and refine targeting to ensure your
                products reach the right customers at the right time,
                significantly boosting your visibility and conversion rates on
                Amazon.
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
              {" "}
              {/* Changed max-w-full lg:max-w-[400px] to w-full lg:w-5/12 */}
              <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-3 sm:mb-4">
                ABOUT OUR SERVICE
              </h2>
              <p className="text-[#334047] text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-semibold leading-snug">
                Strategic Amazon PPC Campaign Optimization
              </p>
            </div>

            {/* Right Section */}
            <p className="text-[#45565F] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed w-full lg:w-7/12 text-left">
              {" "}
              {/* Changed max-w-full lg:max-w-[700px] to w-full lg:w-7/12 */}
              Our Amazon PPC Optimization service maximizes your advertising ROI
              through data-driven campaign management, strategic keyword
              targeting, and continuous bid optimization. We analyze your
              advertising performance, identify profitable opportunities, and
              eliminate wasteful spending to ensure every dollar invested drives
              qualified traffic and converts into profitable sales, helping you
              dominate your market while maintaining optimal ACoS and TACoS.
            </p>
          </motion.div>
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
                  Maximize Your Amazon Advertising ROI
                </h2>
                <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4">
                  Master Amazon PPC: Drive Targeted Traffic & Boost Your Sales!
                </p>
                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                  At Ecom Hyped, we transform your Amazon PPC campaigns into
                  profit-generating machines. Our data-driven approach combines
                  strategic keyword targeting, optimized bid management, and
                  continuous performance monitoring to ensure every advertising
                  dollar works harder for your business. Let us fine-tune your
                  campaigns to reduce wasted spend while dramatically increasing
                  your return on ad spend (ROAS).
                </p>
                <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
                  <li>
                    <b>Strategic Keyword Targeting:</b> Identify high-converting
                    keywords while eliminating wasteful spend.
                  </li>
                  <li>
                    <b>Smart Bid Management:</b> Optimize bids for maximum
                    profitability and improved ad placement.
                  </li>
                  <li>
                    <b>Campaign Structure Optimization:</b> Build efficient
                    campaign architecture for better performance tracking.
                  </li>
                  <li>
                    <b>Negative Keyword Mining:</b> Continuously refine
                    targeting to prevent irrelevant clicks and boost conversion
                    rates.
                  </li>
                  <li>
                    <b>Performance Analytics & Reporting:</b> Detailed insights
                    and regular optimization based on real-time data.
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
                  src="/images/portfolio-illustration.png"
                  alt="Amazon PPC Optimization Illustration"
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
                      src="/images/marketing-illustration.png"
                      alt="PPC Dashboard Analytics"
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
                  Benefits of Using Our PPC Optimization Services
                </p>

                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                  Our Amazon PPC Optimization Services are engineered to
                  transform your advertising campaigns into powerful revenue
                  generators. We combine advanced keyword strategies,
                  intelligent bid management, and data-driven optimizations to
                  maximize your return on ad spend while minimizing wasted
                  budget. Partner with us to unlock the full potential of your
                  Amazon advertising and achieve sustainable, profitable growth.
                </p>

                <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
  <li>
    <b>Improved ROAS:</b> Maximize return on ad spend through
    strategic keyword targeting and intelligent bid
    optimization, ensuring every dollar generates maximum
    profit.
  </li>
  <li>
    <b>Reduced Advertising Costs:</b> Eliminate wasteful spend
    with precise negative keyword management and targeted
    campaign structure, lowering your ACoS significantly.
  </li>
  <li>
    <b>Enhanced Campaign Performance:</b> Boost click-through
    rates and conversion rates with optimized ad copy, strategic
    placement, and continuous A/B testing.
  </li>
  <li>
    <b>Scalable Growth:</b> Build sustainable advertising
    systems that grow with your business, maintaining
    profitability as you expand your product portfolio.
  </li>
  <li>
    <b>Data-Driven Insights:</b> Receive comprehensive analytics
    and actionable recommendations to make informed decisions
    and stay ahead of market trends.
  </li>
</ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Benefits Section 2 */}
        <div className="my-[80px]">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-stretch gap-[16px]">
              {/* Image Section */}
              <motion.div
                className="w-full lg:w-1/2 flex justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div
                  className="w-full max-w-[588px] h-full min-h-[400px] sm:min-h-[695px] rounded-2xl overflow-hidden relative flex flex-col justify-center items-center gap-4 px-4"
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
                className="w-full lg:w-1/2 flex flex-col justify-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
                  OUR PROCESS
                </h2>

                <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
                  How Our Amazon PPC Optimization Works for You
                </p>

                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                  Our Amazon PPC Optimization process is a systematic,
                  data-driven approach designed to maximize your advertising
                  performance. We begin with comprehensive campaign audits,
                  conduct strategic keyword research, implement intelligent bid
                  strategies, and continuously optimize based on real-time data.
                  Our ongoing performance monitoring ensures your campaigns
                  consistently deliver profitable results and scale efficiently.
                </p>

                <ul className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-2 mb-6">
                  <li>
                    <b>Campaign Audit & Analysis:</b> Comprehensive evaluation
                    of current PPC performance, identifying optimization
                    opportunities and budget inefficiencies.
                  </li>
                  <li>
                    <b>Strategic Keyword Research:</b> Deep dive into
                    high-converting keywords while building extensive negative
                    keyword lists to eliminate wasteful spend.
                  </li>
                  <li>
                    <b>Campaign Structure Optimization:</b> Building organized,
                    scalable campaign architecture with proper ad groups and
                    targeting strategies for maximum control.
                  </li>
                  <li>
                    <b>Bid Management & Automation:</b> Implementing smart
                    bidding strategies and automated rules to optimize bids
                    based on performance metrics and profitability goals.
                  </li>
                  <li>
                    <b>Continuous Performance Monitoring:</b> Ongoing analysis,
                    A/B testing, and data-driven adjustments to maintain optimal
                    ROAS and campaign growth.
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
              "Maximize Your Ad Spend: Drive Unrivaled ROI with Expert Amazon PPC Optimization!"
            }
            description={
              "At Ecom Hyped, we specialize in transforming your Amazon advertising budget into highly profitable campaigns. Our expert PPC optimization services are meticulously designed to increase your product visibility, drive qualified traffic, and significantly boost your sales while maintaining optimal ACoS. Partner with us to achieve peak advertising performance and unlock sustainable growth on Amazon."
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

              <Link href="/contact">
                <button
                  className="my-7 px-12 py-[14px] sm:px-14 sm:py-[16px] border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md
            hover:bg-[#F7A51E] hover:text-white hover:shadow-lg
            active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2
            transition-all duration-300 ease-out"
                >
                  Schedule a Call
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <StatsHero
          heading={
            "Ready to Maximize Your Ad Spend? Connect with Ecom Hyped for PPC Optimization!"
          }
          description={
            "Are your Amazon ad campaigns delivering the best possible ROI? Ecom Hyped is here to transform your advertising strategy. Our Amazon PPC Optimization experts are ready to analyze your campaigns, identify growth opportunities, and develop a tailored strategy to boost your sales and profitability. Contact us today and let's make your ads perform!"
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

export default PPCOptimization;
