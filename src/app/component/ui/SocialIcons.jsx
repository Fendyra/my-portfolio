// C:\laragon\www\my-portfolio\src\app\component\ui\SocialIcons.jsx
"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Fendyra",
    IconComponent: FaGithub,
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
