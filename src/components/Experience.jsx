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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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

  const experiences = [
    {
      year: "2025",
      title: "Educational Tour",
      description:
        "Visited institutions like Bangko Sentral ng Pilipinas, Hytec Power Inc., and LRTA to understand how IT supports national infrastructure.",
    },
    {
      year: "May 2024 - Jan 2025",
      title: "Ayala NHS LMS",
      description:
        "Capstone project where I led UI/UX design and database structure for a school-focused LMS.",
    },
    {
      year: "2024",
      title: "Software Engineering",
      description: "Adaptive Issue Dynamic Solvers (AIDS)",
    },
    {
      year: "2024",
      title: "ZJD Footwears",
      description:
        "Handled e-commerce design and photography to enhance product appeal and user experience.",
    },
    {
      year: "2024",
      title: "PeaceTea Cafe",
      description:
        "Designed branding materials and social media content using IT and multimedia skills.",
    },
    {
      year: "2020",
      title: "TESDA NC II in Electronics",
      organization: "TESDA",
      description:
        "Learned basics of electronic circuits, soldering, and maintenance under TVL-ICT track.",
    },
    {
      year: "2019",
      title: "TESDA NC II Computer Servicing",
      organization: "TESDA",
      description:
        "Acquired skills in assembling computers, OS installation, and troubleshooting.",
    },
  ];

  const skills = [
    {
      icon: <LayoutGrid size={20} />,
      title: "Frontend",
      content:
        "HTML, CSS, JavaScript, ReactJS, TailwindCSS – Build responsive UIs with clean and maintainable code.",
    },
    {
      icon: <Terminal size={20} />,
      title: "Backend",
      content:
        "PHP, MySQL – Develop dynamic apps and manage backend data effectively.",
    },
    {
      icon: <Code size={20} />,
      title: "CMS Platforms",
      content:
        "WordPress – Customize themes and manage site content efficiently.",
    },
    {
      icon: <Settings size={20} />,
      title: "Tools",
      content:
        "VS Code, Canva, GitHub – Use tools for dev, graphics, and version control.",
    },
    {
      icon: <HelpCircle size={20} />,
      title: "Others",
      content:
        "Electronics troubleshooting, MS Office, customer service, basic Photoshop.",
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
        <div className="absolute -top-20 left-10 w-64 h-64 rounded-full bg-indigo-50 opacity-60" />
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-50 opacity-60" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
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
          />
        </motion.div>

        {/* Content grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Timeline */}
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
              <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-indigo-200" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-10"
                  variants={timelineItemVariants}
                >
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
                  />

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

          {/* Skills */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              variants={itemVariants}
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
                    className="border-b border-slate-100 pb-4"
                    variants={itemVariants}
                  >
                    <div className="flex items-center mb-1 text-indigo-600">
                      {skill.icon}
                      <span className="ml-2 font-semibold text-slate-700">
                        {skill.title}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{skill.content}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
