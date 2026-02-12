export interface Invitation {
  id: string;
  name: string;
  style: string;
  imagePath: string;
}

export const invitations: Invitation[] = [
  {
    id: 'inv-01',
    name: 'Elegant Floral',
    style: 'Classic & Romantic',
    imagePath: '/assets/generated/invitation-01.dim_1200x800.png',
  },
  {
    id: 'inv-02',
    name: 'Modern Minimalist',
    style: 'Contemporary & Clean',
    imagePath: '/assets/generated/invitation-02.dim_1200x800.png',
  },
  {
    id: 'inv-03',
    name: 'Traditional Gold',
    style: 'Luxurious & Timeless',
    imagePath: '/assets/generated/invitation-03.dim_1200x800.png',
  },
  {
    id: 'inv-04',
    name: 'Garden Romance',
    style: 'Botanical & Fresh',
    imagePath: '/assets/generated/invitation-04.dim_1200x800.png',
  },
  {
    id: 'inv-05',
    name: 'Vintage Charm',
    style: 'Nostalgic & Elegant',
    imagePath: '/assets/generated/invitation-05.dim_1200x800.png',
  },
  {
    id: 'inv-06',
    name: 'Royal Heritage',
    style: 'Regal & Ornate',
    imagePath: '/assets/generated/invitation-06.dim_1200x800.png',
  },
  {
    id: 'inv-07',
    name: 'Rustic Bliss',
    style: 'Natural & Warm',
    imagePath: '/assets/generated/invitation-07.dim_1200x800.png',
  },
  {
    id: 'inv-08',
    name: 'Contemporary Art',
    style: 'Artistic & Bold',
    imagePath: '/assets/generated/invitation-08.dim_1200x800.png',
  },
];
