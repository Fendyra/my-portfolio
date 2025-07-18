"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Playfair_Display, Montserrat } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

// Load Google Fonts
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Menu items data, including the large background text for each
const menuItems = [
  { name: "Home", href: "/", largeText: "DIVE IN" },
  { name: "About", href: "#about", largeText: "WHO AM I" },
  { name: "Works", href: "/works", largeText: "SHOWCASE" },
  { name: "Service", href: "/service", largeText: "WHAT I DO" },
  { name: "Contact", href: "/contact", largeText: "PING ME" },
];

const FullScreenMenu = ({ isOpen, onClose }) => {
  // State to track which menu item is currently hovered
  const [hoveredItem, setHoveredItem] = useState(null);

  // Framer Motion variants for the large background text
  const backgroundTextVariants = {
    // Initial state (hidden)
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: "calc(-50% + 10px)", // Start 10px below center for a slight downward offset
      x: "-50%", // Keep horizontally centered
    },
    // Visible state (on hover)
    visible: {
      opacity: 0.25, // Soft ambient hover opacity
      scale: 1,
      y: "-50%", // Animate to the true center
      x: "-50%", // Keep horizontally centered
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, // Smooth custom easing
    },
    // Exit state (on hover end)
    exit: {
      opacity: 0,
      scale: 0.9,
      y: "calc(-50% + 10px)", // Animate back to 10px below center on exit
      x: "-50%", // Keep horizontally centered
      transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] }, // Exit easing
    },
  };

  return (
    <>
      {/* Fullscreen overlay menu container */}
      <div
        className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Top bar inside fullscreen menu: Portfolio title and BACK button */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-4 md:px-8">
          <div
            className={`${montserrat.className} text-foreground text-lg z-50`}
          >
            FENDYRA'S PORTFOLIO
          </div>

          {/* "BACK" button to close the menu */}
          <div
            className={`${montserrat.className} text-foreground text-lg z-50 cursor-pointer`}
            onClick={onClose}
          >
            BACK →
          </div>
        </div>

        {/* Navigation links container */}
        <nav className="text-foreground text-center mt-20 relative w-full">
          <ul className="space-y-4 md:space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group flex justify-center items-center" // Centering for the list item
                onMouseEnter={() => setHoveredItem(item.name)} // Set hovered item on mouse enter
                onMouseLeave={() => setHoveredItem(null)} // Clear hovered item on mouse leave
              >
                <Link
                  href={item.href}
                  onClick={onClose} // Close menu on link click
                  className="relative z-10 inline-block" // Ensure Link wraps content and allows absolute positioning of numbering
                >
                  <span
                    className={`${playfairDisplay.className} text-5xl md:text-7xl font-bold transition-all duration-300 group-hover:scale-105 group-hover:text-foreground`}
                  >
                    {item.name}
                  </span>
                  {/* Numbering positioned absolutely relative to the Link */}
                  <span
                    className={`${playfairDisplay.className} text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300 absolute`}
                    style={{
                      top: "-1.5rem", // Adjust vertical position of numbering
                      // Conditionally place numbering on left or right based on index
                      [index % 2 === 0 ? "left" : "right"]: "-2rem",
                    }}
                  >
                    {`0${index + 1}.`}
                  </span>
                </Link>

                {/* Oversized background text, animated with Framer Motion */}
                <AnimatePresence>
                  {hoveredItem === item.name && (
                    <motion.div
                      className={`
                        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        pointer-events-none whitespace-nowrap
                        font-extrabold
                        text-[clamp(3rem,20vw,10rem)] /* Responsive font size: min 3rem, fluid 20vw, max 10rem */
                        opacity-25 /* Consistent opacity for the soft ambient effect */
                        z-0 /* Ensure it's behind the clickable menu items */
                      `}
                      variants={backgroundTextVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{
                        WebkitTextStroke:
                          "var(--stroke-width) var(--text-stroke-color)",
                        textStroke:
                          "var(--stroke-width) var(--text-stroke-color)",
                        color: "var(--large-text-color)", // Controls the fill color of the text
                        filter: "var(--large-text-filter)", // For any potential blur or shadow effects
                        willChange: "transform, opacity, filter", // Optimize performance for these CSS properties
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

        {/* Footer in bottom-left corner */}
        <div className="absolute bottom-4 left-4 text-foreground text-sm flex flex-col">
          <span className={`${montserrat.className}`}>2025 ©</span>
          <span className={`${montserrat.className} font-bold `}>
            FENDYVERS
          </span>
        </div>

        {/* New footer section for SAY HI and INFO@FENDYRA.COM */}
        <div className="absolute bottom-4 right-4 text-foreground text-sm flex flex-col items-end">
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
