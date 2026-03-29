function Training() {
  const trainings = [
    {
      title: "Java Fundamentals",
      type: "Certificate Training",
      organization: "SkillStone (Grazitti Interactive Initiative)",
      duration: "Jun - Jul 2025",
      points: [
        "Completed a 4-week intensive training in Core Java.",
        "Learned Object-Oriented Programming, data types, and control structures.",
        "Strengthened problem-solving and programming fundamentals.",
        "Gained hands-on coding experience through practical exercises."
      ]
    }
  ];

  return (
    <section id="training" className="px-10 py-24 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-14">
        Training
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {trainings.map((item, index) => (
          <div
            key={index}
            className="bg-black text-white p-8 rounded-xl shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 mb-1">
                  {item.type}
                </p>

                <p className="text-gray-400 text-sm">
                  {item.organization}
                </p>
              </div>

              <p className="text-sm text-gray-400 whitespace-nowrap">
                {item.duration}
              </p>
            </div>

            <ul className="mt-6 space-y-2 text-gray-300 list-disc list-inside">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Training;