function Projects() {
  const projectData = [
    {
      title: "Number to Japanese Converter",
      description:
        "An interactive tool that converts numbers into Japanese and challenges users with quizzes to test their learning.",
      link: "https://baltazardelacruz.github.io/japanese/",
      image: "/image/japanese.png",
    },
    {
      title: "Blog. | 3-Point King",
      description:
        "A responsive blog website built with Bootstrap as part of an activity, featuring clean design and organized content sections.",
      link: "https://baltazardelacruz.github.io/blog/",
      image: "/image/blog.png",
    },
    {
      title: "Fashionable",
      description:
        "A modern fashion-themed website highlighting creative layouts, design trends, and interactive elements.",
      link: "https://baltazardelacruz.github.io/fashionable/",
      image: "/image/fashion.png",
    },
    {
      title: "Gallery",
      description:
        "A visually appealing collection of my artworks and images displayed in a clean, minimal gallery format.",
      link: "https://baltazardelacruz.github.io/gallery/",
      image: "/image/art.png",
    },
    {
      title: "Monthsary",
      description: "A simple project using bootstrap",
      link: "https://baltazardelacruz.github.io/45th/",
      image: "/image/monthsary.png"
    }
  ];

  return (
    
      <div className="max-w-6xl mx-auto px-6">
       <h2 className="text-2xl lg:text-3xl font-bold text-center leading-tight glow-text mb-6">
        My <span className="text-[#536983]">Projects</span>
      </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg border border-transparent hover:border-[#536983] hover:shadow-[0_0_15px_#536983] transition-all duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-400 flex-grow">
                  {project.description}
                </p>
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="mt-4 bg-[#536983] hover:bg-[#43556a] text-white px-3 py-1.5 rounded-lg text-sm transition duration-300"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
