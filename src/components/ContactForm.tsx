import { FormEvent, useState } from 'react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import GlowButton from './GlowButton';

const serviceOptions = ['Love Reading', 'Career Reading', 'Energy Reading', 'Soulmate Reading', 'Future Guidance', 'Custom Reading'];

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: serviceOptions[0], message: '' });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hello, my name is ${form.name}. I am interested in ${form.service}. ${form.message}`;
    window.open(buildWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="contact-card card glass-card">
      <span className="eyebrow">Contact</span>
      <h2>Reserve your reading or send a soulful enquiry.</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input value={form.name} onChange={(event) => handleChange('name', event.target.value)} placeholder="Your name" required />
        </label>
        <label>
          Phone Number
          <input value={form.phone} onChange={(event) => handleChange('phone', event.target.value)} placeholder="+91 99514 78032" required />
        </label>
        <label>
          Service Interested
          <select value={form.service} onChange={(event) => handleChange('service', event.target.value)}>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </label>
        <label>
          Message
          <textarea value={form.message} onChange={(event) => handleChange('message', event.target.value)} rows={4} placeholder="Share your intention or questions." />
        </label>
        <GlowButton type="submit">Send Enquiry via WhatsApp</GlowButton>
      </form>
      <div className="contact-info">
        <p>WhatsApp: <a href="https://wa.me/919951478032">+91 99514 78032</a></p>
        <p>Email: <a href="mailto:hello@moonlitoracle.com">hello@moonlitoracle.com</a></p>
        <p>Location: Virtual & Studio Sessions Available</p>
      </div>
    </div>
  );
}

export default ContactForm;
