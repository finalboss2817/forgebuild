
import { PCBuild } from './types';

export const BUILDS: PCBuild[] = [
  {
    id: 'entry-office-1',
    title: 'The Spark',
    description: 'Perfect for home office, online classes, and daily productivity.',
    priceBracket: 25000,
    usage: 'Office',
    image: 'https://picsum.photos/seed/pc1/800/600',
    totalPrice: 24500,
    components: [
      { category: 'CPU', name: 'Intel Core i3-12100', price: 9500 },
      { category: 'Mobo', name: 'H610M Motherboard', price: 6200 },
      { category: 'RAM', name: '8GB DDR4 3200MHz', price: 2100 },
      { category: 'Storage', name: '500GB NVMe SSD', price: 3200 },
      { category: 'PSU', name: '450W Bronze PSU', price: 2500 },
      { category: 'Case', name: 'Standard Micro ATX Cabinet', price: 1000 },
    ]
  },
  {
    id: 'mid-gaming-1',
    title: 'The Vanguard',
    description: 'Crush 1080p gaming with high refresh rates. Ideal for eSports.',
    priceBracket: 65000,
    usage: 'Gaming',
    image: 'https://picsum.photos/seed/pc2/800/600',
    totalPrice: 64800,
    components: [
      { category: 'CPU', name: 'AMD Ryzen 5 5600', price: 11500 },
      { category: 'GPU', name: 'NVIDIA RTX 3060 12GB', price: 25500 },
      { category: 'Mobo', name: 'B550M Motherboard', price: 9200 },
      { category: 'RAM', name: '16GB (8x2) DDR4 3600MHz', price: 4200 },
      { category: 'Storage', name: '1TB Gen4 NVMe SSD', price: 6500 },
      { category: 'PSU', name: '550W 80+ Gold', price: 4800 },
      { category: 'Case', name: 'MSI Forge M100R', price: 3100 },
    ]
  },
  {
    id: 'high-creative-1',
    title: 'The Prism',
    description: 'A beast for 4K video editing and smooth 1440p gaming.',
    priceBracket: 120000,
    usage: 'Creative',
    image: 'https://picsum.photos/seed/pc3/800/600',
    totalPrice: 119500,
    components: [
      { category: 'CPU', name: 'Intel Core i7-13700K', price: 36000 },
      { category: 'GPU', name: 'NVIDIA RTX 4070 12GB', price: 54000 },
      { category: 'Mobo', name: 'Z790 DDR5 Motherboard', price: 18000 },
      { category: 'RAM', name: '32GB (16x2) DDR5 6000MHz', price: 11500 },
      { category: 'Storage', name: '2TB Gen4 NVMe SSD', price: 12000 },
      { category: 'Cooler', name: '240mm AIO Liquid Cooler', price: 7500 },
      { category: 'PSU', name: '750W 80+ Gold Modular', price: 8500 },
    ]
  },
  {
    id: 'enthusiast-1',
    title: 'The Forge Master',
    description: 'Ultimate performance. 4K Ultra gaming and heavy rendering.',
    priceBracket: 200000,
    usage: 'Workstation',
    image: 'https://picsum.photos/seed/pc4/800/600',
    totalPrice: 198000,
    components: [
      { category: 'CPU', name: 'AMD Ryzen 9 7950X', price: 52000 },
      { category: 'GPU', name: 'NVIDIA RTX 4080 Super', price: 98000 },
      { category: 'Mobo', name: 'X670E Motherboard', price: 28000 },
      { category: 'RAM', name: '64GB (32x2) DDR5 6000MHz', price: 21000 },
      { category: 'Storage', name: '2TB Gen5 NVMe SSD', price: 18000 },
      { category: 'Cooler', name: '360mm AIO Premium', price: 14000 },
      { category: 'PSU', name: '1000W 80+ Platinum', price: 16000 },
    ]
  }
];
