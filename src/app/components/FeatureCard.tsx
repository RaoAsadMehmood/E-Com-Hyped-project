// components/FeatureCard.jsx
import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  imageSrc: string;
  heading: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, heading, description }) => {
  return (
    <div className="w-full max-w-xs flex flex-col items-center gap-4 p-4 text-center"> {/* Changed items-start to items-center, added text-center */}
      {/* Image */}
      <div className="self-center"> {/* Changed self-start to self-center */}
        <Image
          src={imageSrc}
          alt={heading}
          width={104}
          height={104}
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <h4 className="text-[20px] sm:text-[22px] md:text-[24px] text-[#334047] font-semibold text-center leading-tight"> {/* Changed text-left to text-center, added leading-tight for tighter heading */}
        {heading}
      </h4>

      {/* Description */}
      <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#45565F] font-normal text-center leading-relaxed break-words"> {/* Changed text-left to text-center, added break-words */}
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;