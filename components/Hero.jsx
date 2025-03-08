import React from 'react';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/herobg.png')`,
          backgroundPosition: 'center',
          filter: 'brightness(0.8)'
        }}
      />
      
      {/* Blue border effect */}
      <div className="absolute inset-0 border-4 border-blue-400 m-4" />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 max-w-2xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          WELCOME TO SELF<br />DEFENSE ACADEMY
        </h1>
        
        {/* Tagline */}
        <p className="text-white text-sm md:text-base mb-2">
          From Fear to Fearless—Transform with Expert Training!
        </p>
        
        {/* Description */}
        <p className="text-white text-sm md:text-base mb-8 opacity-90">
          Whether you're a beginner or advanced, our academy equips you with<br />
          life-saving skills through practical and effective self-defense methods.
        </p>
        
        {/* Call to action buttons */}
        <div className="flex flex-wrap gap-4">
          <Link href={"/register"} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-medium tracking-wide uppercase transition duration-300">
            Get a Lesson
          </Link>
          <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 font-medium tracking-wide uppercase transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;