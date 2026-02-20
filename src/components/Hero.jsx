import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Premium Academic Assistance Worldwide
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Trusted by International Students in UK, USA,
        Australia & Canada.
      </motion.p>

      <motion.a
        href="https://wa.me/919368192701"
        target="_blank"
        className="cta-btn"
        whileHover={{ scale: 1.1 }}
      >
        Chat on WhatsApp
      </motion.a>
    </section>
  );
}

export default Hero;