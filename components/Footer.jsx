// Footer.jsx
"use client";
import React from 'react';
import { Send } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id='footer' className="bg-black text-white ">
      <div className="container mx-auto p-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="relative w-48 h-16">
                <Image 
                  src="/logo.png" 
                  alt="Defense Academy Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-6 max-w-md">
              Self Defense Academy, based in Delhi, is a leader 
              in martial arts and personal safety training, 
              offering one of the most dynamic and effective 
              self-defense programs in the nation.
            </p>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <div className="text-red-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-300">Street 45/2, New Delhi</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-red-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-300">+1-202-555-0140</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-red-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-300">www.selfdefenseacademy.in</p>
              </div>
            </div>
          </div>

          {/* Pages Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6 text-center md:text-left uppercase">Pages</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-red-500 transition-colors duration-300">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-red-500 transition-colors duration-300">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-red-500 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-red-500 transition-colors duration-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-red-500 transition-colors duration-300">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Form */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-2 text-center md:text-left uppercase">Subscribe Now</h3>
            <div className="w-24 h-1 bg-red-500 mx-auto md:mx-0 mb-6"></div>
            <p className="text-sm text-gray-300 mb-2 text-center md:text-left">
              Subscribe to our Newsletter to be updated.
            </p>
            <p className="text-sm text-gray-300 mb-6 text-center md:text-left">
              We promise not to spam.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="flex-grow bg-gray-800 border-0 text-white p-3 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <button 
                type="submit"
                className="bg-red-500 text-white p-3 hover:bg-red-600 transition-colors duration-300"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;