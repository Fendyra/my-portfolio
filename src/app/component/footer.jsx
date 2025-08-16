"use client";

import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Montserrat } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// Font configurations
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Social media links
const socialLinks = [
  { name: "GitHub", href: "https://github.com/Fendyra", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fendyra-dewangga",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fendyrard",
    icon: FaInstagram,
  },
];

// Define animation variants for the whole footer container
const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger delay for top-level children (left/right columns)
      delayChildren: 0.5,
    },
  },
};

// Variants for the left column (the heading)
const headingContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each line of the heading
    },
  },
};

const headingLineVariants = {
  hidden: { opacity: 0, y: 30, letterSpacing: "-0.2em" },
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

// Variants for the right column (contact info)
const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const emailLinkVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.2, // Delay after the paragraph appears
    },
  },
};

const socialLinkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const backgroundTextVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 0.1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 1.5, // Start after other elements have appeared
    },
  },
};

const Footer = forwardRef((props, ref) => {
  return (
    <motion.footer
      ref={ref}
      id="contact"
      className="bg-white dark:bg-black text-black dark:text-white py-24 px-4 md:px-8"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 lg:gap-24 items-start">
          {/* Left Column (Heading) */}
          <motion.div
            className="relative px-2 md:px-0"
            variants={headingContainerVariants}
          >
            <div className="flex flex-col items-start mb-2">
              <motion.h3
                variants={headingLineVariants}
                className={`${montserrat.className} text-[clamp(2.5rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,5rem)] font-bold mb-1 hover:scale-105 hover:tracking-wide transition-all duration-300`}
              >
                LET'S
              </motion.h3>
              <motion.h3
                variants={headingLineVariants}
                className={`italic text-[clamp(2.5rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,5rem)] font-bold mb-1 ml-[25vw] md:ml-[8vw] lg:ml-[150px] hover:scale-105 hover:tracking-wide transition-all duration-300`}
                style={{ fontFamily: playfairDisplay.variable }}
              >
                GET IN
              </motion.h3>
              <motion.h3
                variants={headingLineVariants}
                className={`${montserrat.className} text-[clamp(2.5rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,5rem)] font-bold ml-[45vw] md:ml-[15vw] lg:ml-[260px] hover:scale-105 hover:tracking-wide transition-all duration-300`}
              >
                TOUCH
              </motion.h3>
            </div>
          </motion.div>

          {/* Right Column (Contact Info) */}
          <motion.div className="flex flex-col items-start px-2 md:px-0">
            {/* Short Message */}
            <motion.p
              variants={contactItemVariants}
              className={`${montserrat.className} text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-lg mb-8 text-justify`}
            >
              Have a project in mind or just want to say hello? I'm always open
              to new opportunities and collaborations. Feel free to reach out,
              and let's build something amazing together!
            </motion.p>

            {/* Email with Animated Hover */}
            <motion.div variants={emailLinkVariants}>
              <Link
                href="mailto:fendyrarestu2004@gmail.com"
                passHref
                legacyBehavior
              >
                <a
                  className={`${montserrat.className} relative text-xl md:text-2xl font-bold mb-8 group`}
                >
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-purple-400 dark:to-pink-500 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    fendyrarestu2004@gmail.com
                  </span>
                </a>
              </Link>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              className="flex flex-col space-y-4"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              <span
                className={`${montserrat.className} text-lg font-bold relative mt-3`}
              >
                Social Links
              </span>
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                    variants={socialLinkVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 8 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Icon
                        size={24}
                        className="mr-4 transition-transform duration-300"
                      />
                    </motion.div>
                    <span
                      className={`${montserrat.className} text-lg font-medium relative`}
                    >
                      {link.name}
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-purple-400 dark:to-pink-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={backgroundTextVariants}
        className={`relative flex items-center justify-center overflow-hidden pointer-events-none w-full text-[clamp(3rem,17vw,15rem)] font-black mt-4 tracking-tight leading-none whitespace-nowrap text-black dark:text-white`}
        aria-hidden="true"
        aria-label="Footer"
      >
        <span className={montserrat.className}>FENDY</span>
        <span className={`italic ${playfairDisplay.className}`}>Vers</span>
      </motion.div>
    </motion.footer>
  );
});

export default Footer;
