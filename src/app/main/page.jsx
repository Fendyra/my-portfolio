"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

// Asumsi komponen ini ada di jalur yang benar
import FullScreenMenu from "../component/ui/FullScreenMenu";
import HeaderIcons from "../component/header"; // Changed import from Header to HeaderIcons

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MainPortfolio = () => {
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false);

  // Fungsi untuk menangani perubahan status menu layar penuh
  const handleMenuToggle = (isOpen) => {
    setIsFullScreenMenuOpen(isOpen);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Kontainer header tetap di bagian atas layar */}
      {/* Menggunakan flexbox untuk menata logo, header, dan tombol hamburger */}
      <div className="fixed top-6 left-0 w-full px-4 md:px-8 z-50 flex items-center">
        {/* Logo di kiri atas - disembunyikan saat menu layar penuh terbuka */}
        {/* Menghapus posisi absolut agar flexbox bisa mengaturnya */}
        <div className={`z-50 ${isFullScreenMenuOpen ? "hidden" : ""}`}>
          <Image
            src="/images/logo-portfolio.png" // Pastikan jalur gambar ini benar
            alt="Portfolio Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        {/* Header mengambang di tengah */}
        {/* Menggunakan flex-grow dan justify-center untuk memposisikan Header di tengah sisa ruang */}
        <div className="flex-grow flex justify-center">
          <HeaderIcons />{" "}
          {/* Changed component usage from Header to HeaderIcons */}
        </div>

        {/* Tombol menu hamburger - hanya terlihat saat menu tertutup */}
        {/* Menghapus posisi absolut agar flexbox bisa mengaturnya */}
        {!isFullScreenMenuOpen && (
          <button
            className="z-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground"
            onClick={() => handleMenuToggle(true)}
            aria-label="Buka Menu"
          >
            <div className="w-6 h-1 bg-foreground my-1 transition-all duration-300"></div>
            <div className="w-6 h-1 bg-foreground my-1 transition-all duration-300"></div>
            <div className="w-6 h-1 bg-foreground my-1 transition-all duration-300"></div>
          </button>
        )}

        {/* Menu navigasi layar penuh */}
        <FullScreenMenu
          isOpen={isFullScreenMenuOpen}
          onClose={() => handleMenuToggle(false)}
        />
      </div>

      {/* Bagian hero dengan pesan selamat datang */}
      {/* Menggunakan absolute inset-0 agar mengisi sisa ruang layar dan tidak mengganggu tata letak header */}
      <div className="flex flex-col items-center justify-center h-screen px-4 text-center absolute inset-0">
        <h1
          className={`${montserrat.className} text-4xl md:text-6xl font-bold leading-tight`}
        >
          Selamat Datang di Portofolio Saya!
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Di sinilah proyek dan layanan luar biasa Anda akan dipamerkan.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-purple-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:-translate-y-1">
          Jelajahi Karya Saya
        </button>
      </div>
    </div>
  );
};

export default MainPortfolio;
