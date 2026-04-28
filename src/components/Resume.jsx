import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiBook, FiDownload, FiCalendar } from "react-icons/fi";
import { education, experiences } from "../utils/resume";

const TimelineItem = ({ item, index, isInView, isExperience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isExperience ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        className="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500 border-2 border-white dark:border-gray-950 shadow"
      />

      {/* Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Period */}
        <div className="flex  items-center gap-2 text-yellow-500 dark:text-yellow-400 text-xs font-semibold mb-2">
          <FiCalendar size={13} />
          {isExperience ? item.period : item.period}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
          {isExperience ? item.title : item.degree}
        </h3>

        {/* Company or School */}
        <p className="text-yellow-500 dark:text-yellow-400 font-semibold text-sm mb-3">
          {isExperience ? item.company : item.school}
        </p>

        {/* Description */}
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Tags - only for experience */}
        {isExperience && item.tags && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="resume"
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
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Resume &{" "}
            <span className="text-yellow-500 dark:text-yellow-400">
              Experience
            </span>
          </h2>

          {/* Download Button */}
          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-white dark:text-gray-900 font-bold rounded-full shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <FiDownload size={18} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Two Column Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-500/10 text-yellow-500 dark:text-yellow-400">
                <FiBriefcase size={22} />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                Experience
              </h3>
            </motion.div>

            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                item={exp}
                index={index}
                isInView={isInView}
                isExperience={true}
              />
            ))}
          </div>

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-500/10 text-yellow-500 dark:text-yellow-400">
                <FiBook size={22} />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                Education
              </h3>
            </motion.div>

            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                item={edu}
                index={index}
                isInView={isInView}
                isExperience={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
