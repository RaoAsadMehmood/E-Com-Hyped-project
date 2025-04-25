'use client';

import React, { useEffect, useState, useCallback } from 'react';
import TestimonialCard from './TestimonialCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
    {
        image: '/images/testimonial-1.png',
        name: 'Ujang Slebew',
        designation: 'Store Owner',
        rating: 4,
        review: 'Increase product sales and the amount of cash that comes in for further development',
    },
    {
        image: '/images/testimonial-2.png',
        name: 'Sumanto',
        designation: 'CEO Founder',
        rating: 5,
        review:
            "The increase in product sales is exponential and takes place gradually, its really a very good job",
    },
    {
        image: '/images/testimonial-3.png',
        name: 'Baecrox Molan',
        designation: 'Virtual Assistant',
        rating: 4.5,
        review:
            'As a business engaged in the artists and content creators, we got a lot of benefit.',
    },
    {
        image: '/images/testimonial-4.png',
        name: 'Olivia Merian',
        designation: 'Manager',
        rating: 5,
        review: 'Ive been using this for the past year and the growth is significant.',
    },
    {
        image: '/images/testimonial-5.png',
        name: 'John Carter',
        designation: 'CTO',
        rating: 5,
        review: 'Very efficient and visually stunning approach to our marketing and sales pipeline.',
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3;
    const totalSlides = testimonials.length - visibleCards + 1;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="w-full px-4 py-10">
            <div className="relative">
                {/* Slider */}
                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-700 gap-4"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                    >
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="w-[90vw] sm:w-[48vw] lg:w-[31%] min-w-[280px] max-w-[500px] flex-shrink-0"
                            >
                                <TestimonialCard {...testimonial} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Progress Bar with Arrows */}
            <div className="relative flex items-center justify-center mt-8 px-6 gap-4 max-w-3xl mx-auto">
                <button
                    onClick={prevSlide}
                    className="bg-[#F7A51E] w-10 h-10 flex items-center justify-center rounded text-white text-lg font-bold"
                    aria-label="Previous Slide"
                >
                    <FaArrowLeft />
                </button>

                <div className="flex-1 h-1 rounded-full bg-gray-300 relative overflow-hidden">
                    <div
                        className="h-full bg-[#F7A51E] transition-all duration-500 ease-in-out"
                        style={{ width: `${(currentIndex / (totalSlides - 1)) * 100}%` }}
                    ></div>
                </div>

                <button
                    onClick={nextSlide}
                    className="bg-[#F7A51E] w-10 h-10 flex items-center justify-center rounded text-white text-lg font-bold"
                    aria-label="Next Slide"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;
