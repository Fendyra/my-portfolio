"use client";

import React, { useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Font Imports
import {
  Montserrat,
  Space_Mono,
  Plus_Jakarta_Sans,
  Inter,
} from "next/font/google";

// UI Components
import {
  TextRevealCard,
  TextRevealCardDescription,
} from "./ui/text-reveal-card"; // Pastikan path ini benar

// Font Configuration
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const MotionImage = motion(Image);

const About = forwardRef((props, ref) => {
  const paragraph1 = `Hi, I’m Fendyra Restu Dewangga — a frontend developer and UI designer passionate about building clean, responsive, and user-centered web experiences. Currently in my 5th semester studying Information Systems at UPN "Veteran" Yogyakarta, I combine design thinking with code using tools like Laravel, React, Next.js, Tailwind, and Figma.`;

  const paragraph2 = `I love turning ideas into intuitive interfaces that feel natural across devices. For me, great design starts with empathy and ends with purposeful execution. Outside of coding, I lead creative initiatives as the Head of Talent & Interests in the student association, where I bridge tech, culture, and community.`;

  const fullDescription = `${paragraph1}\n\n${paragraph2}`;

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-[100vh] bg-white dark:bg-black text-gray-900 dark:text-white px-6 md:px-12 lg:px-24 py-20 overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full text-center mb-12"
      >
        <h1
          className={`${montserrat.className} font-bold text-[clamp(3rem,10vw,8rem)] uppercase leading-none tracking-tight`}
        >
          CTRL + ME
        </h1>
        <p
          className={`${spaceMono.className} text-sm text-gray-600 dark:text-gray-400 mt-2`}
        >
          Creative Developer
        </p>
      </motion.div>

      {/* Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* Left Column */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col items-start mb-2">
            <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] font-bold mb-1 hover:scale-105 transition-all duration-300">
              Fendyra
            </h3>
            <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] font-bold mb-1 ml-[140px] hover:scale-105 transition-all duration-300">
              Restu
            </h3>
            <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] font-bold ml-[220px] hover:scale-105 transition-all duration-300">
              Dewangga
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p
                className={`${spaceMono.className} text-sm text-gray-600 dark:text-gray-400`}
              >
                [INTRO]
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p
                className={`${plusJakartaSans.className} text-base leading-relaxed max-w-prose text-gray-700 dark:text-gray-300 text-justify`}
              >
                Creative developer blending UI design with frontend code to
                craft modern, user-friendly digital experiences.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-end"
        >
          <MotionImage
            src="/assets/photo-profile.jpg"
            alt="Fendyra's Profile Picture"
            width={350}
            height={450}
            className="rounded-lg shadow-xl object-cover max-w-[350px] md:max-w-[450px] w-full h-full"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Extended Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16"
      >
        <h2
          className={`${montserrat.className} font-bold text-[clamp(2rem,6vw,4rem)] mb-6 text-center md:text-left`}
        >
          BEYOND THE CODE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-justify"
          >
            <div className="flex items-center justify-center overflow-hidden">
              <TextRevealCard
                text={fullDescription}
                revealText={fullDescription}
                className="w-full"
              >
                <TextRevealCardDescription>
                  Hover over the card to reveal my full story.
                </TextRevealCardDescription>
              </TextRevealCard>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="text-center">
              {/* Optional: Add content here */}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
});

About.displayName = "About";
export default About;
