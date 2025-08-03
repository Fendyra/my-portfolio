"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiLogOut } from "react-icons/fi"; 
import HeaderIcons from "../component/header";

// Import font
import { Montserrat, Space_Mono } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

// Data Proyek dengan path relatif dari folder public
const projects = [
  {
    id: 1,
    title: "BusyWeeknds",
    description:
      "An e-commerce website for the clothing brand BusyWeeknds, offering a modern, responsive, and user-friendly online shopping experience.",
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
  },
  {
    id: 2,
    title: "E-Learnify",
    description:
      "An online learning platform providing structured IT classes for beginners to advanced learners, with registration features and digital course materials.",
    image: "/assets/elearnify.png",
    link: "#",
    github: "https://github.com/Fendyra/Elearnify",
    technologies: [
      { name: "PHP", logo: "/assets/php.png" },
      { name: "TailwindCSS", logo: "/assets/tailwindcss.png" },
      { name: "Javascript", logo: "/assets/js.png" },
      { name: "Figma", logo: "/assets/figma.png" },
      { name: "CSS", logo: "/assets/css.png" },
    ],
  },
  {
    id: 3,
    title: "Portfolio V2",
    description:
      "A modern and creative upgrade of the personal portfolio, featuring interactive navigation and visually engaging design to highlight works.",
    image: "/assets/portfolio-2025.png",
    link: "#",
    github: "https://github.com/Fendyra/my-portfolio",
    technologies: [
      { name: "React", logo: "/assets/react.png" },
      { name: "TailwindCSS", logo: "/assets/tailwindcss.png" },
      { name: "Javascript", logo: "/assets/js.png" },
      { name: "Figma", logo: "/assets/figma.png" },
      { name: "Next Js", logo: "/assets/nextjs.png" },
    ],
  },
  {
    id: 4,
    title: "Volcanoria",
    description:
      "An informative website presenting real-time data and visual distribution of volcanoes across Indonesia, with educational content.",
    image: "/assets/volcanoria.png",
    link: "#",
    github: "https://github.com/Fendyra/volcanoria",
    technologies: [
      { name: "HTML", logo: "/assets/html-5.png" },
      { name: "PHP", logo: "/assets/php.png" },
      { name: "CSS", logo: "/assets/css.png" },
    ],
  },
  {
    id: 5,
    title: "Portfolio V1",
    description:
      "The first version of a personal portfolio showcasing identity, projects, and web development skills in a clean and professional layout.",
    image: "/assets/portfolio-V1.png",
    link: "#",
    github: "#",
    technologies: [
      { name: "React", logo: "/assets/react.png" },
      { name: "TailwindCSS", logo: "/assets/tailwindcss.png" },
      { name: "Javascript", logo: "/assets/js.png" },
      { name: "Figma", logo: "/assets/figma.png" },
      { name: "Next Js", logo: "/assets/nextjs.png" },
    ],
  },
];

const WorksPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <main
      className={`min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white relative p-6 sm:p-12 ${montserrat.className}`}
    >
      <div className="fixed top-6 left-0 w-full px-4 md:px-8 z-50 flex items-center">
        {/* Logo FendyFolio di kiri */}
        <Link href="/">
          <Image
            src="/assets/logo-portfolio.png"
            alt="Portfolio Logo"
            width={80}
            height={80}
            style={{ cursor: "pointer" }}
          />
        </Link>

        {/* Ikon sosial di tengah */}
        <div className="flex-grow flex justify-center">
          <HeaderIcons />
        </div>

        {/* Tombol menu dan tombol exit di kanan */}
        <div className="flex items-center gap-4">
          <Link href="/main">
            <button
              className="z-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground"
              aria-label="Kembali ke Portofolio Utama"
            >
              <FiLogOut size={24} className="text-foreground" />
            </button>
          </Link>
        </div>
      </div>

      {/* Konten utama halaman */}
      <div className="container mx-auto mt-20">
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400`}
          >
            My Projects
          </h1>
          <p
            className={`${spaceMono.className} text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg`}
          >
            A comprehensive showcase of my work, from web applications to
            interactive designs.
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gray-50 dark:bg-gray-900"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    <Link href={project.link} passHref legacyBehavior>
                      <motion.a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink size={20} />
                        <span className="font-semibold hidden sm:inline">
                          Live Demo
                        </span>
                      </motion.a>
                    </Link>
                    <Link href={project.github} passHref legacyBehavior>
                      <motion.a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub size={20} />
                        <span className="font-semibold hidden sm:inline">
                          Source Code
                        </span>
                      </motion.a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-base mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="p-2 border rounded-full border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={24}
                        height={24}
                        title={tech.name}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default WorksPage;
