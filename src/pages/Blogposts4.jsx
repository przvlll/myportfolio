import { ArrowLeft, ArrowRight, MapPin, CalendarDays } from "lucide-react";
import blogImg from "../assets/day4.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Blogpost4() {
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
            <span className="text-indigo-600">Day 4: </span>Institutional Visits
          </h1>

          <div className="flex items-center text-sm text-slate-500 space-x-4 mb-6">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-indigo-600" />
              <span>Bangko Sentral & Hytec Power, Inc., Manila</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="w-4 h-4 mr-1 text-indigo-600" />
              <span>April 10, 2025</span>
            </div>
          </div>

          <div className="text-slate-700 space-y-5 leading-relaxed text-lg">
            <p>
              We visited institutions that play crucial roles in the country's
              financial and industrial sectors.
            </p>
            <p>
              Bangko Sentral ng Pilipinas (BSP): At the BSP, we toured the Money
              Museum, which displays the evolution of Philippine currency and
              provides insights into the country's monetary history.
            </p>
            <p>
              Hytec Power Inc.: This company is a leading provider of industrial
              and educational solutions in the Philippines. We learned about
              their innovative products and services that cater to both academic
              institutions and industries.
            </p>
          </div>

          <div className="flex justify-between mt-10">
            <Link
              to="/day3"
              className="flex items-center text-indigo-600 border border-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Link>
            <Link
              to="/day5"
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
