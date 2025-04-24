'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/images/amazon-carousel1.png',
    '/images/amazon-carousel2.png',
];

export default function TwoImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div
            className="w-full max-w-[588px] h-auto sm:h-[695px] rounded-2xl overflow-hidden relative mx-auto flex flex-col justify-center items-center gap-4 px-4"
            style={{
                background: `
                  radial-gradient(circle at top left, rgba(2, 111, 114, 0.75) 0%, transparent 50%),
                  radial-gradient(circle at bottom right, rgba(247, 165, 30, 0.55) 0%, transparent 60%),
                  radial-gradient(circle at top right, white 0%, white 100%),
                  radial-gradient(circle at bottom left, white 0%, white 100%)
                `,
              }}
              
        >

            {/* Image Container */}
            <div className="relative w-full max-w-[500px] h-[300px] sm:h-[552px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            fill
                            className="object-contain rounded-lg"
                            sizes="(max-width: 640px) 90vw, 500px"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Clickable Dots */}
            <div className="flex gap-2 mt-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#026F72] scale-125' : 'bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
}
