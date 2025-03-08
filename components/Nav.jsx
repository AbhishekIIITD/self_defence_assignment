"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const DefenseNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-12 py-2 bg-white shadow-md w-full">
      {/* Logo */}
      <div className="flex items-center">
        <div className="mr-2">
          <Image src={"/Logo.png"} alt='logo' width={100} height={100} />
        </div>
        
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:items-center">
        <ul className="flex space-x-6">
          <li><a href="/" className="font-medium text-red-500 border-b-2 border-red-500">HOME</a></li>
          {/* <li><a href="#" className="font-medium text-gray-600 hover:text-red-500">PAGES</a></li> */}
          <li><a href="#events" className="font-medium text-gray-600 hover:text-red-500">EVENTS</a></li>
          <li><a href="#programs" className="font-medium text-gray-600 hover:text-red-500">PROGRAMS</a></li>
          {/* <li><a href="#" className="font-medium text-gray-600 hover:text-red-500">BLOG</a></li> */}
          {/* <li><a href="#" className="font-medium text-gray-600 hover:text-red-500">SHOP</a></li> */}
          <li><a href="#footer" className="font-medium text-gray-600 hover:text-red-500">CONTACTS</a></li>
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex md:items-center space-x-4">
        <a href="/register" className="font-medium text-gray-600 hover:text-red-500">REGISTER</a>
        {/* <a href="#" className="font-medium text-gray-600 hover:text-red-500">LOG IN</a> */}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden z-10">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li><a href="#" className="block font-medium text-red-500 py-2">HOME</a></li>
            <li><a href="#" className="block font-medium text-gray-600 hover:text-red-500 py-2">PAGES</a></li>
            <li><a href="#" className="block font-medium text-gray-600 hover:text-red-500 py-2">EVENTS</a></li>
            <li><a href="#" className="block font-medium text-gray-600 hover:text-red-500 py-2">PROGRAMS</a></li>
            <li><a href="#" className="block font-medium text-gray-600 hover:text-red-500 py-2">BLOG</a></li>
            <li><a href="#" className="block font-medium text-gray-600 hover:text-red-500 py-2">SHOP</a></li>
            <li><a href="#" className="block font-medium text-gray-600 hover:text-red-500 py-2">CONTACTS</a></li>
            <li><a href="#" className="block font-medium text-gray-600 hover:text-red-500 py-2">SIGNUP</a></li>
            <li><a href="#" className="block font-medium text-gray-600 hover:text-red-500 py-2">LOG IN</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default DefenseNavigation;