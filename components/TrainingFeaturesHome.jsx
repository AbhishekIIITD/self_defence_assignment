import { FaDumbbell, FaAward, FaUserShield, FaTrophy } from "react-icons/fa";

const TrainingExcellence = () => {
  const features = [
    {
      icon: <FaUserShield className="text-red-500 text-4xl" />,
      title: "ANAEROBIC EXERCISE",
      description:
        "The idea is that a lot of energy is released within a small period of time with oxygen supply.",
    },
    {
      icon: <FaDumbbell className="text-red-500 text-4xl" />,
      title: "THE BEST EQUIPMENT",
      description:
        "We have the best training equipment efficiently and professionally.",
    },
    {
      icon: <FaAward className="text-red-500 text-4xl" />,
      title: "PROFESSIONAL TRAINERS",
      description:
        "A professional Street Workout coach is a professional in the field of fitness and exercise.",
    },
    {
      icon: <FaTrophy className="text-red-500 text-4xl" />,
      title: "COUNTRY CHAMPIONS",
      description:
        "Champions Sports Performance is one of the top youth athletic training facilities in the country.",
    },
  ];

  return (
    <div className=" md:h-screen mx-auto text-center py-16 px-4 bg-white text-black">
      {/* Title */}
      <div className=" w-4/5 mx-auto">
      <h2 className="text-3xl font-bold uppercase">
        More than ever, Self Defense Academy sets the standard in{" "}
        <span className="block">Training & Excellence</span>
      </h2>

      {/* Horizontal Divider */}
      <div className="w-full border-t border-gray-300 my-6"></div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 translate-x-1/4 md:translate-x-44 py-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col justify-center items-center gap-4 w-1/2">
            {feature.icon}
            <div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TrainingExcellence;
