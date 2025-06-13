"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const ContactNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Controls the main mobile menu visibility
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null); // Controls which desktop dropdown is open (for hover)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null); // Controls which mobile dropdown is open (for click)

  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null); // Close any active dropdown when toggling main menu
  };

  const navLinks = [
    { name: "Home", href: "/home" },
    {
      name: "Services",
      href: "/servicespage",
      subLinks: [
        { name: "FBA Wholesale", href: "/servicespage/amazon-fba-wholesale" },
        { name: "Supplier Directory", href: "/servicespage/supplier-directory" }, // Corrected potential typo
        { name: "Product Research/Sourcing", href: "/servicespage/product-research-sourcing" }, // Corrected potential typo
        { name: "Seller Central Management", href: "/servicespage/seller-central-management" }, // Corrected potential typo
        { name: "Brand Management", href: "/servicespage/brand-management" },
        { name: "Amazon Listing Optimization", href: "/servicespage/amazon-listing-optimization" },
        { name: "PPC Optimization", href: "/servicespage/ppc-optimization" },
        {
          name: "Build a Brand on Amazon",
          href: "/servicespage/build-a-brand-on-amazon",
        },
        {
          name: "Amazon A+ Content",
          href: "/servicespage/amazon-a-content",
        },
        {
          name: "Amazon PPC Advertising",
          href: "/servicespage/amazon-ppc-advertising",
        },
      ],
    },
    {
      name: "Automation Services",
      href: "/automationservices",
      subLinks: [
        // { name: "Amazon FBA Automation", href: "/automationservices/amazon-fba-automation" },
        { name: "Walmart Automation", href: "/automationservices/walmart-automation" },
        { name: "TikTok Automation", href: "/automationservices/tiktok-automation" },
        { name: "Shopify Automation", href: "/automationservices/shopify-automation" },
        { name: "Youtube Automation", href: "/automationservices/youtube-automation" },
        { name: "Etsy Automation", href: "/automationservices/etsy-automation" },
      ],
    },
    { name: "Our Story", href: "/ourstory" },
    { name: "About Us", href: "/about" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex flex-wrap justify-evenly items-center gap-12 py-4 z-50 bg-white"
      >
        {/* Hamburger */}
        <div className="absolute right-4 md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-teal-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
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
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Left nav (desktop only) */}
        <div className="hidden md:flex flex-row gap-10">
          {navLinks.slice(0, 3).map((link) => ( // Show Home, Services, Automation Services
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.subLinks && setActiveDesktopDropdown(link.name)}
              onMouseLeave={() => link.subLinks && setActiveDesktopDropdown(null)}
            >
              <Link
                href={link.href}
                className={`text-teal-600 text-lg font-light hover:text-teal-800 ${isActive(link.href) ? "border-b-2 border-teal-600 pb-1" : ""
                  }`}
              >
                {link.name}
              </Link>
              {link.subLinks && activeDesktopDropdown === link.name && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 z-50 min-w-[300px] border border-gray-100" // Styled for ContactNavbar
                >
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      href={subLink.href}
                      className={`block px-4 py-2 text-teal-600 text-lg font-light hover:bg-[#026F72] hover:text-white ${ // Styled for ContactNavbar
                        isActive(subLink.href) ? "bg-gray-100 text-teal-800" : "" // Styled for ContactNavbar
                        }`}
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
          transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
          className="flex gap-6 order-first md:order-none"
        >
          <Link href="/contact"> {/* Logo links to Contact */}
            <Image
              src={"/images/ecomhyped-logo.png"}
              alt={"Ecom Hyped-logo"}
              width={80}
              height={65}
              className="w-[70px] h-[52px] md:w-[80px] md:h-[65px]"
            />
          </Link>
        </motion.div>

        {/* Right nav (desktop only) */}
        <div className="hidden md:flex flex-row gap-10 items-center">
          {navLinks.slice(3).map((link) => ( // Show Our Story, About Us
            <Link
              key={link.name}
              href={link.href}
              className={`text-teal-600 text-lg font-light hover:text-teal-800 flex items-center h-[40px] ${isActive(link.href) ? "border-b-2 border-teal-600 pb-1" : ""
                }`}
            >
              {link.name}
            </Link>
          ))}

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-6 border border-teal-600 text-teal-600 text-lg font-light rounded hover:bg-teal-600 hover:text-white transition"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white w-full z-40 shadow-lg" // Styled for ContactNavbar
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => setActiveMobileDropdown(activeMobileDropdown === link.name ? null : link.name)}
                      className={`text-teal-600 text-lg font-light hover:text-teal-800 w-full text-left focus:outline-none ${ // Styled for ContactNavbar
                        isActive(link.href) ? "border-b-2 border-teal-600 pb-1" : ""
                        }`}
                      aria-expanded={activeMobileDropdown === link.name}
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 inline-block ml-2 transform transition-transform duration-200 ${activeMobileDropdown === link.name ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {activeMobileDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col gap-2 pl-4 mt-2 overflow-hidden"
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className={`text-teal-600 text-base font-light hover:bg-gray-100 hover:text-teal-800 block px-4 py-2 rounded ${ // Styled for ContactNavbar
                                isActive(subLink.href) ? "bg-gray-100 text-teal-800" : "" // Styled for ContactNavbar
                                }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-teal-600 text-lg font-light hover:text-teal-800 ${ // Styled for ContactNavbar
                      isActive(link.href) ? "border-b-2 border-teal-600 pb-1" : ""
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 py-2 px-6 border border-teal-600 text-teal-600 text-lg font-light rounded hover:bg-teal-600 hover:text-white transition" // Styled for ContactNavbar
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

export default ContactNavbar;
