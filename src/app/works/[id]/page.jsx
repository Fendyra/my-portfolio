"use client";

import React, { useState, useEffect } from "react";
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

// Import font
import { Montserrat, Space_Mono } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

// Centralized project data. This should ideally be in a separate file like 'projectsData.js'
const AllProjects = [
  {
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
      "/assets/work[1]-1.png",
      "/assets/work[1]-2.png",
      "/assets/work[1]-3.png",
      "/assets/work[1]-4.png",
      "/assets/work[1]-5.png",
      "/assets/work[1]-6.png",
    ],
    overview:
      "BusyWeeknds is an e-commerce platform I developed for a clothing brand, designed to provide a seamless online shopping experience.",
    journey: [
      {
        heading: "Initial Planning & Design",
        text: "Careful planning of the user experience and crafting a responsive UI with Figma.",
      },
      {
        heading: "Full-stack Development",
        text: "Using Laravel for the backend and Tailwind CSS for rapid frontend development.",
      },
      {
        heading: "Feature Implementation",
        text: "Implementing shopping cart, authentication, and inventory management, all with clean and maintainable code.",
      },
    ],
    success:
      "The biggest success of this project was creating a fully functional e-commerce platform that meets modern web standards. The responsive design ensures optimal user experience across all devices, and the clean interface makes product discovery intuitive.",
    challenges:
      "One of the main challenges was implementing secure payment processing while maintaining user-friendly checkout flow. I also focused on optimizing the website's performance to ensure fast loading times, which is crucial for e-commerce success.",
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
      { name: "CSS", logo: "/assets/css-3.png" },
    ],
    screenshots: [
      "/assets/work[2]-1.png",
      "/assets/work[2]-2.png",
      "/assets/work[2]-3.png",
      "/assets/work[2]-4.png",
      "/assets/work[2]-5.png",
      "/assets/work[2]-6.png",
    ],
    overview:
      "E-Learnify is a platform designed to provide a structured online learning environment for various IT classes. It was built to offer a user-friendly interface for both beginners and advanced learners.",
    journey: [
      {
        heading: "Concept & UI/UX Design",
        text: "Developed the core concept and designed the user flow and interface using Figma to ensure a smooth learning experience.",
      },
      {
        heading: "Backend Logic & Database",
        text: "Implemented the backend using PHP to handle user authentication, course management, and resource storage.",
      },
      {
        heading: "Frontend Implementation",
        text: "Built a responsive and dynamic frontend using TailwindCSS and vanilla JavaScript to deliver a clean and interactive user interface.",
      },
    ],
    success:
      "Successfully created a robust platform with a clear and intuitive user journey, from class registration to accessing digital course materials. The system is scalable and ready for future content expansion.",
    challenges:
      "A key challenge was managing a dynamic database of courses and users efficiently. I also focused on ensuring a responsive layout for optimal viewing on all devices, which was a priority for an e-learning platform.",
  },
  {
    id: 3,
    title: "Portfolio V2",
    description:
      "A modern and creative upgrade of the personal portfolio, featuring interactive navigation and visually engaging design to highlight works.",
    category: "Web",
    image: "/assets/portfolio-2025.png",
    link: "", // Empty link to trigger notification
    github: "https://github.com/Fendyra/my-portfolio",
    technologies: [
      { name: "React", logo: "/assets/react.png" },
      { name: "TailwindCSS", logo: "/assets/tailwindcss.png" },
      { name: "Javascript", logo: "/assets/js.png" },
      { name: "Figma", logo: "/assets/figma.png" },
      { name: "Next Js", logo: "/assets/nextjs.png" },
    ],
    screenshots: [
      "/assets/work[3]-1.png",
      "/assets/work[3]-2.png",
      "/assets/work[3]-3.png",
      "/assets/work[3]-4.png",
      "/assets/work[3]-5.png",
      "/assets/work[3]-6.png",
    ],
    overview:
      "Portfolio v2 is a redesigned and improved personal portfolio website, built to reflect a modern creative developer profile. The goal was to present works in a more interactive and immersive way, using motion, clean design, and responsive layout.",
    journey: [
      {
        heading: "Conceptualization & Design",
        text: "The process began with defining a new visual identity. I used Figma to design a dark-themed interface with a strong focus on typography, motion, and a minimalist color palette. The goal was to move away from traditional static portfolios and create a more immersive user journey.",
      },
      {
        heading: "Frontend Development",
        text: "Developed the website using Next.js with Tailwind CSS for utility-first styling. Added smooth animations and transitions using Framer Motion to enhance user interaction.",
      },
      {
        heading: "Responsive & Optimaztion Development",
        text: "Using Tailwind CSS, I ensured the design was fully responsive across all devices. The project was built with a focus on code efficiency and performance optimization, resulting in a fast and seamless experience for every visitor.",
      },
    ],
    success:
      "Successfully built a modern, fully responsive, and animated portfolio that showcases projects, services, and skills effectively. Navigation feels smooth and intuitive across devices, with a strong emphasis on personal branding.",
    challenges:
      "One of the main challenges was balancing interactivity and performance. Integrating complex animations without compromising speed or user experience required careful tuning and optimization across breakpoints.",
  },
  {
    id: 4,
    title: "Volcanoria",
    description:
      "An informative website presenting real-time data and visual distribution of volcanoes across Indonesia, with educational content.",
    category: "Web",
    image: "/assets/volcanoria.png",
    link: "", // Empty link to trigger notification
    github: "https://github.com/Fendyra/volcanoria",
    technologies: [
      { name: "HTML", logo: "/assets/html-5.png" },
      { name: "PHP", logo: "/assets/php.png" },
      { name: "CSS", logo: "/assets/css-3.png" },
    ],
    screenshots: [
      "/assets/work[4]-1.png",
      "/assets/work[4]-2.png",
      "/assets/work[4]-3.png",
      "/assets/work[4]-4.png",
      "/assets/work[4]-5.png",
      "/assets/work[4]-6.png",
    ],
    overview:
      "Volcanoria is a web-based platform built to provide real-time volcanic activity data and educational content. The project focuses on delivering accessible and visually engaging information for public awareness and disaster preparedness in Indonesia.",
    journey: [
      {
        heading: "Planning & Research",
        text: "Started with researching the needs of users who require accessible volcano monitoring, especially in Indonesia. Defined essential features such as interactive maps, eruption status updates, and visual indicators.",
      },
      {
        heading: "Interface & Visualization Design",
        text: "The focus was on creating an engaging and functional interface. Using HTML and CSS, with the help of a framework like Bootstrap, I designed a responsive layout. JavaScript was implemented to manage dynamic interactions and visually display the data.",
      },
      {
        heading: "Educational Content Structure",
        text: "I structured the educational content to be easy to understand, from basic definitions of volcanology to disaster mitigation information. The goal was not just to provide data but also to raise public awareness and knowledge about the importance of being prepared for volcanic activity.",
      },
    ],
    success:
      "The primary success of this project lies in its ability to present complex data in a visual and interactive format. The website serves as a valuable resource for users who want to learn about volcanology in Indonesia, featuring intuitive navigation and an informative design.",
    challenges:
      "The biggest challenge was integrating dynamic map data with the backend and ensuring that updates were reflected accurately and in real-time. Designing a user-friendly interface to display technical data in a simplified manner was also key.",
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
    screenshots: [
      "/assets/work[4]-1.png",
      "/assets/work[4]-2.png",
      "/assets/work[4]-3.png",
      "/assets/work[4]-4.png",
      "/assets/work[4]-5.png",
      "/assets/work[4]-6.png",
    ],
    overview:
      "This is the 'OG version' of my personal portfolio, a project that laid the foundation for my professional journey. It was designed to be a clean, straightforward platform to introduce my identity, showcase my early projects, and demonstrate my foundational web development skills. The focus was on creating a simple, navigable, and professional online presence.",
    journey: [
      {
        heading: "Learning The Ropes",
        text: "The development journey began with learning Next.js and React. The core challenge was to understand component-based architecture, state management, and the principles of server-side rendering (SSR) to build a performant single-page application.",
      },
      {
        heading: "Interactivity & Responsiveness",
        text: "Using Tailwind CSS, I focused on creating a responsive and mobile-first design. This stage was crucial for mastering utility-first CSS and ensuring a consistent user experience across different screen sizes. The structure was built to be modular and easy to maintain.",
      },
      {
        heading: "Deployment & Maintenance",
        text: "Deployed the portfolio using Vercel for easy publishing and ongoing adjustments. The simplicity of code ensures easy updates and scalability for future enhancements.",
      },
    ],
    success:
      "The biggest success was successfully building a functional and professional portfolio from scratch. This project served as a critical learning experience, proving my ability to build a complete web application with modern frameworks and establishing my initial digital footprint as a developer.",
    challenges:
      "The main challenge was the learning curve associated with a new tech stack, particularly mastering React's component lifecycle and Next.js's file-based routing. Another hurdle was implementing a clean, responsive design that was both visually appealing and highly performant without relying on pre-built UI kits.",
  },
  // Add other projects here
];

const ProjectDetail = ({ params }) => {
  const { id } = params;
  const projectId = parseInt(id);
  const project = AllProjects.find((p) => p.id === projectId);

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

  // State for accordion
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // State for notification
  const [showNotification, setShowNotification] = useState(false);

  const handleLiveDemoClick = () => {
    if (!project.link) {
      setShowNotification(true);
      // Remove setTimeout so the user can close it manually
    } else {
      window.open(project.link, "_blank");
    }
  };

  // close notification
  const closeNotification = () => {
    setShowNotification(false);
  };

  // If project not found, show a 404-like message
  if (!project) {
    return (
      <main
        className={`min-h-screen flex items-center justify-center ${montserrat.className}`}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">
            The project you are looking for does not exist.
          </p>
          <Link
            href="/works"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

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
              className={`${montserrat.className} font-bold text-4xl md:text-6xl lg:text-6xl mb-4`}
            >
              {project.title}
            </h1>
            <p
              className={`${spaceMono.className} text-lg md:text-lg lg:text-lg max-w-prose text-justify`}
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
              {/* Change Link to a button that triggers the notification */}
              <motion.button
                onClick={handleLiveDemoClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <FiExternalLink size={20} />
                <span className="font-medium">Live Demo</span>
              </motion.button>
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
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {project.overview}
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
              {project.journey.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
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
                    className={`${montserrat.className} text-xl font-semibold text-gray-900 dark:text-white mb-1 ml-2 md:ml-2 lg:ml-2`}
                  >
                    {step.heading}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 ml-2 md:ml-2 lg:ml-2 text-justify">
                    {step.text}
                  </p>
                </motion.li>
              ))}
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
                  className="p-4 pt-0 text-gray-700 dark:text-gray-300 mt-3 text-justify"
                >
                  <p>{project.success}</p>
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
                  className="p-4 pt-0 text-gray-700 dark:text-gray-300 mt-3 text-justify"
                >
                  <p>{project.challenges}</p>
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
        <motion.button
          onClick={handleLiveDemoClick}
          className="p-4 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          <FiExternalLink size={24} />
        </motion.button>
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border border-gray-300 dark:border-gray-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <FiGithub size={24} />
        </Link>
      </motion.div>

      {/* Notification for Live Demo */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl relative"
            >
              <button
                onClick={closeNotification}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex justify-center mb-4">
                <FiExternalLink
                  size={48}
                  className="text-gray-500 dark:text-gray-400"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Project Not Deployed 
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                The live demo for {project.title} is currently not available
                publicly. This project is only running in a local environment
                (localhost).
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNotification}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  <FiGithub size={20} />
                  <span>View Source Code</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProjectDetail;
