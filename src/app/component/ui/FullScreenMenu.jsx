"use client";

import React, { useState } from "react";
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
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Service", href: "/service" },
  { name: "Contact", href: "/contact" },
];

const FullScreenMenu = ({ onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (onMenuToggle) onMenuToggle(!isOpen); // Notify parent about menu state change
  };

  return (
    <>
      {/* Hamburger Icon - Only visible when the menu is NOT open */}
      {!isOpen && (
        <div
          className="fixed top-8 right-8 z-50 cursor-pointer p-2 md:p-4"
          onClick={toggleMenu}
        >
          <div
            className={`w-8 h-1 bg-white my-1 transition-all duration-300`}
          ></div>
          <div
            className={`w-8 h-1 bg-white my-1 transition-all duration-300`}
          ></div>
          <div
            className={`w-8 h-1 bg-white my-1 transition-all duration-300`}
          ></div>
        </div>
      )}

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`${montserrat.className} absolute top-8 left-8 text-white text-lg z-50`}
        >
          FENDYRA'S PORTFOLIO
        </div>
        <div
          className={`${montserrat.className} absolute top-8 right-8 text-white text-lg z-50 cursor-pointer`}
          onClick={toggleMenu}
        >
          BACK →
        </div>

        <nav className="text-white text-center">
          <ul className="space-y-4 md:space-y-6">
            {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`flex items-bottom justify-center gap-2 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                >
                    <span className="text-sm md:text-base text-gray-500 group-hover:text-white transition-colors duration-300">
                    {`0${index + 1}.`}
                    </span>
                    <span
                    className={`${playfairDisplay.className} text-5xl md:text-7xl font-bold transition-all duration-300 group-hover:scale-105 group-hover:text-white`}
                    >
                    {item.name}
                    </span>
                </Link>
                </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12">
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="border border-white rounded-full text-white px-8 py-3 text-lg relative overflow-hidden group transition-colors duration-300 hover:bg-white hover:text-black">
            <span className={`${montserrat.className} relative z-10`}>
              GET IN TOUCH
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FullScreenMenu;
