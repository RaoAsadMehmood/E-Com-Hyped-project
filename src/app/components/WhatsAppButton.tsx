// components/WhatsAppButton.jsx
"use client";

import React, {  useEffect } from 'react'; // useEffect import kiya
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';
import { motion, useAnimation } from 'framer-motion'; // motion aur useAnimation hook import kiye

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  const controls = useAnimation(); // Animation ko imperatively control karne ke liye

  // Boomerang/Bounce animation sequence
  const bounceAnimation = async () => {
    await controls.start({ scale: 1.1, y: -5, transition: { duration: 0.2, ease: "easeOut" } }); // Thoda upar aur bara
    await controls.start({ scale: 1, y: 0, transition: { duration: 0.3, ease: "bounceOut" } }); // Wapas neeche bounce kare
  };

  // Periodic animation trigger
  useEffect(() => {
    const interval = setInterval(() => {
      bounceAnimation();
    }, 5000); // Har 5 seconds baad bounce karega (adjust as needed)

    return () => clearInterval(interval); // Component unmount hone par interval clear kare
  }, []); // Empty dependency array means it runs once on mount

  // Optional: Add click animation if needed (similar to FixedMeetingButton)
  const handleClick = () => {
    bounceAnimation(); // Click par bhi bounce kare
  };

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" passHref>
      <motion.div
        onClick={handleClick} // Click handler
        animate={controls} // useAnimation hook ko 'animate' prop mein pass kiya
        whileHover={{ scale: 1.15 }} // Hover animation (thoda zyada scale)
        whileTap={{ scale: 0.9 }} // Tap animation
        className="fixed bottom-32 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer z-50
                   hover:shadow-xl transition-all duration-300 ease-in-out"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </motion.div>
    </Link>
  );
};

export default WhatsAppButton;
