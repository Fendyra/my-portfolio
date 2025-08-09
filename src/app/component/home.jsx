"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat, Bebas_Neue, Inter, Oswald } from "next/font/google";
import Image from "next/image";
import LightRays from "./ui/LightRays";

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

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Home() {
  const [displayName, setDisplayName] = useState("Fendyra Restu D");
  // State untuk melacak mode gelap/terang, nilai default berdasarkan class 'dark' di <html>
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  // Efek untuk mendengarkan perubahan class 'dark' pada elemen <html>
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(mutation.target.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  const fullName = "Designed by Fendyra";
  const typingSpeed = 150;
  const delayBeforeRestart = 1000;

  // Efek untuk animasi teks
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

  const marqueeText1 = "Code Artist - Frontend Survivor - Web Developer ";
  const marqueeText2 = "Fullstack Developer - UI Enthusiast - Creative Coder ";

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

  // Logika untuk menentukan warna berdasarkan mode
  const raysColor = isDarkMode ? "#00ffff" : "#ff9e00"; // Warna light rays yang valid
  const sectionBgClass = isDarkMode ? "bg-black" : "bg-white";
  const textColorClass = isDarkMode ? "text-white" : "text-black";
  const marqueeColorClass = isDarkMode ? "text-white" : "text-gray-300"; // Teks marquee lebih lembut di light mode

  return (
    <motion.section
      className={`relative flex flex-col items-center justify-center py-16 px-4 text-center min-h-screen ${sectionBgClass}`}
      id="home"
    >
      {/* LightRays Component sebagai background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor={raysColor}
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* Konten Halaman Home dengan z-index lebih tinggi */}
      <MotionImage
        src="/assets/logo-portfolio.png"
        alt="Logo Portfolio"
        width={120}
        height={120}
        className="relative z-10 object-cover mx-auto mt-10 mb-1"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />

      <motion.div className="relative z-10 flex flex-col items-center space-y-4">
        <motion.p
          className={`${inter.className} text-sm md:text-xl font-semibold text-gray-500`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          {displayName}
        </motion.p>

        <motion.h1
          className={`${oswald.className}
            text-5xl md:text-7xl
            font-bold leading-none
            ${textColorClass}
          `}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="relative w-full h-[200px] md:h-[300px] flex flex-col justify-center overflow-hidden">
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
                      className={`${oswald.className} blink-text uppercase font-bold text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none ${marqueeColorClass}`}
                    >
                      {marqueeText1}
                    </span>
                  ))}
              </div>
            </div>
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
                      className={`${oswald.className} blink-text uppercase font-bold text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none ${marqueeColorClass}`}
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
          className={`mt-8 px-6 py-3 ${textColorClass} font-semibold flex items-center justify-center cursor-pointer`}
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
