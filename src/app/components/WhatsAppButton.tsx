// components/WhatsAppButton.jsx
"use client"; // Agar Next.js App Router use kar rahe ho

import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6'; // NEW: Import FaWhatsapp icon

interface WhatsAppButtonProps {
  phoneNumber: string; // Tumhara WhatsApp number (e.g., '923001234567' for Pakistan)
  message?: string;    // Optional pre-filled message
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  // WhatsApp link create karna
  const whatsappLink = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" passHref>
      <div
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer z-50
                   hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon (using react-icons) */}
        <FaWhatsapp className="w-8 h-8" /> {/* Replaced SVG with FaWhatsapp icon */}
      </div>
    </Link>
  );
};

export default WhatsAppButton;
