// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Footer from "./components/Footer";

// function App() {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

//       {/* Sections will go here */}
//       <main className="pt-20 md:ml-64">
//         <Home />
//       </main>
//       <div className="md:ml-64">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

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
    <div
      className="bg-white dark:bg-gray-950 min-h-screen text-gray-900
     dark:text-white transition-colors duration-300 overflow-x-hidden"
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="md:ml-64 pt-14 md:pt-0">
        <Home />
      </main>
      <div className="md:ml-64 ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
