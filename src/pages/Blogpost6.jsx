import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  CalendarDays,
  Volume2,
  VolumeX,
  Maximize2,
} from "lucide-react";
import { Link } from "react-router-dom";
import baguioVideo from "../assets/baguio6.mp4";

export default function Blogpost6() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable fullscreen: ${err.message}`
          );
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="flex items-center font-bold text-indigo-500 text-lg mb-6 hover:text-indigo-700 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 mr-2" /> Back to Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Video Section */}
        <div className="w-full md:w-1/2 bg-black relative">
          <div className="aspect-[9/16] w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              src={baguioVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
            />

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex justify-between items-center text-white">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Video Header Overlay */}
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
              <div className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                Day 6
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
              <span className="text-indigo-600">Day 6: </span>Baguio City Tour
            </h1>

            <div className="flex flex-wrap items-center text-sm text-slate-500 gap-4 mb-6">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-indigo-600" />
                <span>Baguio City, Philippines</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-1 text-indigo-600" />
                <span>April 12, 2025</span>
              </div>
            </div>
          </div>

          <div className="prose prose-slate prose-lg max-w-none">
            <p>
            We traveled to Baguio City, known as the "Summer Capital of the Philippines," and visited several attractions.
            </p>

            <p>
            Strawberry Farm (La Trinidad): We enjoyed picking fresh strawberries at the farm, experiencing the agricultural practices of the region.

            </p>

            <p>
            Philippine Military Academy (PMA): At the PMA, the premier military academy of the Philippines, we observed the training grounds and learned about the rigorous education and discipline instilled in future military officers.
            </p>
          </div>

          <div className="flex justify-between mt-10">
            <Link
              to="/day5"
              className="flex items-center text-indigo-600 border border-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Link>
            <Link
              to="/day7"
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
