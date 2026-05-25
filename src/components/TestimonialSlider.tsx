import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TestimonialItem } from '../data/testimonials';
import { fadeInUp } from '../animations/motionVariants';

interface TestimonialSliderProps {
  testimonials: TestimonialItem[];
}

function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const testimonial = testimonials[active];

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!paused) {
        setActive((current) => (current + 1) % testimonials.length);
      }
    }, 6000);

    return () => window.clearInterval(interval);
  }, [paused, testimonials.length]);

  const handlePrev = () => setActive((current) => (current - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setActive((current) => (current + 1) % testimonials.length);

  return (
    <div className="testimonial-slider">
      <motion.article className="card testimonial-card" initial="hidden" animate="show" variants={fadeInUp}>
        <div className="testimonial-avatar">
          <img src={testimonial.photo} alt={testimonial.name} loading="lazy" />
        </div>
        <div className="testimonial-copy">
          <div className="rating">{'★'.repeat(testimonial.rating)}</div>
          <p>{testimonial.review}</p>
          <strong>{testimonial.name}</strong>
        </div>
      </motion.article>
      <div className="testimonial-actions">
        <button type="button" className="control-button" onClick={handlePrev} aria-label="Previous testimonial">
          ‹
        </button>
        <button type="button" className="control-button toggle-button" onClick={() => setPaused((value) => !value)}>
          {paused ? 'Resume' : 'Auto-play'}
        </button>
        <button type="button" className="control-button" onClick={handleNext} aria-label="Next testimonial">
          ›
        </button>
      </div>
      <div className="slider-controls">
        {testimonials.map((item, index) => (
          <button key={item.id} className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Show ${item.name}`}>
            <span />
          </button>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;
