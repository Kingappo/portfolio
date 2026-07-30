import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { socialLinks } from "../utils/data";

const navLinks = ["About", "Skills", "Projects", "Resume", "Contact"];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 px-6 py-12">
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="text-2xl font-extrabold text-yellow-500 dark:text-yellow-400"
            >
              Gappo
              <span className="text-gray-900 dark:text-white">Tech</span>
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              A passionate web developer, building beautiful, interactive and
              functional web experiences one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-900 dark:text-white font-bold text-base uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + Availability */}
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-900 dark:text-white font-bold text-base uppercase tracking-wider">
              Find Me On
            </h3>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 hover:shadow-md transition-all duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <p className="text-green-600 dark:text-green-400 text-sm font-semibold">
                Available for work
              </p>
            </div>
          </div>
        </div>

        {/* Divider + Bottom row */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Kingsley Oluchukwu. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
