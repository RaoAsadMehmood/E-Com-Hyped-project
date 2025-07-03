"use client"; // This page will use client-side features like motion

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; 
import WhatsAppButton from "../components/WhatsAppButton"; 

const DisclaimerPage: React.FC = () => {
    return (
        <>
            {/* Navbar is typically part of the layout, but if not, include it here */}
            <Navbar />

            <div className="overflow-x-hidden">
                {/* Hero Section for Disclaimer Page Title - Updated Styling */}
                <section
                    className="w-full min-h-screen flex items-center justify-center relative px-4" // min-h-screen from provided snippet
                    style={{
                        backgroundImage: 'url("/images/hero-cover.png")', // Using existing hero background
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                    {/* Inner container for content, consistent with other hero sections */}
                    <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center relative z-10">
                        <motion.h1
                            className="text-white font-semibold leading-tight text-center text-shadow-lg/40 text-[40px] sm:text-[60px] md:text-[75px] lg:text-[87px]"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Disclaimer Page
                        </motion.h1>
                        {/* Removed the <p> tag from hero as it's typically just a title for disclaimer */}
                    </div>
                </section>

                {/* Main Disclaimer Content Section */}
                <section className="my-[80px] px-4 sm:px-6 md:px-10 lg:px-[120px]">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="max-w-4xl w-full mx-auto text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed space-y-6"
                    >
                        <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4 text-center lg:text-left">
                            DISCLAIMER
                        </h2>
                        <p>
                            Any testimonials published on this website are true statements from real customers, yet their full names & true identities
                            may be withheld for privacy and confidentiality reasons. Results may vary based on individual experience. The views and opinions expressed
                            on this website or in any quoted media are those of the speakers and do not necessarily reflect the views or positions of any entities they
                            represent.
                        </p>

                        <p>
                            This site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner.
                            It is believed that this constitutes a fair use of any such copyrighted material as provided for in section 107 of the US Copyright
                            Law to share the speaker&apos;s opinion.
                        </p>

                        <p>
                            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
                        </p>

                        <p>
                            This site is not a part of the Google.com website or Google LLC. Additionally, this site is NOT endorsed by Google LLC in any way. Google is a trademark of Google LLC.
                        </p>

                        <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4 text-center lg:text-left">

                            LIABILITY DISCLAIMER:
                        </h2>
                        <p>
                            By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business.
                        </p>
                    </motion.div>
                </section>
                <WhatsAppButton phoneNumber="1234567890" />

            </div>
        </>
    );
};

export default DisclaimerPage;