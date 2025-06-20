// components/StatsHeroSection.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import MeetingButton from './MeetingButton';

interface StatsProps {
    heading: string;
    description: string;
}

export const StatsHero = ({
    heading,
    description,
}: StatsProps) => {
    return (
        <section className="w-full mt-[80px]">
            <div
                className="w-full min-h-[458px] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col justify-center items-center text-center relative overflow-hidden" // Added overflow-hidden and adjusted horizontal padding
                style={{
                    backgroundImage: 'url("/images/stats-cover.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black opacity-40"></div> 

                <div className="max-w-5xl w-full mx-auto flex flex-col items-center gap-6 relative z-10"> {/* Increased max-w and added z-10 */}
                    <motion.h1
                        className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight sm:leading-tight lg:leading-tightest tracking-tight" // Adjusted font sizes, weight, and line height
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        {heading}
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-white max-w-4xl leading-relaxed sm:leading-relaxed md:leading-relaxed-lg" // Adjusted max-w and line height
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <MeetingButton />
                        
                    </motion.div>
                </div>

                {/* Decorative Stars - Adjusted positioning for better visual balance */}
                <motion.div
                    className="absolute top-16 left-8 sm:top-24 sm:left-24 text-white opacity-70 z-10" // Added z-10 and responsive positioning
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z"
                            fill="white" stroke="white" strokeWidth="0.5" />
                    </svg>
                </motion.div>

                <motion.div
                    className="absolute bottom-16 right-8 sm:bottom-24 sm:right-24 text-white opacity-70 z-10" // Added z-10 and responsive positioning
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z"
                            fill="white" stroke="white" strokeWidth="0.5" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};