const experiences = [
  {
    title: "Software Developer",
    company: "MountBlue Technologies",
    client: "Client: Magicpin",
    period: "April 2025 - Present",
    duration: "10 months",
    location: "Bengaluru, Karnataka, India",
    responsibilities: [
      "Developed merchant-facing features across React Native mobile app and web portal",
      "Built end-to-end UI flows with seamless user experience",
      "Integrated REST APIs and managed state with Redux",
      "Built production-grade React applications with Tailwind CSS",
      "Collaborated with cross-functional teams to deliver high-quality features",
      "Optimized frontend performance and improved application responsiveness",
      "Contributed to production-grade systems and scalable architecture",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-black dark:text-white">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-black border-2 border-black dark:border-white rounded-3xl p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-black dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-2xl text-black/80 dark:text-white/80 font-semibold mb-1">
                    {exp.company}
                  </p>
                  {exp.client && (
                    <p className="text-lg text-black/60 dark:text-white/60 font-medium">
                      {exp.client}
                    </p>
                  )}
                </div>
                <div className="text-left md:text-right mt-4 md:mt-0">
                  <p className="text-black/80 dark:text-white/80 font-semibold text-lg mb-1">
                    {exp.period}
                  </p>
                  {exp.duration && (
                    <p className="text-black/60 dark:text-white/60 font-medium mb-1">
                      {exp.duration}
                    </p>
                  )}
                  <p className="text-black/60 dark:text-white/60">
                    {exp.location}
                  </p>
                </div>
              </div>
              <ul className="space-y-4 mt-8">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-black/80 dark:text-white/80 text-lg"
                  >
                    <span className="text-black dark:text-white mr-4 mt-1 text-xl font-bold">▸</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
