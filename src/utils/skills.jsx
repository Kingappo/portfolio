import { FiDatabase, FiLayout, FiTool } from "react-icons/fi";

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
      { name: "Figma", level: 60 },
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
  { name: "Node.js", emoji: "🟢" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "Git", emoji: "🔀" },
];
