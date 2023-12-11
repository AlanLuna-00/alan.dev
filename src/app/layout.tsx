import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alan.dev",
  description:
    "Alan Julian Benito Luna - Software Engineer - Full Stack Developer - Portfolio - Resume - CV - Alan.dev - Alan Luna - Backend Developer - Frontend Developer - Web Developer - Software Developer - Software Engineer - Full Stack Developer - Backend Developer - Frontend Developer - Web Developer - Software Developer - Software Engineer - Full Stack Developer - Backend Developer - Frontend Developer - Web Developer - Software Developer - Software Engineer - Full Stack Developer - Backend Developer - Frontend Developer - Web Developer - Software Developer - Software Engineer - Full Stack Developer - Backend Developer - Frontend Developer - Web Developer - Software Developer - Software Engineer - Full Stack Developer - Backend Developer - Frontend Developer - Web Developer - Software Developer - Software Engineer - Full Stack Developer - Backend Developer - Frontend Developer - Web Developer - Software Developer - Software Engineer - Full Stack Developer - Backend Developer - Frontend Developer - Web Developer - Software Developer - Software Engineer - Full Stack Developer - Backend Developer - Frontend Developer - Web Developer - Software Developer - Software Engineer - Full Stack Developer - Backend Developer - Frontend Developer - Web Developer - Software Developer - Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
