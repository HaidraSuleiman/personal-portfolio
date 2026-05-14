import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Haidra Suleiman",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
