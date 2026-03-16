import { FaGithub } from "react-icons/fa";
import calculator from "../assets/Calcy.png";

function Projects() {

  const projects = [

    {
      title: "Real Estate Website",
      description: "Full-stack property listing platform with authentication and database-driven property management.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/imitiyaj7860SP/RealEstate-website"
    },

    {
      title: "Page Replacement Algorithm Simulator",
      description: "Interactive visualization tool that demonstrates FIFO, LRU, and Optimal page replacement algorithms.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/imitiyaj7860SP/Efficient-Page-Replacement-Algorithm-Simulator-"
    },

    {
      title: "AI Language Translator",
      description: "AI-powered web tool for translating text between multiple languages using API integration.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "API"],
      github: "https://github.com/imitiyaj7860SP/AI-Translator"
    },

    {
      title: "AI Email Composer",
      description: "Full-stack MERN application that generates professional emails from user prompts using AI APIs.",
      tech: ["React", "Node.js", "Express", "MongoDB", "AI API"],
      github: "https://github.com/imitiyaj7860SP/AI-Email-Composer-FullStack"
    },

    {
      title: "Advanced Scientific Calculator",
      description:
        "A neon themed advanced calculator with scientific functions including trigonometry, factorial, logarithms, power operations, degree/radian toggle, memory operations, and calculation history.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/imitiyaj7860SP/Advanced-Scientific-Calculator",
      demo: "https://imitiyaj7860sp.github.io/Advanced-Scientific-Calculator/",
      image: calculator
    }

  ];


  return (
    <section id="projects" className="px-10 py-20 bg-white">

      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-black rounded-lg overflow-hidden transition-transform transform hover:-translate-y-3 hover:shadow-2xl duration-300"
          >

            {/* Image Card */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">

              <h4 className="font-bold text-lg mb-3 text-white">
                {project.title}
              </h4>

              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white text-black px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition w-fit"
              >
                <FaGithub />
                View Code
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects;