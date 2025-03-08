"use client";
import Image from "next/image";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";


const ProgramCard = ({ title, time, description, icon }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="bg-gray-900 rounded-3xl overflow-hidden  ">
      <div className="p-6 flex flex-col items-center">
        {/* Program Image - using placeholder */}
        <div className="w-full h-48 mb-6 flex items-center justify-center">
          <Image src={icon} alt={title} width={250} height={250} />
        </div>

        {/* Icon Button */}
        <div className="p-6 border rounded-lg shadow-lg bg-gray-900 text-white flex justify-center flex-col align-middle items-center">
            {/* Calendar Icon - Opens Date Picker */}
            <div className="bg-red-600 rounded-full w-fit p-4 mb-4 flex items-center justify-center cursor-pointer hover:bg-red-500 transition" onClick={() => setShowCalendar(!showCalendar)}>
                <FaRegCalendarAlt className="h-6 w-6 text-white" />
            </div>
            {showCalendar && (
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <DatePicker 
                        selected={selectedDate} 
                        onChange={(date) => { setSelectedDate(date); setShowCalendar(false); }}
                        className="border p-2 rounded-md bg-white text-black w-full"
                        dateFormat="dd/MM/yyyy"
                        inline
                    />
                </div>
            )}
            
            {/* Program Title */}
            <h2 className="text-2xl font-semibold text-center mt-4">{title}</h2>
            
            {/* Program Time */}
            <p className="text-red-400 text-sm text-center mt-2">{time}</p>
            
            {/* Program Description */}
            <p className="text-gray-300 text-center mt-4 px-2">{description}</p>
        </div>

      

        {/* Arrow Down Icon */}
        <button className="text-gray-500 hover:text-red-600 transition-colors my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
