import { buildWhatsAppUrl } from '../utils/whatsapp';

function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={buildWhatsAppUrl('Hello, I would like to connect with Moonlit Oracle Studio.')} target="_blank" rel="noreferrer" aria-label="WhatsApp contact">
      <span>WA</span>
    </a>
  );
}

export default WhatsAppFloat;
