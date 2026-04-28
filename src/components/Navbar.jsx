import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "../utils/hero";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }, // 40% of section visible = active
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===================== DESKTOP SIDEBAR ===================== */}
      <nav className="fixed top-0 left-0 h-full w-64 z-50 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300 hidden md:flex flex-col overflow-y-auto">
        {/* Dark mode toggle - top right */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-transform duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center gap-3 px-6 pt-12 pb-6 border-b border-gray-200 dark:border-gray-700">
          {/* Avatar */}
          <div className="h-24 w-24 rounded-full p-1 bg-yellow-500 dark:bg-yellow-400 shadow-lg">
            <img
              src="/img/img1.jpg"
              alt="Profile picture"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {/* Name */}
          <h3 className="text-gray-900 dark:text-white font-bold text-base text-center leading-tight">
            Kingsley Oluchukwu
            <span className="block text-xs text-gray-400">Gappo</span>
          </h3>
          {/* Role badge */}
          <span className="text-xs text-yellow-600 dark:text-yellow-400 font-semibold bg-yellow-50 dark:bg-yellow-500/10 px-3 py-1 rounded-full">
            Frontend Developer
          </span>
          {/* Social Links */}
          <div className="flex gap-2 mt-1">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
              ${
                activeSection === link.toLowerCase()
                  ? "text-yellow-500 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-500/10"
                  : "text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-500/10"
              }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-200
                ${
                  activeSection === link.toLowerCase()
                    ? "bg-yellow-400"
                    : "bg-gray-300 dark:bg-gray-600 group-hover:bg-yellow-400"
                }`}
                />
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom - Availability */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <p className="text-green-600 dark:text-green-400 text-xs font-semibold">
              Available for work
            </p>
          </div>
        </div>
      </nav>

      {/* ===================== MOBILE TOP NAVBAR ===================== */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm transition-colors duration-300 md:hidden">
        <div className="px-4 py-3 flex items-center justify-between w-full">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-extrabold text-yellow-500 dark:text-yellow-400 tracking-tight shrink-0"
          >
            Gappo<span className="text-gray-900 dark:text-white">Tech</span>
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
            aria-label="Open menu"
          >
            <FiMenu size={18} />
          </button>
        </div>
      </nav>

      {/* ===================== MOBILE SLIDE-OUT MENU ===================== */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-72 z-50 bg-white dark:bg-gray-900 shadow-2xl md:hidden flex flex-col overflow-y-auto"
            >
              {/* Close + Dark mode row */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
                  aria-label="Close menu"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Profile */}
              <div className="flex flex-col items-center gap-3 px-6 py-6 border-b border-gray-200 dark:border-gray-700">
                <div className="h-20 w-20 rounded-full p-1 bg-yellow-500 dark:bg-yellow-400 shadow-lg">
                  <img
                    src="/img/img1.jpg"
                    alt="Profile picture"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-gray-900 dark:text-white font-bold text-base text-center">
                  Kingsley Oluchukwu{" "}
                  <span className="block text-xs text-gray-400">Gappo</span>
                </h3>
                <span className="text-xs text-yellow-600 dark:text-yellow-400 font-semibold bg-yellow-50 dark:bg-yellow-500/10 px-3 py-1 rounded-full">
                  Frontend Developer
                </span>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600
                       dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 
                       transition-all duration-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Nav Links */}
              <ul className="flex flex-col gap-1 px-4 py-6 flex-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                      ${
                        activeSection === link.toLowerCase()
                          ? "text-yellow-500 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-500/10"
                          : "text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-500/10"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-200
                      ${
                        activeSection === link.toLowerCase()
                          ? "bg-yellow-400"
                          : "bg-gray-300 dark:bg-gray-600 group-hover:bg-yellow-400"
                      }`}
                      />
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Availability */}
              <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <p className="text-green-600 dark:text-green-400 text-xs font-semibold">
                    Available for work
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile spacer */}
      <div className="h-14 md:hidden" />
    </>
  );
};

export default Navbar;
