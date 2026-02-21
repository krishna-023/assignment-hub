import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Premium Academic Assistance{" "}
        <span className="gradient-text">Worldwide</span>
      </motion.h1>

      {/* Landing Paragraph */}
      <motion.p
        className="hero-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Struggling with deadlines or complex assignments?  
        <br />
        <strong>Assignment HUB</strong> delivers high-quality, plagiarism-free 
        academic solutions crafted by experts. Trusted by students across 
        the UK, USA, Australia & Canada — we ensure 
        <span className="highlight"> on-time delivery</span>, 
        <span className="highlight"> confidentiality</span>, and 
        <span className="highlight"> academic excellence</span>.
      </motion.p>

      {/* Trust Badges */}
      <motion.div
        className="trust-badges"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div>5000+ Assignments Delivered</div>
        <div>98% Success Rate</div>
        <div>24/7 Expert Support</div>
      </motion.div>

      {/* WhatsApp CTA */}
      <motion.a
        href="https://wa.me/919368192701"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn"
        whileHover={{ scale: 1.1 }}
      >
        Chat on WhatsApp
      </motion.a>

      {/* Social Media Links */}
      <motion.div
        className="social-icons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <a
          href="https://www.facebook.com/profile.php?id=61588401214844"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/assignmentservice2026/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram />
        </a>
      </motion.div>

    </section>
  );
}

export default Hero;