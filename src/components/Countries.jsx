import { motion } from "framer-motion";
import { useState } from "react";

const countries = [
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    desc: "Supporting students from top UK universities.",
    students: "1200+",
    success: "98% Success Rate"
  },
  {
    flag: "🇺🇸",
    name: "United States",
    desc: "Structured solutions aligned with US standards.",
    students: "1500+",
    success: "97% Success Rate"
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    desc: "Expert academic support for Australian universities.",
    students: "900+",
    success: "99% Success Rate"
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    desc: "Comprehensive academic excellence solutions.",
    students: "800+",
    success: "98% Success Rate"
  }
];

function Countries() {
  const [active, setActive] = useState(null);

  return (
    <section id="countries" className="countries-section">

      {/* Animated Background Map Overlay */}
      <div className="world-map-overlay"></div>

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Global Academic Reach</h2>
        <p className="section-subtitle">
          Trusted by thousands of students across world-leading destinations.
        </p>
      </motion.div>

      <div className="countries-grid">
        {countries.map((country, index) => (
          <motion.div
            key={index}
            className={`country-card ${active === index ? "active" : ""}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            whileHover={{ scale: 1.08 }}
          >
            <div className="shine"></div>

            <div className="country-flag">{country.flag}</div>
            <h3>{country.name}</h3>
            <p>{country.desc}</p>

            <motion.div
              className="country-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: active === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat">{country.students}</div>
              <div className="stat">{country.success}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Countries;