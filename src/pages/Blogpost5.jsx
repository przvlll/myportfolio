import { ArrowLeft, ArrowRight, MapPin, CalendarDays } from "lucide-react";
import blogImg from "../assets/day5.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Blogpost5() {
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
          <ArrowLeft className="size-6 mr-2" /> Home
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
            <span className="text-indigo-600">Day 5: </span>Transportation and
            Traffic Management
          </h1>

          <div className="flex items-center text-sm text-slate-500 space-x-4 mb-6">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-indigo-600" />
              <span>Metro Manila</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="w-4 h-4 mr-1 text-indigo-600" />
              <span>April 11, 2025</span>
            </div>
          </div>

          <div className="text-slate-700 space-y-5 leading-relaxed text-lg">
            <p>
              Our focus shifted to understanding the country's transportation
              systems and traffic management.
            </p>
            <p>
              Light Rail Transit Authority - Line 2: We explored the operations
              of LRT Line 2, a rapid transit line in Metro Manila that runs
              between Recto and Antipolo, providing efficient transportation to
              commuters.
            </p>
            <p>
              Traffic Engineering Center: We visited the MMDA Traffic
              Engineering Center, where we learned about the planning and
              implementation of traffic management strategies to improve road
              safety and efficiency in Metro Manila.
            </p>
          </div>

          <div className="flex justify-between mt-10">
            <Link
              to="/day4"
              className="flex items-center text-indigo-600 border border-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Link>
            <Link
              to="/day6"
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
