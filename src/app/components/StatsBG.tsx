// components/StatsHeroSection.tsx
import { motion } from 'framer-motion';
import MeetingButton from './MeetingButton'; // Assuming MeetingButton is in the same directory

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
                className="w-full min-h-[458px] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col justify-center items-center text-center relative overflow-hidden"
                style={{
                    backgroundImage: 'url("/images/stats-cover.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="max-w-5xl w-full mx-auto flex flex-col items-center gap-6 relative z-20"> {/* z-index increased for content */}
                    <motion.h1
                        className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight sm:leading-tight lg:leading-tightest tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        {heading}
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-white max-w-4xl leading-relaxed sm:leading-relaxed md:leading-relaxed-lg"
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
                        className="mt-6 mb-8" // Added margin-bottom for spacing below the button
                    >
                        <MeetingButton />
                    </motion.div>
                </div>

                {/* Decorative Stars - Positioning adjusted to be further away and more reliably in background */}
                <motion.div
                    className="absolute top-8 left-8 text-white opacity-70 z-0" // Adjusted positioning to fixed pixels from corner
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
                    className="absolute bottom-8 right-8 text-white opacity-70 z-0" // Adjusted positioning to fixed pixels from corner
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
