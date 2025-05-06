'use client';

import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import TestimonialSlider from '../components/TestimonialSlider';

const OurStory = () => {
  return (

    <>
      <div className='overflow-x-hidden'>
        <div
          className="w-full min-h-screen flex items-center justify-center relative px-4"
          style={{
            backgroundImage: 'url("/images/hero-cover.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            {/* Animated Text Section */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-white font-semibold leading-tight text-left text-shadow-lg/40 text-[40px] sm:text-[60px] md:text-[75px] lg:text-[87px]">
                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                  Our
                </span>{" "}
                Story
              </h1>
              <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full sm:max-w-[500px] md:max-w-[580px] lg:max-w-[650px] xl:max-w-[700px]">
                Welcome to EcomHyped, where we offer a range of services to help you
                take your Amazon Automation Store to the next level.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Hero Section Ended */}



        <section className="flex flex-col md:flex-row justify-center items-start gap-10 px-4 sm:px-8 md:px-[60px] lg:px-[120px] my-20">
          {/* Our Mission Card */}
          <motion.div
            className="w-full max-w-[520px] flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/images/target-frame.png"
              alt="Target-frame"
              width={104}
              height={104}
              className="mb-6"
            />
            <h3 className="text-[#334047] text-[34px] font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-[#45565F] text-[18px] leading-relaxed font-semibold">
              Our mission is to maximize our clients return on investment through tailored FBA automation solutions that streamline operations, increase sales, and maximize profitability. We are committed to helping our clients recoup their initial investment within 12 months and build long-lasting partnerships based on trust, transparency, and shared success.
            </p>
          </motion.div>

          {/* Our Vision Card */}
          <motion.div
            className="w-full max-w-[520px] flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <Image
              src="/images/vision-frame.png"
              alt="Vision-frame"
              width={104}
              height={104}
              className="mb-6"
            />
            <h3 className="text-[#334047] text-[34px] font-semibold mb-4">
              Our Vision
            </h3>
            <p className="text-[#45565F] text-[18px] leading-relaxed font-semibold">
              To be the leading provider of FBA automation solutions, helping businesses of all sizes achieve their maximum potential and profitability through cutting-edge technology and expert support.
            </p>
          </motion.div>
        </section>


        <section className="my-[100px] px-4 sm:px-8 md:px-[60px] lg:px-[120px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <motion.div
            className="max-w-xl lg:max-w-[588px] w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4 text-center lg:text-left">
              PORTFOLIO
            </h2>
            <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4 text-center lg:text-left">
              More Than Just A Service Provider
            </p>
            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] mb-6 text-center lg:text-left">
              At EcomHyped, our primary objective is to help our clients maximize their return on investment through innovative and effective automation solutions. We are a team of passionate professionals with years of experience in the industry, dedicated to helping businesses achieve their full potential and profitability. Our team is driven by a shared commitment to helping our clients achieve their business goals, and we take pride in delivering exceptional customer service and using the latest technology to deliver the best possible results.
            </p>
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Link href="#">
                <button className="px-[48px] py-[14px] sm:px-[56px] sm:py-[16px] border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md 
        hover:bg-[#F7A51E] hover:text-white hover:shadow-lg 
        active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2 
        transition-all duration-300 ease-out">
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


        {/* Testimonials Section Started */}
        <section
          className="w-full min-h-screen px-6 py-10 lg:py-20"
          style={{
            backgroundImage: 'url("/images/Union.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
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




        {/* Companies Logo  */}
        <div className="flex flex-wrap justify-around items-center gap-6 sm:gap-10 py-[55px] px-4 bg-[#ecf9f9]">
          {[
            '/images/company-logo1.png',
            '/images/company-logo2.png',
            '/images/company-logo3.png',
            '/images/company-logo4.png',
            '/images/company-logo5.png',
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
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
  )
}

export default OurStory