const projects = [
  {
    title: "EventBuddy",
    stack: "React.js, Java, PostgreSQL, JWT",
    description:
      "Event management platform with multi-role authentication, admin dashboard, and user-facing booking flows backed by a relational database.",
    technologies: ["React.js", "Java", "PostgreSQL", "JWT"],
  },
  {
    title: "Expense Tracker",
    stack: "React.js, Java, Express, MongoDB, JWT",
    description:
      "Full-stack expense management app with authentication, CRUD operations, and responsive UI.",
    technologies: ["React.js", "Java", "Express", "MongoDB", "JWT"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-black dark:text-white">
            Projects
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-black border-2 border-black dark:border-white rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 text-sm font-bold text-black dark:text-white bg-black/5 dark:bg-white/5 rounded-full border border-black dark:border-white group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors">
                  {project.stack}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 group-hover:opacity-80 transition-opacity">
                {project.title}
              </h3>
              <p className="text-black/70 dark:text-white/70 mb-6 leading-relaxed text-lg">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm font-medium bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
