import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/about.jpg";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";

export default function Blogs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const blogDays = [
    {
      day: "Day 1",
      title: "City Tour in Manila",
      image: img1,
      link: "/day1",
      description:
        "Exploring the vibrant streets and landmarks of Manila city.",
    },
    {
      day: "Day 2",
      title: "Subic Bay Metropolitan Authority (SBMA) Visit",
      image: img2,
      link: "/day2",
      description:
        "Learning about the transformation of a former US naval base.",
    },
    {
      day: "Day 3",
      title: "Museums and Cultural Sites",
      image: img3,
      link: "/day3",
      description: "Immersing in Filipino history, art and cultural heritage.",
    },
    {
      day: "Day 4",
      title: "Institutional Visits",
      image: img4,
      link: "/day4",
      description:
        "Engaging with key educational and governmental institutions.",
    },
    {
      day: "Day 5",
      title: "Transportation and Traffic Management",
      image: img5,
      link: "/day5",
      description: "Understanding urban mobility challenges and solutions.",
    },
    {
      day: "Day 6",
      title: "Baguio City Tour",
      image: img6,
      link: "/day6",
      description: "Exploring the summer capital of the Philippines.",
    },
    {
      day: "Day 7",
      title: "Burnham Park Bike Ride",
      image: img7,
      link: "/day7",
      description: "This photo of me was taken at Burnham Park, one of the most iconic and beloved destinations in Baguio City.",
    },
  ];

  return (
    <section
      id="blogs"
      className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 tracking-tight">
            Education Tour Blog
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-6">
            Follow our journey through the Philippines – exploring culture,
            institutions, and urban development.
          </p>
          <div className="h-1 w-24 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogDays.map((day, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={day.image}
                  alt={day.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                    {day.day}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-1">
                  {day.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {day.description}
                </p>
                {day.link && (
                  <Link
                    to={day.link}
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group-hover:underline"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
