import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

function AboutPage() {
  return (
    <div className="page about-page">
      <section className="section hero-split hero-page">
        <div className="container hero-content">
          <span className="eyebrow">About the oracle</span>
          <h1>Spiritually guided. Elegantly intuitive. Eternally mindful.</h1>
          <p>Moonlit Oracle Studio combines astrology, tarot and energy work for modern soul seekers.</p>
        </div>
      </section>
      <section className="section about-story">
        <div className="container split-layout">
          <motion.div className="card story-panel" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
            <h2>My spiritual journey</h2>
            <p>From candlelit readings to sacred ceremony, my calling began with a single tarot spread and grew into a luminous practice of healing.</p>
            <div className="feature-list">
              <div>
                <strong>Experience</strong>
                <p>8+ years guiding clients through love, career and soul transformation.</p>
              </div>
              <div>
                <strong>Mission</strong>
                <p>To create a safe, luxurious sanctuary for your intuition to awaken.</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="timeline-panel" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
            {['First reading', 'Signature rituals', 'Sacred community'].map((item, index) => (
              <motion.div key={item} className="timeline-card card" variants={fadeInUp}>
                <span className="timeline-step">0{index + 1}</span>
                <h3>{item}</h3>
                <p>Deeply intuitive ceremonies designed to align with your personal journey.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
