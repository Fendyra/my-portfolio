"use client";

import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimate,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6"; // Assuming you might use this one too

// Import font
import { Montserrat, Space_Mono } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

const BusyWeekndsDetail = () => {
  const project = {
    id: 1,
    title: "BusyWeeknds",
    description:
      "An e-commerce platform I developed for a clothing brand, designed to provide a seamless online shopping experience.",
    category: "Web",
    image: "/assets/busyweeknds.png",
    link: "https://busyweeknds.fendyverse.web.id/",
    github: "https://github.com/Fendyra/Busyweeknds",
    technologies: [
      { name: "Laravel", logo: "/assets/laravel.svg" },
      { name: "TailwindCSS", logo: "/assets/tailwindcss.png" },
      { name: "Figma", logo: "/assets/figma.png" },
      { name: "PHP", logo: "/assets/php.png" },
      { name: "Javascript", logo: "/assets/js.png" },
    ],
    screenshots: [
      "/assets/busyweeknds_design.png",
      "/assets/elearnify.png",
      "/assets/portfolio-2025.png",
      "/assets/printhub.png",
      "/assets/volcanoria.png",
      "/assets/portfolio-V1.png",
    ],
  };

  // State for accordion
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Scroll-based effects for parallax and sticky CTA
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const [scope, animate] = useAnimate();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.4) {
      animate(scope.current, { opacity: 1, y: 0 });
    } else {
      animate(scope.current, { opacity: 0, y: 50 });
    }
  });

  return (
    <main
      className={`min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white relative p-6 sm:p-12 ${montserrat.className}`}
    >
      <div className="container mx-auto">
        {/* Back Button */}
        <motion.div
          className="mb-8 mt-12 md:mt-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FiArrowLeft size={20} />
            <span className={spaceMono.className}>Back to Projects</span>
          </Link>
        </motion.div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        {/* Parallax Image */}
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>

        {/* Overlay with Content */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 md:p-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h1
              className={`${montserrat.className} font-bold text-5xl md:text-7xl mb-4`}
            >
              {project.title}
            </h1>
            <p
              className={`${spaceMono.className} text-xl md:text-2xl max-w-prose`}
            >
              {project.description}
            </p>
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
              >
                <FiExternalLink size={20} />
                <span className="font-medium">Live Demo</span>
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-full hover:bg-white/20 transition-colors"
              >
                <FiGithub size={20} />
                <span className="font-medium">Source Code</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto p-6 sm:p-12 mt-12">
        {/* Project Overview & Development Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 mb-20">
          {/* Left Column: Project Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`${montserrat.className} text-3xl font-bold mb-4`}>
              Project Overview
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              BusyWeeknds is an e-commerce platform I developed for a clothing
              brand, designed to provide a seamless online shopping experience.
              The project showcases modern web development practices with a
              focus on user experience and responsive design.
            </p>
          </motion.div>

          {/* Right Column: Development Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className={`${montserrat.className} text-3xl font-bold mb-4`}>
              Development Journey
            </h2>
            <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-4 pl-4 space-y-8">
              {/* Step 1 */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-black dark:bg-blue-900">
                  <svg
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3
                  className={`${montserrat.className} text-xl font-semibold text-gray-900 dark:text-white mb-1`}
                >
                  Initial Planning & Design
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Careful planning of the user experience and crafting a
                  responsive UI with Figma.
                </p>
              </motion.li>
              {/* Step 2 */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-black dark:bg-blue-900">
                  <svg
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM6 11a1 1 0 011-1h2a1 1 0 110 2H7a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3
                  className={`${montserrat.className} text-xl font-semibold text-gray-900 dark:text-white mb-1`}
                >
                  Full-stack Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Using Laravel for the backend and Tailwind CSS for rapid
                  frontend development.
                </p>
              </motion.li>
              {/* Step 3 */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-black dark:bg-blue-900">
                  <svg
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2V7a5 5 0 00-5-5zm-2 2a3 3 0 00-3 3v2a2 2 0 002 2h2a2 2 0 002-2V7a3 3 0 00-3-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3
                  className={`${montserrat.className} text-xl font-semibold text-gray-900 dark:text-white mb-1`}
                >
                  Feature Implementation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Implementing shopping cart, payment integration, and inventory
                  management, all with clean and maintainable code.
                </p>
              </motion.li>
            </ol>
          </motion.div>
        </div>

        {/* Success & Challenges (Accordion) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className={`${montserrat.className} text-3xl font-bold mb-6`}>
            Success & Challenges
          </h2>

          {/* Accordion Item 1 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-4">
            <button
              onClick={() => toggleAccordion(1)}
              className="flex justify-between items-center w-full p-4 text-left font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <span>Biggest Success</span>
              <span
                className={`transform transition-transform ${
                  openAccordion === 1 ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openAccordion === 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 pt-0 text-gray-700 dark:text-gray-300"
                >
                  <p>
                    The biggest success of this project was creating a fully
                    functional e-commerce platform that meets modern web
                    standards. The responsive design ensures optimal user
                    experience across all devices, and the clean interface makes
                    product discovery intuitive.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Accordion Item 2 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(2)}
              className="flex justify-between items-center w-full p-4 text-left font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <span>Main Challenges</span>
              <span
                className={`transform transition-transform ${
                  openAccordion === 2 ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openAccordion === 2 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 pt-0 text-gray-700 dark:text-gray-300"
                >
                  <p>
                    One of the main challenges was implementing secure payment
                    processing while maintaining user-friendly checkout flow. I
                    also focused on optimizing the website's performance to
                    ensure fast loading times, which is crucial for e-commerce
                    success.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Screenshots Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2
            className={`${montserrat.className} text-3xl font-bold mb-6 text-center`}
          >
            In-depth Look
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.screenshots.map((src, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating CTA Buttons */}
      <motion.div
        ref={scope}
        className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 opacity-0"
        initial={{ y: 50 }}
      >
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          <FiExternalLink size={24} />
        </Link>
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border border-gray-300 dark:border-gray-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <FiGithub size={24} />
        </Link>
      </motion.div>
    </main>
  );
};

export default BusyWeekndsDetail;
