import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Calendar,
  Award,
  Code,
  Settings,
  LayoutGrid,
  Terminal,
  HelpCircle,
} from "lucide-react";

export default function Experience() {
  // Setup refs and animations for scroll-based animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const timelineItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Timeline data
  const experiences = [
    {
      year: "2025",
      title: "Educational Tour",
      description:
        "Participated in an academic tour that exposed me to various tech and engineering institutions like Bangko Sentral ng Pilipinas, Hytec Power Inc., Light Rail Transit Authority, and more, broadening my understanding of how IT integrates with national operations.",
    },
    {
      year: "May 2024 - January 2025",
      title: "Ayala National High School LMS",
      description:
        "A capstone project that involved building a Learning Management System tailored to the academic environment of Ayala NHS. I led the UI/UX design and database structuring.",
    },
    {
      year: "2024",
      title: "Software Engineering",
      description: "Adaptive Issue Dynamic Solvers (AIDS)",
    },
    {
      year: "2024",
      title: "E-commerce Project Developer",
      description:
        'I worked on the "ZJD Footwears" e-commerce project from January to December 2024, where I was responsible for product design and photography, focusing on capturing appealing angles to enhance the online presentation and marketing of our footwear products.',
    },
    {
      year: "2024",
      title: "PeaceTea Cafe Marketing Materials",
      description:
        "Helped design branding and social media content for PeaceTea Cafe, applying my IT and multimedia skills in a business context.",
    },
    {
      year: "2020",
      title: "TESDA NC II in Electronics",
      organization: "TESDA",
      description:
        "Acquired during senior high school under the TVL-ICT strand, where I developed foundational knowledge in electronic circuits, soldering, troubleshooting, and basic system maintenance.",
    },
    {
      year: "2019",
      title: "TESDA NC 11 Holder in Computer Systems Servicing",
      organization: "TESDA",
      description:
        "Gained practical skills in assembling, installing, and maintaining computer systems and networks, troubleshooting hardware/software issues, and providing customer support.",
    },
  ];

  // Skills data
  const skills = [
    {
      icon: <LayoutGrid size={20} />,
      title: "Frontend",
      content:
        "HTML, CSS, JavaScript, ReactJS, TailwindCSS - Proficient in building responsive and interactive user interfaces with clean and maintainable code.",
    },
    {
      icon: <Terminal size={20} />,
      title: "Backend",
      content:
        "PHP, MySQL - Able to create dynamic web applications and manage databases with solid understanding of server-side scripting.",
    },
    {
      icon: <Code size={20} />,
      title: "CMS Platforms",
      content:
        "WordPress - Experienced in customizing themes and managing content for various website needs using WordPress.",
    },
    {
      icon: <Settings size={20} />,
      title: "Tools",
      content:
        "Visual Studio Code – Primary code editor used for efficient development with extensions and integrations. Canva – Utilized for creating simple and clean graphics or layouts for web and social media. GitHub – Familiar with version control workflows and collaborative development using Git.",
    },
    {
      icon: <HelpCircle size={20} />,
      title: "Others",
      content:
        "Basic Electronics Troubleshooting – Able to diagnose and fix minor hardware and circuit issues. Office Productivity (Word, Excel, PowerPoint) – Proficient in creating documents, spreadsheets, and presentations for academic or professional use. Communication & Customer Service – Strong interpersonal skills with experience in clear, professional communication. Adobe Photoshop (Basic) – Capable of basic photo editing and layout design tasks for personal or project use.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-slate-50 relative"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-10 w-64 h-64 rounded-full bg-indigo-50 opacity-60"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-50 opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-indigo-600 text-lg font-medium mb-2 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My Journey
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Experience & Skills
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-indigo-600 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Experience Timeline - Takes up 2 columns on larger screens */}
          <motion.div
            className="md:col-span-2 bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            variants={itemVariants}
          >
            <motion.h3
              className="text-2xl font-bold mb-6 text-slate-800 flex items-center"
              variants={itemVariants}
            >
              <Award className="mr-2 text-indigo-600" size={24} />
              Professional Timeline
            </motion.h3>

            <motion.div
              className="space-y-8 relative"
              variants={timelineVariants}
            >
              {/* Timeline line */}
              <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-indigo-200"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-10"
                  variants={timelineItemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Timeline dot with pulsing effect */}
                  <motion.div
                    className="absolute left-0 top-2 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white shadow-md"
                    initial={{ scale: 0.8 }}
                    animate={{
                      scale: [1, 1.15, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(99, 102, 241, 0.4)",
                        "0 0 0 10px rgba(99, 102, 241, 0)",
                        "0 0 0 0 rgba(99, 102, 241, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  ></motion.div>

                  {/* Content */}
                  <div className="mb-1 flex items-center">
                    <Calendar size={16} className="mr-2 text-indigo-600" />
                    <span className="text-sm font-medium text-indigo-600">
                      {exp.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold mb-1 text-slate-800">
                    {exp.title}
                  </h4>

                  {exp.organization && (
                    <p className="text-slate-600 mb-2 text-sm">
                      {exp.organization}
                    </p>
                  )}

                  <p className="text-slate-700">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Section - Takes up 1 column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.h3
                className="text-2xl font-bold mb-6 text-slate-800 flex items-center"
                variants={itemVariants}
              >
                <Code className="mr-2 text-indigo-600" size={24} />
                Technical Skills
              </motion.h3>

              <motion.div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center mb-2">
                      <span className="p-2 rounded-md bg-indigo-50 text-indigo-600 mr-3">
                        {skill.icon}
                      </span>
                      <h4 className="font-semibold text-slate-800">
                        {skill.title}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-12">
                      {skill.content}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-xl shadow-md p-8"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="mr-2" size={20} />
                Certifications
              </h3>
              <ul className="space-y-3">
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bg-white bg-opacity-20 p-1 rounded-full mr-3 mt-1">
                    <Award size={14} />
                  </span>
                  <div>
                    <p className="font-medium"> Certificate of Completion: IT Educational Tour & Seminar</p>
                    <p className="text-sm text-indigo-100">2025</p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bg-white bg-opacity-20 p-1 rounded-full mr-3 mt-1">
                    <Award size={14} />
                  </span>
                  <div>
                    <p className="font-medium">TESDA NC II in Electronics</p>
                    <p className="text-sm text-indigo-100">2020</p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bg-white bg-opacity-20 p-1 rounded-full mr-3 mt-1">
                    <Award size={14} />
                  </span>
                  <div>
                    <p className="font-medium">
                      TESDA NC II in Computer Systems Servicing
                    </p>
                    <p className="text-sm text-indigo-100">2019</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
