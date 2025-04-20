import React from 'react'; 
import Image from 'next/image'; 
 
interface FeatureCardProps { 
    imageSrc: string; 
    heading: string; 
    description: string; 
} 
 
const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, heading, description }) => { 
    return ( 
        <div className="w-[225px] flex flex-col items-start gap-4 p-4"> 
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
            <h4 className="text-[24px] text-[#334047] font-semibold text-left"> 
                {heading} 
            </h4> 
             
            {/* Description */} 
            <p className="text-[18px] text-[#45565F] font-normal text-left"> 
                {description} 
            </p> 
        </div> 
    ); 
}; 
 
export default FeatureCard;