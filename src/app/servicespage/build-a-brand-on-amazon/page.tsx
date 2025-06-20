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

const BuildBrandOnAmazon = () => {
  // Animated stats data
  const statsData = [
    { endValue: 257, label: "Success Stories", suffix: "+" },
    { endValue: 1.7, label: "Revenue", suffix: "M" },
    { endValue: 1810, label: "Reviews", suffix: "+" },
    { endValue: 10253, label: "Brands Catalog", suffix: "+" },
  ];

  const accordionItems = [
    {
      title: "What does 'Build Brand on Amazon' entail?",
      content:
        "Building a brand on Amazon involves a holistic strategy to establish your brand's presence, enhance its credibility, and foster customer loyalty beyond individual product sales. This includes leveraging Amazon's Brand Registry, creating compelling A+ Content, developing a unique Storefront, strategic advertising, and consistent brand messaging to stand out in the marketplace.",
    },
    {
      title: "Why is brand building crucial for Amazon sellers?",
      content:
        "Effective brand building on Amazon transforms your business from a mere product seller into a recognized entity. It helps you differentiate from competitors, protect your intellectual property, build trust with customers, command higher prices, and ultimately drive repeat purchases and sustainable long-term growth.",
    },
    {
      title: "How do you help us build our brand on Amazon?",
      content:
        "We provide end-to-end brand building services, starting with comprehensive brand strategy development. This includes securing Brand Registry, designing visually appealing A+ Content and Storefronts, optimizing product listings with brand-centric messaging, implementing targeted brand-focused advertising campaigns, and continuously monitoring brand health and performance.",
    },
    {
      title: "What elements of brand building do you focus on?",
      content:
        "Our focus encompasses several key areas: Brand Registry enrollment and utilization, crafting impactful A+ Content for enhanced product pages, designing an immersive Amazon Storefront, developing a strong brand voice and messaging, managing customer reviews and reputation, and executing Sponsored Brands and Sponsored Display campaigns to amplify brand awareness and consideration.",
    },
    {
      title:
        "How long does it take to see results from brand building efforts?",
      content:
        "Brand building is a continuous process, but you can typically start seeing initial positive impacts within 2-4 months, such as increased brand search queries, improved listing conversion rates, and stronger customer engagement. Sustainable brand growth and loyalty are achieved through consistent, long-term strategic efforts over 6-12 months and beyond.",
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
                Forge Your{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Amazon Brand
                </span>{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Legacy
                </span>{" "}
              </h1>
              <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full">
                Ready to transform your products into a recognizable and trusted
                brand on Amazon? Our comprehensive Build Brand on Amazon
                services are meticulously designed to establish your unique
                identity, enhance credibility, and cultivate lasting customer
                loyalty. We go beyond basic sales, crafting compelling brand
                stories, optimizing visuals, and implementing strategic
                campaigns to ensure your brand not only stands out but thrives
                in the competitive Amazon marketplace, driving sustained growth
                and repeat business.
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
                Comprehensive Amazon Brand Building
              </p>
            </div>

            {/* Right Section */}
            <p className="text-[#45565F] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed w-full lg:w-7/12 text-left">
              Our Amazon Brand Building service focuses on establishing a
              strong, recognizable brand presence. We handle Brand Registry,
              create compelling A+ Content and Storefronts, and implement
              targeted brand-focused advertising. Our goal is to enhance your
              brand&apos;s authority and visibility, driving customer loyalty and
              sustainable growth in the Amazon marketplace.
            </p>
          </motion.div>
        </div>

        {/* About Us Section */}
        <section className="my-[80px] +">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-col-reverse lg:flex-row items-stretch justify-between gap-12">
              {" "}
              {/* Using items-stretch for equal height columns */}
              {/* Left Text Content */}
              <motion.div
                className="max-w-xl lg:max-w-[588px] w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4 text-center lg:text-left">
                  ESTABLISH YOUR LEGACY
                </h2>
                <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4 text-center lg:text-left">
                  Build a Lasting Brand on Amazon: Beyond Just Sales!
                </p>
                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6 text-center lg:text-left">
                  At Ecom Hyped, we help you transform your products into a
                  powerful, recognizable brand on Amazon. Our strategic approach
                  focuses on creating a unique brand identity, building customer
                  trust, and fostering loyalty. We go beyond immediate sales to
                  establish a sustainable presence that resonates with your
                  audience and stands strong in the competitive marketplace.
                </p>
                <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
                  <li>
                    <b>Brand Registry & Protection:</b> Secure your intellectual
                    property and control your brand&apos;s presence.
                  </li>
                  <li>
                    <b>A+ Content & Storefront Design:</b> Create immersive,
                    high-converting product pages and a compelling brand hub.
                  </li>
                  <li>
                    <b>Consistent Brand Messaging:</b> Develop a cohesive voice
                    and visual identity across all touchpoints.
                  </li>
                  <li>
                    <b>Targeted Brand Advertising:</b> Utilize Amazon Ads to
                    increase brand awareness and customer engagement.
                  </li>
                  <li>
                    <b>Reputation Management:</b> Build and maintain a strong
                    positive brand image through reviews and customer
                    interaction.
                  </li>
                </ul>
              </motion.div>
              {/* Right Image */}
              <motion.div
                className="w-full max-w-[588px] h-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/portfolio-illustration.png"
                  alt="Brand Building Illustration" // Updated alt text to match new content
                  width={588}
                  height={607}
                  className="w-full h-auto object-contain"
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
                  Unlock the Power of a Strong Amazon Brand
                </p>

                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                  Our Build Brand on Amazon services are meticulously designed
                  to transform your product offering into a recognizable and
                  trusted brand. We go beyond simple listings to craft a
                  compelling brand narrative, enhance visual appeal, and
                  cultivate genuine customer loyalty. Partner with us to
                  establish a strong foundation for sustainable growth and
                  outshine the competition in the vast Amazon marketplace.
                </p>

                <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
                  <li>
                    <b>Enhanced Brand Authority:</b> Establish trust and
                    credibility with a professional brand image and consistent
                    messaging.
                  </li>
                  <li>
                    <b>Increased Customer Loyalty:</b> Foster repeat purchases
                    and create a dedicated customer base through strong brand
                    recognition.
                  </li>
                  <li>
                    <b>Competitive Differentiation:</b> Stand out in crowded
                    niches by showcasing your unique brand story and value
                    proposition.
                  </li>
                  <li>
                    <b>Improved Conversion Rates:</b> Captivate shoppers with
                    premium A+ Content, engaging Storefronts, and a cohesive
                    brand experience.
                  </li>
                  <li>
                    <b>Long-Term Value:</b> Build a sustainable asset that
                    continues to grow and generate revenue beyond individual
                    product sales.
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
                  Our Blueprint for Building Your Amazon Brand
                </p>
                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                  Our Amazon Brand Building process is a structured journey
                  designed to systematically establish and grow your brand&apos;s
                  presence. We combine strategic planning with meticulous
                  execution, ensuring every aspect from identity creation to
                  market expansion is handled with precision. Our goal is to
                  transform your products into a recognizable and trusted brand,
                  fostering deep customer connections and driving sustainable
                  growth.
                </p>
                <ul className="list-disc list-outside text-[#45565F] pl-4 text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
                  <li>
                    <b>Brand Strategy & Foundation:</b> Defining your brand&apos;s
                    unique value proposition, target audience, and competitive
                    positioning on Amazon.
                  </li>
                  <li>
                    <b>Brand Registry & IP Protection:</b> Securing your brand&apos;s
                    intellectual property and leveraging Amazon&apos;s tools to
                    safeguard your presence.
                  </li>
                  <li>
                    <b>A+ Content & Storefront Development:</b> Crafting
                    visually stunning and conversion-optimized product pages and
                    a compelling brand destination.
                  </li>
                  <li>
                    <b>Brand-Centric Advertising:</b> Implementing targeted ad
                    campaigns (Sponsored Brands, Sponsored Display) to build
                    brand awareness and drive engagement.
                  </li>
                  <li>
                    <b>Continuous Brand Evolution:</b> Monitoring brand health,
                    market trends, and competitor activities to adapt and scale
                    your brand&apos;s long-term growth.
                  </li>
                </ul>{" "}
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="my-[80px]">
          <StatsHeroSection
            heading={
                "Ready to Build a Dominant Brand on Amazon? Connect with Ecom Hyped!"

            }
            description={
                "Is your brand truly shining on Amazon? Ecom Hyped is ready to help you establish a powerful and lasting brand legacy. Our Amazon Brand Building experts are standing by to discuss your brand vision, analyze market opportunities, and develop a tailored strategy to boost your presence, trust, and long-term profitability. Contact us today and let's build your brand's future!"
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
                    Frequently Asked Questions 
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
    "Ready to Build a Dominant Brand on Amazon? Connect with Ecom Hyped!"
  }
  description={
    "Is your brand truly shining on Amazon? Ecom Hyped is ready to help you establish a powerful and lasting brand legacy. Our Amazon Brand Building experts are standing by to discuss your brand vision, analyze market opportunities, and develop a tailored strategy to boost your presence, trust, and long-term profitability. Contact us today and let's build your brand's future!"
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

export default BuildBrandOnAmazon;
