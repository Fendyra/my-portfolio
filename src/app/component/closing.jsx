"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Ensure this path is consistent with your project structure.
const LOGO_PATH = "/assets/logo-portfolio.png";

// Framer Motion variants for the main container
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

// Framer Motion variants for the swinging logo
const logoVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      delay: 0.2,
      when: "beforeChildren",
    },
  },
  swing: {
    rotate: [-15, 15, -15],
    scale: [1, 1.1, 1],
    transition: {
      rotate: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
      },
      scale: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
};

// Variants for the footer
const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
    },
  },
};

const dividerVariants = {
  hidden: { width: "0%" },
  visible: { width: "100%", transition: { duration: 0.8, ease: "easeInOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const socialLinkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const connectButtonVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
      delay: 0.5,
    },
  },
};

const ClosingSection = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center bg-white dark:bg-black p-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Container to ensure the logo remains responsive. Using grow to fill the space */}
      <div className="relative flex-grow flex items-center justify-center overflow-hidden w-full">
        <motion.div
          variants={logoVariants}
          animate="swing"
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
      <motion.footer className="w-full" variants={footerVariants}>
        {/* Thin horizontal border line */}
        <motion.div
          className="border-t border-gray-300 dark:border-gray-700 w-full mb-4"
          variants={dividerVariants}
        ></motion.div>

        {/* Responsive 3-column layout */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center text-sm md:text-base font-bold text-gray-800 dark:text-gray-200">
          {/* Left Column: Copyright */}
          <motion.div
            variants={textVariants}
            className="flex-1 text-left mb-2 md:mb-0"
          >
            <span>FENDYVERS — 2025</span>
          </motion.div>

          {/* Center Column: Social Links */}
          <div className="flex-1 text-center mb-2 md:mb-0 flex items-center justify-center space-x-2 md:space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/fendyra-dewangga"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover:text-gray-500 transition-colors duration-300 group"
              variants={socialLinkVariants}
            >
              LINKEDIN
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-purple-400 dark:to-pink-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </motion.a>
            <span className="mx-1 md:mx-2">/</span>
            <motion.a
              href="https://github.com/Fendyra"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover:text-gray-500 transition-colors duration-300 group"
              variants={socialLinkVariants}
            >
              GITHUB
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-purple-400 dark:to-pink-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </motion.a>
            <span className="mx-1 md:mx-2">/</span>
            <motion.a
              href="mailto:fendyrarestu2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover:text-gray-500 transition-colors duration-300 group"
              variants={socialLinkVariants}
            >
              EMAIL
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-purple-400 dark:to-pink-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </motion.a>
          </div>

          {/* Right Column: Back to Top button */}
          <div className="flex-1 text-right mt-2 md:mt-0">
            <motion.a
              className="hover:text-gray-500 transition-colors focus:outline-none relative inline-block group"
              href="mailto:fendyrarestu2004@gmail.com"
              variants={connectButtonVariants}
            >
              LET'S CONNECT
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-purple-400 dark:to-pink-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </motion.section>
  );
};

export default ClosingSection;
