"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Ensure this path is consistent with your project structure.
const LOGO_PATH = "/assets/logo-portfolio.png";

const ClosingSection = () => {
  // Framer Motion animation for the swinging (rotation) movement to the left and right
  const logoVariants = {
    // Initial phase when the component is loaded
    initial: {
      opacity: 0,
      scale: 0.8,
      rotate: 0,
    },
    // Main animation phase that will be repeated
    animate: {
      opacity: 1,
      // Swings the logo from -15 degrees to 15 degrees and back
      rotate: [-15, 15, -15],
      // 'Breathing' effect as the logo swings
      scale: [1, 1.1, 1],
    },
  };

  // Transition to control the speed and easing of the animation
  const logoTransition = {
    rotate: {
      duration: 8, // 8 seconds for one swing cycle
      ease: "easeInOut",
      repeat: Infinity,
    },
    scale: {
      duration: 4, // 4 seconds for one scale cycle
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  return (
    // Main section with full screen height and centering, now using flex-col
    <section className="relative flex flex-col items-center justify-center bg-white dark:bg-black p-4">
      {/* Container to ensure the logo remains responsive. Using grow to fill the space */}
      <div className="relative flex-grow flex items-center justify-center overflow-hidden w-full">
        <motion.div
          // Using the variants and transitions that have been defined
          variants={logoVariants}
          initial="initial"
          animate="animate"
          transition={logoTransition}
          className="relative w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
        >
          <Image
            src={LOGO_PATH}
            alt="Fendyra's Portfolio Logo"
            layout="fill"
            objectFit="contain"
            className="pointer-events-none"
            priority
          />
        </motion.div>
      </div>

      {/* Mini Footer Section */}
      <footer className="w-full">
        {/* Thin horizontal border line */}
        <div className="border-t border-gray-300 dark:border-gray-700 w-full mb-4"></div>

        {/* Responsive 3-column layout */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center text-sm md:text-base font-bold text-gray-800 dark:text-gray-200">
          {/* Left Column: Copyright */}
          <div className="flex-1 text-left mb-2 md:mb-0">
            <span>FENDYVERS — 2025</span>
          </div>

          {/* Center Column: Social Links */}
          <div className="flex-1 text-center mb-2 md:mb-0">
            <a
              href="https://www.linkedin.com/in/fendyra-dewangga"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              LINKEDIN
            </a>
            <span className="mx-2">/</span>
            <a
              href="https://github.com/Fendyra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              GITHUB
            </a>
            <span className="mx-2">/</span>
            <a
              href="mailto:fendyrarestu2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              EMAIL
            </a>
          </div>

          {/* Right Column: Back to Top button */}
          <div className="flex-1 text-right">
            <a
              className="hover:text-gray-500 transition-colors focus:outline-none"
              href="mailto:fendyrarestu2004@gmail.com"
            >
              LET'S CONNECT
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ClosingSection;
