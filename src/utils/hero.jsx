import { FaWhatsapp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiX } from "react-icons/fi";

export const roles = [
  "Frontend Developer",
  "React Enthusiast",
  "UI/UX Lover",
  "Problem Solver",
];

export const socialLinks = [
  {
    icon: <FaWhatsapp size={22} />,
    href: "https://github.com",
    label: "WhatsApp",
  },
  { icon: <FiGithub size={22} />, href: "https://github.com", label: "Github" },
  {
    icon: <FiLinkedin size={22} />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  { icon: <FaX size={22} />, href: "https://twitter.com", label: "X" },
];
