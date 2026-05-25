import { motion } from 'framer-motion';
import SpellCard from '../components/SpellCard';
import { spellsData } from '../data/spells';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

function SpellServicesPage() {
  return (
    <div className="page spells-page">
      <section className="section hero-split hero-page">
        <div className="container hero-content">
          <span className="eyebrow">Mystic spell services</span>
          <h1>Enchanting rituals to protect, empower, and renew.</h1>
          <p>Choose a spell crafted with ceremonial care and golden intention.</p>
        </div>
      </section>
      <section className="section spell-list">
        <div className="container">
          <motion.div className="grid cards-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {spellsData.map((spell) => (
              <SpellCard key={spell.id} spell={spell} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SpellServicesPage;
