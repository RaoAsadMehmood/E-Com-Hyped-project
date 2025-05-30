"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "../components/TestimonialSlider";
import Navbar from "../components/Navbar";
// import FeatureCard from "../components/FeatureCard";
import AnimatedStats from "../components/AnimatedStats";
import Accordion from "../components/Accordion";
import { StatsHeroSection } from "../components/StatsSection";

const AutomationServices = () => {
  const statsData = [
    { endValue: 19, label: "Successful Stores", suffix: "+" },
    { endValue: 10000, label: "Brands Resell", suffix: "+" },
    { endValue: 1, label: "Total Revenue ", suffix: " Million" },
    { endValue: 100, label: "Profit Distributed", suffix: "K +" },
  ];

  const accordionItems = [
    {
      title: "How much can I Invest?",
      content:
        "At Ecom Hyped, we require a minimum investment of $20k for both our FBA Gold and FBA Elite packages. You can also invest more based on your business goals and financial capacity.",
    },
    {
      title: "How much money can I make?",
      content:
        "Our FBA automation services offer a monthly ROI of 15% to 18% based on gross sales. However, profits may vary depending on various factors such as inventory, sales, and market trends.",
    },
    {
      title: "Who can Invest?",
      content:
        "Anyone who meets the capital requirements of $20k or more in credit or cash can invest in our FBA automation services. We offer no accreditation requirements, so anyone can be a business owner.",
    },
    {
      title: "What do I need to start?",
      content:
        "To start, you will need a minimum investment of $20k in credit or cash. We will take care of everything else, from setting up your Amazon FBA partnership store to managing inventory and logistics.",
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
                Automate Your
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Store for
                </span>{" "}
                Maximum
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Profit
                </span>{" "}
              </h1>
              <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full ">
                Are you looking to invest in a profitable opportunity that can
                help you maximize your returns in just 12 months? Look no
                further than FBA Automation by Ecom Hyped! Our automated Amazon
                store solutions are designed to help investors like you achieve
                maximum profitability with minimum effort. With our expert team
                of Amazon FBA partners, we can help you launch and manage a
                successful Amazon store that generates consistent revenue month
                after month.
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
              ABOUT US
            </h2>
            <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4 text-center lg:text-left">
              How Automation Works.
            </p>
            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] mb-6 text-center lg:text-left">
              Our team of Amazon FBA experts will work with you to identify the
              best products to sell on Amazon, source them from trusted
              suppliers, and launch them on your Amazon store. We will then use
              our advanced marketing and optimization strategies to increase
              your stores visibility and sales, ensuring consistent revenue
              month after month. Our real-time reporting, analytics, and risk
              monitoring tools will give you complete transparency into your
              investment, allowing you to make informed decisions about your
              Amazon store.
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
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
              Triumph Tales:
            </h2>

            <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
              Stories of Investors Who Maximized Profits with Our FBA Automation
              Services
            </p>

            <p className="text-[#45565F] text-[18px] font-medium sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              At EcomHyped, we believe in transparency and reliability, and
              thats why we are proud to share our triumph tales with you. Our
              success stories highlight real investors who trusted us to help
              them maximize profits with FBA automation. We provide real-time
              reporting, analytics, and risk monitoring to ensure the success of
              our clients. With our gold and elite packages, we partner with you
              to establish an Amazon FBA store and work tirelessly to make sure
              your store generates a monthly ROI of 15% to 18%. Our goal is to
              help you achieve financial success and we are dedicated to being a
              trusted partner in your journey.
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
              Why Choose EcomHyped for Your Amazon Automation Services?
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
              "Revolutionize Your Amazon Business with FBA Automation: Benefits You Can't Afford to Miss!"
            }
            description={
              "At Ecom Hyped, we offer the most affordable and reliable FBA automation services in the market. With our gold and elite packages, we provide a range of benefits that you can't afford to miss. With our FBA automation services, we revolutionize your Amazon business and help you achieve financial success. You can trust us to be a transparent and reliable partner in your journey."
            }
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
