import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Award } from "lucide-react";
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";

export default function Certificates() {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Example certificate images - replace these with your actual certificate paths
  const certificates = [
    cert1,
    cert2,
  ];

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

  const certificateVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="certificates"
      className="py-20 md:py-28 bg-slate-50 relative"
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
            My Achievements
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Certificates
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-indigo-600 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group"
              variants={certificateVariants}
              custom={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative overflow-hidden rounded-lg">
                {/* Certificate image */}
                <motion.img
                  src={certificate}
                  alt={`Certificate ${index + 1}`}
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Overlay on hover */}
                <motion.div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </motion.div>

                {/* Border accent */}
                <motion.div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-600 rounded-lg transition-all duration-300"></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
