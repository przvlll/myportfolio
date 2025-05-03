export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800">
            Contact Me
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>
        <p className="text-gray-600 mb-8">
          Have a question or want to work together? Fill out the form and I’ll
          get back to you as soon as possible.
        </p>

        <form className="bg-white shadow-lg rounded-xl p-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
