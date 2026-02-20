import { motion } from "framer-motion";
import { FaBookOpen, FaSearch, FaCode, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: <FaBookOpen />,
    title: "Dissertation & Thesis",
    desc: "Elite academic research writing aligned with international university standards."
  },
  {
    icon: <FaSearch />,
    title: "Research Projects",
    desc: "Structured, analytical and plagiarism-free research solutions."
  },
  {
    icon: <FaChartLine />,
    title: "Case Studies",
    desc: "Business and technical case analysis with strategic insights."
  },
  {
    icon: <FaCode />,
    title: "Programming Assignments",
    desc: "Professional-grade coding across modern languages and frameworks."
  }
];

function Services() {
  return (
    <section id="services" className="services-section">

      {/* Floating Gradient Background */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Our Expertise</h2>
        <p className="section-subtitle">
          Delivering excellence with innovation, precision and global standards.
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.07 }}
          >
            <div className="shine"></div>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;