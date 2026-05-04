import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="hero page-section">
      <motion.div
        className="intro-badge"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -36 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <span>Khalid</span>
      </motion.div>

      <div className="hero-grid">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="hero-eyebrow"
          >
            Norway based developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="hero-title"
          >
            <span>FRONTEND</span>
            <span className="hero-title-light">DEVELOPER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="hero-copy"
          >
            I build cinematic interfaces with React, motion, and a product mindset.
            The result should feel bold on first impression and dependable in daily use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.7 }}
            className="hero-actions"
          >
            <a href="#build" className="primary-link">
              What I build
            </a>
            <a href="#stack" className="secondary-link">
              Explore stack
            </a>
            <a href="/CV-Khalid-2026.dotx" className="secondary-link" download>
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.7 }}
          className="code-note"
        >
          <span className="code-tag">&lt;span&gt;</span>
          <p>
            Focused on modern frontend architecture, interaction design, and the kind of
            polish that makes a product feel memorable without losing clarity.
          </p>
          <span className="code-tag">&lt;/span&gt;</span>
        </motion.div>
      </div>
    </section>
  );
}
