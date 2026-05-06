const experiences = [
  {
    title: "Software Developer",
    company: "MountBlue Technologies",
    client: "Client: Magicpin",
    period: "April 2025 - Present",
    duration: "",
    location: "Gurugram, India",
    responsibilities: [
      "Merchant Availability & Holiday Management: Designed and developed a cross-platform scheduling system with conflict resolution logic across web and mobile, reducing order cancellations by 10%.",
      "Business Analytics Dashboard: Developed a scheduled pipeline using CronJobs to sync large-scale analytics data into a search index, significantly reducing query latency.",
      "Authentication & Session Management: Developed OTP-based authentication with secure token lifecycle and session management, enabling role-based access control for 10,000+ daily active sessions.",
      "Merchant Onboarding: Designed and developed asynchronous onboarding workflows with polling-based state sync, enabling 2,500+ merchant activations with real-time progress tracking.",
      "Merchant Portal Revamp: Redeveloped the merchant portal from a legacy class-based codebase to a component-based system, releasing in stages via iframes with postMessage based cross-frame communication.",
      "LLM Features: Implemented AI-driven merchant insights and automated rejection explanations via a microservice, to ensure consistent output quality in production.",
      "Performance Optimization: Optimized portal performance by eliminating redundant API calls through a centralized store and caching heavy API responses, improving load times on high-traffic screens."
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
