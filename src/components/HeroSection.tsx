import { motion } from 'framer-motion';
import GlowButton from './GlowButton';
import FloatingParticles from './FloatingParticles';
import { buildWhatsAppUrl, prefillMessage } from '../utils/whatsapp';

function HeroSection() {
  return (
    <section className="section hero-section" id="home">
      <FloatingParticles />
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="hero-copy">
          <span className="eyebrow">Luxury Spiritual Guidance</span>
          <h1>Moonlit Oracle Studio</h1>
          <p>Unlock your destiny with tarot readings, ritual oils, and magical ceremonies crafted for modern seekers.</p>
          <div className="hero-actions">
            <GlowButton href={buildWhatsAppUrl(prefillMessage('Tarot Reading'))}>Book a Reading</GlowButton>
            <GlowButton href={buildWhatsAppUrl('Hello! I would like to book a consultation.')} variant="outlined">
              Contact on WhatsApp
            </GlowButton>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="hero-visual">
          <div className="hero-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512399183933-67c45f9fdd71?auto=format&fit=crop&w=1200&q=80")' }} />
          <div className="tarot-glow-card">
            <div className="card-face moon-card">☾</div>
            <div className="card-ornament" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
