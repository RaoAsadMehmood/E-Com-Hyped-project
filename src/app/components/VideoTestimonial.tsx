// components/ClientVideoGrid.jsx
"use client"; // Agar Next.js App Router use kar rahe ho

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Agar Image ya Link ki zaroorat ho toh yahan import kar lena
// import Image from "next/image";
// import Link from "next/link";

// Individual Video Item Component (Slider version)
const ClientVideoCard: React.FC<{
  src: string;
  delay?: number;
  isActive: boolean;
}> = ({ src, delay = 0, isActive }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play/pause logic (unchanged)
  const togglePlay = useCallback(async () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error(`Error playing video ${src}:`, error);
          setIsPlaying(false);
        }
      }
    }
  }, [isPlaying, src]);

  // Cleanup: Pause video on unmount
  useEffect(() => {
    const currentVideoElement = videoRef.current;
    if (currentVideoElement) {
      const handlePlayEvent = () => setIsPlaying(true);
      const handlePauseEvent = () => setIsPlaying(false);
      const handleErrorEvent = (e: Event) => console.error(`Video error for ${src}:`, e);
      currentVideoElement.addEventListener('play', handlePlayEvent);
      currentVideoElement.addEventListener('pause', handlePauseEvent);
      currentVideoElement.addEventListener('error', handleErrorEvent);
      return () => {
        currentVideoElement.removeEventListener('play', handlePlayEvent);
        currentVideoElement.removeEventListener('pause', handlePauseEvent);
        currentVideoElement.removeEventListener('error', handleErrorEvent);
        if (currentVideoElement) {
          currentVideoElement.pause();
          setIsPlaying(false);
        }
      };
    }
  }, [src]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{
        opacity: 1,
        scale: isActive ? 1.08 : 0.9,
        y: isActive ? 0 : 30,
        zIndex: isActive ? 2 : 1,
      }}
      exit={{ opacity: 0, scale: 0.9, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
      className={`relative flex flex-col justify-end items-start rounded-lg p-4 sm:p-6 cursor-pointer overflow-hidden border-4`}
      style={{
        borderImage: 'linear-gradient(90deg, #F7A51E, #499799) 1',
        background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(50, 50, 50, 0.9))',
        boxShadow: isActive ? '0 8px 32px rgba(0,0,0,0.25)' : '0 4px 15px rgba(0,0,0,0.15)',
        aspectRatio: '16/9',
        width: isActive ? '600px' : '500px',
        height: isActive ? '340px' : '280px',
        maxWidth: '90vw',
        maxHeight: '60vw',
        margin: '0 auto',
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="metadata"
        controls
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      >
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-white text-left p-2">
        <span className="text-2xl sm:text-3xl font-bold">Testimonial</span>
      </div>
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 z-20">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-[#F7A51E]"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </motion.div>
  );
};

// Main Slider Component
const ClientVideoSlider: React.FC = () => {
  const videoTestimonials = [
    { src: "/Videos/testimonial-1.mp4", delay: 0.1 },
    { src: "/Videos/testimonial-2.mp4", delay: 0.2 },
    { src: "/Videos/testimonial-3.mp4", delay: 0.3 },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videoTestimonials.length);
  }, [videoTestimonials.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  }, [videoTestimonials.length]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 60) {
      goToPrevious();
    } else if (deltaX < -60) {
      goToNext();
    }
    touchStartX.current = null;
  };

  return (
    <section className="my-[80px] px-4 sm:px-6 md:px-10 lg:px-[120px] max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide mb-4">
          CLIENT SHOWCASE
        </h2>
        <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-tight max-w-4xl">
          Hear Directly From Our Valued Clients
        </p>
        <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mt-4 max-w-3xl">
          These are authentic stories from individuals and businesses who have experienced remarkable success partnering with EcomHyped.
        </p>
      </div>
      <div className="relative flex items-center justify-center w-full max-w-3xl mx-auto" style={{ minHeight: 380 }}>
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#F7A51E] text-white p-2 rounded-full z-20 shadow-lg hover:bg-[#499799] transition-colors"
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        {/* Slider */}
        <div
          className="flex w-full items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} mode="wait">
            <ClientVideoCard
              key={currentIndex}
              src={videoTestimonials[currentIndex].src}
              delay={videoTestimonials[currentIndex].delay}
              isActive={true}
            />
          </AnimatePresence>
        </div>
        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#F7A51E] text-white p-2 rounded-full z-20 shadow-lg hover:bg-[#499799] transition-colors"
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {videoTestimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === idx ? "bg-[#F7A51E]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ClientVideoSlider;
