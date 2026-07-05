import { FaCertificate } from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      title: "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
      provider: "Packt via Coursera • May 2026",
      image: "/assets/Mern.png"
    },
    {
      title: "Advanced Frontend Development and Deployment",
      provider: "Packt via Coursera • May 2026",
      image: "/assets/AdvancedFrontend.png"
    },
    {
      title: "Frontend Development with React",
      provider: "Packt via Coursera • May 2026",
      image: "/assets/FrontEnd.png"
    },
    {
      title: "Introduction to Front-End Development",
      provider: "Meta • Coursera • May 2026",
      image: "/assets/Introduction.png"
    },
    {
      title: "Backend Development and API Creation",
      provider: "Packt via Coursera • Apr 2026",
      image: "/assets/BackEnd.png"
    },
  ];

  return (
    <section id="certificates" className="px-10 py-24 bg-white">

      <h2 className="text-4xl font-bold text-center mb-14 text-black">
        Certificates
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {certificates
          .slice()
          .reverse()
          .map((cert, index) => (
            <div
              key={index}
              className="bg-black text-white p-6 rounded-xl shadow-lg 
                         hover:shadow-2xl hover:-translate-y-2 
                         transition duration-300"
            >

              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-contain rounded-lg mb-4 bg-white p-3"
                />
              )}

              {/* Certificate Info */}
              <div className="flex items-start gap-4">

                <FaCertificate className="text-yellow-400 text-2xl mt-1" />

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {cert.provider}
                  </p>
                </div>

              </div>

            </div>
          ))}

      </div>

    </section>
  );
}

export default Certificates;