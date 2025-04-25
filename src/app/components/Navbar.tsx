'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Home', href: '/home' },
        { name: 'Services', href: '/servicespage' },
        { name: 'Automation Services', href: '/automationservices' },
        { name: 'Our Story', href: '/ourstory' },
        { name: 'About Us', href: '/about' },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='relative flex flex-wrap justify-evenly items-center gap-12 py-4 z-50'
            style={{
                backgroundImage: 'linear-gradient(to right, #03a6aa, #026f72, #026f72, #026f72)',
            }}
        >
            {/* Hamburger Icon - Right on mobile, hidden on desktop */}
            <div className='absolute right-4 md:hidden flex items-center'>
                <button onClick={toggleMenu} className='text-white focus:outline-none'>
                    <svg
                        className='w-8 h-8'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {/* Left Links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 md:gap-10 absolute md:static top-16 left-0 w-full md:w-auto p-4 md:p-0 transition-all duration-300 z-10`}
            >
                {navLinks.slice(0, 3).map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-white text-lg font-light hover:text-gray-200 ${
                            isActive(link.href) ? 'border-b-2 border-white pb-1' : ''
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </motion.div>

            {/* Logo */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
                className='flex gap-6 order-first md:order-none'
            >
                <Image
                    src={'/Images/logo.png'}
                    alt={'Brand Logo'}
                    width={70}
                    height={52}
                    className='w-[70px] h-[52px] md:w-[53px] md:h-[40px]'
                />
            </motion.div>

            {/* Right Links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 md:gap-10 absolute md:static top-48 left-0 w-full md:w-auto p-4 md:p-0 transition-all duration-300 z-10`}
            >
                {navLinks.slice(3).map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-white text-lg font-light hover:text-gray-200 flex items-center h-[40px] ${
                            isActive(link.href) ? 'border-b-2 border-white pb-1' : ''
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}

                <Link href={'/contact'}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='py-2 px-6 border border-white text-white text-lg font-light rounded hover:bg-white hover:text-teal-600 transition'
                    >
                        Contact
                    </motion.button>
                </Link>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
