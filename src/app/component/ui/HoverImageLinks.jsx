"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="bg-inherit p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="BusyWeends Jr"
          subheading="A full-stack e-commerce platform"
          imgSrc="/assets/busyweeknds.png"
          href="#"
        />
        <Link
          heading="E-Learnify"
          subheading="An interactive e-learning platform built for modern learners"
          imgSrc="/assets/elearnify.png"
          href="#"
        />
        <Link
          heading="Portfolio V1"
          subheading="Where it all started - OG Version"
          imgSrc="/assets/portfolio-V1.png"
          href="#"
        />
        <Link
          heading="Volcanoria"
          subheading="Explore volcanoes. Learn fast. Stay safe."
          imgSrc="/assets/volcanoria.png"
          href="#"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
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

  const words = heading.split(" ");

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-gray-300 dark:border-neutral-700 py-4 transition-colors duration-500 hover:border-black dark:hover:border-neutral-50 md:py-8"
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
          className="relative z-10 block text-4xl font-bold text-gray-500 dark:text-neutral-500 transition-colors duration-500 group-hover:text-black dark:group-hover:text-neutral-50 md:text-6xl"
        >
          {words.map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word.split("").map((l, i) => (
                <motion.span
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 16 },
                  }}
                  transition={{ type: "spring" }}
                  className="inline-block"
                  key={i}
                >
                  {l}
                </motion.span>
              ))}
              {wordIndex < words.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </React.Fragment>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-gray-500 dark:text-neutral-500 transition-colors duration-500 group-hover:text-black dark:group-hover:text-neutral-50">
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
        <FiArrowRight className="text-5xl text-black dark:text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
