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

const ProductResearch = () => {
  //    { animated stats data}
  const statsData = [
    { endValue: 257, label: "Success Stories", suffix: "+" },
    { endValue: 1.7, label: "Revenue", suffix: "M" },
    { endValue: 1810, label: "Reviews", suffix: "+" },
    { endValue: 10253, label: "Brands Catalog", suffix: "+" },
  ];

  const accordionItems = [
    {
      title: "What is product research in Amazon FBA?",
      content:
        "Product research is the process of finding profitable, in-demand products to sell on Amazon. It involves analyzing trends, competition, and market demand to choose products that can generate consistent sales and strong profit margins.",
    },
    {
      title: "What is product sourcing?",
      content:
        "Product sourcing is the process of finding reliable suppliers to provide the products you want to sell. This includes identifying manufacturers or wholesalers, negotiating pricing, and ensuring product quality and availability for your Amazon store.",
    },
    {
      title: "Why is product research important for Amazon sellers?",
      content:
        "Effective product research helps you avoid selling saturated or low-demand products. It increases your chances of success by helping you choose items with good market potential, less competition, and higher profitability.",
    },
    {
      title: "How can you help with product sourcing?",
      content:
        "We help you find trusted suppliers, both local and international, based on your product needs and goals. Our sourcing service includes supplier verification, quality checks, and logistics support to ensure a smooth and profitable supply chain.",
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
                Your Online Business with Our Expert{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Product Research
                </span>{" "}
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Sourcing Services
                </span>{" "}
              </h1>
              <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full ">
                Are you an Amazon seller struggling to find winning products or
                reliable suppliers? Our Product Research & Sourcing services are
                designed to help you discover high-demand, low-competition
                products and connect with trusted manufacturers. With years of
                industry expertise, we streamline the entire sourcing process
                saving you time, reducing risk, and helping you scale your
                Amazon business with confidence.
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

        <div className="my-[80px] px-4 sm:px-6 md:px-10 lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10"
          >
            {/* Left Section */}
            <div className="flex flex-col items-start max-w-full lg:max-w-[400px]">
              <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-3 sm:mb-4">
                ABOUT US
              </h2>
              <p className="text-[#334047] text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-semibold leading-snug">
                Product Research & Sourcing
              </p>
            </div>

            {/* Right Section */}
            <p className="text-[#45565F] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed max-w-full lg:max-w-[700px] text-left">
              Our Product Research & Sourcing service focuses on identifying
              high-potential products with strong demand and low competition. We
              use data-driven strategies to uncover profitable niches and
              connect you with verified suppliers for reliable sourcing. From
              market analysis to supplier vetting, we handle the groundwork so
              you can launch and scale confidently on Amazon.
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
              Fuel Your Amazon Growth with
            </h2>
            <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4">
              Proven Product Research & Sourcing!
            </p>
            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              At Ecom Hyped, we help Amazon sellers discover profitable product
              opportunities and connect with trusted suppliers. Our data-driven
              research and sourcing strategies are designed to minimize risk,
              reduce guesswork, and accelerate your journey to consistent sales.
              Focus on scaling while we take care of finding what sells.
            </p>
            <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
              <li>
                In-depth market research to identify trending and high-demand
                products
              </li>
              <li>
                Access to verified suppliers for reliable and cost-effective
                sourcing
              </li>
              <li>
                Competitor analysis to uncover gaps and winning strategies
              </li>
              <li>
                Support in negotiating with suppliers and managing communication
              </li>
              <li>
                End-to-end sourcing solution tailored to your business goals
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
              src="/images/wrench-illustration.png" // Update if needed
              alt="Product Sourcing Illustration"
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
            <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
              Benefits of Using Our Research & Sourcing Services
            </p>

            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              Our Research & Sourcing Services save you time and help maximize
              profits by identifying high-potential products, connecting you
              with reliable suppliers, and simplifying the entire sourcing
              process. Partner with us to streamline your Amazon operations and
              scale your business with confidence.
            </p>

            <ul className="list-disc list-outside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-3 mb-6">
              <li>
                <b>Trusted Suppliers:</b> Access high-demand, low-competition
                products at competitive prices through our verified supplier
                network.
              </li>
              <li>
                <b>Streamlined Sourcing Process:</b> We handle product research,
                supplier vetting, and negotiations so you can focus on scaling
                your Amazon business.
              </li>
              <li>
                <b>Competitor Insights:</b> Our in-depth competitor analysis
                uncovers market gaps and winning strategies to give you a
                competitive edge.
              </li>
              <li>
                <b>Cost Optimization:</b> Minimize sourcing costs and overhead
                with our data-driven approach to boost your profit margins.
              </li>
              <li>
                <b>Scalable Growth:</b> Achieve your business goals faster with
                tailored solutions designed for long-term success.
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
              How Our Product Research & Sourcing Services Work
            </p>

            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
              Our Product Research & Sourcing Services help you identify
              high-potential products, connect with trusted suppliers, and
              streamline the sourcing process — saving time and reducing costs.
              While you focus on scaling your Amazon business, we take care of
              the groundwork to help drive profitability within 12 months.
            </p>

            <ul className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-2 mb-6">
              <li>
                <b>Product Research:</b> We use data-driven strategies to
                discover high-demand, low-competition products tailored to your
                niche and goals.
              </li>
              <li>
                <b>Supplier Connections:</b> We vet and connect you with
                reliable suppliers, securing quality products at competitive
                prices.
              </li>
              <li>
                <b>Market Analysis:</b> In-depth research into market trends and
                competitors helps you stay ahead with strategic product
                decisions.
              </li>
              <li>
                <b>Profit-Focused:</b> Our tailored sourcing solutions and
                12-month roadmap are designed to optimize costs and maximize
                profitability.
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

export default ProductResearch;
