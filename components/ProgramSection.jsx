import ProgramCard from "./ProgramCard";
const ProgramsSection = () => {
    const programs = [
      {
        title: "Kids Self Defense",
        time: "10:00-11:00 AM",
        description: "Boosts confidence, awareness, and safety while teaching essential self-defense skills in a fun environment.",
        icon: "/KickSelfDefenceIcon.png"
      },
      {
        title: "Teen & Adult Boxing",
        time: "5:00-6:00 AM",
        description: "Equips you with real-world self-defense techniques to stay safe, build confidence, and take control of any situation.",
        icon: "/TeenAdultBoxingIcon.png"
      },
      {
        title: "Traditional Martial Arts",
        time: "6:00-7:00 PM",
        description: "Enhances discipline, strength, and mental focus while preserving the timeless art of traditional martial techniques.",
        icon: "/MartialArtsIcon.png"
      }
    ];
  
    return (
      <section id="events" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-600 mb-2">OUR PROGRAMS</h2>
            <p className="text-gray-600">Comprehensive Self-Defense Programs for All Ages & Skill Levels</p>
          </div>
          
          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard 
                key={index}
                title={program.title}
                time={program.time}
                description={program.description}
                icon={program.icon}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProgramsSection;