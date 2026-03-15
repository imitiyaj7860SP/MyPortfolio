function About() {
  return (
    <section id="about" className="bg-white py-24 scroll-mt-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-6">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
          I'm Mohammad Imitiyaj Ali, a Computer Science student and aspiring
          full-stack developer. I enjoy building modern web applications,
          exploring AI tools, and solving real-world problems through code.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 text-center mb-16">

          <div>
            <h3 className="text-3xl font-bold text-black">4+</h3>
            <p className="text-gray-500">Projects Built</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-black">10+</h3>
            <p className="text-gray-500">Technologies</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-black">2+</h3>
            <p className="text-gray-500">AI Applications</p>
          </div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Introduction */}
          <div className="bg-black text-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition">

            <h3 className="text-xl font-semibold mb-4">
              Introduction
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I enjoy building responsive and user-friendly web applications
              using modern technologies. My focus is on writing clean code
              and creating meaningful digital experiences.
            </p>

          </div>

          {/* Academic */}
          <div className="bg-black text-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition">

            <h3 className="text-xl font-semibold mb-4">
              Academic Background
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I am currently pursuing my Bachelor's degree in Computer
              Science. My goal is to grow as a full-stack developer and
              contribute to impactful software solutions.
            </p>

          </div>

          {/* Highlights */}
          <div className="bg-black text-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition">

            <h3 className="text-xl font-semibold mb-4">
              Unique Qualities 
            </h3>

            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Founder of Echelon Tech Club</li>
              <li>Experience organizing tech events</li>
              <li>Strong problem-solving mindset</li>
              <li>Interested in AI & Full-Stack Development</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About