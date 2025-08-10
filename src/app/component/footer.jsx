"use client"

import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Montserrat } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const Footer = forwardRef((props, ref) => {
    return (
      <motion.footer
        ref={ref}
        className="bg-white dark:bg-black text-black dark:text-white py-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Left Column (Name and Intro) */}
          <motion.div
            className="relative md:col-span-1 md:col-start-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
        <div className="flex flex-col items-start mb-2">
          <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,5rem)] ml-4 font-bold mb-1 hover:scale-105 hover:letter-spacing-[0.1em] hover:text-shadow-md transition-all duration-300">
            GET
          </h3>
          <h3 className="italic text-[clamp(2rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,5rem)] font-bold mb-1 ml-[25vw] md:ml-0 lg:ml-[150px] hover:scale-105 hover:letter-spacing-[0.1em] hover:text-shadow-md transition-all duration-300" style={{ fontFamily: playfairDisplay.variable }}>
            IN
          </h3>
          <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,5rem)]  ml-4 font-bold mb-1 hover:scale-105 hover:letter-spacing-[0.1em] hover:text-shadow-md transition-all duration-300">
            TOUCH
          </h3>
        </div>
        </motion.div>

         {/* Right Column (Profile Image) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex justify-center md:justify-end md:col-span-1"
          >

          </motion.div>
        </motion.div>

      </motion.footer>
    );
    });

export default Footer;
