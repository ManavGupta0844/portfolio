"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if dark mode is active
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    // Initial check
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Determine which image to use based on theme
  const imageSrc = isDark 
    ? "/images/profile-photo.jpeg" 
    : "/images/profile-photo-white-bg.jpg";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right Column - Profile Image (shown first on mobile) */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-black dark:bg-white rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-black dark:border-white shadow-2xl group-hover:scale-105 transition-transform duration-300">
                {mounted && !imageError ? (
                  <Image
                    src={imageSrc}
                    alt="Manav Gupta"
                    fill
                    className="object-cover transition-opacity duration-300"
                    priority
                    onError={() => setImageError(true)}
                    key={imageSrc} // Force re-render when image changes
                  />
                ) : (
                  <div className="w-full h-full bg-black/5 dark:bg-white/5 flex items-center justify-center">
                    <span className="text-6xl md:text-8xl font-bold text-black dark:text-white">MG</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Left Column - Text Content (shown second on mobile) */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-black/60 dark:text-white/60 font-semibold text-lg tracking-wide uppercase animate-fade-in">
                Software Developer
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black dark:text-white animate-fade-in-up delay-100">
                Manav Gupta
              </h1>
              <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 font-medium animate-fade-in-up delay-200">
                Building user-focused applications and solving problems with code
              </p>
              <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-300">
                Software Developer with hands-on experience building and scaling full-stack applications used by 12,000+ merchants in production. Experienced in developing end-to-end features, optimizing performance, and improving user experience across web and mobile platforms. Passionate about building scalable systems and solving real-world problems.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 animate-fade-in-up delay-400">

              <a
                href="#experience"
                className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-xl font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Experience
              </a>
              <a
                href="/resume.pdf"
                download="Manav_Gupta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-xl font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Resume
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 pt-4 animate-fade-in-up delay-500">
              <a
                href="tel:+918544970148"
                className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg hover:scale-110"
                aria-label="Phone"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <a
                href="mailto:gmanav405@gmail.com"
                className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/manav-gupta2804"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/ManavGupta0844"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
