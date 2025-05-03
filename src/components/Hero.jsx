import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, User, Linkedin, Github, Mail } from "lucide-react";
import heroimg from "../assets/Hero-image.jpg";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop - 70,
      behavior: "smooth",
    });
    closeMenu();
  };

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  // Parallax effect on scroll
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 bg-gradient-to-br from-indigo-100 to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-200 blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-200 blur-3xl opacity-20"></div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-8 mt-12 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.h2
                variants={itemVariants}
                className="text-lg md:text-xl font-medium text-indigo-600 mb-2"
              >
                Hello, I'm
              </motion.h2>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-slate-800 leading-tight"
              >
                Journey <span className="text-indigo-600">Hemoroz</span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3 mb-4"
              >
                <div className="h-1 w-12 bg-indigo-600"></div>
                <h2 className="text-xl md:text-2xl font-semibold text-slate-600">
                  WEB DEVELOPER
                </h2>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg mb-6 text-slate-700 max-w-lg leading-relaxed"
              >
                Enthusiastic about applying my skills and continuously learning
                in a dynamic and challenging environment. I create responsive,
                user-friendly websites and applications with modern
                technologies.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  onClick={() => scrollToSection("about")}
                  className="bg-indigo-600 text-white cursor-pointer px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More <ChevronDown size={18} className="ml-2" />
                </motion.button>

                <motion.button
                  className="cursor-pointer border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#contact">Contact</a>
                </motion.button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4 mt-6"
              >
                <span className="text-slate-600">Connect with me:</span>
                <motion.a
                  href="#"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <a href="https://www.linkedin.com/in/journey-hemoroz-167a06363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <Linkedin size={20} />
                  </a>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <a href="https://github.com/przvlll">
                    <Github size={20} />
                  </a>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <a href="mailto:journey.hemoroz15@gmail.com"><Mail size={20} /></a>
                  
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              variants={imageVariants}
              className="relative"
              style={{
                transformStyle: "preserve-3d",
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              <motion.div
                className="absolute inset-0 bg-indigo-600 rounded-full blur-md opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <motion.img
                src={heroimg}
                alt="Journey Hemoroz"
                className="relative object-cover size-64 sm:size-80 border-8 border-indigo-600 rounded-full shadow-xl z-10"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                animate={{
                  rotateZ: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="container mx-auto px-4 md:px-6 mt-16 flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className="cursor-pointer bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <ChevronDown size={24} className="text-indigo-600" />
        </motion.button>
      </motion.div>
    </section>
  );
}
