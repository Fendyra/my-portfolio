import { Montserrat } from "next/font/google";
import Spline from "@splinetool/react-spline/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh", background: "none", overflow: "hidden" }}>
      {/* Spline animation takes up the full background */}
      <Spline scene="https://prod.spline.design/Ojj9hnP0nag78PfW/scene.splinecode" />

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
      
        <div style={{ color: "white", fontSize: "1.8vw", fontWeight: "bold", whiteSpace: "nowrap" }}>
          THE CREATIVE
        </div>
        <div style={{ color: "white", fontSize: "1.8vw", fontWeight: "bold", whiteSpace: "nowrap" }}>
          WEB PORTFOLIO
        </div>
        <div style={{ color: "white", fontSize: "1.8vw", fontWeight: "bold", whiteSpace: "nowrap" }}>
          2025 SHOWCASE
        </div>
        <div style={{ color: "white", fontSize: "1.8vw", fontWeight: "bold", whiteSpace: "nowrap" }}>
          OF
        </div>
        <div style={{ color: "white", fontSize: "1.8vw", fontWeight: "bold", whiteSpace: "nowrap" }}>
          FENDYRA
        </div>
        <div style={{ color: "white", fontSize: "1.8vw", fontWeight: "bold", whiteSpace: "nowrap" }}>
          RESTU
        </div>
      </div>


      <div
        style={{
          position: "absolute",
          bottom: "10vh", 
          left: "50%",
          transform: "translateX(-50%)", 
          color: "white",
          fontSize: "1.5vw",
          fontWeight: "bold",
          padding: "15px 30px", 
          cursor: "pointer",
          textAlign: "center", 
          textTransform: "uppercase", 
          zIndex: 10, 
        }}
      >
        Click to enter
      </div>
    </main>
  );
}