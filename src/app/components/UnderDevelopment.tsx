"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const UnderDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Heading with Fade-In Animation /} */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-white text-4xl md:text-6xl font-bold text-center relative"
      >
        This Page is Under Development
        {/* {/ Reddish Underline /} */}
        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-1/2 h-1 bg-[#ff4040] rounded-full" />
      </motion.h1>

      {/* {/ Subtext /} */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-white/70 text-lg md:text-xl mt-6 text-center"
      >
        We&apos;re working hard to bring this page to life. Check back soon!
      </motion.p>

      {/* {/ Go Back Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8"
      >
        <Link href="/">
          <span className="text-[#ff4040] hover:underline text-lg md:text-xl transition-all duration-300">
            Go Back to Home
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default UnderDevelopment;
