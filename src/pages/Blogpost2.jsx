import { ArrowLeft, ArrowRight, MapPin, CalendarDays } from "lucide-react";
import blogImg from "../assets/day2.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Blogpost2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="flex items-center font-bold text-indigo-500 text-lg"
        >
          <ArrowLeft className="size-6 mr-2" />  Home
        </Link>
      </div>
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full py-2 md:w-1/2 flex justify-center items-center bg-slate-100">
          <img
            src={blogImg}
            alt="Blog Cover"
            className="w-auto h-full max-h-[90vh] object-contain bg-indigo-600 rounded-lg p-4"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            <span className="text-indigo-600">Day 2: </span>Subic Bay
            Metropolitan Authority (SBMA) Visit
          </h1>

          <div className="flex items-center text-sm text-slate-500 space-x-4 mb-6">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-indigo-600" />
              <span>Subic Bay, Philippines</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="w-4 h-4 mr-1 text-indigo-600" />
              <span>April 8, 2025</span>
            </div>
          </div>

          <div className="text-slate-700 space-y-5 leading-relaxed text-lg">
            <p>
              We traveled to the Subic Bay Freeport Zone to visit the SBMA Law
              Enforcement Department.
            </p>
            <p>
              SBMA Law Enforcement Department: Here, we learned about the
              department's role in maintaining peace and order within the
              Freeport Zone. They provide 24/7 security services and conduct
              various training programs to ensure safety and compliance within
              the area.
            </p>
          </div>

          <div className="flex justify-between mt-10">
            <Link
              to="/day1"
              className="flex items-center text-indigo-600 border border-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Link>
            <Link
              to="/day3"
              className="flex items-center text-white bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
