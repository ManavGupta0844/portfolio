const education = [
  {
    degree: "Bachelor of Engineering - BE, Computer Science",
    institution: "Chitkara University",
    period: "November 2021 - August 2025",
    cgpa: "8.74",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-black dark:text-white">
            Education
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-black border-2 border-black dark:border-white rounded-3xl p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3">
                    {edu.degree}
                  </h3>
                  <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 font-semibold mb-2">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-left md:text-right mt-6 md:mt-0 md:ml-8">
                  <p className="text-black/80 dark:text-white/80 font-medium text-lg mb-2">
                    {edu.period}
                  </p>
                  <div className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg shadow-lg">
                    CGPA: {edu.cgpa}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
