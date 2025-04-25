'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedStatProps {
    endValue: number;
    label: string;
    duration?: number; // Animation duration in milliseconds
    suffix?: string;
}

interface AnimatedStatsRowProps {
    stats: AnimatedStatProps[];
}

const AnimatedStat = ({ endValue, label, duration = 2000, suffix = '' }: AnimatedStatProps) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const statRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (statRef.current) {
            observer.observe(statRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const steps = 60;
        const stepDuration = duration / steps;
        const increment = endValue / steps;
        let currentCount = 0;

        const timer = setInterval(() => {
            currentCount += increment;

            if (currentCount >= endValue) {
                setCount(endValue);
                clearInterval(timer);
            } else {
                setCount(Math.floor(currentCount));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isInView, endValue, duration]);

    return (
        <motion.div
            ref={statRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center px-4"
        >
            <h2 className="font-bold text-white text-[40px] md:text-[66px] leading-tight">
    {count.toLocaleString()}{suffix}
</h2>
<p className="text-white mt-1 text-[16px] md:text-[18px]">
    {label}
</p>

        </motion.div>
    );
};

const AnimatedStatsRow = ({ stats }: AnimatedStatsRowProps) => {
    return (
        <div className="w-full py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
                    {stats.map((stat, index) => (
                        <AnimatedStat
                            key={index}
                            endValue={stat.endValue}
                            label={stat.label}
                            suffix={stat.suffix}
                            duration={2500}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


export default function Stats() {
    const statsData = [
        { endValue: 1430, label: 'Happy Clients', suffix: '+' },
        { endValue: 250, label: 'Revenue', suffix: '+' },
        { endValue: 1810, label: 'Reviews', suffix: '+' },
        { endValue: 10253, label: 'Brands Catalog', suffix: '+' }
    ];

    return <AnimatedStatsRow stats={statsData} />;
}
