"use client";

import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Montserrat, Space_Mono } from "next/font/google";
import { HoverImageLinks } from "./ui/HoverImageLinks";
import Link from "next/link";
import { onClose } from "./ui/FullScreenMenu"; // Assuming onClose is exported from FullScreenMenu

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

// Define animation variants for the section's children
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger delay between each project link
      delayChildren: 0.3, // Initial delay for the entire block
    },
  },
};

const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -30, filter: "blur(5px)" },
  visible: {
    opacity: 0.1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring", // Use spring for a more organic, cinematic feel
      stiffness: 150,
      damping: 15,
      delay: 0.2, // A slight delay for a more cinematic feel
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.5, // Syncs with heading but appears slightly after
    },
  },
};

const ctaButtonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Project = forwardRef((props, ref) => {
  return (
    <motion.section
      ref={ref}
      id="project"
      className="min-h-[100vh] bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Main Project Heading */}
      <div className="w-full max-w-none mx-0 px-0 relative">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={`
            relative flex items-center justify-center overflow-hidden pointer-events-none
            w-full
            py-2 md:py-6 lg:py-8
            bg-inherit
            ${montserrat.className}
            text-[clamp(3rem,17vw,15rem)]
            font-black uppercase tracking-tight leading-none whitespace-nowrap
            text-black dark:text-white
          `}
          aria-hidden="true"
          aria-label="MY WORKS - Developer Portfolio Heading"
        >
          SHOWCASE
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full text-center mb-12"
        >
          <p
            className={`${spaceMono.className} text-sm text-gray-600 dark:text-gray-400`}
          >
            ./My Builds - A Showcase of My Work
          </p>
        </motion.div>
      </div>

      {/* Animate the list of links as a single staggered group */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HoverImageLinks />
      </motion.div>

      {/* Animate the "See More" button separately */}
      <motion.div
        variants={ctaButtonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mt-4 item-center justify-center flex"
      >
        <Link
          href="/works"
          onClick={onClose}
          className="border border-foreground rounded-full text-foreground px-4 py-2 text-lg relative overflow-hidden group transition-colors duration-300 hover:bg-foreground hover:text-background"
        >
          <span className={`${montserrat.className} relative z-10`}>
            SEE MORE
          </span>
        </Link>
      </motion.div>
    </motion.section>
  );
});

Project.displayName = "Project";
export default Project;
