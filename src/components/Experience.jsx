import { Calendar } from "lucide-react";

export default function () {
  const skills = [
    {
      title: "Frontend",
      content:
        "HTML, CSS, JavaScript, ReactJS, TailwindCSS - Proficient in building responsive and interactive user interfaces with clean and maintainable code.",
    },
    {
      title: "Backend",
      content:
        "PHP, MySQL - Able to create dynamic web applications and manage databases with solid understanding of server-side scripting.",
    },
    {
      title: "CMS Platforms",
      content:
        "WordPress - Experienced in customizing themes and managing content for various website needs using WordPress.",
    },
    {
      title: "CMS Platforms",
      content:
        "Visual Studio Code – Primary code editor used for efficient development with extensions and integrations.Canva – Utilized for creating simple and clean graphics or layouts for web and social media. GitHub – Familiar with version control workflows and collaborative development using Git.",
    },
    {
      title: "Others",
      content:
        "Basic Electronics Troubleshooting – Able to diagnose and fix minor hardware and circuit issues. Office Productivity (Word, Excel, PowerPoint) – Proficient in creating documents, spreadsheets, and presentations for academic or professional use.Communication & Customer Service – Strong interpersonal skills with experience in clear, professional communication.Adobe Photoshop (Basic) – Capable of basic photo editing and layout design tasks for personal or project use.",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800">
            Experience
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Experience Timeline */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="mb-8 relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-indigo-600 transform -translate-x-1/2"></div>
              <div className="mb-1 flex items-center">
                <Calendar size={16} className="mr-2 text-indigo-600" />
                <span className="text-sm text-slate-500">2025</span>
              </div>
              <h4 className="text-lg font-semibold mb-1">Educational Tour</h4>
              <p className="text-slate-700">
                Participated in an academic tour that exposed me to various tech
                and engineering institutions like Bangko Sentral ng Pilipinas,
                Hytec Power Inc., Light Rail Transit Authority, and more,
                broadening my understanding of how IT integrates with national
                operations.
              </p>
            </div>

            <div className="mb-8 relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-indigo-600 transform -translate-x-1/2"></div>
              <div className="mb-1 flex items-center">
                <Calendar size={16} className="mr-2 text-indigo-600" />
                <span className="text-sm text-slate-500">
                  May 2024 - January 2025{" "}
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-1">
                Ayala National High School LMS{" "}
              </h4>
              <p className="text-slate-700">
                A capstone project that involved building a Learning Management
                System tailored to the academic environment of Ayala NHS. I led
                the UI/UX design and database structuring.
              </p>
            </div>

            <div className="mb-8 relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-indigo-600 transform -translate-x-1/2"></div>
              <div className="mb-1 flex items-center">
                <Calendar size={16} className="mr-2 text-indigo-600" />
                <span className="text-sm text-slate-500">2024</span>
              </div>
              <h4 className="text-lg font-semibold mb-1">
                Software Engineering
              </h4>
              <p className="text-slate-700">
                Adaptive Issue Dynamic Solvers (AIDS)
              </p>
            </div>

            <div className="mb-8 relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-indigo-600 transform -translate-x-1/2"></div>
              <div className="mb-1 flex items-center">
                <Calendar size={16} className="mr-2 text-indigo-600" />
                <span className="text-sm text-slate-500">2024</span>
              </div>
              <h4 className="text-lg font-semibold mb-1">
                E-commerce Project Developer
              </h4>
              <p className="text-slate-700">
                I worked on the "ZJD Footwears" e-commerce project from January
                to December 2024, where I was responsible for product design and
                photography, focusing on capturing appealing angles to enhance
                the online presentation and marketing of our footwear products.
              </p>
            </div>

            <div className="mb-8 relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-indigo-600 transform -translate-x-1/2"></div>
              <div className="mb-1 flex items-center">
                <Calendar size={16} className="mr-2 text-indigo-600" />
                <span className="text-sm text-slate-500">2024</span>
              </div>
              <h4 className="text-lg font-semibold mb-1">
                PeaceTea Cafe Marketing Materials
              </h4>
              <p className="text-slate-700">
                Helped design branding and social media content for PeaceTea
                Cafe, applying my IT and multimedia skills in a business
                context.
              </p>
            </div>

            <div className="mb-8 relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-indigo-600 transform -translate-x-1/2"></div>
              <div className="mb-1 flex items-center">
                <Calendar size={16} className="mr-2 text-indigo-600" />
                <span className="text-sm text-slate-500">2020</span>
              </div>
              <h4 className="text-lg font-semibold mb-1">
                TESDA NC II in Electronics
              </h4>
              <p className="text-slate-600 mb-2">TESDA</p>
              <p className="text-slate-700">
                Acquired during senior high school under the TVL-ICT strand,
                where I developed foundational knowledge in electronic circuits,
                soldering, troubleshooting, and basic system maintenance.
              </p>
            </div>

            <div className="mt-8 relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-indigo-600 transform -translate-x-1/2"></div>
              <div className="mb-1 flex items-center">
                <Calendar size={16} className="mr-2 text-indigo-600" />
                <span className="text-sm text-slate-500">2019</span>
              </div>
              <h4 className="text-lg font-semibold mb-1">
                TESDA NC 11 Holder in Computer Systems Servicing
              </h4>
              <p className="text-slate-600 mb-2">TESDA</p>
              <p className="text-slate-700">
                Gained practical skills in assembling, installing, and
                maintaining computer systems and networks, troubleshooting
                hardware/software issues, and providing customer support.
              </p>
            </div>
          </div>

          {/* Latest Blog Posts */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="text-xs font-medium text-indigo-600 mb-1 block">
                      {skill.category}
                    </span>
                    <h4 className="font-semibold text-slate-800 mb-1 hover:text-indigo-600 transition-colors cursor-pointer">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-2">
                      {skill.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
