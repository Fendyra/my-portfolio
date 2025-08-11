"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useState, useRef } from "react";

// Assuming these components are in the correct path
import FullScreenMenu from "../component/ui/FullScreenMenu";
import HeaderIcons from "../component/header";
import Home from "../component/home";
import About from "../component/about";
import Project from "../component/project";
import Service from "../component/service";
import Footer from "../component/footer";
import ClosingSection from "../component/closing";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MainPortfolio = () => {
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false);
  const aboutSectionRef = useRef(null); // Create a ref for the About section

  const handleMenuToggle = (isOpen) => {
    setIsFullScreenMenuOpen(isOpen);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative no-scroll">
      <div className="fixed top-6 left-0 w-full px-4 md:px-8 z-50 flex items-center">
        <div className={`z-50 ${isFullScreenMenuOpen ? "hidden" : ""}`}>
          <Image
            src="/assets/logo-portfolio.png"
            alt="Portfolio Logo"
            width={80}
            height={80}
          />
        </div>

        <div className="flex-grow flex justify-center">
          <HeaderIcons />
        </div>

        {!isFullScreenMenuOpen && (
          <button
            className="z-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground"
            onClick={() => handleMenuToggle(true)}
            aria-label="Open Menu"
          >
            <div className="w-6 h-1 bg-foreground my-1 transition-all duration-300"></div>
            <div className="w-6 h-1 bg-foreground my-1 transition-all duration-300"></div>
            <div className="w-6 h-1 bg-foreground my-1 transition-all duration-300"></div>
          </button>
        )}

        <FullScreenMenu
          isOpen={isFullScreenMenuOpen}
          onClose={() => handleMenuToggle(false)}
        />
      </div>
      <Home aboutSectionRef={aboutSectionRef} />
      <About ref={aboutSectionRef} />
      <Project ref={aboutSectionRef} />
      <Service ref={aboutSectionRef} />
      <Footer ref={aboutSectionRef} />
      <ClosingSection />
    </div>
  );
};

export default MainPortfolio;
