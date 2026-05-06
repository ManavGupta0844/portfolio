"use client";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python"],
    highlight: true,
  },
  {
    category: "Frameworks",
    skills: ["Node.js", "React.js", "Next.js", "React Native", "Flask"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "BigQuery"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Elasticsearch", "Redis"],
  },
  {
    category: "AI Tools",
    skills: ["Cursor", "GitHub Copilot", "Claude Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-black dark:text-white">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-black border-2 rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 hover:-translate-y-1 ${
                category.highlight
                  ? "border-black dark:border-white"
                  : "border-black dark:border-white"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 text-center ${
                category.highlight
                  ? "text-black dark:text-white"
                  : "text-black dark:text-white"
              }`}>
                {category.category}
                {category.highlight && (
                  <span className="ml-2 text-sm bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded-full font-bold">
                    Top
                  </span>
                )}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-110 cursor-default ${
                      category.highlight
                        ? "bg-black dark:bg-white text-white dark:text-black shadow-lg hover:shadow-xl"
                        : "bg-black/5 dark:bg-white/5 text-black dark:text-white border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10"
                    }`}
                  >
                    {skill}
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
