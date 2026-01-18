export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-black dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>
        </div>
        <div className="bg-white dark:bg-black border-2 border-black dark:border-white rounded-3xl p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
          <p className="text-lg md:text-xl text-black/80 dark:text-white/80 leading-relaxed mb-6">
            I&apos;m a passionate <span className="font-bold text-black dark:text-white">Software Developer</span> who loves building user-focused applications and solving complex problems with elegant code. 
            Currently working as a Software Developer Engineer at <span className="font-semibold">MountBlue Technologies</span>, deployed at <span className="font-semibold">Magicpin</span>, 
            where I contribute to production-grade systems that make a real impact.
          </p>
          <p className="text-lg md:text-xl text-black/80 dark:text-white/80 leading-relaxed mb-6">
            My expertise spans across <span className="font-semibold">Java, TypeScript, JavaScript, React, Node.js, Express, SQL, and the MERN stack</span>. 
            I thrive in collaborative environments, adapt quickly to new challenges, and am committed to continuous learning. 
            My goal is to grow as a full-stack developer and build scalable products that create meaningful impact.
          </p>
          <div className="mt-8 p-6 bg-black/5 dark:bg-white/5 rounded-2xl border-l-4 border-black dark:border-white">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">What I Bring:</h3>
            <ul className="space-y-3 text-black/80 dark:text-white/80">
              <li className="flex items-start">
                <span className="text-black dark:text-white mr-3 mt-1 text-xl font-bold">✓</span>
                <span className="text-lg">Strong understanding of async JavaScript, Promises, and event loop</span>
              </li>
              <li className="flex items-start">
                <span className="text-black dark:text-white mr-3 mt-1 text-xl font-bold">✓</span>
                <span className="text-lg">Comfortable working across frontend and backend boundaries</span>
              </li>
              <li className="flex items-start">
                <span className="text-black dark:text-white mr-3 mt-1 text-xl font-bold">✓</span>
                <span className="text-lg">Passionate about clean UI, scalable code, and performance optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-black dark:text-white mr-3 mt-1 text-xl font-bold">✓</span>
                <span className="text-lg">Enjoy collaborative environments and continuous learning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
