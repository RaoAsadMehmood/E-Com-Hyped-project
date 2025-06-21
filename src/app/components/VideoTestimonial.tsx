// components/VideoTestimonials.jsx
"use client"; // Agar Next.js App Router use kar rahe ho

import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
// Image aur Link ki ab is component mein directly zaroorat nahi hai agar sirf videos hain
// Lekin agar heading/description mein Image/Link use hote hain, toh unko bhi import karna padega.
// For now, assuming they are not directly in the component's *video rendering* part.
// import Image from "next/image";
// import Link from "next/link";

// Ek reusable component for individual video testimonial
const VideoItem: React.FC<{ src: string; delay?: number }> = ({ src, delay = 0 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] rounded-[20px] p-[5px] bg-transparent overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(to right, rgba(2, 111, 114, 0.75), rgba(247, 165, 30, 0.55))",
      }}
      onClick={togglePlay}
    >
      <div className="w-full h-full rounded-[15px] overflow-hidden bg-black relative">
        <video
          ref={videoRef}
          src={src}
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <svg
              className="w-20 h-20 text-[#F7A51E]"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const VideoTestimonials: React.FC = () => {
  // Yahan agar videos ke sources ko props se lena ho, toh yahan define kar sakte hain
  // For now, hardcoding video sources as per previous setup
  const videoSources = [
    { src: "/Videos/testimonial-1.mp4", delay: 0.1, gradient: "linear-gradient(to right, rgba(2, 111, 114, 0.75), rgba(247, 165, 30, 0.55))" },
    { src: "/Videos/testimonial-2.mp4", delay: 0.3, gradient: "linear-gradient(to left, rgba(2, 111, 114, 0.75), rgba(247, 165, 30, 0.55))" },
    { src: "/Videos/testimonial-3.mp4", delay: 0.5, gradient: "linear-gradient(to right, rgba(247, 165, 30, 0.55), rgba(2, 111, 114, 0.75))" },
  ];

  return (
    <section className="my-[80px] px-4 sm:px-6 md:px-10 lg:px-[120px] max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
                HEAR IT FROM OUR CLIENTS
            </h2>
            <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-tight max-w-4xl">
                Authentic Experiences, Real Success Stories
            </p>
            <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mt-4 max-w-3xl">
                Our partners share how <b>EcomHyped</b> has helped them achieve
                their Amazon business goals and maximize profitability.
            </p>
        </div>

        {/* Video Testimonials Display - Stacked vertically */}
        <div className="flex flex-col gap-8 md:gap-12">
            {videoSources.map((video, index) => (
                <VideoItem key={index} src={video.src} delay={video.delay} />
            ))}
        </div>
    </section>
  );
};

export default VideoTestimonials;
