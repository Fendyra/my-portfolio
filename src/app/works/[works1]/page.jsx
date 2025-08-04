// C:\laragon\www\my-portfolio\src\app\works\1\page.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";

// Import font
import { Montserrat, Space_Mono } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

const BusyWeekndsDetail = () => {
  const project = {
    id: 1,
    title: "BusyWeeknds",
    description:
      "An e-commerce website for the clothing brand BusyWeeknds, offering a modern, responsive, and user-friendly online shopping experience.",
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
  };

  return (
    <main
      className={`min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white relative p-6 sm:p-12 ${montserrat.className}`}
    >
      <div className="container mx-auto mt-20">
        {/* Back Button */}
        <motion.div
          className="mb-8"
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

        {/* Project Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1
              className={`${montserrat.className} font-bold text-4xl md:text-5xl`}
            >
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
          <p
            className={`${spaceMono.className} text-lg text-gray-600 dark:text-gray-400 mb-6`}
          >
            Laravel • TailwindCSS • Laravel • Groq API
          </p>
        </motion.div>

        {/* Main Project Image */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Project Description */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
            BusyWeeknds is an e-commerce platform I developed for a clothing
            brand, designed to provide a seamless online shopping experience.
            The project showcases modern web development practices with a focus
            on user experience and responsive design.
          </p>
        </motion.div>

        {/* Development Journey Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className={`${montserrat.className} text-2xl font-bold mb-6`}>
            Development Journey
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I started this project with the goal of creating a modern e-commerce
            solution that would stand out in the competitive fashion market. The
            development process involved careful planning of the user
            experience, from product browsing to checkout completion.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Using Laravel as the backend framework provided robust functionality
            for handling user authentication, product management, and order
            processing. The integration with TailwindCSS allowed for rapid
            development of a responsive and visually appealing interface.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The project challenged me to implement various e-commerce features
            including shopping cart functionality, payment processing
            integration, and inventory management, all while maintaining clean,
            maintainable code.
          </p>
        </motion.div>

        {/* Success & Challenges Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          <h2 className={`${montserrat.className} text-2xl font-bold mb-6`}>
            Success & Challenges
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            The biggest success of this project was creating a fully functional
            e-commerce platform that meets modern web standards. The responsive
            design ensures optimal user experience across all devices, and the
            clean interface makes product discovery intuitive.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            One of the main challenges was implementing secure payment
            processing while maintaining user-friendly checkout flow. I also
            focused on optimizing the website's performance to ensure fast
            loading times, which is crucial for e-commerce success.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The project taught me valuable lessons about full-stack development,
            particularly in handling complex data relationships and implementing
            robust security measures for handling sensitive user information.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
          >
            <FiExternalLink size={20} />
            <span className="font-medium">Live Demo</span>
          </Link>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            <FiGithub size={20} />
            <span className="font-medium">Source Code</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default BusyWeekndsDetail;
