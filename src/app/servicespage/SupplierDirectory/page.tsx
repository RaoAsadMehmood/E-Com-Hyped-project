'use client';
import React from 'react'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import Link from 'next/link';
import Image from 'next/image';
import AnimatedStats from '../../components/AnimatedStats';
import { StatsHeroSection } from '../../components/StatsSection';
import Accordion from '../../components/Accordion';
import { StatsHero } from '../../components/StatsBG';


const AmazonFbaWholesale = () => {

    //    { animated stats data}
    const statsData = [
        { endValue: 1430, label: 'Happy Clients', suffix: '+' },
        { endValue: 250, label: 'Revenue', suffix: '+' },
        { endValue: 1810, label: 'Reviews', suffix: '+' },
        { endValue: 10253, label: 'Brands Catalog', suffix: '+' }
    ];

    const accordionItems = [
        {
            title: 'What is a Supplier Directory?',
            content:
                "A supplier directory is a curated list or platform that connects e-commerce sellers with verified manufacturers, wholesalers, and distributors. It helps you discover reliable suppliers quickly, saving you hours of research and reducing the risk of dealing with untrustworthy sources.",
        },
        {
            title: 'How can Ecom Hypeds Supplier Directory help my Amazon business?',
            content:
                "Ecom Hypeds Supplier Directory gives you access to a network of trusted, pre-vetted suppliers across multiple product categories. This means you can find high-quality products at competitive prices, reduce sourcing risks, and scale your Amazon business faster and more efficiently.",
        },
        {
            title: 'Are the suppliers in your directory verified?',
            content:
                "Yes, every supplier listed in our directory goes through a thorough vetting process. We verify their business credentials, product quality, shipping capabilities, and past performance with Amazon sellers to ensure they meet our standards for reliability and professionalism.",
        },
        {
            title: 'Do I need experience to use the Supplier Directory?',
            content:
                "Not at all! Whether you are just starting out or are an experienced Amazon seller, our Supplier Directory is designed to be easy to use. You can filter suppliers by category, region, or product type, and our team is available to guide you through the selection process if needed.",
        },
    ];


    return (

        <>
            < Navbar />

            <div className='overflow-x-hidden'>
                <div
                    className="w-full min-h-screen flex items-center justify-center relative px-4 "
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
                            <h1 className="text-white font-semibold leading-tight text-left text-shadow-lg/40 text-[40px] sm:text-[60px] md:text-[70px] lg:text-[87px]">
                                Grow Your Business With Our
                                {" "}
                                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                                    Supplier Directory
                                </span>{" "}

                                <span className="text-[#f7a51e] inline-block relative z-10 px-2">
                                    Services
                                </span>{" "}
                            </h1>
                            <p className="mt-4 text-[#cdd8dd] font-medium text-left text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-full ">
                                Struggling to find reliable suppliers for your Amazon store? Our curated Supplier Directory connects you with verified,
                                trustworthy manufacturers and wholesalers across the globe. Whether you are launching a new product or scaling your existing store,
                                our directory saves you hours of research and helps you source quality products faster, safer, and smarter.
                            </p>
                            <Link href="#">
                                <button className="mt-[20px] px-[48px] py-[14px] sm:px-[56px] sm:py-[16px] border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md 
        hover:bg-[#F7A51E] hover:text-white hover:shadow-lg 
        active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2 
        transition-all duration-300 ease-out">
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
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10"
                    >
                        {/* Left Section */}
                        <div className="flex flex-col items-start max-w-full lg:max-w-[400px]">
                            <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-3 sm:mb-4">
                                ABOUT US
                            </h2>
                            <p className="text-[#334047] text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-semibold leading-snug">
                                Supplier Directory
                            </p>
                        </div>

                        {/* Right Section */}
                        <p className="text-[#45565F] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed max-w-full lg:max-w-[700px] text-left">
                            Our Supplier Directory service offers a curated list of trusted and verified suppliers to help you source high-quality products with
                            confidence. From finding the right manufacturer to ensuring reliable communication, we simplify the sourcing process—saving you time,
                            reducing risks, and helping you scale your Amazon business faster.
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
                            Power Up Your Product Sourcing
                        </h2>
                        <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug mb-4">
                            With Our Trusted Supplier Directory
                        </p>
                        <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                            Stop wasting time on unreliable suppliers. Our curated Supplier Directory connects you directly with vetted, high-quality manufacturers and wholesalers worldwide. Whether you’re launching your first product or scaling an existing brand, we help simplify your sourcing journey—giving you more confidence, better margins, and faster growth.
                        </p>
                        <ul className="list-disc list-inside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-2 mb-6">
                            <li>Access a hand-picked network of reliable and verified suppliers</li>
                            <li>Eliminate risks of scams, low-quality goods, and delayed shipments</li>
                            <li>Save time with ready-to-contact supplier info and sourcing support</li>
                            <li>Get detailed product sourcing guides and negotiation tips</li>
                            <li>Grow your business with suppliers you can trust</li>
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
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
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
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
                            Benefits of Using Our Supplier Directory
                        </p>

                        <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                            EcomHyped’s Supplier Directory simplifies your product sourcing journey by connecting you with verified and reliable manufacturers and wholesalers. Save time, reduce risk, and build stronger supplier relationships—all in one place.
                        </p>

                        <ul className="list-disc list-inside text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-2 mb-6">
                            <li><b>Verified Suppliers:</b> Get access to a curated list of trusted and thoroughly vetted suppliers.</li>
                            <li><b>Global Reach:</b> Discover manufacturers and wholesalers from key markets around the world.</li>
                            <li><b>Faster Sourcing:</b> Quickly find and contact suppliers with clear details and sourcing support.</li>
                            <li><b>Risk Reduction:</b> Avoid scams, delays, and poor-quality products through our trusted network.</li>
                            <li><b>Business Growth:</b> Source with confidence and scale your brand with reliable partnerships.</li>
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
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
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
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
                            SERVICES
                        </h2>

                        <p className="text-[#334047] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-snug mb-6">
                            How Our Supplier Directory Service Works
                        </p>

                        <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mb-6">
                            Our supplier directory connects you with pre-vetted, reliable manufacturers and wholesalers worldwide. From sourcing quality products to building trustworthy partnerships, our platform empowers you to find the right suppliers and grow your business with confidence.
                        </p>

                        <ul className=" text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] space-y-2 mb-6">
                            <li><b>Vetted Suppliers:</b> Gain instant access to a network of trusted and verified global suppliers.</li>
                            <li><b>Easy Sourcing:</b> Find the right supplier based on category, region, or MOQs in just a few clicks.</li>
                            <li><b>Transparent Info:</b> View clear supplier profiles with contact details, ratings, and business history.</li>
                            <li><b>Fast Connections:</b> Streamline your sourcing process and save weeks of supplier research.</li>
                        </ul>
                    </motion.div>
                </div>



                <div className='my-[80px]'>
                    <StatsHeroSection
                        heading={"Streamline Your Product Sourcing with Our Expert Supplier Directory"}
                        description={"At Ecom Hyped, our supplier directory service connects you with trusted, pre-vetted suppliers across the globe. Whether you are launching a new product or scaling your Amazon business, our platform helps you source with confidence, reduce risk, and save valuable time. Discover suppliers you can rely on—faster, smarter, and with full transparency."}
                    />
                </div>



                <div className="flex flex-col justify-center items-center gap-6">
                    <div className="flex justify-center items-center my-10 px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
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

                    <Link href="">
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

                <StatsHero heading={'Lets Connect - Get in Touch Ecom Hyped!'}
                    description={'At EcomHyped, we are always happy to connect with new and potential clients. If you are interested in learning more about our services or how we can help you succeed in the world of e-commerce, we encourage you to get in touch. You can contact us by phone, email, or through our website, and we will be happy to answer any questions you may have. Lets connect and start working together to achieve your e-commerce goals.'} />

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

            </div >
        </>
    )
}

export default AmazonFbaWholesale