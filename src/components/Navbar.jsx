import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.body.classList.add("light");
      setDark(false);
    }
  }, []);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    setDark(!isLight);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Premium Floating Logo */}
      <motion.div
        className="logo-container"
        whileHover={{ scale: 1.05 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <img src={Logo} alt="Assignment HUB Logo" className="logo-img" />
        <span className="logo-tag">Assignment HuB</span>
      </motion.div>

      {/* Navigation Links */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#services">Services</a>
        <a href="#countries">Countries</a>
        <a href="#contact">Contact</a>

        <button onClick={toggleTheme} className="theme-btn">
          {dark ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </motion.nav>
  );
}

export default Navbar;