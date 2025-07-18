"use client";

import React, { useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat, Space_Mono } from "next/font/google";

const MotionImage = motion(Image);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const About = forwardRef((props, ref) => {
  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-[100vh] bg-white dark:bg-black text-gray-900 dark:text-white px-6 md:px-12 lg:px-24 py-20"
    >
      {/* Top Heading Section (Peter-style) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full text-center mb-12"
      >
        <h1
          className={`${montserrat.className} font-bold text-[clamp(3rem,10vw,8rem)] uppercase leading-none tracking-tight`}
        >
          WHO AM I
        </h1>
        <p
          className={`${spaceMono.className} text-sm text-gray-600 dark:text-gray-400 mt-2`}
        >
          Creative Developer
        </p>
      </motion.div>

      {/* Main About Section (Katerina-style) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        {/* Left Column */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] font-bold mb-1 hover:scale-105 hover:letter-spacing-[0.1em] hover:text-shadow-md transition-all duration-300">
            Fendyra
          </h3>
          <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] font-bold mb-1 ml-[120px] hover:scale-105 hover:letter-spacing-[0.1em] hover:text-shadow-md transition-all duration-300">
            Restu
          </h3>
          <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] font-bold mb-1 hover:scale-105 hover:letter-spacing-[0.1em] hover:text-shadow-md transition-all duration-300">
            Dewangga
          </h3>
          <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-4">
            [INTRO]
          </p>
          <p className="font-montserrat text-base leading-tight max-w-prose">
            Creative developer crafting bold digital experiences. Passionate
            about blending design and code to build innovative solutions.
            Dedicated to creating impactful user interfaces.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center ml-10"
        >
          <MotionImage
            src="/assets/profile-portfolio.jpg"
            alt="Fendyra's Profile Picture"
            width={300} // Reduced base width
            height={300} // Adjusted height to be more proportional and ideal
            className="rounded-lg shadow-xl object-cover max-w-xs md:max-w-sm lg:max-w-md w-full"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
});

export default About;
