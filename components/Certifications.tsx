const certifications = [
  {
    title: "Advanced Web Development",
    issuer: "Coding Ninjas",
    description: "Comprehensive web development course covering modern frameworks and best practices",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    description: "Validated expertise in React.js development and frontend engineering",
  },
  {
    title: "Principles of Leadership: Leading Oneself",
    issuer: "University of Colorado Boulder (Coursera)",
    description: "Leadership and personal development certification",
  },
  {
    title: "Generative AI Specialization",
    issuer: "Google Cloud",
    description: "45+ hours of training with 24 skill badges in Generative AI technologies",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-black dark:text-white">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-black border-2 border-black dark:border-white rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">
                <svg className="w-12 h-12 text-black dark:text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3 group-hover:opacity-80 transition-opacity">
                {cert.title}
              </h3>
              <p className="text-black/80 dark:text-white/80 font-semibold text-lg mb-3">
                {cert.issuer}
              </p>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
