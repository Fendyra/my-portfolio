"use client";

import { Montserrat } from "next/font/google";
import Spline from "@splinetool/react-spline";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const router = useRouter();
  const clickableRef = useRef(null);

  const handleNavigate = () => {
    router.push("main");
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Navigasi langsung tanpa memeriksa tombol spesifik
      handleNavigate();
    };

    const handleClick = () => {
      handleNavigate();
    };

    const clickableElement = clickableRef.current;
    if (clickableElement) {
      clickableElement.addEventListener("click", handleClick);
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      if (clickableElement) {
        clickableElement.removeEventListener("click", handleClick);
      }
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]);

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        background: "none",
        overflow: "hidden",
        cursor: "pointer", // Cursor selalu terlihat
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          // pointerEvents: "none" di sini akan memblokir interaksi
          // Lebih baik atur cursor di main dan div Spline
        }}
      >
        <Spline scene="https://prod.spline.design/Ojj9hnP0nag78PfW/scene.splinecode" />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.5vw",
          boxSizing: "border-box",
          pointerEvents: "none", // Teks ini tidak boleh interaktif
        }}
      >
        {/* Konten teks seperti sebelumnya */}
        <div
          style={{
            color: "white",
            fontSize: "2vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            fontFamily: montserrat.style.fontFamily,
          }}
        >
          THE CREATIVE
        </div>
        <div
          style={{
            color: "white",
            fontSize: "2vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            fontFamily: montserrat.style.fontFamily,
          }}
        >
          WEB PORTFOLIO
        </div>
        <div
          style={{
            color: "white",
            fontSize: "2vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            fontFamily: montserrat.style.fontFamily,
          }}
        >
          2025 SHOWCASE
        </div>
        <div
          style={{
            color: "white",
            fontSize: "2vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            fontFamily: montserrat.style.fontFamily,
          }}
        >
          OF
        </div>
        <div
          style={{
            color: "white",
            fontSize: "2vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            fontFamily: montserrat.style.fontFamily,
          }}
        >
          FENDYRA
        </div>
        <div
          style={{
            color: "white",
            fontSize: "2vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            fontFamily: montserrat.style.fontFamily,
          }}
        >
          RESTU
        </div>
      </div>

      <div
        ref={clickableRef}
        style={{
          position: "absolute",
          bottom: "10vh",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: "clamp(1rem, 1.8vw, 2.5rem)", // Responsif
          fontWeight: "bold",
          padding: "15px 30px",
          cursor: "pointer",
          textAlign: "center",
          textTransform: "uppercase",
          zIndex: 10,
          transition: "transform 0.3s ease, opacity 0.3s ease, color 0.3s ease",
          pointerEvents: "auto",
          fontFamily: montserrat.style.fontFamily,
          userSelect: "none", // Agar teks tidak bisa diseleksi
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateX(-50%) scale(1.05)";
          e.currentTarget.style.opacity = "0.8";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(-50%) scale(1)";
          e.currentTarget.style.opacity = "1";
        }}
      >
        CLICK ENTER TO VIEW PORTFOLIO
      </div>
    </main>
  );
}
