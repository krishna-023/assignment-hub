import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.body.classList.add("light");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    setDark(!isLight);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="logo">Assignment HUB</h2>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#services">Services</a>
        <a href="#countries">Countries</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleTheme} className="theme-btn">
          {dark ? "🌙" : "☀️"}
        </button>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </motion.nav>
  );
}

export default Navbar;