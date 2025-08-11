"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Logo Anda berada di direktori 'public/assets/'.
// Pastikan path ini sesuai dengan struktur proyek Anda.
const LOGO_PATH = "/assets/logo-portfolio.png";

const ClosingSection = () => {
  // Animasi Framer Motion untuk rotasi dan scaling
  const logoVariants = {
    // Fase awal saat komponen dimuat
    initial: {
      opacity: 0,
      scale: 0.8,
      rotate: 0,
    },
    // Fase animasi utama yang akan diulang
    animate: {
      opacity: 1,
      // Animasi berulang untuk rotasi 360 derajat dan efek 'breathing'
      rotate: 360,
      scale: [1, 1.1, 1], // Mengubah skala dari 1 -> 1.1 -> 1
    },
  };

  // Transisi untuk mengatur kecepatan dan easing dari animasi
  const logoTransition = {
    // Transisi untuk animasi rotasi
    rotate: {
      duration: 10, // 10 detik untuk satu putaran penuh
      ease: "easeInOut",
      repeat: Infinity,
    },
    // Transisi untuk efek skala (breathing effect)
    scale: {
      duration: 5, // 5 detik untuk satu siklus skala
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  return (
    // Bagian utama dengan tinggi layar penuh dan centering
    // Menggunakan kelas `bg-white dark:bg-black` untuk adaptasi tema
    <section className="relative flex min-h-screen items-center justify-center bg-white dark:bg-black p-4">
      {/* Container untuk memastikan logo tetap responsif */}
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          // Menggunakan variants dan transition yang sudah didefinisikan
          variants={logoVariants}
          initial="initial"
          animate="animate"
          transition={logoTransition}
          className="relative w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
        >
          <Image
            src={LOGO_PATH}
            alt="Fendyra's Portfolio Logo"
            layout="fill"
            objectFit="contain"
            className="pointer-events-none"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
