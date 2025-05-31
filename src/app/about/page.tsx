"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";
import { StatsHeroSection } from "../components/StatsSection";
import Navbar from "../components/Navbar";


const About = () => {
  return (
    <>
      <Navbar />
      <div className=" overflow-x-hidden">
        {/* Hero Section Started */}

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
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  About
                </span>{" "}
                Us
              </h1>
              <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full sm:max-w-[500px] md:max-w-[580px] lg:max-w-[650px] xl:max-w-[700px]">
                Welcome to EcomHyped, where we offer a range of services to help
                you take your Amazon Automation Store to the next level.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Hero Section Ended */}

        <div className="flex justify-center items-center my-[80px]">
          <div className="relative flex flex-col items-start px-4 sm:px-6 md:px-0 max-w-[1200px] w-full">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[36px] sm:text-[56px] md:text-[72px] lg:text-[87px] font-semibold text-[#334047] leading-[1.15] text-left"
            >
              <span className="text-[#f7a51e] relative z-10 pr-2">
                One-Stop
              </span>{" "}
              Shop for All{" "}
              <span className="inline-flex align-middle ml-2">
                <ImageCarousel />
              </span>
              <br />
              Automation <span className="text-[#f7a51e]">Needs</span>
            </motion.h1>
          </div>
        </div>

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

        {/* Featured Cards Section started*/}
        <section className="w-full px-4 py-12 mt-[80px] ">
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

        <section className="mb-[50px] px-4 sm:px-8 md:px-[60px] lg:px-[120px] flex flex-col-reverse lg:flex-row items-stretch justify-between gap-12">
          {/* Left Text Content */}
          <motion.div
            className="max-w-xl lg:max-w-[588px] w-full lg:w-1/2 flex flex-col justify-center min-h-[500px] lg:min-h-[650px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4 text-center lg:text-left">
                PORTFOLIO
              </h2>
              <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4 text-center lg:text-left">
                More Than Just A Service Provider
              </p>
              <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] mb-6 text-center lg:text-left">
                At EcomHyped, our primary objective is to help our clients
                maximize their return on investment through innovative and
                effective automation solutions. We are a team of passionate
                professionals with years of experience in the industry,
                dedicated to helping businesses achieve their full potential and
                profitability. Our team is driven by a shared commitment to
                helping our clients achieve their business goals, and we take
                pride in delivering exceptional customer service and using the
                latest technology to deliver the best possible results.
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
                    className="px-[48px] py-[14px] sm:px-[56px] mt-[10px] sm:py-[16px] border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md
            hover:bg-[#F7A51E] hover:text-white hover:shadow-lg
            active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2
            transition-all duration-300 ease-out"
                  >
                    Schedule a Call
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center min-h-[500px] lg:min-h-[650px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="w-full max-w-[588px] h-full rounded-2xl overflow-hidden relative flex flex-col justify-center items-center gap-4 px-4"
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
              <div className="relative w-full max-w-[500px] h-[400px] lg:h-[500px]">
                <Image
                  src="/images/portfolio-illustration.png"
                  alt="illustration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 500px"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 py-10">
          {/* Heading */}
          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-[20px] sm:text-[22px] md:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide">
              ECOM HYPED
            </p>
            <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug">
              Comprehensive E-commerce Solutions
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: "/images/frame-29.png",
                title: "Account Creation and Listing Setup",
                desc: "Simplify Amazon setup for new sellers with our account and listing creation services. Create listings successfully.",
              },
              {
                icon: "/images/frame-30.png",
                title: "Store Launch and Amazon Wholesale",
                desc: "Simplify Amazon setup for new sellers with our account and listing creation services. Create listings successfully.",
              },
              {
                icon: "/images/frame-31.png",
                title: "Brand Management and PPC Advertising",
                desc: "Boost Amazon Presence with Brand Management and PPC Services. Optimize Listings, Reach Target Audience, Stand Out.",
              },
              {
                icon: "/images/frame-28.png",
                title: "Content and Listing Optimization",
                desc: "Optimize content and listings for FBA success. Rank higher, increase visibility, and drive sales.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 items-center text-center sm:items-start sm:text-left max-w-[288px] mx-auto sm:mx-0"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={74}
                  height={74}
                />
                <h4 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#334047] leading-tight xs:whitespace-nowrap sm:whitespace-normal">
                  {item.title}
                </h4>

                <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#45565F] leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
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
        </div>

        <div className="my-[80px]">
          <StatsHeroSection
            heading={"Collaborating for Success"}
            description={
              "At EcomHyped, we believe that collaboration is key to success. We partner with a range of companies and organizations to provide our clients with the best possible solutions and support. Our partners include e-commerce platforms, product manufacturers and marketing agencies."
            }
          />
        </div>

        {/* Testimonials Section Started */}

        <section className="my-[80px] px-4 sm:px-6 md:px-10 lg:px-[120px] max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
              HEAR IT FROM OUR CLIENTS
            </h2>
            <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-tight max-w-4xl">
              Authentic Experiences, Real Success Stories
            </p>
            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mt-4 max-w-3xl">
              Our partners share how <b>EcomHyped</b>  has helped them achieve their
              Amazon business goals and maximize profitability.
            </p>
          </div>

          {/* Video Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Video 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-full h-[300px] sm:h-[400px] md:h-[350px] lg:h-[450px] rounded-[20px] p-[5px] bg-transparent overflow-hidden"
              style={{
                background:
                  "linear-gradient(to right, rgba(2, 111, 114, 0.75), rgba(247, 165, 30, 0.55))",
              }}
            >
              <div className="w-full h-full rounded-[15px] overflow-hidden bg-black">
                <video
                  src="/Videos/testimonial-1.mp4"
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
            </motion.div>

            {/* Video 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-full h-[300px] sm:h-[400px] md:h-[350px] lg:h-[450px] rounded-[20px] p-[5px] bg-transparent overflow-hidden"
              style={{
                background:
                  "linear-gradient(to left, rgba(2, 111, 114, 0.75), rgba(247, 165, 30, 0.55))",
              }}
            >
              <div className="w-full h-full rounded-[15px] overflow-hidden bg-black">
                <video
                  src="/Videos/testimonial-2.mp4"
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
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section Ended */}

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-[16px] px-4 py-16 max-w-7xl mx-auto">
          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
              PORTFOLIO
            </h2>

            <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
              Real Results for Real Clients – Our Success Stories
            </p>

            <p className="text-[#45565F] text-[18px] font-medium sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              At EcomHyped, we measure our success by the success of our
              clients. We have helped numerous e-commerce businesses achieve
              their goals and maximize their profits, and we are proud to share
              their success stories with you. From new sellers launching their
              first products to established businesses expanding their reach and
              profitability, we have helped a wide range of clients achieve
              their dreams.
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
        </div>

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
              PORTFOLIO
            </h2>

            <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
              Dedicated to Your Success - Our Commitment{" "}
            </p>

            <p className="text-[#45565F] text-[18px] font-medium sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              At EcomHyped, we are committed to helping our clients succeed. We
              understand that the world of e-commerce can be complex and
              challenging, and we are here to help our clients navigate this
              landscape with confidence and ease. We are dedicated to providing
              the best possible service and support, and we are always looking
              for ways to improve and innovate. We believe in building long-term
              relationships with our clients, and we are committed to their
              success, no matter what it takes.
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
                {`Let's Connect - Get in Touch`} <br />
                Ecom Hyped!
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-white max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                At EcomHyped, we are always happy to connect with new and
                potential clients. If you are interested in learning more about
                our services or how we can help you succeed in the world of
                e-commerce, we encourage you to get in touch. You can contact us
                by phone, email, or through our website, and we will be happy to
                answer any questions you may have. Lets connect and start
                working together to achieve your e-commerce goals.
              </motion.p>

              <div className="mt-6">
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

export default About;
