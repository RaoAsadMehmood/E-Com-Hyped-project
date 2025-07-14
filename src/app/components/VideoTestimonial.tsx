// components/ClientVideoSlider.jsx
"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion,  } from "framer-motion";

// Individual Video Item Component (Adapted for Multi-Item Slider)
// Now includes name and title for display
const ClientVideoCard: React.FC<{
  src: string;
  name: string; // Added name prop
  title: string; // Added title prop
  delay?: number;
  // isActive is not strictly needed for the video play/pause logic now,
  // as each card will manage its own play state on click.
  // But we can keep it if you want to highlight the "central" card visually.
  isActive?: boolean; // Optional, for visual highlighting if needed
  isPlaying: boolean; // NEW: controlled by parent
  onPlay: () => void; // NEW: callback to parent
}> = ({ src, title, delay = 0, isActive, isPlaying, onPlay }) => {
  // const [isPlaying, setIsPlaying] = useState(false); // REMOVE local state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Play/pause video based on isPlaying prop
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        setIsMuted(true);
      }
    }
  }, [isPlaying]);

  // Pause on unmount
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsMuted(true);
      }
    };
  }, [src]);

  // Only notify parent to play if not already playing
  const handlePlayClick = useCallback(() => {
    if (!isPlaying) {
      onPlay();
    }
  }, [isPlaying, onPlay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex-shrink-0 rounded-2xl p-8 cursor-pointer overflow-hidden flex flex-col justify-end items-start shadow-2xl border-4 border-gray-900"
      style={{
        width: '950px', // Larger width
        height: '620px', // Larger height
        background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.97), rgba(50, 50, 50, 0.97))',
        boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
        border: isActive ? '6px solid #F7A51E' : '4px solid #232323',
        transform: isActive ? 'scale(1.07)' : 'scale(1)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), border 0.3s cubic-bezier(0.4,0,0.2,1)',
      }}
      onClick={handlePlayClick}
    >
      {/* Video element as background/thumbnail */}
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="metadata"
        muted={isMuted} // Control mute state
        controls
        className="absolute inset-0 w-full h-full object-cover z-0 border border-black opacity-60 rounded-2xl"
      >
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay - Name and Testimonial text */}
      <div className="absolute top-0 left-0 z-10 text-white text-left p-6">
        <p className="text-2xl sm:text-3xl font-bold mb-2 drop-shadow-lg">{title}</p>
      </div>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 z-20">
          <svg
            className="w-24 h-24 text-[#F7A51E] drop-shadow-2xl"
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

// Main Slider Component (ClientVideoSlider)
const ClientVideoSlider: React.FC = () => {
  const videoTestimonials = [
    { src: "/Videos/testimonial-1.mp4", name: "Bill", title: "Testimonial", delay: 0.1 },
    { src: "/Videos/testimonial-2.mp4", name: "Henesen", title: "Testimonial", delay: 0.2 },
    { src: "/Videos/testimonial-3.mp4", name: "Henrick", title: "Testimonial", delay: 0.3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // This will track the "center" or "active" video for navigation
  const [playingIndex, setPlayingIndex] = useState<number | null>(null); // NEW: which video is playing
  const sliderTrackRef = useRef<HTMLDivElement>(null); // Ref for the inner div that holds all cards
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  // const autoSwipeRef = useRef<NodeJS.Timeout | null>(null);

  // Function to scroll to a specific index
  const scrollTo = useCallback((index: number) => {
    if (sliderTrackRef.current) {
      const cardWidth = sliderTrackRef.current.children[0]?.clientWidth + (parseInt(getComputedStyle(sliderTrackRef.current).gap) || 0);
      sliderTrackRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  }, []);

  // Navigation functions
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videoTestimonials.length);
    scrollTo((currentIndex + 1) % videoTestimonials.length);
    // resetAutoSwipe();
  }, [currentIndex, videoTestimonials.length, scrollTo]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
    scrollTo((currentIndex - 1 + videoTestimonials.length) % videoTestimonials.length);
    // resetAutoSwipe();
  }, [currentIndex, videoTestimonials.length, scrollTo]);

  // Auto swipe effect
  // useEffect(() => {
  //   startAutoSwipe();
  //   return () => stopAutoSwipe();
  // }, [currentIndex]);

  // const startAutoSwipe = () => {
  //   stopAutoSwipe();
  //   autoSwipeRef.current = setTimeout(() => {
  //     setCurrentIndex((prev) => (prev + 1) % videoTestimonials.length);
  //     scrollTo((currentIndex + 1) % videoTestimonials.length);
  //   }, 4000); // 4 seconds
  // };

  // const stopAutoSwipe = () => {
  //   if (autoSwipeRef.current) {
  //     clearTimeout(autoSwipeRef.current);
  //     autoSwipeRef.current = null;
  //   }
  // };

  // const resetAutoSwipe = () => {
  //   stopAutoSwipe();
  //   startAutoSwipe();
  // };

  // Mouse/Touch Dragging for horizontal scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX - (sliderTrackRef.current?.offsetLeft || 0);
    scrollLeft.current = sliderTrackRef.current?.scrollLeft || 0;
    // resetAutoSwipe();
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderTrackRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 2; // The speed of the scroll
    if (sliderTrackRef.current) {
      sliderTrackRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    scrollLeft.current = sliderTrackRef.current?.scrollLeft || 0;
    // resetAutoSwipe();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX.current) * 2;
    if (sliderTrackRef.current) {
      sliderTrackRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Optional: Snap to nearest slide after drag ends
    if (sliderTrackRef.current) {
      const cardWidth = sliderTrackRef.current.children[0]?.clientWidth + (parseInt(getComputedStyle(sliderTrackRef.current).gap) || 0);
      const scrolled = sliderTrackRef.current.scrollLeft;
      const nearestIndex = Math.round(scrolled / cardWidth);
      scrollTo(nearestIndex);
      // resetAutoSwipe();
    }
  };


  return (
    <section className="my-[80px] px-[60px] w-full max-w-none" style={{ boxSizing: 'border-box' }}>
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-[20px] sm:text-[22px] md:text-[24px] bg-gradient-to-b from-[#3CB5CF] via-[#42DEA6] to-[#37A5C8] bg-clip-text text-transparent font-semibold tracking-wide">
          CLIENT SHOWCASE
        </h2>
        <p className="text-[#334047] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold leading-snug">
          Hear Directly From Our Valued Clients
        </p>
        <p className="text-[#45565F] text-[16px] sm:text-[17px] md:text-[18px] mb-6 text-center lg:text-left">
          These are authentic stories from individuals and businesses who have experienced remarkable success partnering with EcomHyped.
        </p>
      </div>

      {/* Slider Wrapper */}
      <div className="relative w-full mx-auto">
        {/* Slider Track - Horizontal Scroll */}
        <div
          ref={sliderTrackRef}
          className="flex gap-14 overflow-x-scroll no-scrollbar py-10 px-0 hide-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ scrollSnapType: 'x mandatory' }} // For smooth snapping
        >
          {videoTestimonials.map((video, index) => (
            <div key={index} style={{ scrollSnapAlign: 'start' }}> {/* For smooth snapping */}
              <ClientVideoCard
                src={video.src}
                name={video.name}
                title={video.title}
                delay={video.delay}
                isActive={index === currentIndex} // Pass isActive for visual highlight
                isPlaying={playingIndex === index} // NEW
                onPlay={() => setPlayingIndex(index)} // NEW
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows and Progress Bar (below the slider) */}
        <div className="flex items-center justify-center w-full mt-6 gap-4">
          <button
            onClick={goToPrevious}
            className="bg-[#F7A51E] text-white p-3 rounded-lg shadow-lg hover:bg-[#499799] transition-colors text-lg font-bold"
            aria-label="Previous Slide"
          >
            &#8592;
          </button>
          <div className="flex-1 mx-2">
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#F7A51E] transition-all duration-500"
                style={{
                  width: `${((currentIndex + 1) / videoTestimonials.length) * 100}%`
                }}
              ></div>
            </div>
          </div>
          <button
            onClick={goToNext}
            className="bg-[#F7A51E] text-white p-3 rounded-lg shadow-lg hover:bg-[#499799] transition-colors text-lg font-bold"
            aria-label="Next Slide"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientVideoSlider;
