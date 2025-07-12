"use client";

import React from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";

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
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Works", href: "/works" },
  { name: "Service", href: "/service" },
  { name: "Contact", href: "/contact" },
];

const FullScreenMenu = ({ isOpen, onClose }) => {
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
        <nav className="text-foreground text-center mt-20">
          <ul className="space-y-4 md:space-y-6">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-bottom justify-center gap-2 ${
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
        <div className="absolute bottom-4 left-4 text-foreground text-sm flex flex-col"> {/* Changed to flex-col for vertical stacking */}
          <span className={`${montserrat.className}`}>
            2025 ©
          </span>
          <span className={`${montserrat.className} font-bold `}>
            FENDYVERS
          </span>
        </div>

        {/* New footer section for SAY HI and INFO@FENDYRA.COM - Added */}
        <div className="absolute bottom-4 right-4 text-foreground text-sm flex flex-col items-end"> {/* Positioned at bottom-right, items-end for right alignment */}
          <span className={`${montserrat.className}`}>SAY HI</span>
          <span className={`${montserrat.className} font-bold`}>FENDYRA RESTU</span>
        </div>
      </div>
    </>
  );
};

export default FullScreenMenu;
