"use client";

import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Montserrat } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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

const Footer = forwardRef((props, ref) => {
  return (
    <motion.footer
      ref={ref}
      className="bg-white dark:bg-black text-black dark:text-white py-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 lg:gap-24 items-start"
        >
          {/* Left Column (Heading) */}
          <motion.div
            className="relative px-2 md:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col items-start mb-2">
              <h3
                className={`${montserrat.className} text-[clamp(2.5rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,5rem)] font-bold mb-1 hover:scale-105 hover:tracking-wide transition-all duration-300`}
              >
                LET'S
              </h3>
              <h3
                className={`italic text-[clamp(2.5rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,5rem)] font-bold mb-1 ml-[25vw] md:ml-0 lg:ml-[150px] hover:scale-105 hover:tracking-wide transition-all duration-300`}
                style={{ fontFamily: playfairDisplay.variable }}
              >
                GET IN
              </h3>
              <h3
                className={`${montserrat.className} text-[clamp(2.5rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,5rem)] font-bold ml-[45vw] md:ml-0 lg:ml-[260px] hover:scale-105 hover:tracking-wide transition-all duration-300`}
              >
                TOUCH
              </h3>
            </div>
          </motion.div>

          {/* Right Column (Contact Info) */}
          <motion.div
            className="flex flex-col items-start px-2 md:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {/* Short Message */}
            <p
              className={`${montserrat.className} text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-lg mb-8 text-justify`}
            >
              Have a project in mind or just want to say hello? I'm always open
              to new opportunities and collaborations. Feel free to reach out,
              and let's build something amazing together!
            </p>

            {/* Email with Animated Hover */}
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

            {/* Social Media Links */}
            <div className="flex flex-col space-y-4">
              <span
                className={`${montserrat.className} text-lg font-bold relative`}
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
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.1 + index * 0.1,
                    }}
                  >
                    <Icon
                      size={24}
                      className="mr-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span
                      className={`${montserrat.className} text-lg font-medium relative`}
                    >
                      {link.name}
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-purple-400 dark:to-pink-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`relative flex items-center justify-center overflow-hidden pointer-events-none w-full bg-inherit text-[clamp(3rem,17vw,15rem)] font-black mt-4 tracking-tight leading-none whitespace-nowrap text-black/15 dark:text-white/10`}
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
