import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { roles, socialLinks } from "../utils/hero";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const fullText = roles[currentRole];
    let timeout;

    if (!isDeleting && displayed.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length + 1));
      }, 100);
    } else if (!isDeleting && displayed.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length - 1));
      }, 50);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 transition-colors duration-300 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-yellow-500 dark:text-yellow-400 font-semibold text-lg mb-3 tracking-widest uppercase"
        >
          👋 Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4"
        >
          Kingsley Oluchukwu
        </motion.h2>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6 h-10"
        >
          <span>{displayed}</span>
          <span className="inline-block w-0.5 h-6 bg-yellow-500 dark:bg-yellow-400 ml-1 animate-pulse" />
        </motion.div>

        {/* Short bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto mb-10"
        >
          I build beautiful, responsive web experiences with clean code and a
          passion for great design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-white dark:text-gray-900 font-bold rounded-full shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-yellow-500 dark:border-yellow-400 text-yellow-500 dark:text-yellow-400 font-bold rounded-full hover:bg-yellow-500 hover:text-white dark:hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-200"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            <span className="text-sm tracking-widest uppercase">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="w-5 h-5 border-b-2 border-r-2 border-current rotate-45"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
