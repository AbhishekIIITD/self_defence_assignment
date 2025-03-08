const TrainingForGender = () => {
  const trainings = [
    {
      title: "TRAINING FOR MEN",
      description:
        "Move with strength, rise with confidence let discipline shape you and determination drive you forward!",
      image: "https://via.placeholder.com/600x400", // Replace with actual image URL
      link: "#",
    },
    {
      title: "TRAINING FOR WOMEN",
      description:
        "Break Limits, Embrace Strength Let Power Drive You, Stability Ground You, and Confidence Lead the Way!",
      image: "https://via.placeholder.com/600x400", // Replace with actual image URL
      link: "#",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-16 px-4">
      {trainings.map((item, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "350px",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>

          {/* Content */}
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="mt-2 text-sm">{item.description}</p>

            {/* Read More Link */}
            <a
              href={item.link}
              className="mt-4 inline-block text-red-500 font-bold group-hover:underline transition-all duration-300"
            >
              READ MORE →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainingForGender;
