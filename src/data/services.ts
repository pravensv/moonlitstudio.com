export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
  linkLabel: string;
  imageUrl: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'love-reading',
    title: 'Love Reading',
    description: 'Reveal your relationship path, soulmate energy, and heart-centered guidance.',
    price: '₹5,999',
    icon: '♥',
    linkLabel: 'Book Love Reading',
    imageUrl: 'https://images.unsplash.com/photo-1513451713350-dee890297c4a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'career-reading',
    title: 'Career Reading',
    description: 'Navigate your professional direction with clarity, confidence, and cosmic support.',
    price: '₹6,799',
    icon: '♢',
    linkLabel: 'Book Career Reading',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'energy-reading',
    title: 'Energy Reading',
    description: 'Balance your aura, clear your chakras, and restore radiant purpose.',
    price: '₹5,199',
    icon: '✦',
    linkLabel: 'Book Energy Reading',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'soulmate-reading',
    title: 'Soulmate Reading',
    description: 'Discover the soul connection awaiting your next chapter of love.',
    price: '₹7,499',
    icon: '∞',
    linkLabel: 'Book Soulmate Reading',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'future-guidance',
    title: 'Future Guidance',
    description: 'Receive compassionate counsel for what lies ahead and your highest timeline.',
    price: '₹6,399',
    icon: '☾',
    linkLabel: 'Book Future Guidance',
    imageUrl: 'https://images.unsplash.com/photo-1514826786317-59744a7e0a6e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'custom-reading',
    title: 'Custom Reading',
    description: 'Tailored tarot guidance designed around your personal questions and intentions.',
    price: '₹8,999',
    icon: '✵',
    linkLabel: 'Book Custom Reading',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
  },
];
