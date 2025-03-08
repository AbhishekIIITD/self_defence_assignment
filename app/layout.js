import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DefenseNavigation from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <DefenseNavigation />
        {children}
        <Footer />

      </body>
    </html>
  );
}
