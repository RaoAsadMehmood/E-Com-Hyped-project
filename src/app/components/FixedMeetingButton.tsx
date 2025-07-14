"use client";

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

interface FixedMeetingButtonProps {
  calendlyUrl: string;
  fallbackHref: string;
}

const FixedMeetingButton: React.FC<FixedMeetingButtonProps> = ({ calendlyUrl, fallbackHref }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const controls = useAnimation(); // Animation controls for bounce

  useEffect(() => {
    if (isHovered || isLoading || isClicked) return; // Don't bounce if hovered, loading, or clicked
    const interval = setInterval(() => {
      controls.start({
        y: [0, -18, 0],
        transition: { duration: 0.6, times: [0, 0.3, 1], ease: 'easeInOut' }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [controls, isHovered, isLoading, isClicked]);

  // Reset Y position if hovered/clicked/loading
  useEffect(() => {
    if (isHovered || isLoading || isClicked) {
      controls.start({ y: 0 });
    }
  }, [isHovered, isLoading, isClicked, controls]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsClicked(true);

    if (typeof window.Calendly !== 'undefined') {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
      setTimeout(() => {
        setIsLoading(false);
        setIsClicked(false);
      }, 500);
    } else {
      console.warn("Calendly widget not loaded, navigating to fallback page.");
      window.location.href = fallbackHref;
      setIsLoading(false);
      setIsClicked(false);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={isLoading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 left-6 bg-[#F7A51E] text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer z-50
                 hover:shadow-xl transition-all duration-300 ease-in-out
                 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Schedule a Meeting"
      initial={{ width: '56px', padding: '12px', scale: 1, rotate: 0 }}
      animate={{
        width: isHovered || isLoading ? 'auto' : '56px',
        padding: isHovered || isLoading ? '12px 24px' : '12px',
        scale: isClicked ? [1, 1.2, 1] : 1,
        rotate: isClicked ? [0, 15, -15, 0] : 0,
      }}
      transition={{
        width: { type: 'spring', stiffness: 300, damping: 30 },
        padding: { type: 'spring', stiffness: 300, damping: 30 },
        scale: { duration: isClicked ? 0.4 : 0, type: 'spring', stiffness: 300, damping: 10 },
        rotate: { duration: isClicked ? 0.4 : 0, type: 'spring', stiffness: 300, damping: 10 },
      }}
    >
      {isLoading ? (
        <span className="flex items-center whitespace-nowrap">
          <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        <span className="flex items-center text-lg font-semibold whitespace-nowrap">
          <FaCalendarAlt className={isHovered ? "mr-2" : ""} size={isHovered ? 20 : 24} />
          {isHovered && "Schedule a Meeting"}
        </span>
      )}
    </motion.button>
  );
};

export default FixedMeetingButton;
