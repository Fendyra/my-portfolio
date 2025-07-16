// src/app/component/ui/FullScreenMenu.jsx
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
  { name: "Home", href: "/", largeText: "DIVE IN" },
  { name: "About", href: "#about", largeText: "WHO I AM" },
  { name: "Works", href: "/works", largeText: "SHOWCASE" },
  { name: "Service", href: "/service", largeText: "WHAT I DO" },
  { name: "Contact", href: "/contact", largeText: "PING ME" },
];

const FullScreenMenu = ({ isOpen, onClose }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const backgroundTextVariants = {
    hidden: { opacity: 0, scale: 0.9, x: "-50%", y: "-50%" },
    visible: {
      opacity: 0.25, // Meningkatkan opacity agar terlihat jelas di light mode, tapi tetap subtle di dark mode
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] },
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
                className="relative group flex justify-center items-center" // Menambahkan flex dan centering untuk li
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="relative z-10 inline-block" // Mengubah menjadi inline-block agar Link membungkus kontennya, memungkinkan penomoran absolut relatif terhadap ukurannya
                >
                  <span
                    className={`${playfairDisplay.className} text-5xl md:text-7xl font-bold transition-all duration-300 group-hover:scale-105 group-hover:text-foreground`}
                  >
                    {item.name}
                  </span>
                  {/* Penomoran diposisikan secara absolut relatif terhadap kontainer Link */}
                  <span
                    className={`${playfairDisplay.className} text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300 absolute`}
                    style={{
                      top: "-1.5rem", // Sesuaikan nilai ini untuk memindahkannya lebih ke atas
                      // Menggunakan kondisional untuk menempatkan penomoran di kiri atau kanan
                      [index % 2 === 0 ? "left" : "right"]: "-2rem",
                    }}
                  >
                    {`0${index + 1}.`}
                  </span>
                </Link>
                {/* Oversized background text */}
                <AnimatePresence>
                  {hoveredItem === item.name && (
                    <motion.div
                      className={`
                        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        pointer-events-none whitespace-nowrap
                        font-extrabold
                        text-[clamp(15vw,250px,25vw)]
                        text-white // Tetap putih untuk teks utama, stroke akan memberikan kontras
                        z-0 // Ensure it's behind the menu items
                      `}
                      variants={backgroundTextVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{
                        // Menggunakan properti CSS kustom untuk stroke dan filter yang diatur oleh Tailwind CSS themes
                        WebkitTextStroke:
                          "var(--stroke-width) var(--text-stroke-color)",
                        textStroke:
                          "var(--stroke-width) var(--text-stroke-color)",
                        color: "transparent",
                        filter: "var(--large-text-filter)", // Menggunakan variabel filter tunggal
                        willChange: "transform, opacity, filter",
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
