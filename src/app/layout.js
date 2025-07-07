import "./globals.css";
import { Montserrat, Playfair_Display } from "next/font/google"; // Impor Playfair_Display

// Konfigurasi font Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

// Konfigurasi font Playfair Display
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfairDisplay.variable}`}
    >
      <head>
        {/* Anda bisa menambahkan meta tag atau link lain di sini jika diperlukan */}
      </head>
      <body>{children}</body>
    </html>
  );
}
