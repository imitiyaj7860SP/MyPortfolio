import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 bg-white text-black gap-12"
    >

      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src="/assets/profile.jpeg"
          alt="Mohammad Imitiyaj Ali"
          className="
          w-48 h-48 md:w-64 md:h-64
          object-cover
          rounded-full
          shadow-xl
          border-4 border-black
          hover:scale-105
          transition
          "
        />
      </div>

      {/* Text Content */}
      <div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Mohammad <span className="text-gray-700">Imitiyaj Ali</span>
        </h1>

        {/* Typing Text */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 h-10">

          <ReactTyped
            strings={[
              "Aspiring Full Stack Developer",
              "Founder of Echelon Student Organization",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />

        </p>

        {/* Buttons */}
        <div className="flex gap-6 justify-center md:justify-start">

          <a
            href="#projects"
            className="
            bg-black text-white
            px-6 py-3
            rounded-lg
            font-semibold
            shadow-md
            hover:bg-gray-800
            hover:scale-105
            transition
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="
            bg-black text-white
            px-6 py-3
            rounded-lg
            font-semibold
            shadow-md
            hover:bg-gray-800
            hover:scale-105
            transition
            "
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;