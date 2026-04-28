import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { facts } from "../utils/about";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-4 border-yellow-400 dark:border-yellow-500 z-0" />
            {/* Image */}
            <div className="relative z-10 w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <img
                src="img/img1.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -bottom-5 -right-5 z-20 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-xl shadow-lg text-sm"
            >
              Open to Work 🚀
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Section label */}
          <p className="text-yellow-500 dark:text-yellow-400 font-semibold tracking-widest uppercase text-sm">
            About Me
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Who I Am &{" "}
            <span className="text-yellow-500 dark:text-yellow-400">
              What I Do
            </span>
          </h2>

          {/* Bio */}
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Hi! I'm{" "}
            <span className="text-yellow-500 dark:text-yellow-400 font-semibold">
              Kingsley Oluchukwu{" "}
              <span className="text-sm text-gray-400">(gappo)</span>
            </span>
            , a passionate frontend developer based in{" "}
            <span className="font-semibold text-gray-800 dark:text-white">
              Lagos
            </span>
            . I love turning ideas into beautiful, functional web experiences.
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            I started my programming journey in{" "}
            <span className="font-semibold text-gray-800 dark:text-white">
              2024
            </span>{" "}
            and have been obsessed with building things ever since. I specialize
            in React and modern frontend technologies.
          </p>

          {/* Fun facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl shadow-sm"
              >
                <span className="text-yellow-500 dark:text-yellow-400">
                  {fact.icon}
                </span>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {fact.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="self-start mt-2 px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-white dark:text-gray-900 font-bold rounded-full shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            Let's Connect 👋
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
