// components/StatsHeroSection.tsx
import { motion } from 'framer-motion';

interface StatsHeroSectionProps {
  heading: string;
  description: string;
}

export const StatsHeroSection = ({
  heading,
  description,
}: StatsHeroSectionProps) => {
  return (
    <section className="w-full">
      <div
        className="w-full min-h-[458px] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col justify-center items-center text-center relative"
        style={{
          backgroundImage: 'url("/images/stats-cover.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center gap-8">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-[46px] text-white font-semibold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {heading}
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>

        {/* Decorative Stars */}
        <motion.div
          className="absolute top-24 left-24 text-white opacity-70"
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
          className="absolute bottom-24 right-24 text-white opacity-70"
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
