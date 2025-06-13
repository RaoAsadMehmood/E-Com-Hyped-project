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

const AmazonAContent = () => {
  // Animated stats data
  const statsData = [
    { endValue: 1430, label: "Happy Clients", suffix: "+" },
    { endValue: 250, label: "Revenue", suffix: "M" },
    { endValue: 1810, label: "Reviews", suffix: "+" },
    { endValue: 10253, label: "Brands Catalog", suffix: "+" },
  ];

  const accordionItems = [
    {
      title: "What is Amazon A+ Content (Enhanced Brand Content)?",
      content:
        "Amazon A+ Content, also known as Enhanced Brand Content, allows brand-registered sellers to go beyond standard product descriptions. It enables you to add rich media, comparison charts, high-quality images, and compelling text modules to your product detail pages, significantly enhancing the customer shopping experience.",
    },
    {
      title: "Why is A+ Content crucial for Amazon sellers?",
      content:
        "A+ Content is vital for boosting conversion rates, reducing returns, and building brand trust. It helps your products stand out by visually engaging shoppers, clearly communicating product benefits, and addressing common questions, leading to more informed purchasing decisions and stronger brand recognition.",
    },
    {
      title: "How does A+ Content help with conversions?",
      content:
        "A+ Content improves conversions by providing a more immersive and persuasive shopping experience. High-quality visuals and detailed information help overcome buyer skepticism, highlight key features, and answer potential questions upfront, turning passive browsers into confident buyers. It also reduces bounce rates and increases time on page.",
    },
    {
      title: "Can A+ Content improve my product's ranking?",
      content:
        "While A+ Content doesn't directly impact Amazon search rankings through keywords like standard listings, it indirectly boosts ranking by significantly improving conversion rates. Higher conversions signal to Amazon's algorithm that your listing is highly relevant and valuable, which can lead to better organic visibility over time.",
    },
    {
      title: "What is the process for creating A+ Content?",
      content:
        "Our process includes: in-depth product analysis and competitor research, strategizing content modules that best highlight your product's unique selling points, professional copywriting for engaging descriptions, high-quality graphic design for visuals, and seamless implementation within Amazon Seller Central. We ensure your A+ Content is optimized for both aesthetics and conversion.",
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
                Elevate Your{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 pr-2">
                  Amazon Listings
                </span>{" "}
                <br className="md:hidden lg:block" />{" "}
                {/* Adjust breakpoint for line break */}
                with Stunning{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  A+ Content
                </span>{" "}
              </h1>
              <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full">
                Are your Amazon product pages failing to captivate and convert? Our
                specialized Amazon A+ Content services are meticulously designed to transform
                your listings into immersive, high-converting showcases. We combine expert
                copywriting with stunning graphic design to highlight your product&apos;s unique
                benefits, build brand trust, and significantly boost your conversion rates,
                ensuring your products truly shine in the competitive marketplace.
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
                Expert Amazon A+ Content Creation
              </p>

            </div>

            {/* Right Section */}
            <p className="text-[#45565F] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed w-full lg:w-7/12 text-left">
              Our Amazon A+ Content service transforms standard product listings into
              immersive brand experiences. We craft engaging narratives, design stunning
              visuals, and integrate comparison charts to highlight your product&apos;s unique
              features. This optimization not only captivates shoppers and builds trust but
              also significantly boosts conversion rates, ensuring your products stand out
              and perform exceptionally on Amazon.
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
                  TRANSFORM YOUR LISTINGS
                </h2>
                <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4">
                  Captivate Shoppers with Premium Amazon A+ Content!
                </p>
                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                  At Ecom Hyped, we specialize in crafting exceptional Amazon A+ Content
                  that elevates your product detail pages. We combine compelling storytelling
                  with stunning visuals to create an immersive shopping experience. Our
                  expertise ensures your products not only stand out but also build immense
                  brand trust, leading to significantly higher conversion rates and a stronger
                  presence on Amazon.
                </p>
                <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
                  <li>
                    <b>Strategic Module Design:</b> Custom layouts and modules tailored to
                    showcase your product&apos;s unique features and benefits.
                  </li>
                  <li>
                    <b>High-Converting Copywriting:</b> Engaging narratives that resonate with
                    your audience and drive purchasing decisions.
                  </li>
                  <li>
                    <b>Professional Visuals:</b> Integration of stunning imagery, comparison charts,
                    and lifestyle photos to captivate shoppers.
                  </li>
                  <li>
                    <b>Brand Storytelling:</b> Convey your brand&apos;s unique identity and values
                    to build deeper connections with customers.
                  </li>
                  <li>
                    <b>Enhanced Customer Experience:</b> Provide comprehensive product information
                    that reduces buyer skepticism and increases confidence.
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
                  Benefits of Using Our Amazon A+ Content Services
                </p>

                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                  Our Amazon A+ Content services are designed to maximize your product page&apos;s
                  potential, turning browsers into buyers. By integrating compelling visuals and
                  rich descriptions, we enhance customer engagement and build strong brand
                  trust. This strategic approach ensures your products not only capture
                  attention but also drive higher conversion rates and establish a premium
                  presence in the Amazon marketplace.
                </p>

                <ul className="list-disc list-outside pl-4 text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
                  <li>
                    <b>Higher Conversion Rates:</b> Captivate shoppers with rich media and
                    detailed product stories, turning visits into sales.
                  </li>
                  <li>
                    <b>Increased Brand Trust:</b> Professional and immersive content builds
                    credibility and fosters deeper customer loyalty.
                  </li>
                  <li>
                    <b>Reduced Returns:</b> Clearer product information and visuals help set
                    accurate customer expectations, minimizing post-purchase issues.
                  </li>
                  <li>
                    <b>Enhanced Product Visibility:</b> Stand out from competitors with
                    visually striking and informative product detail pages.
                  </li>
                  <li>
                    <b>Improved SEO (Indirect):</b> Higher engagement and conversions signal
                    relevance to Amazon&apos;s algorithm, potentially boosting organic rank.
                  </li>
                  <li>
                    <b>Mobile Optimization:</b> A+ Content is designed to look great on all
                    devices, providing a seamless shopping experience for mobile users.
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
                  Crafting Your Perfect Amazon A+ Content
                </p>

                <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                  Our Amazon A+ Content creation process is a comprehensive journey designed to
                  transform your product detail pages into captivating showcases. We combine in-depth
                  product understanding with creative design and persuasive copywriting,
                  ensuring your A+ Content not only looks stunning but also effectively
                  communicates value, builds trust, and drives conversions.
                </p>

                <ul className="list-disc list-outside pl-4 text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
                  <li>
                    <b>Strategic Content Planning:</b> We analyze your product, target audience,
                    and competitors to define the most impactful A+ modules and messaging.
                  </li>
                  <li>
                    <b>Professional Copywriting:</b> Crafting engaging, benefit-driven text that
                    tells your brand story and persuades customers.
                  </li>
                  <li>
                    <b>Stunning Graphic Design:</b> Creating high-quality visuals, lifestyle imagery,
                    and comparison charts that align with your brand identity.
                  </li>
                  <li>
                    <b>Module Assembly & Optimization:</b> Expertly assembling A+ modules for
                    seamless flow and mobile responsiveness, ensuring a flawless user experience.
                  </li>
                  <li>
                    <b>Review & Refinement:</b> Collaborating with you to ensure the A+ Content
                    perfectly reflects your brand and meets your strategic goals.
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
              "Transform Your Product Pages: Drive Unrivaled Conversions with Amazon A+ Content!"
            }
            description={
              "At Ecom Hyped, we specialize in transforming standard Amazon listings into compelling, high-converting product showcases. Our expert Amazon A+ Content services are meticulously designed to captivate shoppers, build profound brand trust, and significantly boost your conversion rates. Partner with us to achieve a premium brand presence and unlock substantial sales growth on Amazon."
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
            "Ready to Transform Your Listings? Connect with Ecom Hyped for A+ Content!"
          }
          description={
            "Are your Amazon product pages converting as effectively as they could be? Ecom Hyped is here to elevate your listings with stunning A+ Content. Our Amazon A+ Content experts are ready to analyze your products, identify visual and messaging opportunities, and develop a tailored strategy to captivate shoppers and significantly boost your conversion rates. Contact us today and let's make your products shine!"
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

export default AmazonAContent;
