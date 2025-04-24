'use client';
import React from 'react';
import Image from 'next/image';
import ImageCarousel from '../components/ImageCarousel';
import { MdOutlineArrowRight } from 'react-icons/md';
import FeatureCard from '../components/FeatureCard';
import { motion } from 'framer-motion';
import AutomationSlider from '../components/AutomationSlider';
import AnimatedStats from '../components/AnimatedStats';
import AmazonCarousel from '../components/AmazonCarousel';
import Link from 'next/link';
// import ProgressBar from '../components/ProgressBar';


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
                    backgroundImage: 'url("/images/hero-cover.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >

                {/* Main Content */}
                <div className='relative flex flex-col items-start px-4 sm:px-6 md:px-0 max-w-[1200px] w-full'>

                    {/* Animated Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-[50px] sm:text-[70px] md:text-[87px] font-semibold text-white leading-tight text-left text-shadow-lg/40"
                    >
                        <span
                            className="text-[#f7a51e] inline-block relative z-10 px-6 py-2"
                        >
                            <span
                                className="absolute inset-0 bg-no-repeat bg-contain bg-center z-[-1]"
                                style={{
                                    backgroundImage: "url('/images/one-stop-cover.png')",
                                }}
                            />
                            One-Stop
                        </span>
                        {" "}
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
                    className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 items-start"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* TEXT SECTION (always appears first) */}
                    <motion.div
                        className="lg:col-span-1 flex flex-col gap-3 text-center sm:text-center lg:text-left items-center sm:items-center lg:items-start px-2 sm:px-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-[18px] sm:text-[20px] md:text-[24px] bg-gradient-to-r from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide">
                            FEATURES
                        </h3>

                        <p className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[46px] text-[#334047] font-semibold leading-tight">
                            Best Value <span className="hidden sm:inline"><br /></span> For You

                        </p>

                        <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#45565F] mt-1 sm:mt-2 leading-relaxed">
                            We provide services with <br className="hidden sm:block lg:hidden" /> the best results
                        </p>
                    </motion.div>


                    {/* FEATURE CARDS SECTION */}

                    <motion.div
                        className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[ // wrap cards in map to reuse animation
                            {
                                imageSrc: "/Images/Frame 29.png",
                                heading: "Transparency",
                                description: "Onboarding with clear, genuine and realistic expectations.",
                            },
                            {
                                imageSrc: "/Images/Frame 28.png",
                                heading: "Accountability",
                                description: "On-time Reporting, Analytics and Top-notch Customer Service",
                            },
                            {
                                imageSrc: "/Images/Frame 27.png",
                                heading: "Collecting Profits",
                                description: "With our proven and proprietary FBA formula our investors see steady sales growth and results.",
                            },
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
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
                        What Our Agency Made <br className='hidden sm:inline' /> For You
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
                        transition={{ duration: 0.6, ease: 'easeOut' }}
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

            {/* Amazon Carousel section started */}
            <motion.div
                className="flex flex-col lg:flex-row items-start gap-8 max-w-6xl mx-auto px-6 py-14"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <AmazonCarousel />

                <div className="flex-1 w-full max-w-[600px]">
                    <motion.h2
                        className="text-[20px] sm:text-[22px] md:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-[16px]"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        WHAT YOU CAN EXPECT FROM
                    </motion.h2>

                    <motion.h3
                        className="text-[46px] sm:text-[32px] md:text-[36px] font-bold text-[#334047] mt-2 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Ecom Hyped
                    </motion.h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                        {[...Array(4)].map((_, index) => {
                            const cardContent = [
                                {
                                    img: "/images/frame-29.png",
                                    title: "Account Creation and Listing Setup",
                                    desc: "Simplify Amazon setup for new sellers with our account and listing creation services. Create listings successfully."
                                },
                                {
                                    img: "/images/frame-30.png",
                                    title: "Store Launch and Amazon Wholesale",
                                    desc: "Simplify Amazon setup for new sellers with our account and listing creation services. Create listings successfully."
                                },
                                {
                                    img: "/images/frame-31.png",
                                    title: "Brand Management and PPC Advertising",
                                    desc: "Boost Amazon presence with Brand Management and PPC Services. Optimize Listings, Reach Target Audience, Stand Out."
                                },
                                {
                                    img: "/images/frame-29.png",
                                    title: "Content and Listing Optimization",
                                    desc: "Optimize content and listings for FBA success. Rank higher, increase visibility, and drive sales."
                                }
                            ];

                            const { img, title, desc } = cardContent[index];

                            return (
                                <motion.div
                                    key={index}
                                    className="p-2"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.2, duration: 0.5, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-[74px] h-[74px] flex items-center justify-center rounded-md bg-[#F7A51E] overflow-hidden mb-3">
                                        <Image src={img} alt={title} width={74} height={74} />
                                    </div>
                                    <h4 className="text-[24px] font-semibold text-[#334047] leading-tight mb-2">{title}</h4>
                                    <p className="text-[18px] text-[#45565F] leading-normal">{desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        className="mt-6 flex justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <Link href="">
                            <button className="px-[48px] py-[14px] sm:px-[56px] sm:py-[16px] border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md 
          hover:bg-[#F7A51E] hover:text-white hover:shadow-lg 
          active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2 
          transition-all duration-300 ease-out">
                                Schedule a Call
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Amazon Carousel section ended */}

            <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 px-4 py-12">
                {/* Text Section */}
                <motion.div
                    className=""
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4 text-center lg:text-left">
                        PORTFOLIO
                    </h2>

                    <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4 text-center lg:text-left">
                        Start Selling Today
                    </p>

                    <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] mb-3 text-center lg:text-left">
                        Starting to sell on Amazon can be overwhelming, especially for <br className="hidden lg:block" />
                        new sellers. That is why we offer Amazon FBA services to help you <br className="hidden lg:block" />
                        get started.
                    </p>

                    <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] text-center lg:text-left">
                        Our team will assist you in setting up your wholesale account, <br className="hidden lg:block" />
                        negotiating pricing, and managing your inventory, so you can start <br className="hidden lg:block" />
                        selling your products on Amazon in no time.
                    </p>

                    <div className="mt-6 flex justify-center lg:justify-start">
                        <Link href="">
                            <button className="px-[48px] py-[14px] sm:px-[56px] sm:py-[16px] border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md 
  hover:bg-[#F7A51E] hover:text-white hover:shadow-lg 
  active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2 
  transition-all duration-300 ease-out">
                                Schedule a Call
                            </button>

                        </Link>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <Image
                        src="/images/illustration.png"
                        alt="Illustration"
                        width={588}
                        height={607}
                        className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[588px] h-auto"
                    />
                </motion.div>
            </div>




            <motion.div
                className="my-[160px] px-4 lg:px-[120px] flex flex-col lg:flex-row justify-between items-center gap-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                {/* Image with entry animation */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={'/images/marketing-illustration.png'}
                        alt={'Marketing Illustration'}
                        width={588}
                        height={532}
                        className="w-full max-w-[588px] h-auto"
                    />
                </motion.div>

                {/* Text content block */}
                <motion.div
                    className="max-w-[700px] text-center lg:text-left"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
                        PORTFOLIO
                    </h2>

                    <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4">
                        Maximize Your Investment with Our Automation Services
                    </p>

                    <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-4">
                        At Ecom Hyped, we understand the importance of maximizing your investment and achieving the highest possible return on investment. That is why we offer cutting-edge automation solutions designed to streamline your FBA operations, boost your sales, and increase your profitability.
                    </p>

                    <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                        Our team of experts will work with you to create a tailored automation strategy that aligns with your business goals and helps you stay ahead of the competition. From inventory management to order fulfillment, we have got you covered. Choose our services today and take the first step towards achieving your business goals.
                    </p>

                    <motion.div
                        className="flex justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.4, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <Link href="">
                            <button className="px-[48px] py-[14px] sm:px-[56px] sm:py-[16px] border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md 
        hover:bg-[#F7A51E] hover:text-white hover:shadow-lg 
        active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2 
        transition-all duration-300 ease-out">
                                Schedule a Call
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>


            {/* Testimonials Section Started */}
            {/* <section>
                <div className='w-full min-h-screen flex justify-around items-center'
                    style={{
                        backgroundImage: 'url("/images/Union.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4">
                        They Satisfied With <br />
                        Our Service
                    </p>
                    <div>
                        <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
                            TESTIMONIALS
                        </h2>
                        <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                            How they respond to the results of the work we do for them, let’s we know
                        </p>
                    </div>
                    <Image
                    src={'/images/inverted-comma.png'}
                    alt= {''}
                    width={'204'}
                    height={'183'}
                    />


                </div>
            </section> */}

            {/* Testimonials Section Ended */}

        </>
    );
};

export default Home;