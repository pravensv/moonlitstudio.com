export interface SpellItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
}

export const spellsData: SpellItem[] = [
  {
    id: 'love-spell',
    title: 'Love Spell',
    description: 'A heart-opening rite to invite romance and deepen connections.',
    duration: '3 days',
    price: '₹8,999',
  },
  {
    id: 'protection-spell',
    title: 'Protection Spell',
    description: 'A powerful barrier ritual to shield you from harm and negativity.',
    duration: '48 hours',
    price: '₹8,499',
  },
  {
    id: 'success-spell',
    title: 'Success Spell',
    description: 'Magical alignment for career wins, confidence, and opportunity.',
    duration: '3 days',
    price: '₹9,999',
  },
  {
    id: 'cleansing-ritual',
    title: 'Cleansing Ritual',
    description: 'Purify your field and space with sacred smoke and lunar intent.',
    duration: '1 hour',
    price: '₹7,299',
  },
  {
    id: 'energy-healing',
    title: 'Energy Healing',
    description: 'A gentle session to restore balance, calm, and inner strength.',
    duration: '75 minutes',
    price: '₹10,499',
  },
];
