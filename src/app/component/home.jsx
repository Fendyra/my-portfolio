"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link"; // Link is not used in the provided Home component, but kept for consistency if it's used elsewhere.

const MotionImage = motion(Image);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Home() {
  const [displayName, setDisplayName] = useState("Fendyra Restu D");

  const fullName = "Fendyra Restu";
  const typingSpeed = 150;
  const delayBeforeRestart = 1000;

  // Effect for typing animation
  useEffect(() => {
    let index = 0;
    let forward = true;
    let timeoutId; // To store the timeout ID for cleanup

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

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const marqueeText1 = "Design Dreamer - Frontend Survivor - Web Developer ";
  const marqueeText2 = "Code Artist - UI Enthusiast - Creative Coder ";

  const numberOfClones = 3;

  const animationSpeed = "50s";

  // Framer Motion variants for the arrow icon animation
  const arrowVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0], // Bounce animation: moves up by 15px then back to original position
      rotate: [0, 5, -5, 0], // Subtle rotation for added visual interest
      transition: {
        duration: 1.8, // Duration of one complete animation cycle
        repeat: Infinity, // Repeats indefinitely
        ease: "easeInOut", // Easing function for smooth animation
        delay: 2.0, // Delay before the animation starts
      },
    },
  };

  // Handler for smooth scrolling to the About section
  const handleScrollToAbout = (e) => {
    e.preventDefault(); // Prevent default anchor link behavior
    const aboutSection = document.querySelector("#about"); // Select the About section by its ID
    if (aboutSection) {
      // If the section is found, scroll into view smoothly
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center py-16 px-4 text-center min-h-screen" // Added min-h-screen for better vertical centering
      id="home"
    >
      {/* Logo Image with Framer Motion animations */}
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
        {/* Display Name (typing effect) */}
        <motion.p
          className={`${montserrat.className} text-sm md:text-xl font-regular text-gray-500`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          {displayName}
        </motion.p>

        {/* Marquee Text Section */}
        <motion.h1
          className={`${montserrat.className}
            text-7xl md:text-9xl
            font-bold leading-none
            text-gray-900
            dark:text-white
          `}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="relative w-full h-[180px] md:h-[250px] flex flex-col justify-center overflow-hidden">
            {" "}
            {/* Added overflow-hidden to contain marquee */}
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
                      className="blink-text uppercase"
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
                      className="blink-text uppercase"
                    >
                      {marqueeText2}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </motion.h1>

        {/* Scroll-down Arrow Icon with Framer Motion animation */}
        {/* The `motion.a` component applies the Framer Motion variants */}
        <motion.a
          href="#about" // Link to the about section
          onClick={handleScrollToAbout} // Call the scroll handler on click
          className="mt-4 px-6 py-3 text-gray-900 dark:text-white font-semibold flex items-center justify-center cursor-pointer"
          variants={arrowVariants} // Apply the defined animation variants
          initial="initial" // Set initial state
          animate="animate" // Animate to the 'animate' state
          style={{ width: "auto" }}
          aria-label="Scroll to About section" // Added for accessibility
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
