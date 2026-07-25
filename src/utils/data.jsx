import { FaWhatsapp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import {
  FiBook,
  FiCode,
  FiCoffee,
  FiDatabase,
  FiGithub,
  FiLayout,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMusic,
  FiPhone,
  FiTool,
} from "react-icons/fi";

// HERO SECTION DATA
export const roles = [
  "Frontend Developer",
  "React Enthusiast",
  "UI/UX Lover",
  "Problem Solver",
];

export const socialLinks = [
  {
    icon: <FaWhatsapp size={22} />,
    href: "https://wa.me/2347040915878",
    label: "WhatsApp",
  },
  {
    icon: <FiGithub size={22} />,
    href: "https://github.com/kingappo",
    label: "Github",
  },
  {
    icon: <FiLinkedin size={22} />,
    href: "https://www.linkedin.com/in/kingsley-odoh-8bbb36380/",
    label: "LinkedIn",
  },
  { icon: <FaX size={22} />, href: "https://x.com/kingleyodoh", label: "X" },
];

// ABOUT SECTION DATA
export const facts = [
  { icon: <FiCode size={20} />, text: "Passionate about clean code" },
  { icon: <FiCoffee size={20} />, text: "Fueled by coffee & curiosity" },
  { icon: <FiMusic size={20} />, text: "Music lover while coding" },
  { icon: <FiBook size={20} />, text: "Always learning something new" },
];

// SKILLS SETION DATA
export const skillCategories = [
  {
    title: "Frontend",
    icon: <FiLayout size={22} />,
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: <FiDatabase size={22} />,
    skills: [
      { name: "Node.js", level: 60 },
      { name: "Express.js", level: 55 },
      { name: "MongoDB", level: 50 },
      { name: "REST APIs", level: 65 },
    ],
  },
  {
    title: "Tools & Others",
    icon: <FiTool size={22} />,
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 95 },
      // { name: "Figma", level: 60 },
      { name: "Responsive Design", level: 85 },
    ],
  },
];

export const techStack = [
  { name: "HTML5", emoji: "🌐" },
  { name: "CSS3", emoji: "🎨" },
  { name: "JavaScript", emoji: "⚡" },
  { name: "React", emoji: "⚛️" },
  { name: "Tailwind", emoji: "💨" },
  // { name: "Node.js", emoji: "🟢" },
  // { name: "MongoDB", emoji: "🍃" },
  { name: "Git", emoji: "🔀" },
];

// PROJECTS SECTION DATA
export const projects = [
  {
    title: "Daily Expense Tracker",
    description:
      "A full stack web application built with React and Node.js. Features user authentication, real-time updates and a clean modern UI.",
    tags: ["React", "Node.js", "MongoDB", "Express", "style component"],
    github: "https://github.com/Kingappo/expense-tracker",
    live: "https://expense-tracker-uupm.onrender.com/",
    emoji: "img/products/expense-tracker.PNG",
    category: "Fullstack",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and Tailwind CSS. Includes dark mode, smooth animations and mobile support.",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/Kingappo/portfolio",
    live: "https://gappo-portfolio.vercel.app/",
    emoji: "img/products/my_portfolio.PNG",
    category: "Frontend",
  },
  // {
  //   title: "Project Three",
  //   description:
  //     "A REST API built with Express and MongoDB. Features full CRUD operations, JWT authentication and proper error handling.",
  //   tags: ["Node.js", "Express", "MongoDB", "JWT"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   emoji: "🔧",
  //   category: "Backend",
  // },
  {
    title: "Daily Expense Tracker(frontend)",
    description:
      "A web application built using react and style component. mobile responsive and intuitive design.",
    tags: ["React", "API", "style component"],
    github: "https://github.com/Kingappo/expense-tracker/tree/main/client",
    live: "https://expense-tracker-uupm.onrender.com/",
    emoji: "img/products/tracky-frontend.PNG",
    category: "Frontend",
  },
  {
    title: "Daily Expense Tracker(backend)",
    description:
      "An e-commerce dashboard with analytics, product management and order tracking built with React and Chart.js.",
    tags: ["Node.js", "Express", "MongDB"],
    github: "https://github.com/Kingappo/expense-tracker/tree/main/server",
    live: "https://expense-tracker-uupm.onrender.com/",
    emoji: "img/products/tracky-backend.PNG",
    category: "Backend",
  },
  {
    title: "Daily Expense Tracker(backend)",
    description:
      "An e-commerce dashboard with analytics, product management and order tracking built with React and Chart.js.",
    tags: ["Node.js", "Express", "MongDB"],
    github: "https://github.com/Kingappo/expense-tracker/tree/main/server",
    live: "https://expense-tracker-uupm.onrender.com/",
    emoji: "img/products/tracky-backend.PNG",
    category: "Backend",
  },
  {
    title: "Daily Expense Tracker(backend)",
    description:
      "An e-commerce dashboard with analytics, product management and order tracking built with React and Chart.js.",
    tags: ["Node.js", "Express", "MongDB"],
    github: "https://github.com/Kingappo/expense-tracker/tree/main/server",
    live: "https://expense-tracker-uupm.onrender.com/",
    emoji: "img/products/tracky-backend.PNG",
    category: "Backend",
  },
  {
    title: "Daily Expense Tracker(backend)",
    description:
      "An e-commerce dashboard with analytics, product management and order tracking built with React and Chart.js.",
    tags: ["Node.js", "Express", "MongDB"],
    github: "https://github.com/Kingappo/expense-tracker/tree/main/server",
    live: "https://expense-tracker-uupm.onrender.com/",
    emoji: "img/products/tracky-backend.PNG",
    category: "Backend",
  },
  // {
  //   title: "Project Six",
  //   description:
  //     "A real-time chat application using Socket.io with rooms, private messaging and online user tracking.",
  //   tags: ["React", "Socket.io", "Node.js"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   emoji: "💬",
  //   category: "Fullstack",
  // },
];

// RESUME SECTION DATA
export const experiences = [
  // {
  //   title: "Frontend Developer Intern",
  //   company: "Company Name",
  //   period: "Jan 2024 - Present",
  //   description:
  //     "Built and maintained responsive web interfaces using React and Tailwind CSS. Collaborated with the design team to implement pixel-perfect UI components.",
  //   tags: ["React", "Tailwind", "Git"],
  // },
  {
    title: "Freelance Web Developer",
    company: "Self Employed",
    period: "Dec 2025  - Present",
    description:
      "Designed and developed websites for small businesses. Handled everything from design to deployment including SEO optimization.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  // {
  //   title: "Junior Developer",
  //   company: "Startup Name",
  //   period: "Jan 2023 - May 2023",
  //   description:
  //     "Assisted senior developers in building web applications. Wrote clean reusable components and participated in code reviews.",
  //   tags: ["React", "Node.js", "MongoDB"],
  // },
];

export const education = [
  {
    degree: "B.Sc. Computer Science / Statistics",
    school: "University of Nigeria Nsukka",
    period: "2021 - 2025",
    description:
      "Studied core computer science concepts including data structures, algorithms, software engineering and web development.",
  },
  {
    degree: "Frontend Development Bootcamp",
    school: "Alabian Solutions",
    period: "2024",
    description:
      "Intensive bootcamp covering modern frontend technologies including React, JavaScript ES6+ and responsive design.",
  },
];

// CONTACT SECTION DATA
export const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "kinggappo@gmail.com",
    href: "mailto:kinggappo@gmail.com",
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: "+234 704 091 5878",
    href: "tel:+2347040915878",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
];
