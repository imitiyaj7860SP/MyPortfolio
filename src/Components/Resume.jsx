function Resume() {
  return (
    <section id="resume" className="px-10 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Resume
      </h2>

      <div className="text-center">
        <p className="text-gray-600 mb-6">
          You can download my resume below.
        </p>

        <a
          href="/resume.pdf" // <--- public folder path
          target="_blank"
          rel="noopener noreferrer"
          download
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}

export default Resume