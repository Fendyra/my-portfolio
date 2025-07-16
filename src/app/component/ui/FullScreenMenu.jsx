"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Playfair_Display, Montserrat } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const menuItems = [
  { name: "Home", href: "/", largeText: "WELCOME" },
  { name: "About", href: "#about", largeText: "ABOUT ME" },
  { name: "Works", href: "/works", largeText: "MY CREATIONS" },
  { name: "Service", href: "/service", largeText: "WHAT I DO" },
  { name: "Contact", href: "/contact", largeText: "GET IN TOUCH" },
];

const FullScreenMenu = ({ isOpen, onClose }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const backgroundTextVariants = {
    hidden: { opacity: 0, scale: 0.8, x: "-50%" },
    visible: {
      opacity: 0.1,
      scale: 1,
      x: "-50%",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }, // Custom ease for a smoother feel
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: "-50%",
      transition: { duration: 0.5, ease: [0.7, 0, 0.84, 0] },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Top bar inside fullscreen menu */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-4 md:px-8">
          <div
            className={`${montserrat.className} text-foreground text-lg z-50`}
          >
            FENDYRA'S PORTFOLIO
          </div>

          {/* "BACK" button to close menu */}
          <div
            className={`${montserrat.className} text-foreground text-lg z-50 cursor-pointer`}
            onClick={onClose}
          >
            BACK →
          </div>
        </div>

        {/* Navigation links */}
        <nav className="text-foreground text-center mt-20 relative w-full">
          <ul className="space-y-4 md:space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`relative z-10 flex items-bottom justify-center gap-2 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <span
                    className={`${playfairDisplay.className} text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300`}
                  >
                    {`0${index + 1}.`}
                  </span>
                  <span
                    className={`${playfairDisplay.className} text-5xl md:text-7xl font-bold transition-all duration-300 group-hover:scale-105 group-hover:text-foreground`}
                  >
                    {item.name}
                  </span>
                </Link>
                {/* Oversized background text */}
                <AnimatePresence>
                  {hoveredItem === item.name && (
                    <motion.div
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-[15vw] md:text-[12vw] lg:text-[10vw] font-extrabold text-white whitespace-nowrap opacity-0 ${montserrat.className}`}
                      variants={backgroundTextVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{
                        WebkitTextStroke: "1px rgba(255,255,255,0.1)", // Adjust stroke color and width
                        color: "transparent",
                        filter: "blur(2px)", // Slight blur effect
                      }}
                    >
                      {item.largeText}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>

        {/* "Get in Touch" button */}
        <div className="mt-12">
          <Link
            href="/contact"
            onClick={onClose}
            className="border border-foreground rounded-full text-foreground px-8 py-3 text-lg relative overflow-hidden group transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            <span className={`${montserrat.className} relative z-10`}>
              GET IN TOUCH
            </span>
          </Link>
        </div>

        {/* Footer in bottom-left corner - MODIFIED */}
        <div className="absolute bottom-4 left-4 text-foreground text-sm flex flex-col">
          {" "}
          {/* Changed to flex-col for vertical stacking */}
          <span className={`${montserrat.className}`}>2025 ©</span>
          <span className={`${montserrat.className} font-bold `}>
            FENDYVERS
          </span>
        </div>

        {/* New footer section for SAY HI and INFO@FENDYRA.COM - Added */}
        <div className="absolute bottom-4 right-4 text-foreground text-sm flex flex-col items-end">
          {" "}
          {/* Positioned at bottom-right, items-end for right alignment */}
          <span className={`${montserrat.className}`}>SAY HI</span>
          <span className={`${montserrat.className} font-bold`}>
            FENDYRA RESTU
          </span>
        </div>
      </div>
    </>
  );
};

export default FullScreenMenu;
