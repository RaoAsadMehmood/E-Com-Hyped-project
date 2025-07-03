// components/VideoTestimonials.jsx
"use client"; // Agar Next.js App Router use kar rahe ho

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

// Individual Video Item Component
// Removed onClick prop as it's no longer used directly in JSX
const VideoItem: React.FC<{ src: string; isActive: boolean; delay?: number }> = ({ src, isActive, delay = 0 }) => {
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

  // Pause video if it's not the active slide or if carousel moves away
  useEffect(() => {
    const currentVideo = videoRef.current; // Capture current ref value for cleanup
    if (currentVideo && !isActive && isPlaying) {
      currentVideo.pause();
      setIsPlaying(false);
    }
    // Also, pause if the component unmounts or becomes inactive
    return () => {
      if (currentVideo) { // Use the captured value in cleanup
        currentVideo.pause();
        setIsPlaying(false);
      }
    };
  }, [isActive, isPlaying]);


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex-shrink-0 rounded-[20px] p-[5px] bg-transparent overflow-hidden cursor-pointer"
      // Define a consistent width for each slide item for horizontal sliding
      style={{
        width: '100%', // Take full width of its parent (which will be the slider track)
        maxWidth: '800px', // Max width for larger screens, ensures consistent size
        aspectRatio: '16/9', // Maintain video aspect ratio
        height: 'auto', // Let height adjust based on width and aspect ratio
        background: "linear-gradient(to right, rgba(2, 111, 114, 0.75), rgba(247, 165, 30, 0.55))", // Example gradient
      }}
      onClick={togglePlay} // Now directly using the internal togglePlay
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

        {/* Custom Play Button Overlay */}
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

// Main VideoTestimonials Component
const VideoTestimonials: React.FC = () => {
  const videoSources = [
    { src: "/Videos/testimonial-1.mp4", delay: 0.1 },
    { src: "/Videos/testimonial-2.mp4", delay: 0.3 },
    { src: "/Videos/testimonial-3.mp4", delay: 0.5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Current active video index
  const sliderRef = useRef<HTMLDivElement>(null); // Ref for the inner flex container that slides

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  }, [videoSources.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoSources.length) % videoSources.length);
  }, [videoSources.length]);

  // Effect to apply transform for horizontal sliding
  useEffect(() => {
    if (sliderRef.current) {
      // Calculate the width of a single slide item.
      // We assume all slides have the same width.
      const slideWidth = sliderRef.current.children[0]?.clientWidth || 0;
      sliderRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  }, [currentIndex]);


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

      {/* Video Testimonials Slider Wrapper */}
      <div className="relative w-full overflow-hidden mx-auto max-w-[800px]"> {/* Outer container for the slider track */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out" // Flex container for all video items
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Use percentage for responsive sliding
        >
          {videoSources.map((video, index) => (
            <VideoItem
              key={index}
              src={video.src}
              delay={video.delay}
              isActive={index === currentIndex} // Pass isActive prop
              // Removed onClick prop from here as it's handled internally by VideoItem
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#F7A51E] text-white p-2 rounded-full z-10 focus:outline-none"
          aria-label="Previous Slide"
        >
          &#10094; {/* Left arrow */}
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#F7A51E] text-white p-2 rounded-full z-10 focus:outline-none"
          aria-label="Next Slide"
        >
          &#10095; {/* Right arrow */}
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {videoSources.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#F7A51E]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
