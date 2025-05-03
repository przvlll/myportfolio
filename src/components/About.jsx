import aboutimg from "../assets/about.jpg";

export default function () {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800">
            About Me
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative rounded-lg grid place-items-center ">
              <img
                src={aboutimg}
                alt="Journey Hemoroz"
                className="sm:max-w-xs h-auto rounded-lg"
              />
              {/* <div className="absolute inset-0 bg-indigo-600 opacity-20 hover:opacity-0 transition-opacity"></div> */}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-6 text-slate-700 leading-relaxed">
              I am a dedicated and passionate Information Technology student
              from Western Mindanao State University, known for being
              resourceful, cooperative, and eager to learn. I thrive in both
              collaborative and individual tasks, always seeking to improve my
              technical skills while staying grounded in discipline and
              integrity.
            </p>
            <p className="text-lg mb-8 text-slate-700 leading-relaxed">
              My experiences inside and outside the classroom have shaped me
              into a well-rounded individual with a strong drive to achieve
              excellence.
            </p>
            <div className="flex flex-wrap">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                HTML
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                CSS
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                JavaScript
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                PHP
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                React
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
