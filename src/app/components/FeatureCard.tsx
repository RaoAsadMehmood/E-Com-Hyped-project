import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  imageSrc: string;
  heading: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, heading, description }) => {
  return (
    <div className="w-full sm:w-auto max-w-[100%] sm:max-w-none flex flex-col items-start gap-4 p-4">
      {/* Image */}
      <div className="self-start">
        <Image
          src={imageSrc}
          alt={heading}
          width={104}
          height={104}
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <h4 className="text-[20px] sm:text-[22px] md:text-[24px] text-[#334047] font-semibold text-left">
        {heading}
      </h4>

      {/* Description */}
      <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#45565F] font-normal text-left leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
