"use client";

import React, { forwardRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
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

const DynamicTextPressure = dynamic(() => import("./ui/TextPressure"), {
  ssr: false,
});

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
  "https://drive.google.com/file/d/1sm5DfIxKZxg7CzshhjsXLBBDd33HPA44/view?usp=drive_link";

const MotionImage = motion(Image);

// Define variants for the container and child elements
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger delay between child animations
      delayChildren: 0.3, // Initial delay before the first child animates
    },
  },
};

const slideUpAndFade = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// New animation variants for the background heading
const backgroundHeadingVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -30, filter: "blur(5px)" },
  visible: {
    opacity: 0.1, // Adjusted to be very subtle
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      delay: 0.2, // A slight delay for a more cinematic feel
    },
  },
};

// New animation variants for the subtitle
const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.5, // Syncs with heading but appears slightly after
    },
  },
};

const About = forwardRef((props, ref) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const paragraph1 = `Hi, I'm Fendyra Restu Dewangga — a Creative Fullstack Developer with specialists in frontend developer and UI enthusiast passionate about building clean, responsive, and user-centered web experiences. Currently in my 5th semester studying Information Systems at UPN "Veteran" Yogyakarta, I combine design thinking with code using tools like Laravel, React, Next.js, Tailwind, and Figma.`;
  const paragraph2 = `I love turning ideas into intuitive interfaces that feel natural across devices. For me, great design starts with empathy and ends with purposeful execution. Outside of coding, I lead creative initiatives as the Head of Talent & Interests in the student association, where I bridge tech, culture, and community.`;

  const fullDescription = `${paragraph1}\n\n${paragraph2}`;

  const skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Tailwind" },
    { name: "Figma" },
    { name: "Framer Motion" },
    { name: "MYSQL" },
    { name: "UI/UX" },
    { name: "Git" },
    { name: "Responsive Design" },
    { name: "Web Performance" },
    { name: "Github" },
    { name: "Vercel" },
    { name: "Deployment" },
    { name: "Prototyping" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "Laravel" },
    { name: "PHP" },
    { name: "VS Code" },
    { name: "Web Development" },
  ];

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

  const textColor = isDarkMode ? "#ffffff" : "#000000";
  const strokeColor = isDarkMode ? "#5e6666c7" : "#08084dff";

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-[100vh] bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden px-6 md:px-10 lg:px-16"
    >
      {/* Background Heading - Animated with `backgroundHeadingVariants` */}
      <motion.div
        variants={backgroundHeadingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`
            relative flex items-center justify-center overflow-hidden pointer-events-none
            w-full
            py-2 md:py-6 lg:py-8
            bg-inherit
            ${montserrat.className}
            text-[clamp(3rem,17vw,15rem)]
            font-black uppercase tracking-tight leading-none whitespace-nowrap
            text-black dark:text-white
          `}
        aria-hidden="true"
        aria-label="CTRL + ME - Developer Portfolio Heading"
      >
        CTRL + ME
      </motion.div>

      {/* Main Content Container - Using whileInView for scroll animation */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="pb-14"
      >
        {/* Subtitle - Animates with `subtitleVariants` */}
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full text-center mb-12"
        >
          <p
            className={`${spaceMono.className} text-sm text-gray-600 dark:text-gray-400`}
          >
            ./Creative Developer - Code Meets Character
          </p>
        </motion.div>

        {/* Main Grid - Animates with staggerContainer */}
        <motion.div
          variants={slideUpAndFade}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Text Content - Animates with staggerContainer */}
          <motion.div
            variants={slideUpAndFade}
            className="relative md:col-span-1 md:col-start-1"
          >
            <div className="flex flex-col items-start mb-2 text-white dark:text-black">
              <DynamicTextPressure
                text="Fendyra"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor={textColor}
                strokeColor={strokeColor}
                minFontSize={25}
                className="text-white dark:text-black"
              />
              <DynamicTextPressure
                text="Restu"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor={textColor}
                strokeColor={strokeColor}
                minFontSize={25}
                className="text-white dark:text-black"
              />
              <DynamicTextPressure
                text="Dewangga"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor={textColor}
                strokeColor={strokeColor}
                minFontSize={25}
                className="text-white dark:text-black"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <motion.div variants={slideUpAndFade}>
                <p
                  className={`${spaceMono.className} text-sm text-gray-600 dark:text-gray-400`}
                >
                  [INTRO]
                </p>
              </motion.div>
              <motion.div variants={slideUpAndFade}>
                <p
                  className={`${plusJakartaSans.className} text-base leading-relaxed max-w-prose text-gray-700 dark:text-gray-300 text-justify`}
                >
                  Creative developer blending UI design with creativity code to
                  craft modern, user-friendly digital experiences.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image - Animates with staggerContainer */}
          <motion.div
            variants={slideUpAndFade}
            className="flex justify-center md:justify-end md:col-span-1"
          >
            <MotionImage
              src="/assets/photo-profile.jpg"
              alt="Fendyra's Profile Picture"
              width={380}
              height={480}
              className="rounded-lg shadow-xl object-cover max-w-[350px] md:max-w-[450px] w-full h-full"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Beyond the Code Section */}
        <motion.div variants={slideUpAndFade} className="mt-14">
          <h2
            className={`${montserrat.className} font-bold text-[clamp(2rem,6vw,4rem)] mb-8 text-center md:text-left`}
          >
            BEYOND THE CODE
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Description and CV Button */}
            <motion.div variants={slideUpAndFade} className="space-y-6">
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
              <motion.div
                variants={slideUpAndFade}
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

            {/* Skills & Tools Section */}
            <motion.div
              variants={slideUpAndFade}
              className="flex flex-col items-start lg:items-end"
            >
              <motion.div variants={slideUpAndFade} className="mb-4">
                <p
                  className={`${spaceMono.className} text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider`}
                >
                  [SKILLS & TOOLS]
                </p>
              </motion.div>
              <div className="flex flex-wrap gap-2 max-w-full md:max-w-[500px] lg:max-w-[550px] justify-start lg:justify-end">
                {/* Individual Skill Tags - Staggered animation */}
                {skills.map((skill, index) => {
                  const isActive = activeTags.includes(skill.name);
                  return (
                    <motion.span
                      key={index}
                      variants={slideUpAndFade}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      className={`
                        px-4 py-2 rounded-full text-sm font-medium border cursor-pointer select-none transition-all duration-300 ease-in-out flex flex-col items-center justify-center transform-gpu will-change-transform ${
                          isActive
                            ? "bg-black text-white border-black shadow-md dark:bg-white dark:text-black dark:border-white dark:shadow-md"
                            : "bg-transparent text-black border-black hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/20 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black dark:hover:shadow-lg dark:hover:shadow-white/20"
                        }
                      `}
                      aria-label={`${skill.name} skill tag`}
                    >
                      <span>{skill.name}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
});

About.displayName = "About";
export default About;
