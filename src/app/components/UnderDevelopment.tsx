"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const UnderDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#001A1A] flex flex-col items-center justify-center px-4 text-white">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[36px] sm:text-[48px] md:text-[64px] font-bold text-center leading-tight relative"
      >
        This Page is Under Development
        {/* Gradient underline (fancy) */}
        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-14px] w-1/2 h-[4px] bg-gradient-to-r from-[#f7a51e] to-[#42DEA6] rounded-full" />
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-[#cdd8dd] text-[18px] sm:text-[20px] mt-6 text-center max-w-xl"
      >
        We&apos;re working hard to bring this page to life. Check back soon!
      </motion.p>

      {/* Go Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-10"
      >
        <Link href="/">
          <span className="inline-block py-3 px-6 bg-gradient-to-r from-[#f7a51e] to-[#42DEA6] text-black font-semibold text-lg rounded-full hover:scale-105 transition-transform duration-300">
            Go Back to Home
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default UnderDevelopment;
