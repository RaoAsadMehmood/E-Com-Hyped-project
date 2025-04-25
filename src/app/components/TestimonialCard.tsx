'use client';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import React from 'react';

type Props = {
  image: string;
  name: string;
  designation: string;
  rating: number; // out of 5
  review: string;
};

const TestimonialCard: React.FC<Props> = ({ image, name, designation, rating, review }) => {
  return (
    <div className="w-full max-w-[489px] bg-white rounded-lg shadow-md p-4 border border-[#D9E2E7] flex flex-col justify-between h-auto sm:h-[186px]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left: Image & Info */}
        <div className="flex items-center gap-3">
          <Image
            src={image}
            alt={name}
            width={55}
            height={55}
            className="rounded-full object-cover"
          />
          <div>
            <p className="text-[#1C1C1C] font-semibold text-[16px] leading-tight">{name}</p>
            <p className="text-[#7B8A92] text-[14px]">{designation}</p>
          </div>
        </div>

        {/* Right: Stars */}
        <div className="flex gap-1 text-[#FFA41B] sm:self-start">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} size={18} />
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="text-[#151515] text-[18px] font-semibold mt-4 leading-relaxed">
        {review}
      </p>
    </div>
  );
};

export default TestimonialCard;
