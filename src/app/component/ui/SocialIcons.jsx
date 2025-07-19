
"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const GmailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 14 14"
    fill="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m1.25 6.164l2.393 1.533v3.687H1.535a.284.284 0 0 1-.285-.282zm2.518-4.409C2.143.715 0 1.875 0 3.808v7.294c0 .849.69 1.533 1.535 1.533h2.733c.345 0 .625-.28.625-.625V8.498l1.77 1.134a.63.63 0 0 0 .674 0l1.77-1.134v3.511c0 .346.28.625.625.625h2.733c.846 0 1.536-.684 1.536-1.532V3.808c0-1.433-1.178-2.441-2.45-2.443a2.44 2.44 0 0 0-1.32.39l-.836.536l-.012.009L7 3.826L4.605 2.29zm5.34 2.205l-1.77 1.134a.63.63 0 0 1-.675 0L4.893 3.96v3.053L7 8.363l2.107-1.35zm1.25 3.737l2.393-1.533v4.938a.284.284 0 0 1-.286.283h-2.108z"
      clipRule="evenodd"
    />
  </svg>
);

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Fendyra",
    IconComponent: FaGithub,
  },
  {
    name: "Gmail",
    href: "mailto:fendyrarestu2004@gmail.com",
    IconComponent: GmailIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fendyra-dewangga",
    IconComponent: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fendyrard?igsh=MXFxdmF6N3BwdTQ4cQ==",
    IconComponent: FaInstagram,
  },
];

const SocialIconItem = ({ name, href, IconComponent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center p-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconComponent
        size={20}
        className={`
          text-neutral-800 dark:text-neutral-400
          transition-all duration-300 ease-in-out
          ${
            isHovered
              ? "scale-110 rotate-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]"
              : ""
          }
        `}
      />
      {isHovered && (
        <span
          className={`
            absolute bottom-full mb-2
            bg-gray-800 text-white text-xs px-2 py-1 rounded-md
            whitespace-nowrap
            origin-bottom transition-all duration-300 ease-out
            ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}
          `}
        >
          {name}
        </span>
      )}
    </a>
  );
};

const SocialIcons = ({ className, isHeaderHovered }) => {
  return (
    <div
      className={`
      flex items-center
      transition-all duration-300 ease-in-out
      ${isHeaderHovered ? "space-x-4" : "space-x-0"}
      ${className || ""}
    `}
    >
      {socialLinks.map((link, index) => (
        <SocialIconItem
          key={index}
          name={link.name}
          href={link.href}
          IconComponent={link.IconComponent}
        />
      ))}
    </div>
  );
};

export default SocialIcons;
