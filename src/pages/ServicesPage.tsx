import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

function ServicesPage() {
  return (
    <div className="page services-page">
      <section className="section hero-split hero-page">
        <div className="container hero-content">
          <span className="eyebrow">Tarot reading services</span>
          <h1>Divine readings tailored to your soul's path.</h1>
          <p>Choose from love, career, energy, soulmate, future guidance, or a custom Tarot experience.</p>
        </div>
      </section>
      <section className="section service-list">
        <div className="container">
          <motion.div className="grid cards-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
