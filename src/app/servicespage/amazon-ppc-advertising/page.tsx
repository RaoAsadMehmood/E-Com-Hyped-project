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

const AmazonPPCAdvertising = () => {
    // Animated stats data
    const statsData = [
        { endValue: 257, label: "Success Stories", suffix: "+" },
        { endValue: 1.7, label: "Revenue", suffix: "M" },
        { endValue: 1810, label: "Reviews", suffix: "+" },
        { endValue: 10253, label: "Brands Catalog", suffix: "+" },
    ];

    const accordionItems = [
        {
            title: "What is Amazon PPC (Pay-Per-Click) Advertising?",
            content:
                "Amazon PPC is a digital advertising model where advertisers pay a fee each time their ad is clicked. It's Amazon's internal advertising platform (like Sponsored Products, Sponsored Brands) designed to boost product visibility, drive targeted traffic, and increase sales on the Amazon marketplace.",
        },
        {
            title: "Why is Amazon PPC crucial for sellers?",
            content:
                "Amazon PPC is essential for gaining immediate visibility in competitive niches, launching new products, and defending market share. It allows you to target specific keywords and audiences, driving qualified traffic directly to your listings and significantly impacting your overall sales velocity and organic ranking.",
        },
        {
            title: "How do you manage PPC campaigns for optimal performance?",
            content:
                "We employ a data-driven approach, starting with extensive keyword research and competitor analysis. We then structure campaigns (auto, manual, brand, display), set strategic bids, continuously monitor performance metrics (ACoS, impressions, clicks, conversions), and implement ongoing optimizations like negative keyword harvesting and ad group refinement.",
        },
        {
            title: "What types of Amazon ad formats do you utilize?",
            content:
                "We leverage the full suite of Amazon ad formats: Sponsored Products (to promote individual product ASINs), Sponsored Brands (to showcase your brand and product portfolio), and Sponsored Display (for retargeting and reaching audiences on and off Amazon), tailoring the mix to your specific goals and budget.",
        },
        {
            title: "How quickly can I expect to see results from Amazon PPC?",
            content:
                "While initial data becomes available quickly, significant and sustainable improvements from Amazon PPC optimization typically materialize within 4-8 weeks. This timeframe allows for sufficient data collection, iterative testing, and algorithm adjustments to ensure campaigns are effectively driving sales and profitability.",
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
                                Maximize Your{" "}
                                <span className="text-[#f7a51e] inline-block relative z-10 pr-2">
                                    Amazon ROI
                                </span>{" "}
                                <br className="md:hidden lg:block" />{" "}
                                {/* Adjust breakpoint for line break */}
                                with Expert{" "}
                                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                                    PPC Ads
                                </span>{" "}
                            </h1>
                            <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full">
                                Are your Amazon advertising campaigns draining your budget without delivering
                                the sales you expect? Our specialized Amazon PPC Advertising services are
                                meticulously designed to transform your ad spend into highly profitable
                                revenue. We craft compelling campaigns, optimize bids, and refine targeting
                                to ensure your products reach the right customers at the right time,
                                significantly boosting your visibility and conversion rates on Amazon.
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
                            {" "}
                            {/* Changed max-w-full lg:max-w-[400px] to w-full lg:w-5/12 */}
                            <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-3 sm:mb-4">
                                ABOUT OUR SERVICE
                            </h2>
                            <p className="text-[#334047] text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-semibold leading-snug">
                                Strategic Amazon PPC Advertising
                            </p>
                        </div>
                        <p className="text-[#45565F] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed w-full lg:w-7/12 text-left">
                            Our Amazon PPC Advertising service is engineered to maximize your advertising
                            efficiency and return on investment. We conduct in-depth keyword research,
                            implement precise targeting strategies, and continuously monitor campaign
                            performance to ensure your products gain prime visibility. From bid management
                            to negative keyword implementation, we meticulously fine-tune every aspect of
                            your PPC campaigns, driving qualified traffic and converting clicks into profitable sales on Amazon.
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
                                    MAXIMIZE YOUR ROI
                                </h2>
                                <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4">
                                    Drive Profitable Sales with Expert Amazon PPC Management!
                                </p>
                                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                                    At Ecom Hyped, we transform your Amazon PPC campaigns into highly efficient,
                                    profit-generating machines. Our data-driven approach combines strategic keyword
                                    targeting, intelligent bid management, and continuous performance monitoring
                                    to ensure every advertising dollar works harder for your business. Let us
                                    fine-tune your campaigns to significantly reduce wasted spend while dramatically
                                    increasing your return on ad spend (ROAS).
                                </p>
                                <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
                                    <li>
                                        <b>Strategic Keyword Targeting:</b> Identify high-converting keywords while
                                        eliminating wasteful spend and irrelevant clicks.
                                    </li>
                                    <li>
                                        <b>Dynamic Bid Management:</b> Optimize bids in real-time for maximum
                                        profitability and improved ad placement.
                                    </li>
                                    <li>
                                        <b>Campaign Structure Optimization:</b> Build efficient, scalable campaign
                                        architecture with proper ad groups and targeting strategies for maximum control.
                                    </li>
                                    <li>
                                        <b>Negative Keyword Mining:</b> Continuously refine targeting to prevent
                                        irrelevant clicks and boost conversion rates.
                                    </li>
                                    <li>
                                        <b>Performance Analytics & Reporting:</b> Gain detailed insights and receive
                                        regular optimization based on real-time data for informed decision-making.
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
                                    Benefits of Using Our Amazon PPC Advertising Services
                                </p>

                                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                                    Our **Amazon PPC Advertising services** are meticulously designed to maximize
                                    your product visibility and drive profitable sales. By creating and
                                    optimizing targeted ad campaigns, we ensure your products reach the right
                                    customers at the right time. This strategic approach helps you outrank
                                    competitors, increase brand awareness, and achieve a higher Return on Ad
                                    Spend (ROAS), turning clicks into loyal customers and sustained growth.
                                </p>

                                <ul className="list-disc list-outside pl-4 text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
                                    <li>
                                        <b>Increased Product Visibility:</b> Place your products prominently in
                                        search results and on product pages, reaching more potential buyers.
                                    </li>
                                    <li>
                                        <b>Targeted Customer Reach:</b> Precisely target customers based on their
                                        shopping behavior, keywords, and demographics for higher relevance.
                                    </li>
                                    <li>
                                        <b>Higher Sales & Conversion:</b> Drive qualified traffic directly to your
                                        listings, leading to increased sales and improved conversion rates.
                                    </li>
                                    <li>
                                        <b>Optimized Ad Spend:</b> Get the most out of your advertising budget with
                                        continuous bid adjustments, keyword optimization, and campaign analysis.
                                    </li>
                                    <li>
                                        <b>Competitive Advantage:</b> Secure top ad placements and capture market
                                        share from competitors, even for new products.
                                    </li>
                                    <li>
                                        <b>Enhanced Brand Awareness:</b> Grow your brand&apos;s presence on Amazon,
                                        making your products recognizable to a wider audience.
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
                                    OUR METHODOLOGY
                                </h2>

                                <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
                                    Our Proven Approach to Amazon PPC Success
                                </p>

                                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                                    Our **Amazon PPC Advertising** strategy is a dynamic and data-driven process
                                    designed to deliver maximum return on your investment. We go beyond basic
                                    campaign setup, employing a meticulous approach from in-depth research to
                                    continuous optimization. Our focus is on identifying high-converting keywords,
                                    crafting compelling ad copy, and optimizing bids to ensure your products
                                    consistently rank for profitable search terms, driving targeted traffic and
                                    accelerating your sales on Amazon.
                                </p>

                                <ul className="list-disc list-outside pl-4 text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
                                    <li>
                                        <b>Deep Dive Research:</b> Thorough analysis of product keywords, audience
                                        segments, and competitor ad strategies to uncover hidden opportunities.
                                    </li>
                                    <li>
                                        <b>Strategic Campaign Structuring:</b> Building highly organized campaigns
                                        (Sponsored Products, Brands, Display) with precise targeting for efficiency.
                                    </li>
                                    <li>
                                        <b>Compelling Ad Copy & Creatives:</b> Crafting persuasive headlines,
                                        product titles, and ad visuals to capture attention and encourage clicks.
                                    </li>
                                    <li>
                                        <b>Proactive Bid Management:</b> Dynamic adjustment of bids based on performance
                                        data to ensure optimal ad spend and maintain profitability.
                                    </li>
                                    <li>
                                        <b>Continuous Optimization & Reporting:</b> Regular monitoring, A/B testing,
                                        and detailed performance reports to fine-tune campaigns and show clear ROI.
                                    </li>
                                    <li>
                                        <b>Negative Keyword Management:</b> Diligently adding negative keywords to
                                        eliminate irrelevant traffic and save your budget.
                                    </li>
                                    <li>
                                        <b>Budget Allocation & Scaling:</b> Strategically allocating budgets across campaigns
                                        and scaling winning ads to maximize sales potential.
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
                            "Amplify Your Sales: Drive Targeted Traffic with Expert Amazon PPC Advertising!"
                        }
                        description={
                            "At Ecom Hyped, we master the complexities of Amazon PPC to boost your product visibility and profitability. Our tailored advertising strategies are designed to reach high-intent customers, optimize your ad spend, and significantly increase your sales. Partner with us to outmaneuver competitors, expand your brand reach, and achieve remarkable Return on Ad Spend (ROAS) in the competitive Amazon marketplace."
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
                        "Ready to Dominate Amazon Search? Connect with Ecom Hyped for PPC Success!"
                    }
                    description={
                        "Is your Amazon ad spend delivering the returns you expect? Ecom Hyped is ready to elevate your campaigns with data-driven Amazon PPC Advertising. Our experts are standing by to analyze your current performance, identify high-potential keywords, and develop a tailored strategy to boost your product visibility, drive qualified traffic, and maximize your profitability. Contact us today and let's turn your ad budget into booming sales!"
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

export default AmazonPPCAdvertising;
