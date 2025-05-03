import React from "react";
import { motion } from "framer-motion";
import pokemon from "../assets/pok.png";
import list from "../assets/tdlist.png";
import sk from "../assets/sk.jpg";
import ecom from "../assets/ecom.png";

const projects = [
  {
    title: "Pokemon Battle Arena",
    description: "A Mini Pokedex with battle simulation",
    image: pokemon,
    link: "https://jnjpokemon.netlify.app/",
  },
  {
    title: "Todolist in ReactJS",
    description: "Building a Todolist using ReactJS",
    image: list,
    link: "https://jnjtodo.netlify.app/",
  },
  {
    title: "SK TETUAN: Community Website",
    description: "A CMS for Tetuan Zamboanga City built with Django.",
    image: sk,
    link: "https://github.com/Joshua-dot-com/Sk-community-CMS-of-Tetuan-Zamboanga-City.git",
  },
  {
    title: "ZJD FOOTWEAR",
    description: "A fully functional online store with Stripe integration.",
    image: ecom,
    link: "https://github.com/CreamyCakey/django.git",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-slate-800">Projects</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.03]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
