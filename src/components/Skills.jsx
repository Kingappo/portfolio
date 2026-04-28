import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories, techStack } from "../utils/skills";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex flex-col justify-center bg-white dark:bg-gray-950 transition-colors duration-300 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 dark:text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-3">
            What I Know
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="text-yellow-500 dark:text-yellow-400">Skills</span>
          </h2>
        </motion.div>

        {/* Skill Cards with Progress Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-500/10 text-yellow-500 dark:text-yellow-400">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills with progress bars */}
              <div className="flex flex-col gap-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-yellow-500 dark:text-yellow-400">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress bar track */}
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      {/* Animated fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.2 + skillIndex * 0.1 + 0.4,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-6 uppercase tracking-widest text-sm">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.07 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium text-sm shadow-sm hover:shadow-md hover:text-yellow-500 dark:hover:text-yellow-400 transition-all duration-200 cursor-default"
              >
                <span>{tech.emoji}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
