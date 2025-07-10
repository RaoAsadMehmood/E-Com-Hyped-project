// components/FixedMeetingButton.jsx
"use client"; // Client-side functionality ke liye zaroori

import React, { useState } from 'react';
import { motion } from 'framer-motion'; // motion import karna animations ke liye
import { FaCalendarAlt } from 'react-icons/fa'; // Calendar icon import kiya

interface FixedMeetingButtonProps {
  calendlyUrl: string; // Tumhara Calendly meeting ka URL
  fallbackHref: string; // Agar Calendly load na ho toh kis page par jaye
}

const FixedMeetingButton: React.FC<FixedMeetingButtonProps> = ({ calendlyUrl, fallbackHref }) => {
  const [isLoading, setIsLoading] = useState(false); // Loading state manage karne ke liye
  const [isHovered, setIsHovered] = useState(false); // Hover state manage karne ke liye
  const [isClicked, setIsClicked] = useState(false); // NEW: Clicked state manage karne ke liye for animation

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Default button behavior (agar Link ke andar ho) ko roko
    setIsLoading(true); // Loading state shuru karo
    setIsClicked(true); // NEW: Clicked state true karo animation trigger karne ke liye

    // Calendly pop-up khulne ke baad animation reset ho jaye ya continue kare
    // Boomerang effect ke liye, animation ko complete hone do phir Calendly kholo
    // ya phir animation aur Calendly ko parallel chalao.
    // Client ki requirement ke hisaab se, hum animation ko jaldi complete kar ke Calendly kholenge.

    // Calendly load hone mein thoda time lagta hai, isliye isko setTimeout mein wrap kar sakte hain
    // ya animation complete hone ka wait kar sakte hain.
    // Simple approach: animation start ho, aur Calendly process ho.
    if (typeof window.Calendly !== 'undefined') {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
      // Calendly pop-up khulne ke baad, animation state ko reset kar do thodi der baad
      setTimeout(() => {
        setIsLoading(false);
        setIsClicked(false); // Animation complete hone ke baad reset
      }, 500); // Animation duration ke hisaab se adjust karo
    } else {
      console.warn("Calendly widget not loaded, navigating to fallback page.");
      window.location.href = fallbackHref;
      setIsLoading(false);
      setIsClicked(false); // Reset in fallback
    }
  };

  return (
    <motion.button // motion.button use kiya animations ke liye
      onClick={handleClick}
      disabled={isLoading} // Jab loading ho toh button disable kar do
      onMouseEnter={() => setIsHovered(true)} // Hover par state change karo
      onMouseLeave={() => setIsHovered(false)} // Hover hatane par state change karo
      className="fixed bottom-6 left-6 bg-[#F7A51E] text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer z-50
                 hover:shadow-xl transition-all duration-300 ease-in-out
                 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Schedule a Meeting"
      // Framer Motion props for animation
      initial={{ width: '56px', padding: '12px', scale: 1, rotate: 0 }} // Default (minimized) state
      animate={{
        width: isHovered || isLoading ? 'auto' : '56px', // Hover ya loading par width 'auto'
        padding: isHovered || isLoading ? '12px 24px' : '12px', // Hover ya loading par padding 'px-6'
        // Boomerang animation on click
        scale: isClicked ? [1, 1.2, 1] : 1, // Click par thoda bara ho kar wapas aaye
        rotate: isClicked ? [0, 15, -15, 0] : 0, // Click par rotate ho kar wapas aaye
      }}
      transition={{
        width: { type: 'spring', stiffness: 300, damping: 30 },
        padding: { type: 'spring', stiffness: 300, damping: 30 },
        scale: { duration: isClicked ? 0.4 : 0, type: 'spring', stiffness: 300, damping: 10 }, // Scale animation fast
        rotate: { duration: isClicked ? 0.4 : 0, type: 'spring', stiffness: 300, damping: 10 }, // Rotate animation fast
      }}
    >
      {isLoading ? (
        // Loading state mein spinner aur text dikhao
        <span className="flex items-center whitespace-nowrap">
          <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        // Normal state mein button ka content
        <span className="flex items-center text-lg font-semibold whitespace-nowrap">
          <FaCalendarAlt className={isHovered ? "mr-2" : ""} size={isHovered ? 20 : 24} /> {/* Icon size adjust kiya */}
          {isHovered && "Schedule a Meeting"} {/* Hover par text dikhao */}
        </span>
      )}
    </motion.button>
  );
};

export default FixedMeetingButton;
