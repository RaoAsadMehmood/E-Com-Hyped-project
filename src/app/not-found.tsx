"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#001A1A] flex flex-col items-center justify-center px-4 text-white relative overflow-hidden">

            {/* Blurred Gradient Circles for Background Glow */}
            <div className="absolute w-[300px] h-[300px] bg-[#f7a51e] rounded-full opacity-20 blur-[120px] top-10 left-10 z-0" />
            <div className="absolute w-[300px] h-[300px] bg-[#42DEA6] rounded-full opacity-20 blur-[120px] bottom-10 right-10 z-0" />

            {/* Main Animated Content */}
            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[100px] sm:text-[140px] font-extrabold bg-gradient-to-r from-[#f7a51e] via-[#42DEA6] to-[#37A5C8] text-transparent bg-clip-text z-10"
            >
                404
            </motion.h1>

            <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-[22px] sm:text-[28px] font-semibold text-[#cdd8dd] text-center z-10"
            >
          {`Uh oh... The page you're looking for doesn't exist.`}

            </motion.p>

            {/* Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-10 z-10"
            >
                <Link href="/">
                    <span className="inline-block py-3 px-7 bg-gradient-to-r from-[#f7a51e] to-[#42DEA6] text-black text-lg font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300">
                        Go Back Home
                    </span>
                </Link>
            </motion.div>

            {/* Floating Bubbles (Decorative Animation) */}
            {/* Bubbles Style */}
            <style>{`
  .bubble-container .bubble {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    animation: floatUp 12s infinite ease-in-out;
  }

  .bubble-container .bubble:nth-child(1) {
    width: 18px;
    height: 18px;
    left: 10%;
    animation-delay: 0s;
  }
  .bubble-container .bubble:nth-child(2) {
    width: 25px;
    height: 25px;
    left: 30%;
    animation-delay: 2s;
  }
  .bubble-container .bubble:nth-child(3) {
    width: 15px;
    height: 15px;
    left: 50%;
    animation-delay: 4s;
  }
  .bubble-container .bubble:nth-child(4) {
    width: 20px;
    height: 20px;
    left: 70%;
    animation-delay: 6s;
  }
  .bubble-container .bubble:nth-child(5) {
    width: 12px;
    height: 12px;
    left: 85%;
    animation-delay: 1.5s;
  }
  .bubble-container .bubble:nth-child(6) {
    width: 22px;
    height: 22px;
    left: 40%;
    animation-delay: 3s;
  }

  @keyframes floatUp {
    0% {
      bottom: -50px;
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-200px) scale(1.2);
    }
    100% {
      bottom: 100%;
      transform: translateY(-400px) scale(1);
    }
  }
`}</style>

            {/* Bubbles Container */}
            <div className="bubble-container absolute inset-0 pointer-events-none z-0">
                <div className="bubble" />
                <div className="bubble" />
                <div className="bubble" />
                <div className="bubble" />
                <div className="bubble" />
                <div className="bubble" />
            </div>
        </div>
    );
};

export default NotFound;
