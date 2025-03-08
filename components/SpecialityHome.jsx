import React from "react";
import { FaArrowRight } from "react-icons/fa";

const programs = [
  {
    title: "Extreme Fitness",
    description: "Vivamus suscipit a enim eget scelerisque. Phasellus tempus non quam a dignissim.",
  },
  {
    title: "Kickboxing",
    description: "Etiam a vestibulum dui. Nulla iaculis, urna nec aliquam porttitor, leo tellus sagittis lectus.",
  },
  {
    title: "Mixed Martial Arts",
    description: "Sed tincidunt nunc eu quam tincidunt, id sodales lacus congue. Praesent finibus dui ligula.",
  },
];

const TrainingPrograms = () => {
  return (
    <div id="programs" className="relative w-full md:h-screen bg-cover bg-center" style={{ backgroundImage: "url('/BannerHome_1.png')" }}>
      <div className="absolute inset-0 bg-opacity-50"></div>
      
      <div className="relative z-10 text-center text-white p-12">
        <h1 className="text-4xl font-bold">SPECIALIZED TRAINING PROGRAMS</h1>
        <p className="text-lg mt-2">Elevate Your Skills with Expert-Led Specialized Training</p>
      </div>
      
      <div className="relative md:z-10 flex flex-col md:flex-row  justify-center gap-6 p-6">
  {programs.map((program, index) => (
    <div
      key={index}
      className="bg-black/35 text-white p-8 rounded-lg shadow-md md:w-1/4 h-96 flex flex-col justify-between hover:bg-black/80 transition"
    >
      <h2 className="text-xl font-bold">{program.title}</h2>
      <p className="text-sm text-gray-300 mt-2 flex-grow">{program.description}</p>
      <a
        href="#"
        className="text-red-500 mt-4 flex items-center gap-2 hover:text-red-400 transition"
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
