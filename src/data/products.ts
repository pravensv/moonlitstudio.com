export interface ProductItem {
  id: string;
  title: string;
  description: string;
  details: string;
  price: string;
  image: string;
  imageUrl: string;
  promoText?: string;
  badge?: string;
}

export const productsData: ProductItem[] = [
  {
    id: 'attraction-oil',
    title: 'Attraction Oil',
    description: 'A sensual blend activated for magnetic intention and radiant appeal.',
    details: 'Use on pulse points or candles to invite love and confidence.',
    price: '₹2,199',
    image: '✨',
    imageUrl: 'https://images.unsplash.com/photo-1511974035430-5de47d3b95da?auto=format&fit=crop&w=900&q=80',
    badge: 'Best Seller',
    promoText: 'Limited time lunar offer: purchase now and receive a complimentary ritual guide for attraction.',
  },
  {
    id: 'protection-oil',
    title: 'Protection Oil',
    description: 'Guard your space with shimmering herbs, resin, and gold light.',
    details: 'Anoint your doors, crystals, and ritual tools for prayerful shielding.',
    price: '₹2,499',
    image: '🛡️',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    badge: 'Shield Offer',
    promoText: 'Protective ritual bundle: secure your home and aura with this premium elixir plus guided cleansing tips.',
  },
  {
    id: 'money-oil',
    title: 'Money Oil',
    description: 'Manifest abundance with rich botanicals and energizing prosperity magic.',
    details: 'Apply during money rituals or on workspace altars.',
    price: '₹1,899',
    image: '💰',
    imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80',
    badge: 'Wealth Boost',
    promoText: 'Prosperity special: use this oil for abundance rituals and get a bonus money-mindset affirmation sheet.',
  },
  {
    id: 'love-oil',
    title: 'Love Oil',
    description: 'Soft rose petals and moonlit amber to open the heart to devotion.',
    details: 'Use in bath spells, self-love rituals, or intention ceremonies.',
    price: '₹1,749',
    image: '🌹',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'healing-oil',
    title: 'Healing Oil',
    description: 'A restorative blend for emotional renewal, chakra cleansing, and peace.',
    details: 'Anoint temples, wrists and crystals in quiet healing practice.',
    price: '₹1,999',
    image: '🌿',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
];
