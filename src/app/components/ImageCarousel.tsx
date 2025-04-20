'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselItem {
    logoSrc: string;
    alt: string;
}

const carouselItems: CarouselItem[] = [
    { logoSrc: '/Images/Amazon.png', alt: 'Amazon Logo' },
    { logoSrc: '/Images/Walmart.png', alt: 'Walmart Logo' },
    { logoSrc: '/Images/Tiktok.png', alt: 'TikTok Logo' },
    { logoSrc: '/Images/Shopify.png', alt: 'Shopify Logo' },
    { logoSrc: '/Images/Etsy.png', alt: 'Etsy Logo' },
    { logoSrc: '/Images/Youtube.png', alt: 'YouTube Logo' },
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, 3000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="relative w-[150px] h-[50px] sm:w-[180px] sm:h-[60px] md:w-[220px] md:h-[100px] rounded-full flex items-center justify-center overflow-hidden">
            {carouselItems.map((item, index) => (
                <div
                    key={item.alt}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={item.logoSrc}
                        alt={item.alt}
                        className="object-contain max-w-full max-h-full"
                        fill 
                        sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 300px" // Updated responsive sizes
                    />
                </div>
            ))}
        </div>
    );
};

export default Carousel;