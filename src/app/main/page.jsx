"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import FullScreenMenu from "../component/ui/FullScreenMenu";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MainPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="flex display-flex justify-content-start">
        <Image
          src="/images/logo-portfolio.png"
          alt="Logo"
          width={70}
          height={70}
          className="absolute top-4 left-4 z-50 cursor-pointer"
          hidden={isMenuOpen} // Hide logo when menu is open
        />
      </div>
      <FullScreenMenu onMenuToggle={handleMenuToggle} />

      <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <h1
          className={`${montserrat.className} text-4xl md:text-6xl font-bold leading-tight`}
        >
          Welcome to My Portfolio!
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          This is where your amazing projects and services will be showcased.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-purple-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:-translate-y-1">
          Explore My Work
        </button>
      </div>
    </div>
  );
};

export default MainPortfolio;
