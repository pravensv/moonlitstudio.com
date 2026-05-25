import { motion } from 'framer-motion';
import { ServiceItem } from '../data/services';
import { buildWhatsAppUrl, prefillMessage } from '../utils/whatsapp';

interface ServiceCardProps {
  service: ServiceItem;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.article whileHover={{ y: -6 }} className="card service-card">
      <img className="card-media" src={service.imageUrl} alt={service.title} loading="lazy" />
      <div className="card-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="card-actions">
        <span className="price">{service.price}</span>
        <a className="link-button" href={buildWhatsAppUrl(prefillMessage(service.title))} target="_blank" rel="noreferrer">
          {service.linkLabel}
        </a>
      </div>
    </motion.article>
  );
}

export default ServiceCard;
