"use client";

import React, { useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Montserrat,
  Space_Mono,
  Plus_Jakarta_Sans,
  Inter,
} from "next/font/google";

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
  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-[100vh] bg-white dark:bg-black text-gray-900 dark:text-white px-6 md:px-12 lg:px-24 py-20 overflow-hidden"
    >
      {/* Top Heading Section */}
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

      {/* Main About Section */}
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
          {/* Name as Focal Point */}
          <div className="flex flex-col items-start mb-2">
            <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] font-bold mb-1 hover:scale-105 hover:letter-spacing-[0.1em] hover:text-shadow-md transition-all duration-300">
              Fendyra
            </h3>
            <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] font-bold mb-1 ml-[140px] hover:scale-105 hover:letter-spacing-[0.1em] hover:text-shadow-md transition-all duration-300">
              Restu
            </h3>
            <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] font-bold ml-[220px] hover:scale-105 hover:letter-spacing-[0.1em] hover:text-shadow-md transition-all duration-300">
              Dewangga
            </h3>
          </div>

          {/* Intro Section */}
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

        {/* Right Column (Profile Image) */}
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

      {/* Extended About Section */}
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
          >
            <h4
              className={`${inter.className} text-large text-justify leading-relaxed text-gray-700 dark:text-gray-300 max-w-prose mb-1`}
            >
              Hi, I’m <strong>Fendyra Restu Dewangga</strong> — a frontend
              developer and UI/UX designer driven by a love for clean,
              meaningful digital experiences. I believe great interfaces begin
              with empathy and end with precision. Currently in my 5th semester
              studying Information Systems at{" "}
              <strong>UPN "Veteran" Yogyakarta</strong>, I combine design
              thinking with code to create responsive, accessible, and visually
              engaging web solutions.
            </h4>
            <h4
              className={`${inter.className} text-large text-justify leading-relaxed text-gray-700 dark:text-gray-300 max-w-prose mb-1`}
            >
              I’m fascinated by how design and code can shape the way people
              interact with technology. For me, every line of code is an
              opportunity to solve problems beautifully from fluid layouts to
              seamless user flows. I love using <strong>React</strong>,{" "}
              <strong>Next.js</strong>, and <strong>Tailwind</strong> to turn
              wireframes into live, responsive products that feel intuitive on
              every device.
            </h4>
            <h4
              className={`${inter.className} text-large text-justify leading-relaxed text-gray-700 dark:text-gray-300 max-w-prose mb-1`}
            >
              Outside the code editor, I thrive in community. As Head of Talent
              & Interests in the student association, I lead initiatives that
              blend tech, culture, and collaboration. From organizing developer
              communities to producing creative campaigns, I value teamwork,
              communication, and building things that matter both online and
              offline.
            </h4>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="text-center"></div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
});

export default About;
