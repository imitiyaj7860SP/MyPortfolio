import { FaCertificate } from "react-icons/fa";
import bits from "../assets/bits-and-bytes.png";
import hardware from "../assets/introduction-to-hardware.png";
import oop from "../assets/object-oriented-certificate.png";
import programming from "../assets/Cprogramming.png";

function Certificates() {
  const certificates = [
    {
      title: "Computer Programming",
      provider: "Neo Colab • May 2024",
      image: programming
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      provider: "Coursera • September 2024",
      image: hardware
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      provider: "Coursera • September 2024",
      image: bits
    },
    {
      title: "Object Oriented Programming",
      provider: "Neo Colab • December 2024",
      image: oop
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

              {/* Certificate Image */}
              <a href={cert.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-lg mb-4 w-full h-74 object-cover hover:scale-105 transition"
                />
              </a>

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