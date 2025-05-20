'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleServicesMenu = () => setIsServicesOpen(!isServicesOpen);

    const navLinks = [
        { name: 'Home', href: '/home' },
        {
            name: 'Services',
            href: '/servicespage',
            subLinks: [
                // { name: 'Online Arbitrage', href: '/servicespage/OnlineArbitrage' },
                { name: 'FBA Wholesale', href: '/servicespage/amazon-fba-wholesale' },
                { name: 'Supplier Directory', href: '/servicespage/SupplierDirectory' },
                { name: 'Product Research/Sourcing', href: '/services/automation' },
                { name: 'Seller Central Management', href: '/services/automation' },
                { name: 'Brand Management', href: '/services/automation' },
                { name: 'Amazon Listing Optimization', href: '/services/automation' },
                { name: 'PPC Optimization', href: '/services/automation' },
            ],
        },
        { name: 'Automation Services', href: '/automationservices' },
        { name: 'Our Story', href: '/ourstory' },
        { name: 'About Us', href: '/about' },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <>
            {/* Main Navbar */}
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative flex flex-wrap justify-evenly items-center gap-12 py-4 z-50"
                style={{
                    backgroundImage: 'linear-gradient(to right, #03a6aa, #026f72, #026f72, #026f72)',
                }}
            >
                {/* Hamburger */}
                <div className="absolute right-4 md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                {/* Left nav (desktop only) */}
                <div className="hidden md:flex flex-row  gap-10">
                    {navLinks.slice(0, 3).map((link) => (
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => link.subLinks && setIsServicesOpen(true)}
                            onMouseLeave={() => link.subLinks && setIsServicesOpen(false)}
                        >
                            <Link
                                href={link.href}
                                className={`text-white text-lg font-light hover:text-gray-200 ${isActive(link.href) ? 'border-b-2 border-white pb-1' : ''}`}
                            >
                                {link.name}
                            </Link>
                            {link.subLinks && isServicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 bg-[#026F72] shadow-lg rounded-md py-2 z-50 min-w-[300px]"
                                >
                                    {link.subLinks.map((subLink) => (
                                        <Link
                                            key={subLink.name}
                                            href={subLink.href}
                                            className={`block px-4 py-2 text-white text-lg font-light hover:bg-[#F7A51E] hover:text-white ${isActive(subLink.href) ? 'bg-[#F7A51E]' : ''}`}
                                        >
                                            {subLink.name}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Logo */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
                    className="flex gap-6 order-first md:order-none"
                >
                    <Image
                        src={'/images/ecomhyped-logo.png'}
                        alt={'Ecom Hyped-logo'}
                        width={80}
                        height={65}
                        className="w-[70px] h-[52px] md:w-[80px] md:h-[65px]"
                    />
                </motion.div>

                {/* Right nav (desktop only) */}
                <div className="hidden md:flex flex-row gap-10 items-center">
                    {navLinks.slice(3).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-white text-lg font-light hover:text-gray-200 flex items-center h-[40px] ${isActive(link.href) ? 'border-b-2 border-white pb-1' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="py-2 px-6 border border-white text-white text-lg font-light rounded hover:bg-white hover:text-teal-600 transition"
                        >
                            Contact
                        </motion.button>
                    </Link>
                </div>
            </motion.nav>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden flex flex-col gap-4 px-6 py-4 bg-[#026F72] w-full z-40 shadow-lg"
                    >
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`text-white text-lg font-light hover:text-gray-200 ${isActive(link.href) ? 'border-b-2 border-white pb-1' : ''}`}
                                    onClick={() => {
                                        if (!link.subLinks) setIsOpen(false);
                                        if (link.subLinks) toggleServicesMenu();
                                    }}
                                >
                                    {link.name}
                                </Link>
                                {link.subLinks && isServicesOpen && (
                                    <div className="flex flex-col gap-2 pl-4 mt-2">
                                        {link.subLinks.map((subLink) => (
                                            <Link
                                                key={subLink.name}
                                                href={subLink.href}
                                                className={`text-white text-base font-light hover:text-gray-200 ${isActive(subLink.href) ? 'border-b-2 border-white pb-1' : ''}`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {subLink.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-2 py-2 px-6 border border-white text-white text-lg font-light rounded hover:bg-white hover:text-teal-600 transition"
                            >
                                Contact
                            </motion.button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;