"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import AnimatedStats from "../components/AnimatedStats";
import { StatsHeroSection } from "../components/StatsSection";
import Accordion from "../components/Accordion";
import { StatsHero } from "../components/StatsBG";

const Services = () => {
  //    { animated stats data}
  const statsData = [
    { endValue: 257, label: "Success Stories", suffix: "+" },
    { endValue: 1.7, label: "Revenue", suffix: "M" },
    { endValue: 1810, label: "Reviews", suffix: "+" },
    { endValue: 10253, label: "Brands Catalog", suffix: "+" },
  ];

  const accordionItems = [
    {
      title: "What is online arbitrage?",
      content:
        "Online arbitrage is the practice of buying products at a low price from one online retailer and reselling them at a higher price on another online marketplace.",
    },
    {
      title: "What is Amazon online arbitrage?",
      content:
        "Our FBA automation services offer a monthly ROI of 15% to 18% based on gross sales. However, profits may vary depending on various factors such as inventory, sales, and market trends.",
    },
    {
      title: "What is Amazon FBA online arbitrage?",
      content:
        "Anyone who meets the capital requirements of $20k or more in credit or cash can invest in our FBA automation services. We offer no accreditation requirements, so anyone can be a business owner.",
    },
    {
      title: "How do I get started with online arbitrage?",
      content:
        "To start, you will need a minimum investment of $20k in credit or cash. We will take care of everything else, from setting up your Amazon FBA partnership store to managing inventory and logistics.",
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
                Unleash Your
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Profit Potential
                </span>{" "}
                with Our Online
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Arbitrage Services!
                </span>{" "}
              </h1>
              <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full ">
                Are you looking to invest your money in a profitable venture
                that can yield maximum returns in just 12 months? Look no
                further than Ecomhypeds online arbitrage services! Our company
                specializes in purchasing products from one online marketplace
                or retailer to resell on Amazon, using the Fulfillment by Amazon
                (FBA) online arbitrage service to store and ship the products to
                customers.
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

        <div className="flex justify-center items-center my-[80px] px-4 sm:px-6 md:px-10 lg:px-[120px]">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row items-center gap-10"
          >
            {/* Left Section */}
            <div className="flex flex-col items-start w-full lg:w-5/12">
              {" "}
              <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
                ABOUT US
              </h2>
              <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-2">
                What is Online Arbitrage?
              </p>
            </div>

            {/* Right Section */}
            <p className="text-[#45565F] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed w-full lg:w-7/12 text-left mt-8 lg:mt-0">
              {" "}
              Online arbitrage is a proven method for buying products at a low
              cost and reselling them for a profit on Amazon. This process
              involves finding products on other online marketplaces or
              retailers, purchasing them at a lower price, and then selling them
              on Amazon for a higher price. With Ecomhypeds online arbitrage
              services, we take care of the entiref process for you, from
              sourcing products to shipping them to customers.
            </p>
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
              ONLINE ARBITRAGE:
            </h2>
            <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4">
              Why Choose Ecom Hyped?
            </p>
            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              When it comes to online arbitrage, experience and expertise
              matter. At Ecomhyped, we have a proven track record of success in
              the field of online arbitrage. Our team of experts has years of
              experience in identifying profitable products and optimizing
              listings to maximize sales and profits. We also have a deep
              understanding of the Amazon marketplace and the tools and
              strategies needed to succeed.
            </p>
            <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
              <li>
                Comprehensive product research to find the best deals and
                highest profit margins
              </li>
              <li>
                Extensive optimization of product listings to maximize sales and
                rankings
              </li>
              <li>
                Access to a wide range of online marketplaces and retailers for
                sourcing products
              </li>
              <li>
                A streamlined process that takes care of everything from
                sourcing to shipping
              </li>
              <li>A 12-month profit guarantee for all investors</li>
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
              alt="illustration"
              width={588}
              height={607}
              className="w-full h-auto"
            />
          </motion.div>
        </section>

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
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
              SERVICES
            </h2>

            <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
              Our Online Arbitrage Process
            </p>

            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              At EcomHyped, we have a well-defined process for online arbitrage
              that has been proven to yield maximum profits for our investors.
              Our process involves the following steps:
            </p>
            <ul className="list-disc list-inside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-2 mb-6">
              <li>
                Product Research: Our team of experts conducts comprehensive
                research to identify the best products with high profit margins
              </li>
              <li>
                Purchase and Shipping: We purchase the products at a low cost
                and use FBA to store and ship them to customers.
              </li>
              <li>
                Product Optimization: We optimize the product listings to
                maximize sales and rankings on Amazon.
              </li>
              <li>
                Sales and Profit: We monitor the sales and profit of each
                product and provide regular updates to our investors.
              </li>
              <li>
                Profit Distribution: We distribute the profits to our investors
                on a monthly basis.
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-[16px] px-4 py-16 max-w-7xl mx-auto">
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
              SERVICES
            </h2>

            <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
              Our Approach to Online Arbitrage
            </p>

            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              At EcomHyped, we take a data-driven approach to online arbitrage.
              Our team of experts uses a range of research tools and strategies
              to identify profitable products and optimize listings for maximum
              sales and rankings. Here are just a few of the ways we approach
              online arbitrage:
            </p>
            <ul className=" text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-2 mb-6">
              <li>
                <b>Data Analysis:</b> We use a range of data analysis tools to
                identify profitable products, including historical sales data,
                competition analysis, and market trends.
              </li>
              <li>
                <b>No Need to Advertising:</b> We are selling the well
                established brands that already have credibility and reviews on
                Amazon. No Advertising and Marketing required selling those
                products.
              </li>
              <li>
                <b>Customer Service:</b> We offer top-notch customer service to
                ensure that your customers are happy and satisfied. This can
                lead to more positive reviews and higher rankings on Amazon.
              </li>
            </ul>
          </motion.div>
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

export default Services;
