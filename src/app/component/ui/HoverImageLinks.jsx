"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; 

const projects = [
  {
    heading: "E-Commerce App",
    subheading: "A full-stack e-commerce platform.",
    imgSrc: "https://placehold.co/600x400/94a3b8/ffffff?text=Project+1",
    href: "#",
  },
  {
    heading: "Personal Blog",
    subheading: "A minimalist blog with a custom CMS.",
    imgSrc: "https://placehold.co/600x400/94a3b8/ffffff?text=Project+2",
    href: "#",
  },
  {
    heading: "Social Media Dashboard",
    subheading: "Analytics and management for social media.",
    imgSrc: "https://placehold.co/600x400/94a3b8/ffffff?text=Project+3",
    href: "#",
  },
  {
    heading: "To-Do List App",
    subheading: "A simple and intuitive task manager.",
    imgSrc: "https://placehold.co/600x400/94a3b8/ffffff?text=Project+4",
    href: "#",
  },
];

export const HoverImageLinks = () => {
  return (
    <section className="bg-inherit px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        {projects.map((project, index) => (
          <LinkComponent
            key={index}
            heading={project.heading}
            subheading={project.subheading}
            imgSrc={project.imgSrc}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
};

const LinkComponent = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <Link
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l === " " ? <>&nbsp;</> : l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <ArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </Link>
  );
};
