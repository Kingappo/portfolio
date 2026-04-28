import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../utils/projects";

const filters = ["All", "Frontend", "Backend", "Fullstack"];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex flex-col justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-yellow-500 dark:text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-3">
            What I've Built
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="text-yellow-500 dark:text-yellow-400">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-yellow-500 text-white dark:text-gray-900 shadow-lg shadow-yellow-500/30"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Card Top - Emoji Banner */}
              <div className="w-full h-40 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 dark:from-yellow-500/10 dark:to-yellow-700/5 flex items-center justify-center text-7xl">
                {project.emoji}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Category badge */}
                <span className="self-start text-xs font-bold px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
                  >
                    <FiGithub size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
