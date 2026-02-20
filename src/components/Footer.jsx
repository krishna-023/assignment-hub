import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      id="contact"
      className="footer"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Assignment HUB</h2>
          <p>
            Premium Academic Assistance for International Students.
            Delivering excellence across UK, USA, Australia & Canada.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>

          <a
            href="https://wa.me/919368192701"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaWhatsapp /> +91 9368192701
          </a>

          <a
            href="mailto:idontknow9814@gmail.com"
            className="footer-link"
          >
            <FaEnvelope /> idontknow9814@gmail.com
          </a>
        </div>

        {/* Quick Scroll Top */}
        <div className="footer-extra">
          <h4>Quick Access</h4>
          <a href="#" className="scroll-top">
            <FaArrowUp /> Back to Top
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Assignment HUB. All Rights Reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;