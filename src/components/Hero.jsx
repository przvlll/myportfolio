import { ChevronDown, User } from "lucide-react";
import heroimg from "../assets/Hero-image.jpg";

export default function () {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop - 70,
      behavior: "smooth",
    });
    closeMenu();
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-blue-50"
    >
      <div className="container mx-auto px-6 md:px-8 mt-12 ">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-800 leading-tight">
              Journey <span className="text-indigo-600">Hemoroz</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-slate-600">
              WEB DEVELOPER
            </h2>
            <p className="text-lg mb-8 text-slate-700 max-w-lg">
              Enthusiastic about applying my skills and continuously learning in
              a dynamic and challenging environment.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection("about")}
                className="bg-indigo-600 text-white cursor-pointer px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
              >
                Learn More <ChevronDown size={18} className="ml-2" />
              </button>
              <button className="cursor-pointer border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
                Contact Me
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroimg}
              alt=""
              className="object-cover size-60 sm:size-80 border-8 border-indigo-600 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-16 flex justify-center">
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce cursor-pointer bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronDown size={24} className="text-indigo-600" />
        </button>
      </div>
    </section>
  );
}
