import { motion } from 'framer-motion';
import { SpellItem } from '../data/spells';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface SpellCardProps {
  spell: SpellItem;
}

function SpellCard({ spell }: SpellCardProps) {
  return (
    <motion.article whileHover={{ y: -8 }} className="card spell-card">
      <div className="spell-crest">✦</div>
      <h3>{spell.title}</h3>
      <p>{spell.description}</p>
      <div className="spell-meta">
        <span>{spell.duration}</span>
        <span>{spell.price}</span>
      </div>
      <a className="link-button" href={buildWhatsAppUrl(`I am interested in the ${spell.title}.`)} target="_blank" rel="noreferrer">
        Contact on WhatsApp
      </a>
    </motion.article>
  );
}

export default SpellCard;
