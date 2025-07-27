"use client"

import React, { useEffect, forwardRef } from "react";
import { motion } from "framer-motion"
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Project = forwardRef((props, ref) => {
    useEffect(() => {
        if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [ref]);
    
    return (
      <motion.section
        ref={ref}
        id="project"
        className="min-h-[100vh] bg-whithe dark:bg-black text-gray-900 dark:text-white relative overflow-hidden">
        {/* Heading-Main Project */}
        <div className="w-full max-w-none mx-0 px-0 relative">
            <motion.div
            intial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            
            </motion.div>
        </div>
        

        </motion.section>
    );
});

export default Project;