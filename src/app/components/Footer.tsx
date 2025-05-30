'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
};

const Footer = () => {
    return (
        <footer className="w-full">
            {/* Footer Navigation */}
            <div className="bg-[#ecf9f9] py-12 px-4 md:px-8 lg:px-16">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: 'Ecommerce',
                            links: [
                                { href: '/automationservices', label: 'Automation Services' },
                                { href: '/servicespage', label: 'Online Arbitrage' },
                                { href: '/servicespage/amazon-fba-wholesale', label: 'FBA Wholesale' },
                                { href: '/servicespage/supplier-directory', label: 'Supplier Directory' },
                                { href: '/servicespage/product-research-sourcing', label: 'Product Research' },
                            ],
                        },
                        {
                            title: 'Advertising',
                            links: [
                                { href: '/servicespage/seller-central-management-', label: 'Seller Management' },
                                { href: '/servicespage/ppc-optimization', label: 'PPC Advertising' },
                                // { href: '#', label: 'Content Optimization' },
                            ],
                        },
                        {
                            title: 'Company',
                            links: [
                                { href: '/ourstory', label: 'Our Story' },
                                { href: '#', label: 'Results' },
                                { href: '/about', label: 'About Us' },
                                { href: '#', label: 'Terms & Use' },
                                { href: '/contact', label: 'Contact' },
                            ],
                        },
                        {
                            title: 'Reach Us',
                            links: [
                                { label: '5900 BALCONES Drives STE 10357, Austin, TX 78731' },
                                { label: '+1 (512) 828 6650' },
                                { label: 'info@ecomhyped.com' },
                            ],
                        },
                    ].map((section, index) => (
                        <motion.div
                            key={section.title}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h3 className="text-[#026F72] text-[30px] font-semibold mb-6">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        {'href' in link ? (
                                            <Link href={link.href} className="text-[#151515] text-[18px] hover:text-[#026F72]">
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <p className="text-[#151515] text-[18px]">{link.label}</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Copyright Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-[#026F72] text-white py-4 px-4 md:px-8 lg:px-16"
            >
                <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Link href="/">
                            <Image
                                src="/images/ecomhyped-logo.png"
                                alt="Ecom Hyped Logo"
                                width={53}
                                height={40}
                                className="mr-3"
                            />
                        </Link>
                    </div>

                    <p className="text-[16px] text-center md:text-left">© Ecom Hyped 2025 all rights reserved</p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {[
                            { icon: <FaFacebookF size={20} />, href: '#', label: 'Facebook' },
                            { icon: <FaLinkedinIn size={20} />, href: '#', label: 'LinkedIn' },
                            { icon: <FaInstagram size={20} />, href: '#', label: 'Instagram' },
                        ].map((social, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.15, y: -4 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Link href={social.href} aria-label={social.label}>
                                    <div className="h-[24px] w-[24px] flex items-center justify-center text-white hover:opacity-90 transition">
                                        {social.icon}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
