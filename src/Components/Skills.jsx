import { FaPython, FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiMysql, SiMongodb, SiCplusplus } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="px-10 py-24 bg-white text-black">

      <h2 className="text-4xl font-bold text-center mb-16">
        Technical Skills
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Languages */}
        <div className="bg-black text-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold mb-6">
            Languages
          </h3>

          <div className="flex flex-wrap gap-4">

            <div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              <FaPython className="text-xl text-yellow-400"/> Python
            </div>

            <div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              <SiCplusplus className="text-xl text-blue-400"/> C++
            </div>

            <div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              <FaJava className="text-xl text-red-400"/> Java
            </div>

            <div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              <SiJavascript className="text-xl text-yellow-300"/> JavaScript
            </div>

          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-black text-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold mb-6">
            Frameworks
          </h3>

          <div className="flex flex-wrap gap-4">

            <div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              <FaHtml5 className="text-xl text-orange-500"/> HTML
            </div>

            <div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              <FaCss3Alt className="text-xl text-blue-400"/> CSS
            </div>

            <div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              <FaReact className="text-xl text-cyan-400"/> React
            </div>

            <div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              <FaNodeJs className="text-xl text-green-500"/> Node.js
            </div>

          </div>
        </div>

        {/* Databases */}
        <div className="bg-black text-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold mb-6">
            Databases
          </h3>

          <div className="flex flex-wrap gap-4">

            <div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              <SiMysql className="text-xl text-blue-500"/> MySQL
            </div>

            <div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              <SiMongodb className="text-xl text-green-500"/> MongoDB
            </div>

          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-black text-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold mb-6">
            Soft Skills
          </h3>

          <div className="flex flex-wrap gap-4">

            <span className="bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              Leadership
            </span>

            <span className="bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              Time Management
            </span>

            <span className="bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              Problem Solving
            </span>

            <span className="bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
              Team Player
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;