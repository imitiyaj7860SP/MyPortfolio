import { FaAward } from "react-icons/fa";

function Certifications() {

  const certifications = [
    {
      title: "Privacy and Security in Online Social Media",
      provider: "NPTEL",
      date: "April 2025",
      image: "/assets/NPTEL.png"
    },
    {
      title: "Python for Beginners",
      provider: "Infosys Springboard",
      date: "August 2024",
      image: "/assets/Python.png"
    }
  ];

  return (
    <section id="certifications" className="px-10 py-24 bg-white text-black">

      <h2 className="text-4xl font-bold text-center mb-14">
        Certifications
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {certifications.map((cert, index) => (

          <div
            key={index}
            className="bg-black text-white p-6 rounded-xl shadow-lg
                       hover:shadow-2xl hover:-translate-y-2
                       transition duration-300"
          >

            {/* Certification Image */}
            <a href={cert.image} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-lg mb-4 w-full h-56 object-contain bg-white hover:scale-105 transition"
              />
            </a>

            {/* Certification Info */}
            <div className="flex gap-4 items-start">

              <FaAward className="text-yellow-400 text-2xl mt-1" />

              <div>

                <h3 className="text-xl font-semibold mb-2">
                  {cert.title}
                </h3>

                <p className="text-gray-300">
                  {cert.provider}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {cert.date}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;