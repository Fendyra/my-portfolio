"use client";

import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Montserrat, Space_Mono } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const Service = forwardRef((props, ref) => {
    return (
        <motion.section
        ref={ref}
        id="service"
        className="min-h-[100vh] bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden"
        >
        {/* Main Service Heading */}
        <div className="w-full max-w-none mx-0 px-0 relative">
            <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`relative flex items-center justify-center overflow-hidden pointer-events-none w-full py-2 md:py-6 lg:py-8 bg-inherit ${montserrat.className} text-[clamp(3rem,17vw,15rem)] font-black uppercase mt-12 tracking-tight leading-none whitespace-nowrap text-black/15 dark:text-white/10`}
            aria-hidden="true"
            aria-label="MY SERVICES - Developer Portfolio Heading"
            >
            WHAT I DO
            </motion.div>
    
            {/* Subtitle */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full text-center mb-12"
            >
            <p className={`${spaceMono.className} text-sm text-gray-600 dark:text-gray-400`}>
                ./My Services - A Showcase of My Work
            </p>
            </motion.div>
        </div>
    
        {/* Service Content */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Add your service content here */}
        </div>
        </motion.section>
    );
    });

export default Service;