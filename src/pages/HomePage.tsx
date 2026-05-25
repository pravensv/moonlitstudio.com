import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactForm from '../components/ContactForm';
import { servicesData } from '../data/services';
import { productsData } from '../data/products';
import { testimonialsData } from '../data/testimonials';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

function HomePage() {
  return (
    <div className="page home-page">
      <HeroSection />
      <section className="section intro-section" id="offerings">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <p className="eyebrow">Discover your destiny</p>
            <h2>Transformative spiritual guidance under moonlight.</h2>
          </motion.div>
          <motion.div className="grid cards-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {servicesData.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section>
      <section className="section ritual-section" id="rituals">
        <div className="container split-layout">
          <motion.div className="text-panel" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
            <span className="eyebrow">Ritual oils</span>
            <h3>Potent oils crafted for intention and protection.</h3>
            <p>Find the perfect elixir for attraction, wealth, healing, and spiritual clarity.</p>
          </motion.div>
          <div className="product-grid">
            {productsData.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="section testimonial-section" id="testimonials">
        <div className="container">
          <motion.div className="section-header" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
            <span className="eyebrow">What clients say</span>
            <h2>Glow-laced testimonials from seekers of truth.</h2>
          </motion.div>
          <TestimonialSlider testimonials={testimonialsData} />
        </div>
      </section>
      <section className="section contact-section" id="contact">
        <div className="container contact-layout">
          <div className="contact-visual">
            <div className="moon-orbit" />
            <div className="smoke-glow" />
            <img
              className="contact-illustration-img"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Crystal and candle" 
              loading="lazy"
            />
            <div className="contact-illustration">
              <div className="crystal" />
              <div className="candle" />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
