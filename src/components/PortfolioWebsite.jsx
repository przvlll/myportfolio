import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Blogs from "./Blogs";
import { Mail, Code, MessageSquare } from "lucide-react";
import { useEffect } from "react";
import Certificates from "./Certificates";

export default function PortfolioWebsite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Project Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* blogs */}
      <Blogs />

      <Certificates />

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Journey Hemoroz</h2>
              <p className="text-slate-300">Web Developer | BSIT Student</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/przvlll"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.2 1.8 1.2 1.05 1.79 2.75 1.27 3.42.97.1-.77.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.83 1.2 3.09 0 4.45-2.69 5.41-5.26 5.69.42.36.8 1.08.8 2.17v3.22c0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1Nz8pTzEUP/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/journey-hemoroz-167a06363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.452 20.452h-3.554v-5.568c0-1.327-.026-3.037-1.85-3.037-1.853 0-2.137 1.445-2.137 2.939v5.666H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.368-1.848 3.6 0 4.266 2.369 4.266 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.278V1.723C24 .771 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="mailto:journey.hemoroz15@gmail.com"
                className="p-2 bg-slate-700 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M1.5 4.5h21a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5Zm.9 1.5 9.6 6.3 9.6-6.3H2.4Zm19.2 1.68-8.4 5.52a1.5 1.5 0 0 1-1.6 0L3.2 7.68V18h18.4V7.68Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} Journey Hemoroz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
