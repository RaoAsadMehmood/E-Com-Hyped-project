"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "../../components/TestimonialSlider";
import Navbar from "../../components/Navbar";
import AnimatedStats from "../../components/AnimatedStats";
import Accordion from "../../components/Accordion";
import { StatsHeroSection } from "../../components/StatsSection";

const AutomationServices = () => {
  const statsData = [
    { endValue: 19, label: "Successful Stores", suffix: "+" },
    { endValue: 10000, label: "Brands Resell", suffix: "+" },
    { endValue: 1, label: "Total Revenue ", suffix: " Million" },
    { endValue: 100, label: "Profit Distributed", suffix: "K +" },
  ];

  const accordionItems = [
    {
      title: "How much investment is needed for Walmart Automation?",
      content:
        "The initial investment for Walmart Automation typically covers product sourcing, Walmart Marketplace seller fees, fulfillment setup (e.g., WFS or dropshipping integration), and initial marketing. Costs vary based on your product categories and desired scale. We provide tailored budget guidance during our consultation.",
    },
    {
      title: "What are the potential earnings with Walmart Automation?",
      content:
        "Walmart Automation offers significant earning potential by tapping into its massive customer base and growing online marketplace. Profits are driven by effective product selection, competitive pricing, and efficient fulfillment. Our automation aims to maximize your sales velocity and profitability on the Walmart platform.",
    },
    {
      title: "Who is Walmart Automation suitable for?",
      content:
        "Walmart Automation is ideal for entrepreneurs, existing Amazon/e-commerce sellers, or investors looking to diversify their sales channels and reach a broader audience. It suits those aiming to leverage Walmart's trusted brand and expanding online presence for consistent, hands-off revenue generation.",
    },
    {
      title: "What do I need to get started with Walmart Automation?",
      content:
        "To begin with Walmart Automation, you'll need an approved Walmart Marketplace seller account (we can assist with the application process). Our team then handles everything from product listing and inventory management to order processing, customer service integration, and ongoing performance optimization, creating a passive income stream from your Walmart store.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <div
          className="w-full min-h-screen flex items-center justify-center relative px-4"
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
              <h1 className="text-white font-semibold leading-tight text-left text-shadow-lg/40 text-[40px] sm:text-[60px] md:text-[75px] lg:text-[87px]">
                Automate Your{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Walmart Store
                </span>{" "}
                <br className="hidden md:inline" />
                for Diversified{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Profit
                </span>{" "}
              </h1>
              <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full ">
                Looking to expand your e-commerce empire and tap into a massive
                new customer base? Discover Walmart Automation by Ecom Hyped!
                Our specialized solutions empower entrepreneurs and investors to
                build a profitable presence on the Walmart Marketplace
                effortlessly. Our expert team handles everything from product
                listing and inventory management to order fulfillment and
                customer service, allowing you to achieve consistent revenue and
                a truly hands-off income stream from one of the world&apos;s largest
                retailers.
              </p>

              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Link href="/contact">
                  <button
                    className="px-[48px] mt-8 py-[14px] sm:px-[56px] sm:py-[16px] border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md 
        hover:bg-[#F7A51E] hover:text-white hover:shadow-lg 
        active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2 
        transition-all duration-300 ease-out"
                  >
                    Schedule a Call
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Featured Cards Section started*/}
        <section className="w-full px-4 py-12 mt-[80px] sm:px-8 md:px-[60px] lg:px-[120px] mb-6">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  imageSrc: "/images/frame-29.png",
                  heading: "Recoup the Investment",
                  description: "6 - 8 Months",
                },
                {
                  imageSrc: "/images/frame-28.png",
                  heading: "Budget To Start",
                  description: "$20K",
                },
                {
                  imageSrc: "/images/frame-28.png",
                  heading: "Sales Start Coming",
                  description: "60 Days",
                },
                {
                  imageSrc: "/images/frame-27.png",
                  heading: "Annual Returns of Investment",
                  description: "40% - 60%",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <Image
                    src={card.imageSrc}
                    alt={card.heading}
                    width={80}
                    height={80}
                    className="w-20 h-20 mb-4"
                  />
                  <h4 className="text-[#334047] font-semibold text-lg sm:text-xl mb-2 leading-snug">
                    {card.heading}
                  </h4>
                  <p className="text-[#45565F] text-sm sm:text-base">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Cards Section ending*/}

        {/* About us section start*/}

        <section className="mb-[50] px-4 sm:px-8 md:px-[60px] lg:px-[120px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <motion.div
            className="max-w-xl lg:max-w-[588px] w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4 text-center lg:text-left">
              ABOUT OUR SERVICE
            </h2>
            <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4 text-center lg:text-left">
              How Walmart Automation Works?
            </p>
            <p className="text-[#45565F] text-[16px] font-medium sm:text-[17px] md:text-[18px] leading-relaxed mb-6 text-center lg:text-left">
              Our team of Walmart automation specialists will collaborate
              closely with you to identify high-demand products, source them
              efficiently, and expertly list them on your Walmart Marketplace
              store. We then leverage our advanced pricing and promotion
              strategies to enhance your product&apos;s visibility and boost sales,
              ensuring a steady stream of revenue. Our transparent reporting,
              analytics, and order fulfillment monitoring will give you complete
              peace of mind, allowing you to focus on strategic growth or simply
              enjoy the passive income from your automated Walmart store.
            </p>
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <button
                  className="px-[48px] py-[14px] sm:px-[56px] sm:py-[16px] border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md 
        hover:bg-[#F7A51E] hover:text-white hover:shadow-lg 
        active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2 
        transition-all duration-300 ease-out"
                >
                  Schedule a Call
                </button>
              </Link>
            </motion.div>
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
              alt="illustration"
              width={588}
              height={607}
              className="w-full h-auto"
            />
          </motion.div>
        </section>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-[16px] px-4 py-16 max-w-7xl mx-auto">
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
                  src="/images/amazon-stats.png"
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
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4 text-center lg:text-left">
              Marketplace Victories:
            </h2>
            <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6 text-center lg:text-left">
              Real Stories of Sellers Thriving with Our Walmart Automation
            </p>
            <p className="text-[#45565F] text-[16px] font-medium sm:text-[17px] md:text-[18px] leading-relaxed mb-6 text-center lg:text-left">
              At EcomHyped, our dedication is evident in the remarkable success
              of our Walmart partners. We champion transparency, and our success
              stories vividly showcase how entrepreneurs and investors have
              achieved consistent passive income by leveraging our Walmart
              automation solutions. From identifying high-demand products and
              optimizing listings for visibility to streamlining fulfillment and
              driving sales, we provide end-to-end support. Our detailed
              reporting, analytics, and continuous performance monitoring offer
              complete peace of mind, empowering you to build a thriving,
              automated Walmart store that generates steady revenue.
            </p>

            <motion.div
              className=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <button
                  className="px-[48px] py-[14px] sm:px-[56px] mt-[10px] sm:py-[16px] border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md 
                      hover:bg-[#F7A51E] hover:text-white hover:shadow-lg 
                      active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2 
                      transition-all duration-300 ease-out"
                >
                  Schedule a Call
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Stats Started */}
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
              className="text-white text-[46px] sm:text-[40px] lg:text-[46px] font-semibold leading-tight md:max-w-[65%]"
            >
              Why Choose EcomHyped for Your Walmart Automation Services?
            </motion.p>
          </div>

          {/* Stats Section */}
          <div className="mt-10">
            <AnimatedStats statsData={statsData} />
            {/* <Stats statsData={statsData} /> */}
          </div>
        </div>

        {/* Animated Stats Ended */}

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
        <div className="my-[80px]">
          <StatsHeroSection
            heading={
              "Diversify Your Revenue: Automate Your Walmart Store with Ecom Hyped!"
            }
            description={`At Ecom Hyped, we provide cutting-edge Walmart automation services, meticulously designed to expand your e-commerce reach 
              and generate consistent profits. Our tailored solutions allow you to tap into Walmart's massive customer base with minimal effort, freeing
              you from daily operational tasks. Partner with us to achieve seamless sales, optimize your product presence, and unlock true passive income
              from this rapidly growing marketplace.`}
          />
        </div>

        {/* Testimonials Section Started */}
        <section
          className="w-full min-h-screen px-6 py-10 lg:py-20"
          style={{
            backgroundImage: 'url("/images/Union.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-0 mt-[60px] sm:mt-[80px] md:mt-[100px]">
            {/* Left Text */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-[#334047] text-[46px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug text-center lg:text-left mt-2 lg:mt-[10px]"
            >
              They Satisfied With <br />
              Our Service
            </motion.p>

            {/* Right Block */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center relative"
            >
              <div className="text-center sm:text-left max-w-[400px]">
                <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
                  TESTIMONIALS
                </h2>
                <p className="text-[#151515] text-[18px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                  How they respond to the results of the work we do for them,
                  <br className="block sm:hidden" />
                  <span className="hidden sm:inline"> </span>
                  lets we know
                </p>
              </div>

              {/* Quotation Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/inverted-comma.png"
                  alt=""
                  width={204}
                  height={183}
                  className="sm:ml-[-60px] ml-0 mt-4 sm:mt-0 w-[100px] sm:w-[140px] md:w-[180px]"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TestimonialSlider />
          </motion.div>
        </section>

        {/* Testimonials Section Ended */}

        <div className="my-[80px]">
          <StatsHeroSection
            heading={"Let's Connect - Get in Touch Ecom Hyped!"}
            description={
              "At EcomHyped, we are always happy to connect with new and potential clients. If you're interested in learning more about our services or how we can help you succeed in the world of e-commerce, we encourage you to get in touch. You can contact us by phone, email, or through our website, and we'll be happy to answer any questions you may have. Let's connect and start working together to achieve your e-commerce goals."
            }
          />
        </div>
        {/* Companies Logo  */}
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

export default AutomationServices;
