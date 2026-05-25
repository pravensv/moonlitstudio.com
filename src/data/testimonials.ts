export interface TestimonialItem {
  id: string;
  name: string;
  photo: string;
  review: string;
  rating: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'amaya',
    name: 'Amaya',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    review: 'The reading felt like a private ceremony. I left feeling deeply seen and supported.',
    rating: 5,
  },
  {
    id: 'noah',
    name: 'Noah',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80',
    review: 'A luminous experience with gentle guidance and clear direction for my next steps.',
    rating: 5,
  },
  {
    id: 'luna',
    name: 'Luna',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    review: 'The ritual oils are gorgeous and they feel like a precious part of my self-care practice.',
    rating: 5,
  },
];
