import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { p } from "framer-motion/client";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "../utils/hero";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

  return (
    <>
      {/* Desktop Sidebar - hidden on mobile */}
      <nav className="fixed top-0 left-0 h-full w-64 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors duration-300 hidden md:flex flex-col">
        <div className="relative flex flex-col h-full py-8">
          <div className="flex items-center flex-col gap-3 justify-center px-6 py-5 border-b border-gray-200 dark:border-gray-700">
            <div className="h-24 w-24 md:h-28 md:w-28 rounded-full p-1 dark:bg-yellow-400 bg-yellow-500">
              <img
                src={"/img/img1.jpg"}
                alt="Profile picture"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h3>Kingsley Oluchukwu</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Links - Vertical */}
          <ul className="flex flex-col gap-4 px-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Dark mode toggle at bottom */}
          <div className="absolute top-5 left-5">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-transform duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navbar - visible only on mobile */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors duration-300 md:hidden">
        <div className="px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-extrabold text-yellow-500 dark:text-yellow-400 tracking-tight"
          >
            Gappo Tech
          </a>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button> */}

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
              aria-label="Open menu"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sliding menu panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-72 z-50 bg-white dark:bg-gray-900 shadow-2xl md:hidden"
            >
              {/* Menu Header */}
              <div className="flex items-center flex-col gap-3 justify-center px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                <div className="h-24 w-24 md:h-28 md:w-28 rounded-full p-1 dark:bg-yellow-400 bg-yellow-500">
                  <img
                    src={"/img/img1.jpg"}
                    alt="Profile picture"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3>Kingsley Oluchukwu</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="px-6 py-8">
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center py-4 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-lg transition-all duration-200"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="absolute top-5 left-5">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <FiSun size={25} /> : <FiMoon size={25} />}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for mobile to prevent content hiding under navbar */}
      <div className="h-16 md:hidden"></div>
    </>
  );
};

export default Navbar;
