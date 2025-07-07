"use client";

import React, { useState, useEffect } from "react";
import SocialIcons from "./ui/SocialIcons";

const HeaderIcons = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        document.documentElement.classList.toggle("dark");
        setIsDarkMode((prevMode) => !prevMode);
      });
    } else {
      document.documentElement.classList.toggle("dark");
      setIsDarkMode((prevMode) => !prevMode);
    }
  };

  return (
    <header
      className={`
        flex items-center justify-center // Keep justify-center for overall centering
        p-2
        bg-white/10 dark:bg-gray-800/20
        rounded-full shadow-lg border border-white/20 dark:border-gray-700/30
        backdrop-blur-md
        transition-all duration-300 ease-in-out
        ${isHeaderHovered ? "w-[240px]" : "w-[180px]"} // Adjusted max width
      `}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}
    >
      {/* This inner div now handles the spacing between the social icons and the dark mode toggle */}
      <div
        className={`
          flex items-center 
          transition-all duration-300 ease-in-out
          ${
            isHeaderHovered ? "space-x-4" : "space-x-2"
          } // Adjust space between icon group and dark mode toggle
      `}
      >
        {/* Social Icons group */}
        <SocialIcons isHeaderHovered={isHeaderHovered} />

        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full
                     bg-gray-700 dark:bg-gray-700
                     text-white dark:text-white
                     hover:bg-gray-600 dark:hover:bg-gray-600
                     transition-colors duration-200"
          aria-label="Toggle Dark Mode"
          id="dark-mode-toggle"
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon-star-icon lucide-moon-star"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun-icon lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default HeaderIcons;
