import { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, BookOpen, Rocket, Award } from "lucide-react";
import aboutimg from "../assets/about.jpg";

export default function About() {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (item) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: item * 0.1,
        ease: "easeOut",
      },
    }),
  };

  // Skills data
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "React",
    "Tailwind CSS",
    "Git",
  ];

  // Highlight features
  const highlights = [
    {
      icon: <Code className="text-indigo-600" size={24} />,
      title: "Web Development",
      description: "Creating responsive and interactive web applications.",
    },
    {
      icon: <BookOpen className="text-indigo-600" size={24} />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and frameworks.",
    },
    {
      icon: <Rocket className="text-indigo-600" size={24} />,
      title: "Problem Solver",
      description: "Finding efficient solutions to complex challenges.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white relative"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-50 opacity-60"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-blue-50 opacity-60"></div>
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
            Get To Know
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-indigo-600 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Image Column */}
          <motion.div variants={imageVariants} className="order-2 md:order-1">
            <div className="relative">
              {/* Border frame */}
              <motion.div
                className="absolute -left-4 -top-4 border-2 border-indigo-600 w-full h-full rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              ></motion.div>

              {/* Background accent */}
              <motion.div
                className="absolute -right-4 -bottom-4 bg-indigo-100 w-full h-full rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              ></motion.div>

              {/* Main image */}
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={aboutimg}
                  alt="Journey Hemoroz"
                  className="w-full max-w-lg mx-auto rounded-lg transform transition duration-500"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ filter: "brightness(1.1)" }}
                />
                <motion.div
                  className="absolute inset-0 bg-indigo-600 opacity-0 hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ opacity: 0.15 }}
                ></motion.div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <Award className="text-indigo-600" size={24} />
                <span className="text-slate-800 font-bold mt-1">
                  IT Student
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div variants={textVariants} className="order-1 md:order-2">
            <motion.p
              className="text-lg mb-6 text-slate-700 leading-relaxed"
              variants={itemVariants}
            >
              I am a dedicated and passionate Information Technology student
              from Western Mindanao State University, known for being
              resourceful, cooperative, and eager to learn. I thrive in both
              collaborative and individual tasks, always seeking to improve my
              technical skills while staying grounded in discipline and
              integrity.
            </motion.p>

            <motion.p
              className="text-lg mb-8 text-slate-700 leading-relaxed"
              variants={itemVariants}
            >
              My experiences inside and outside the classroom have shaped me
              into a well-rounded individual with a strong drive to achieve
              excellence. I am passionate about creating meaningful digital
              experiences and solving real-world problems through technology.
            </motion.p>

            {/* Highlight boxes */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
              variants={itemVariants}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50 p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  custom={index}
                  variants={skillVariants}
                >
                  <div className="flex items-center mb-2">
                    {highlight.icon}
                    <h3 className="font-medium text-slate-800 ml-2">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.h3
              className="text-xl font-semibold mb-3 text-slate-800"
              variants={itemVariants}
            >
              Technical Skills
            </motion.h3>

            <motion.div className="flex flex-wrap" variants={itemVariants}>
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm mr-2 mb-2 hover:bg-indigo-200 transition-colors"
                  custom={index}
                  variants={skillVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
