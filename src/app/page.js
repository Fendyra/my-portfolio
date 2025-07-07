"use client";

import { Montserrat } from "next/font/google";
import Spline from "@splinetool/react-spline";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const router = useRouter();

  // Function to handle navigation to the 'main' page
  const handleEnterPortfolio = () => {
    router.push("main");
  };

  // useEffect to add and remove keyboard event listener
  useEffect(() => {
    const handleKeyPress = (event) => {
      handleEnterPortfolio();
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
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
        cursor: "default", // Default cursor for the page
      }}
    >
      {/* Spline animation takes up the full background */}
      <div
        style={{
          width: "100%",
          height: "100%",
          cursor: "pointer", // Show pointer cursor over Spline
          pointerEvents: "auto", // Enable interaction with Spline
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
          pointerEvents: "none",
        }}
      >
        {/* Text elements for the portfolio title */}
        <div
          style={{
            color: "white",
            fontSize: "1.8vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          THE CREATIVE
        </div>
        <div
          style={{
            color: "white",
            fontSize: "1.8vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          WEB PORTFOLIO
        </div>
        <div
          style={{
            color: "white",
            fontSize: "1.8vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          2025 SHOWCASE
        </div>
        <div
          style={{
            color: "white",
            fontSize: "1.8vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          OF
        </div>
        <div
          style={{
            color: "white",
            fontSize: "1.8vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          FENDYRA
        </div>
        <div
          style={{
            color: "white",
            fontSize: "1.8vw",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          RESTU
        </div>
      </div>

      {/* Clickable button to enter the portfolio */}
      <div
        onClick={handleEnterPortfolio}
        style={{
          position: "absolute",
          bottom: "10vh",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: "1.5vw",
          fontWeight: "bold",
          padding: "15px 30px",
          cursor: "pointer", // Show pointer cursor on hover
          textAlign: "center",
          textTransform: "uppercase",
          zIndex: 10,
          transition: "background-color 0.3s ease",
          pointerEvents: "auto", // Ensure the button is interactive
        }}
      >
        CLICK ENTER TO VIEW PORTFOLIO 
      </div>
    </main>
  );
}
