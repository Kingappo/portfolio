import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../utils/data";

const filters = ["All", "Frontend", "Backend", "Fullstack"];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 3;

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const visibleProjects = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  const hasMore = filtered.length > INITIAL_COUNT;

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
              onClick={() => {
                setActiveFilter(filter);
                setShowAll(false);
              }}
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

        {/* Project Cards Grid or Empty State */}
        {filtered.length === 0 ? (
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="text-6xl mb-5">🛠️</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              No {activeFilter} projects yet
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
              I haven't added any {activeFilter.toLowerCase()} projects here
              yet, but they're in the works. Check back soon!
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-6 px-5 py-2 rounded-full bg-yellow-500 text-white dark:text-gray-900 font-semibold text-sm hover:bg-yellow-400 transition-colors duration-300"
            >
              View all projects
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Card Top - image Banner */}
                <div className="w-full h-40 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 dark:from-yellow-500/10 dark:to-yellow-700/5 flex items-center justify-center text-7xl">
                  <img src={project.emoji} alt="" />
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
        )}

        {/* View All / Show Less Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-2.5 rounded-full font-semibold text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-yellow-500 hover:text-yellow-500 dark:hover:text-yellow-400 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {showAll ? "Show Less" : `View All (${filtered.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
