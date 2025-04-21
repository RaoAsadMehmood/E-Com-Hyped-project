'use client';
import React from 'react';
import Image from 'next/image';
import ImageCarousel from '../components/ImageCarousel';
import { MdOutlineArrowRight } from 'react-icons/md';
import FeatureCard from '../components/FeatureCard';
import { motion } from 'framer-motion';
import AutomationSlider from '../components/AutomationSlider';
import AnimatedStats from '../components/AnimatedStats';


const Home = () => {
    const automationSlides = [
        { id: 1, imageSrc: '/images/amazon-fba-automation.png', title: 'Amazon FBA Automation' },
        { id: 2, imageSrc: '/images/walmart-automation.png', title: 'Walmart Automation' },
        { id: 3, imageSrc: '/images/tiktok-automation.png', title: 'TikTok Automation' },
        { id: 4, imageSrc: '/images/shopify-automation.png', title: 'Shopify Automation' },
        { id: 5, imageSrc: '/images/youtube-automation.png', title: 'YouTube Automation' },
        { id: 6, imageSrc: '/images/etsy-automation.png', title: 'Etsy Automation' },
        { id: 7, imageSrc: '/images/amazon-automation.png', title: 'Amazon Automation' },
      ];
      

    return (
        <>
            <div
                className='w-full min-h-screen flex justify-center items-center relative'
                style={{
                    backgroundImage: 'url("/Images/HeroCover.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Optional Grid Overlay */}
                {/* <div className='absolute inset-0 bg-[url("/path-to-grid-pattern.png")] bg-cover opacity-20'></div> */}

                {/* Main Content */}
                <div className='relative flex flex-col items-start px-4 sm:px-6 md:px-0 max-w-[1200px] w-full'>

                    {/* Animated Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className='text-[50px] sm:text-[70px] md:text-[87px] font-semibold text-white leading-tight text-left text-shadow-lg/40'
                    >
                        <span className='text-[#f7a51e]'>One-Stop</span> Shop for ALL
                        <span className='inline-flex items-center ml-2 relative'>
                            <ImageCarousel />
                        </span>
                        <br />
                        Automation <span className='text-[#f7a51e]'>Needs</span>
                    </motion.h1>

                    {/* Description + Button */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.3
                                }
                            }
                        }}
                        className='flex flex-col md:flex-row w-full mt-6 gap-6'
                    >
                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className='text-[24px] font-semibold sm:text-base md:text-lg text-[#cdd8dd] max-w-[600px] text-left leading-relaxed'
                        >
                            Welcome to EcomHyped, where we offer a range of services to help you take your Amazon Automation Store to the next level.
                        </motion.p>

                        {/* Schedule Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="md:ml-auto md:mt-auto relative"
                        >
                            <div className="relative flex flex-col items-center">
                                <div className="px-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full flex justify-center items-center">
                                    <span className="flex justify-center items-center text-lg sm:text-xl md:text-2xl text-black font-semibold">
                                        Schedule A Call
                                        <MdOutlineArrowRight size={24} className="sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]" color="#026F72" />
                                    </span>
                                </div>

                                {/* Rotating Image */}
                                <div className="rotating-image">
                                    <Image
                                        src={'/Images/btn get started.png'}
                                        alt={'Schedule a call button'}
                                        width={230}
                                        height={230}
                                        className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px]"
                                    />
                                </div>
                            </div>
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
            <section className="w-full px-4 py-16 mt-[80px] min-h-screen">
                <motion.div
                    className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 items-center lg:items-start"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left Column: Text */}
                    <motion.div
                        className="col-span-1 flex flex-col gap-3 text-center lg:text-left items-center lg:items-start"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-[20px] sm:text-[24px] bg-gradient-to-r from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide">
                            FEATURES
                        </h3>
                        <p className="text-[36px] sm:text-[46px] text-[#334047] font-semibold leading-tight">
                            Best Value <br /> For You
                        </p>
                        <p className="text-[16px] sm:text-[18px] text-[#45565F] mt-2">
                            We provide services with <br className="sm:hidden" /> the best results
                        </p>
                    </motion.div>

                    {/* Right Column: Feature Cards */}
                    <motion.div
                        className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <FeatureCard
                            imageSrc="/Images/Frame 29.png"
                            heading="Transparency"
                            description="Onboarding with clear, genuine and realistic expectations."
                        />
                        <FeatureCard
                            imageSrc="/Images/Frame 28.png"
                            heading="Accountability"
                            description="On-time Reporting, Analytics and Top-notch Customer Service"
                        />
                        <FeatureCard
                            imageSrc="/Images/Frame 27.png"
                            heading="Collecting Profits"
                            description="With our proven and proprietary FBA formula our investors see steady sales growth and results."
                        />
                    </motion.div>
                </motion.div>
            </section>
            {/* Featured Cards Section ending*/}


            {/* Video Section started */}
            <section className="w-full flex justify-center items-center px-4">
                {/* Outer wrapper with gradient border and rounded corners */}
                <div className="relative w-full max-w-[1200px] h-[400px] sm:h-[666px] rounded-[40px] p-[7px] bg-transparent"
                    style={{
                        background: 'linear-gradient(to right, rgba(247, 165, 30, 1), rgba(247, 165, 30, 0.3))'
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
            <section className=' w-full min-h-screen'>
                <div className=" flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0 mx-[20px] sm:mx-[60px] lg:mx-[120px] mt-[80px] sm:mt-[80px]">
                    {/* Left Side: Heading */}
                    <motion.p
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-[32px] sm:text-[40px] lg:text-[46px] text-[#334047] font-semibold leading-tight"
                    >
                        What Our Agency Made <br /> For You
                    </motion.p>

                    {/* Right Side: Services + Description */}
                    <motion.div
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-2 items-start text-left"
                    >
                        <p className="text-[20px] sm:text-[22px] md:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide">
                            SERVICES
                        </p>
                        <p className="text-[#45565F] text-[16px] sm:text-[18px] font-semibold leading-relaxed">
                            We present many films from various main categories, lets{" "}
                            <br className="hidden sm:block" />
                            choose and
                        </p>
                    </motion.div>
                </div>

                {/* Slider  */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="container mx-auto py-8">
                        <AutomationSlider slides={automationSlides} autoSlideInterval={3000} />
                    </div>
                </motion.div>
            </section>

            {/* Slider Section  ended  */}


            {/* Animated Stats Started */}
            <div className="w-full bg-[#026F72] my-[60px] py-[40px] sm:py-[60px]">
                <div className="max-w-[1440px] mx-auto px-[20px] sm:px-[60px] lg:px-[120px] flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
                    {/* Left Side: Heading */}
                    <motion.p
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-white text-[46px] sm:text-[40px] lg:text-[46px] font-semibold leading-tight md:max-w-[45%]"
                    >
                        Work with a Team <br />
                        of Experts
                    </motion.p>

                    {/* Right Side: Services + Description */}
                    <motion.div
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
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
                    <AnimatedStats />
                </div>
            </div>


            {/* Animated Stats Ended */}






        </>
    );
};

export default Home;