"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat, Bebas_Neue, Inter, Oswald } from "next/font/google"; // Import Oswald

import Image from "next/image";

const MotionImage = motion(Image);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

// Define Oswald font
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"], // Oswald has multiple weights, including bold
});

function Home() {
  const [displayName, setDisplayName] = useState("Fendyra Restu D");

  const fullName = "Designed by Fendyra";
  const typingSpeed = 150;
  const delayBeforeRestart = 1000;

  // Effect for typing animation
  useEffect(() => {
    let index = 0;
    let forward = true;
    let timeoutId;

    const typeEffect = () => {
      if (forward) {
        setDisplayName(fullName.substring(0, index));
        index++;
        if (index > fullName.length) {
          forward = false;
          timeoutId = setTimeout(typeEffect, delayBeforeRestart);
          return;
        }
      } else {
        setDisplayName(fullName.substring(0, index));
        index--;
        if (index < 0) {
          forward = true;
        }
      }
      timeoutId = setTimeout(typeEffect, typingSpeed);
    };

    typeEffect();

    return () => clearTimeout(timeoutId);
  }, []);

  const marqueeText1 = "Design Dreamer - Frontend Survivor - Web Developer ";
  const marqueeText2 = "Code Artist - UI Enthusiast - Creative Coder ";

  const numberOfClones = 3;

  const animationSpeed = "50s";

  const arrowVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2.0,
      },
    },
  };

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center py-16 px-4 text-center min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white"
      id="home"
    >
      <MotionImage
        src="/assets/logo-portfolio.png"
        alt="Logo Portfolio"
        width={120}
        height={120}
        className="object-cover mx-auto mt-10 mb-1"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />

      <motion.div className="flex flex-col items-center space-y-4">
        <motion.p
          className={`${inter.className} text-sm md:text-xl font-semibold text-gray-500`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          {displayName}
        </motion.p>

        <motion.h1
          className={`${oswald.className} {/* Menggunakan Oswald untuk h1 utama */}
            text-7xl md:text-9xl
            font-bold leading-none
            text-gray-900
            dark:text-white
          `}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="relative w-full h-[200px] md:h-[300px] flex flex-col justify-center overflow-hidden">
            {/* Marquee 1 */}
            <div
              className="marquee-container"
              style={{ "--speed": animationSpeed }}
            >
              <div className="marquee-content">
                {Array(numberOfClones)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={`marquee1-${i}`}
                      className={`${oswald.className} blink-text uppercase font-bold text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none`} // Menggunakan Oswald di sini
                    >
                      {marqueeText1}
                    </span>
                  ))}
              </div>
            </div>
            {/* Marquee 2 */}
            <div
              className="marquee-container"
              style={{ "--speed": animationSpeed }}
            >
              <div className="marquee-content left">
                {Array(numberOfClones)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={`marquee2-${i}`}
                      className={`${oswald.className} blink-text uppercase font-bold text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none`} // Menggunakan Oswald di sini
                    >
                      {marqueeText2}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </motion.h1>

        <motion.a
          href="#about"
          onClick={handleScrollToAbout}
          className="mt-4 px-6 py-3 text-gray-900 dark:text-white font-semibold flex items-center justify-center cursor-pointer"
          variants={arrowVariants}
          initial="initial"
          animate="animate"
          style={{ width: "auto" }}
          aria-label="Scroll to About section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-down-right rounded-full"
          >
            <path d="m7 7 10 10" />
            <path d="M17 7v10H7" />
          </svg>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Home;
