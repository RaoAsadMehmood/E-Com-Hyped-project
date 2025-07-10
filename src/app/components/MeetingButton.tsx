'use client';

import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
import { motion, } from 'framer-motion';

const MeetingButton = () => {
  // Remove useAnimation and interval logic
  return (
    <Link href="/contact" passHref>
      <motion.button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          if (typeof window.Calendly !== 'undefined') {
            window.Calendly.initPopupWidget({
              url: 'https://calendly.com/ecommerce-automation-ecomhyped/30min',
            });
          } else {
            console.warn('Calendly widget not loaded, navigating to contact page as fallback.');
            window.location.href = '/contact';
          }
        }}
        // Add bouncing animation
        animate={{
          y: [0, -15, 0, 5, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        className="my-7 px-12 py-[14px] sm:px-14 sm:py-4 border border-[#F7A51E] text-[16px] sm:text-[18px] text-[#F7A51E] font-semibold rounded-md
        hover:bg-[#F7A51E] hover:text-white hover:shadow-lg
        active:scale-95 active:ring-2 active:ring-[#F7A51E] active:ring-offset-2
        transition-all duration-300 ease-out"
      >
        Schedule a Meeting
      </motion.button>
    </Link>
  );
};

export default MeetingButton;
