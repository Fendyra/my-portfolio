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

import {
  TextRevealCard,
  TextRevealCardDescription,
} from "./ui/text-reveal-card";

import { SpinningText } from "./ui/SpinningText";

// StarIcon Component - No changes needed here
const StarIcon = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${
      filled ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
    }`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
  </svg>
);

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

const cvFile =
  "https://drive.google.com/file/d/1s_T7k2oWPsuW1i3_CyB1SiGFDdr5qttz/view?usp=sharing";

const MotionImage = motion(Image);

const About = forwardRef((props, ref) => {
  const paragraph1 = `Hi, I'm Fendyra Restu Dewangga — a frontend developer and UI enthusiast passionate about building clean, responsive, and user-centered web experiences. Currently in my 5th semester studying Information Systems at UPN "Veteran" Yogyakarta, I combine design thinking with code using tools like Laravel, React, Next.js, Tailwind, and Figma.`;
  const paragraph2 = `I love turning ideas into intuitive interfaces that feel natural across devices. For me, great design starts with empathy and ends with purposeful execution. Outside of coding, I lead creative initiatives as the Head of Talent & Interests in the student association, where I bridge tech, culture, and community.`;

  const fullDescription = `${paragraph1}\n\n${paragraph2}`;

  // Updated skills with skill levels (1-5 stars)
  const skills = [
    { name: "HTML", level: 4 },
    { name: "CSS", level: 4 },
    { name: "JavaScript", level: 4 },
    { name: "React", level: 4 },
    { name: "Next.js", level: 4 },
    { name: "Tailwind", level: 4 },
    { name: "Figma", level: 4 },
    { name: "Framer Motion" },
    { name: "MYSQL", level: 4 },
    { name: "UI/UX", level: 4 },
    { name: "Git", level: 3 },
    { name: "Responsive Design" },
    { name: "Web Performance" },
    { name: "Github", level: 4 },
    { name: "Vercel", level: 3 },
    { name: "Deployment", level: 3 },
    { name: "Prototyping", level: 4 },
    { name: "Node.js", level: 3 },
    { name: "PostgreSQL", level: 2 },
    { name: "Laravel", level: 4 },
    { name: "PHP", level: 4 },
    { name: "VS Code", level: 5 },
    { name: "Web Development" },
  ];

  // Tag that will be styled as 'active' (can be derived from skills with high level, or separate)
  const activeTags = [
    "HTML",
    "Next.js",
    "Tailwind",
    "Framer Motion",
    "UI/UX",
    "Responsive Design",
    "Laravel",
    "Node.js",
    "Vercel",
    "Prototyping",
    "VS Code",
  ];

  const renderStars = (level) => {
    if (typeof level !== "number" || level < 1 || level > 5) {
      return null; // Return null if level is not a valid number between 1 and 5
    }
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<StarIcon key={i} filled={i <= level} />);
    }
    // Added a small margin-top to separate stars from the skill name
    return <div className="flex mt-0.5">{stars}</div>;
  };

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-[100vh] bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Full-Width Edge-to-Edge Heading */}
      <div className="w-full max-w-none mx-0 px-0 relative">
        <motion.div
          initial={{ opacity: 0, y: -30 }} // Retain animation from original motion.h1
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          className={`
            relative flex items-center justify-center overflow-hidden pointer-events-none
            w-full
            py-2 md:py-6 lg:py-8
            bg-inherit
            ${montserrat.className}
            text-[clamp(4rem,20vw,15rem)]
            font-black uppercase tracking-tight leading-none whitespace-nowrap
            text-black/15 dark:text-white/100
          `}
          aria-hidden="true"
          aria-label="CTRL + ME - Developer Portfolio Heading"
        >
          CTRL + ME
        </motion.div>
      </div>

      {/* Content Container with Padding */}
      <div className="px-6 md:px-10 lg:px-16 pb-14">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full text-center mb-12"
        >
          <p
            className={`${spaceMono.className} text-sm text-gray-600 dark:text-gray-400`}
          >
            /'Creative Developer'
          </p>
        </motion.div>

        {/* Main About Section */}
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
            {/* Name as Focal Point - MODIFIED FOR RESPONSIVENESS AND LAYOUT */}
            <div className="flex flex-col items-start mb-2">
              <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,5rem)] font-bold mb-1 hover:scale-105 hover:letter-spacing-[0.1em] hover:text-shadow-md transition-all duration-300">
                Fendyra
              </h3>
              <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,5rem)] font-bold mb-1 ml-[25vw] md:ml-0 lg:ml-[150px] hover:scale-105 hover:letter-spacing-[0.1em] hover:text-shadow-md transition-all duration-300">
                Restu
              </h3>
              <h3 className="font-montserrat text-[clamp(2rem,8vw,5rem)] lg:text-[clamp(3rem,6vw,5rem)] font-bold ml-[35vw] md:ml-0 lg:ml-[230px] hover:scale-105 hover:letter-spacing-[0.1em] hover:text-shadow-md transition-all duration-300">
                Dewangga
              </h3>
            </div>

            {/* Intro Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
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
                transition={{ duration: 0.6, delay: 1.1 }}
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
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex justify-center md:justify-end md:col-span-1"
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

        {/* Extended About Section - BEYOND THE CODE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-14"
        >
          <h2
            className={`${montserrat.className} font-bold text-[clamp(2rem,6vw,4rem)] mb-8 text-center md:text-left`}
          >
            BEYOND THE CODE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Description and Spinning Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="space-y-6"
            >
              {/* TextRevealCard Wrapper */}
              <div className="w-full flex justify-start text-justify">
                <TextRevealCard
                  text={fullDescription}
                  revealText={fullDescription}
                  className="w-full text-justify"
                >
                  <TextRevealCardDescription>
                    <code>onHover() =&gt; revealProfile()</code>
                  </TextRevealCardDescription>
                </TextRevealCard>
              </div>

              {/* SpinningText Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex items-start justify-start w-full"
              >
                <a
                  href={cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center rounded-full hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "12ch",
                    height: "12ch",
                  }}
                >
                  <SpinningText>
                    explore me • view resume • peek my cv •
                  </SpinningText>
                  <span className="absolute inset-0 z-0"></span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Skills Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col items-start lg:items-end"
            >
              {/* Skills Label */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.5 }}
                className="mb-4"
              >
                <p
                  className={`${spaceMono.className} text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider`}
                >
                  [SKILLS & TOOLS]
                </p>
              </motion.div>

              {/* Tags Container - Fixed Structure */}
              <div className="flex flex-wrap gap-2 max-w-full md:max-w-[500px] lg:max-w-[550px] justify-start lg:justify-end">
                {skills.map((skill, index) => {
                  const isActive = activeTags.includes(skill.name);
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 1.6 + index * 0.05,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      className={`
                        px-4 py-2 rounded-full text-sm font-medium
                        border cursor-pointer select-none
                        transition-all duration-300 ease-in-out
                        flex flex-col items-center justify-center
                        transform-gpu will-change-transform
                        ${
                          isActive
                            ? "bg-black text-white border-black shadow-md " +
                              "dark:bg-white dark:text-black dark:border-white dark:shadow-md"
                            : "bg-transparent text-black border-black " +
                              "hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/20 " +
                              "dark:text-white dark:border-white " +
                              "dark:hover:bg-white dark:hover:text-black dark:hover:shadow-lg dark:hover:shadow-white/20"
                        }
                      `}
                      aria-label={`${skill.name} skill tag with ${skill.level} out of 5 stars`}
                    >
                      <span className="mb-0.5">{skill.name}</span>
                      {renderStars(skill.level)}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
});

About.displayName = "About";
export default About;
