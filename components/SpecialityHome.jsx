"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const programs = [
  {
    title: "Extreme Fitness",
    description: "Push your limits with high-intensity workouts designed to build strength, endurance, and agility.",
  },
  {
    title: "Kickboxing",
    description: "Master powerful techniques, improve your reflexes, and build self-defense skills in a high-energy environment.",
  },
  {
    title: "Mixed Martial Arts",
    description: "Train like a pro with MMA techniques that combine striking, grappling, and self-defense strategies.",
  },
];

const TrainingPrograms = () => {
  return (
    <div
      id="programs"
      className="relative w-full md:min-h-screen bg-cover bg-center flex flex-col items-center justify-center py-16 px-6"
      style={{ backgroundImage: "url('/BannerHome_1.png')" }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Header Section */}
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
          Specialized Training Programs
        </h1>
        <p className="text-lg md:text-xl mt-3 text-gray-300">
          Unlock your full potential with expert-led fitness & combat training.
        </p>
      </div>

      {/* Training Program Cards */}
      <div className="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md text-white p-8 rounded-xl shadow-lg flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            <h2 className="text-2xl font-bold">{program.title}</h2>
            <p className="text-sm text-gray-300 mt-3 flex-grow">{program.description}</p>
            <a
              href="#"
              className="text-red-500 mt-6 flex items-center gap-2 font-semibold hover:text-red-400 transition"
            >
              READ MORE <FaArrowRight />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPrograms;
