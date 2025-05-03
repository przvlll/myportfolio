import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        "hero",
        "about",
        "experience",
        "projects",
        "contact",
        "blogs",
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = 0; i < sectionIds.length; i++) {
        const current = document.getElementById(sectionIds[i]);
        const next = document.getElementById(sectionIds[i + 1]);

        if (
          current &&
          scrollPosition >= current.offsetTop &&
          (!next || scrollPosition < next.offsetTop)
        ) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }

      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check for the active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      });
      closeMenu();
    }
  };

  const sections = [
    "hero",
    "about",
    "experience",
    "projects",
    "contact",
    "blogs",
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md px-6 py-4" : "bg-transparent p-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#">
            <h1 className="text-xl font-bold text-indigo-600">JH</h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`transition-colors cursor-pointer ${
                activeSection === section
                  ? "text-indigo-600 font-medium"
                  : "text-slate-600 hover:text-indigo-500"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-800 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`py-2 px-4 rounded text-left ${
                  activeSection === section
                    ? "bg-indigo-50 text-indigo-600 font-medium"
                    : "text-slate-600"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
