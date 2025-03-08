"use client";
import React from 'react';

const AboutSection = () => {
  return (
    <div className="relative flex justify-center align-middle items-end w-full h-screen bg-gray-100 py-12">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/AboutBg.png')`,
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content overlay */}
      <div className="relative w-4/5">
        {/* Semi-transparent overlay for text */}
        <div className=" w-full  py-16 px-6 md:px-16" style={{ backgroundColor: 'rgba(31, 41, 55, 0.5)' }}>
          <div className="max-w-3xl">
            {/* Section heading with colored text */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              ABOUT 
              <span className="text-red-600"> SELF DEFENSE</span> ACADEMY
            </h2>
            
            {/* Tagline */}
            <p className="text-white text-lg md:text-xl mb-6">
              Empowering You with the Skills to Stay Safe & Confident
            </p>
            
            {/* Main content paragraph */}
            <p className="text-white mb-6 text-sm md:text-base leading-relaxed">
              At Self Defense Academy, our mission is simple—to equip individuals 
              with practical self-defense skills that empower them to protect 
              themselves and their loved ones. With years of experience in martial 
              arts, personal safety, and real-world defense tactics, our expert 
              instructors provide top-tier training designed for all skill levels.
            </p>
            
            {/* Truncated paragraph with "Read More" link */}
            <p className="text-white text-sm md:text-base">
              We believe that self-defense is not just about...
              <a href="#" className="text-white uppercase font-medium inline-flex items-center ml-2 hover:text-red-400">
                Read More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;