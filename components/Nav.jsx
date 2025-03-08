"use client";
import React, { useState } from "react";
import Image from "next/image";

const DefenseNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-md w-full relative">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/Logo.png" alt="Logo" width={100} height={100} priority />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-600 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="font-medium text-red-500 border-b-2 border-red-500">HOME</a>
        <a href="#events" className="font-medium text-gray-600 hover:text-red-500">EVENTS</a>
        <a href="#programs" className="font-medium text-gray-600 hover:text-red-500">PROGRAMS</a>
        <a href="#footer" className="font-medium text-gray-600 hover:text-red-500">CONTACTS</a>
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex space-x-4">
        <a href="/register" className="font-medium text-gray-600 hover:text-red-500">REGISTER</a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white/90 shadow-md md:hidden z-50 flex flex-col items-center justify-center">
          <ul className="space-y-4 text-center">
            <li><a href="/" className="block font-medium text-red-500 text-lg" onClick={toggleMenu}>HOME</a></li>
            <li><a href="#events" className="block font-medium text-gray-600 hover:text-red-500 text-lg" onClick={toggleMenu}>EVENTS</a></li>
            <li><a href="#programs" className="block font-medium text-gray-600 hover:text-red-500 text-lg" onClick={toggleMenu}>PROGRAMS</a></li>
            <li><a href="#footer" className="block font-medium text-gray-600 hover:text-red-500 text-lg" onClick={toggleMenu}>CONTACTS</a></li>
            <li><a href="/register" className="block font-medium text-gray-600 hover:text-red-500 text-lg" onClick={toggleMenu}>REGISTER</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default DefenseNavigation;
