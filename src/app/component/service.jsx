"use client";

import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Montserrat, Space_Mono } from "next/font/google";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaCode } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";
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

// Varian untuk animasi gulir
const mainTitleVariants = {
  hidden: { opacity: 0, y: -20, letterSpacing: "-0.5em" },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0em",
    transition: {
      duration: 0.8,
      ease: "easeOut",
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
      delay: 0.2,
    },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3, // Jeda 0.3s antara setiap kartu
    },
  },
};

const cardItemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4, // Ikon muncul setelah kartu
    },
  },
};

const Service = forwardRef((props, ref) => {
  return (
    <motion.section
      ref={ref}
      id="service"
      className="min-h-[100vh] bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Container untuk Header dan Subtitle */}
      <motion.div
        className="w-full max-w-none mx-0 px-0 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={mainTitleVariants}
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
          aria-label="MY SERVICES - Developer Portfolio Heading"
        >
          WHAT I DO
        </motion.div>

        <motion.div
          variants={subtitleVariants}
          className="w-full text-center mb-12"
        >
          <p
            className={`${spaceMono.className} text-sm text-gray-600 dark:text-gray-400`}
          >
            ./What I Code — What You Get
          </p>
        </motion.div>
      </motion.div>

      {/* Service Content */}
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2
            className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-bold justify-left mb-16 px-2 sm:px-4 lg:px-6 text-gray-900 dark:text-white`}
          >
            The Essentials:
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-8"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Service Items 1*/}
          <motion.div
            variants={cardItemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 flex flex-col items-start rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mt-16 bg-white dark:bg-black"
          >
            <motion.div variants={iconVariants}>
              <HiOutlineSparkles size={100} className="text-foreground" />
            </motion.div>
            <h2 className="text-3xl md:text-54xl lg:text-5xl mb-6 font-bold">
              Ideation & Wireframing
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-justify">
              I transform ideas into clear, user-centered wireframes that focus
              on usability and structure. This stage lays the foundation for
              seamless UI/UX by aligning visual logic with user goals.
            </p>
          </motion.div>

          {/* Service Items 2*/}
          <motion.div
            variants={cardItemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 flex flex-col items-start rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mt-16 bg-white dark:bg-black"
          >
            <motion.div variants={iconVariants}>
              <FaCode size={100} className="text-foreground" />
            </motion.div>
            <h2 className="text-3xl md:text-54xl lg:text-5xl mb-6 font-bold">
              Design to Code
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-justify">
              I turn high-fidelity designs into responsive, maintainable
              frontend code using modern frameworks. Every element is built with
              precision to ensure both performance and visual consistency.
            </p>
          </motion.div>

          {/* Service Items 3*/}
          <motion.div
            variants={cardItemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 flex flex-col items-start rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mt-16 bg-white dark:bg-black"
          >
            <motion.div variants={iconVariants}>
              <TbHandClick size={100} className="text-foreground" />
            </motion.div>
            <h2 className="text-3xl md:text-54xl lg:text-5xl mb-6 font-bold">
              Interaction Development
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-justify">
              I enhance user experience through purposeful animations and
              micro-interactions. From subtle hover effects to dynamic
              transitions, every movement adds clarity, emotion, and delight.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
});

Service.displayName = "Service";
export default Service;
