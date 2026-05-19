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
export const viewport = {
  width: "device-width",
  initialScale: 0.6,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-zinc-50 ">{children}</body>
    </html>
  );
}
