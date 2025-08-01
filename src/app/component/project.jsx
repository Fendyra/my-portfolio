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
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`
            relative flex items-center justify-center overflow-hidden pointer-events-none
            w-full
            py-2 md:py-6 lg:py-8
            bg-inherit
            ${montserrat.className}
            text-[clamp(3rem,17vw,15rem)]
            font-black uppercase tracking-tight leading-none whitespace-nowrap
            text-black/15 dark:text-white/10
          `}
          aria-hidden="true"
          aria-label="MY WORKS - Developer Portfolio Heading"
        >
          SHOWCASE
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full text-center mb-12"
        >
          <p
            className={`${spaceMono.className} text-sm text-gray-600 dark:text-gray-400`}
          >
            ./My Builds - A Showcase of My Work
          </p>
        </motion.div>
      </div>

      {/*ADD UI component Hover Image Links*/}
      <HoverImageLinks />

      {/* "See More" button */}
        <div className="mt-6 item-center justify-center flex">
            <Link
              href="/works"
              onClick={onClose}
              className="border border-foreground rounded-full text-foreground px-8 py-3 text-lg relative overflow-hidden group transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
            <span className={`${montserrat.className} relative z-10`}>
                SEE MORE
            </span>             
            </Link>
        </div>
    </motion.section>
  );
});

Project.displayName = "Project";
export default Project;
