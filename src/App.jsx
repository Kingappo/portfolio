// import { useState, useEffect } from "react";

// function App() {
//   const [darkMode, setDarkMode] = useState(true); // dark by default

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
//       <h1 className="text-4xl font-bold text-center pt-20">My Portfolio</h1>
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="block mx-auto mt-6 px-4 py-2 bg-gray-800 dark:bg-yellow-400 text-white dark:text-black rounded-full font-semibold"
//       >
//         {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
//       </button>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Sections will go here */}
      <main className="pt-20 md:ml-64">
        <Home />
      </main>
    </div>
  );
}

export default App;
