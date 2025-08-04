"use client";

import React, {useState} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiLogOut } from "react-icons/fi";
import HeaderIcons from "../component/header";

// Import font
import { Montserrat, Space_Mono } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

// Data Proyek
const AllProjects = [
  {
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
  },
  {
    id: 2,
    title: "E-Learnify",
    description:
      "An online learning platform providing structured IT classes for beginners to advanced learners, with registration features and digital course materials.",
    category: "Web",
    image: "/assets/elearnify.png",
    link: "",
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
    category: "Web",
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
    category: "Web",
    image: "/assets/volcanoria.png",
    link: "",
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
    category: "Web",
    image: "/assets/portfolio-V1.png",
    link: "https://portfolio-fendyra-b7txyrpxv-fendyras-projects.vercel.app/",
    github: "https://github.com/Fendyra/portfolio-v2",
    technologies: [
      { name: "React", logo: "/assets/react.png" },
      { name: "TailwindCSS", logo: "/assets/tailwindcss.png" },
      { name: "Javascript", logo: "/assets/js.png" },
      { name: "Figma", logo: "/assets/figma.png" },
      { name: "Next Js", logo: "/assets/nextjs.png" },
    ],
  },
  {
    id: 6,
    title: "Printhub",
    description:
      "Designed a seamless print-ordering experience from upload to pickup, all in a few intuitive clicks. Built with the team, for real-world workflows.",
    category: "UI/UX",
    image: "/assets/printhub.png",
    link: "",
    github:
      "https://www.figma.com/design/OT3qM6FE8dxz1UKspfTtql/RKPL-1?node-id=1-3&t=cZw4Lja3X3ocWT7f-1",
    technologies: [{ name: "Figma", logo: "/assets/figma.png" }],
  },
  {
    id: 7,
    title: "BusyWeeknds Design",
    description:
      "A comprehensive UI/UX design for the BusyWeeknds e-commerce platform, focusing on user experience and visual appeal.",
    category: "UI/UX",
    image: "/assets/busyweeknds_design.png",
    link: "",
    github:
      "https://www.figma.com/design/OT3qM6FE8dxz1UKspfTtql/RKPL-1?node-id=1-3&t=cZw4Lja3X3ocWT7f-1",
    technologies: [{ name: "Figma", logo: "/assets/figma.png" }],
  },
];

const WorksPage = () => {
  // Tambahan: useState untuk mengelola kategori yang dipilih. Defaultnya 'All'.
  const [filterCategory, setFilterCategory] = useState("All");

  // Tambahan: Fungsi untuk mengubah kategori saat tombol diklik.
  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  // Filter proyek berdasarkan kategori yang dipilih
  const filteredProjects =
    filterCategory === "All"
    ? AllProjects
    : AllProjects.filter((project) => project.category === filterCategory);

  const filterButtons = [
    { name: "All", category: "All" },
    { name: "Web", category: "Web" },
    { name: "UI/UX", category: "UI/UX" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
        <Link href="/">
          <Image
            src="/assets/logo-portfolio.png"
            alt="Portfolio Logo"
            width={80}
            height={80}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <div className="flex-grow flex justify-center">
          <HeaderIcons />
        </div>
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

      <div className="container mx-auto mt-20">
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={`${montserrat.className} font-bold text-[clamp(2rem,6vw,4rem)] mb-4`}
          >
            Portfolio Gallery
          </h1>
          <p
            className={`${spaceMono.className} text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg`}
          >
            ./What I’ve Been Cooking - A Showcase of My Creations
          </p>
        </motion.header>

      <motion.div
          className="flex justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filterButtons.map((button) => (
            <button
              key={button.category}
              onClick={() => handleFilter(button.category)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                filterCategory === button.category
                  ? "bg-black text-white dark:bg-gray-100 dark:text-black shadow-md"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {button.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
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
                <div className="flex flex-wrap gap-2 mb-4">
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

                <Link href={`/project/${project.id}`} passHref legacyBehavior>
                  <motion.a
                    className="inline-flex items-center gap-2 border border-gray-400 dark:border-gray-600 rounded-full px-4 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.a>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default WorksPage;
