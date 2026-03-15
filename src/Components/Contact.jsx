function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-10">
          I'm always open to discussing new projects, collaborations,
          or opportunities. Feel free to reach out!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="mailto:your-email@example.com"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/imitiyaj7860SP"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohammad-imitiyaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact