"use client";
import React from "react";
import Image from "next/image";
import ImageCarousel from "../components/ImageCarousel";
import { MdOutlineArrowRight } from "react-icons/md";
import FeatureCard from "../components/FeatureCard";
import { motion } from "framer-motion";
import AutomationSlider from "../components/AutomationSlider";
import AnimatedStats from "../components/AnimatedStats";
import Link from "next/link";
import TestimonialSlider from "../components/TestimonialSlider";
import Navbar from "../components/Navbar";
import MeetingButton from "../components/MeetingButton";
import VideoTestimonial from "../components/VideoTestimonial";
const Home = () => {
  //    { animated stats data}
  const statsData = [
    { endValue: 257, label: "Happy Clients", suffix: "+" },
    { endValue: 1.7, label: "Revenue", suffix: "M" },
    { endValue: 1810, label: "Reviews ", suffix: "+" },
    { endValue: 10253, label: "Brands Catalog", suffix: "+" },
  ];
  const automationSlides = [
    {
      id: 1,
      imageSrc: "/images/amazon-fba-automation.png",
      title: "Amazon FBA Automation",
      href: "/automationservices", // Added link
    },
    {
      id: 2,
      imageSrc: "/images/walmart-automation.png",
      title: "Walmart Automation",
      href: "/automationservices/walmart-automation", // Added link
    },
    {
      id: 3,
      imageSrc: "/images/tiktok-automation.png",
      title: "TikTok Automation",
      href: "/automationservices/tiktok-automation", // Added link
    },
    {
      id: 4,
      imageSrc: "/images/shopify-automation.png",
      title: "Shopify Automation",
      href: "/automationservices/shopify-automation", // Added link
    },
    {
      id: 5,
      imageSrc: "/images/youtube-automation.png",
      title: "YouTube Automation",
      href: "/automationservices/youtube-automation", // Added link
    },
    {
      id: 6,
      imageSrc: "/images/etsy-automation.png",
      title: "Etsy Automation",
      href: "/automationservices/etsy-automation", // Added link
    },
    // Note: "Amazon Automation" seems to be a general category,
    // ensure it has a valid page or remove if redundant with FBA Automation.
    {
      id: 7,
      imageSrc: "/images/amazon-automation.png",
      title: "Amazon Automation",
      href: "/automationservices/", // Added link (ensure this page exists)
    },
  ];

  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <div
          className="w-full min-h-screen flex justify-center items-center relative"
          style={{
            backgroundImage: 'url("/images/hero-cover.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Main Content */}
          <div className="relative flex flex-col items-start px-4 sm:px-6 md:px-0 max-w-[1200px] w-full ">
            {/* Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[50px] sm:text-[70px] md:text-[87px] font-semibold text-white leading-tight text-left "
            >
              <span className="text-[#f7a51e] inline-block relative z-10 px-6 py-2">
                <span
                  className="absolute inset-0 bg-no-repeat bg-contain bg-center z-[-1]"
                  style={{
                    backgroundImage: "url('/images/one-stop-cover.png')",
                  }}
                />
                One-Stop
              </span>{" "}
              Shop for ALL
              <span className="inline-flex items-center ml-2 relative">
                <ImageCarousel />
              </span>
              <br />
              Automation <span className="text-[#f7a51e]">Needs</span>
            </motion.h1>

            {/* Description + Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
              className="flex flex-col md:flex-row w-full mt-6 gap-6"
            >
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[24px] font-semibold sm:text-base md:text-lg text-[#cdd8dd] max-w-[600px] text-left leading-relaxed"
              >
                Welcome to EcomHyped, where we offer a range of services to help
                you take your Amazon Automation Store to the next level.
              </motion.p>

              {/* Schedule Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="md:ml-auto md:mt-auto relative"
              >
                <Link
                  href="/contact" // Fallback href agar Calendly load na ho
                  passHref
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { // Type as HTMLAnchorElement for Link's event
                    e.preventDefault(); // Prevent default link navigation

                    // Check karein ke Calendly widget load ho gaya hai ya nahi.
                    if (typeof window.Calendly !== 'undefined') {
                      window.Calendly.initPopupWidget({ url: 'https://calendly.com/ecommerce-automation-ecomhyped/30min' });
                    } else {
                      // Fallback: Agar Calendly script load nahi hua, toh user ko /contact page par redirect kare.
                      console.warn("Calendly widget not loaded, navigating to contact page as a fallback.");
                      window.location.href = '/contact';
                    }
                  }}
                >
                  <div className="relative flex flex-col items-center">
                    <div className="px-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full flex justify-center items-center">
                      <span className="flex justify-center items-center text-lg sm:text-xl md:text-2xl text-black font-semibold">
                        Schedule A Call
                        <MdOutlineArrowRight
                          size={24}
                          className="sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
                          color="#026F72"
                        />
                      </span>
                    </div>
                    {/* Rotating Image */}
                    <div className="rotating-image">
                      <Image
                        src={"/Images/btn get started.png"}
                        alt={"Schedule a call button"}
                        width={230}
                        height={230}
                        className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px]"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Rotating Animation CSS */}
          <style>
            {`
                    @keyframes rotation {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }

                    .rotating-image {
                        animation: rotation 3s linear infinite;
                    }
                `}
          </style>
        </div>

        {/* Featured Cards Section started*/}
        <section className="w-full px-4 py-16 mt-[80px] ">
          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* TEXT SECTION (always appears first) */}
            <motion.div
              className="lg:col-span-1 flex flex-col gap-3 text-center sm:text-center lg:text-left items-center sm:items-center lg:items-start px-2 sm:px-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] bg-gradient-to-r from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide">
                FEATURES
              </h3>

              <p className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[46px] text-[#334047] font-semibold leading-tight">
                Best Value{" "}
                <span className="hidden sm:inline">
                  <br />
                </span>{" "}
                For You
              </p>

              <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#45565F] mt-1 sm:mt-2 leading-relaxed">
                We provide services with{" "}
                <br className="hidden sm:block lg:hidden" /> the best results
              </p>
            </motion.div>

            {/* FEATURE CARDS SECTION */}

            <motion.div
              className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                // wrap cards in map to reuse animation
                {
                  imageSrc: "/images/frame-29.png",
                  heading: "Transparency",
                  description:
                    "Onboarding with clear, genuine and realistic expectations.",
                },
                {
                  imageSrc: "/images/frame-28.png",
                  heading: "Accountability",
                  description:
                    "On-time Reporting, Analytics and Top-notch Customer Service",
                },
                {
                  imageSrc: "/images/frame-27.png",
                  heading: "Collecting Profits",
                  description:
                    "With our proven and proprietary FBA formula our investors see steady sales growth and results.",
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
                >
                  <FeatureCard
                    imageSrc={card.imageSrc}
                    heading={card.heading}
                    description={card.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Cards Section ending*/}

        {/* Video Section started */}
        <section className="w-full flex justify-center items-center px-4">
          {/* Outer wrapper with gradient border and rounded corners */}
          <div
            className="relative w-full max-w-[1200px] h-[400px] sm:h-[666px] rounded-[40px] p-[7px] bg-transparent"
            style={{
              background:
                "linear-gradient(to right, rgba(247, 165, 30, 1), rgba(247, 165, 30, 0.3))",
            }}
          >
            {/* Inner container with overflow hidden for clean rounded effect */}
            <div className="w-full h-full rounded-[33px] overflow-hidden bg-black">
              {/* Video Background */}
              <video
                src="/Videos/Promotional-Video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controls
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
        {/* Video Section ended */}

        {/* Slider Section  started  */}
        <section className=" w-full min-h-screen">
          <div className=" flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0 mx-[20px] sm:mx-[60px] lg:mx-[120px] mt-[80px] sm:mt-[80px]">
            {/* Left Side: Heading */}
            <motion.p
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-[32px] sm:text-[40px] lg:text-[46px] text-[#334047] font-semibold leading-tight"
            >
              What Our Agency Made <br className="hidden sm:inline" /> For You
            </motion.p>

            {/* Right Side: Services + Description */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 items-start text-left"
            >
              <p className="text-[20px] sm:text-[22px] md:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide">
                SERVICES
              </p>
              <p className="text-[#45565F] text-[16px] sm:text-[18px] font-semibold leading-relaxed">
                We present many films from various main categories, lets
                <br className="hidden sm:block" />
                choose and see how can we help your business to grow.
              </p>
            </motion.div>
          </div>

          {/* Slider  */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto py-8">
              <AutomationSlider
                slides={automationSlides}
                autoSlideInterval={3000}
              />
            </div>
          </motion.div>
        </section>

        {/* Slider Section  ended  */}

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
            <VideoTestimonial />
            <TestimonialSlider />
          </motion.div>
        </section>

        {/* Testimonials Section Ended */}

        <section className="w-full">
          <div
            className="w-full h-[458px] flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 text-center relative"
            style={{
              backgroundImage: 'url("/images/stats-cover.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-[46px] text-white font-semibold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Level up with Amazon Automation Experts
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-white max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Are you tired of manual Amazon business tasks? Let EcomHyped
                experts automate it for you. From setup to launch, we will
                handle the details. Automate your store, reach your target
                audience, and more. Grow your business with our cutting-edge
                technology and expertise.
              </motion.p>

              <div className="mt-6">
                <motion.div
                  className="flex justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <MeetingButton />

                </motion.div>
              </div>
            </div>

            {/* Decorative Stars with Animations */}
            <motion.div
              className="absolute top-24 left-24 text-white opacity-70"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute bottom-24 right-24 text-white opacity-70"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>
          </div>
        </section>

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

export default Home;
