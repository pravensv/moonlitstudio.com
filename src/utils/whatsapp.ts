export const buildWhatsAppUrl = (text: string) => {
  const phone = '919951478032';
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${encoded}`;
};

export const prefillMessage = (service = 'Tarot Reading') =>
  `Hello! I would love to book a ${service}. Please let me know available times and pricing.`;
