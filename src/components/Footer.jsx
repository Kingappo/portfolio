import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";

const socials = [
  { icon: <FiGithub size={20} />, href: "https://github.com", label: "GitHub" },
  {
    icon: <FiLinkedin size={20} />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <FiTwitter size={20} />,
    href: "https://twitter.com",
    label: "Twitter",
  },
];

const navLinks = ["About", "Skills", "Projects", "Resume", "Contact"];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 px-6 py-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="text-2xl font-extrabold text-yellow-500 dark:text-yellow-400"
            >
              MyPortfolio
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              A passionate frontend developer building beautiful and functional
              web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-900 dark:text-white font-bold text-lg">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-900 dark:text-white font-bold text-lg">
              Find Me On
            </h3>
            <div className="flex gap-3">
              {socials.map((social, index) => (
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
            <div>
              <div className="flex items-center gap-2 mt-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <p className="text-green-600 dark:text-green-400 text-sm font-semibold">
                  Available for work
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          {/* <div> */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} MyPortfolio. All rights reserved.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center gap-1">
              Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-red-500"
              >
                <FiHeart size={14} fill="currentColor" />
              </motion.span>{" "}
              using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
