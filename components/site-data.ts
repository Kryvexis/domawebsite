import {
  Drill,
  Wrench,
  PaintBucket,
  Zap,
  Trees,
  ShieldCheck,
  Warehouse,
  Package,
  Truck,
  Headphones,
  Hammer,
  BadgePercent,
  ShoppingCart,
} from 'lucide-react';

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/specials', label: 'Specials' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const categories = [
  { name: 'Power Tools', icon: Drill, desc: 'Drills, grinders, saws and workshop essentials.', accent: '01' },
  { name: 'Plumbing', icon: Wrench, desc: 'Pipes, fittings, repair kits and valves.', accent: '02' },
  { name: 'Paint & Decor', icon: PaintBucket, desc: 'Interior, exterior and finishing products.', accent: '03' },
  { name: 'Electrical', icon: Zap, desc: 'Cables, switches, lighting and breakers.', accent: '04' },
  { name: 'Garden & Outdoor', icon: Trees, desc: 'Irrigation, landscaping and seasonal supplies.', accent: '05' },
  { name: 'Safety Gear', icon: ShieldCheck, desc: 'PPE, helmets, gloves and signage.', accent: '06' },
];

export const featuredProducts = [
  { title: 'Industrial Impact Drill', price: 'R1,299', badge: 'Best Seller' },
  { title: 'Premium Paint Bundle', price: 'R799', badge: 'Hot Deal' },
  { title: 'Plumber Pro Toolkit', price: 'R1,599', badge: 'Contractor Pick' },
  { title: 'LED Workshop Pack', price: 'R649', badge: 'New Arrival' },
];

export const services = [
  {
    title: 'Bulk Contractor Supply',
    desc: 'Fast recurring supply for teams, sites and maintenance departments.',
    icon: Warehouse,
  },
  {
    title: 'Quote Requests',
    desc: 'Quick quote flow for bigger builds, renovations and business orders.',
    icon: Package,
  },
  {
    title: 'Delivery & Pickup',
    desc: 'Same-day local delivery and convenient collection options.',
    icon: Truck,
  },
  {
    title: 'Customer Support',
    desc: 'Guidance for homeowners, technicians and trade buyers.',
    icon: Headphones,
  },
];

export const highlights = [
  { icon: Hammer, title: 'Built like a trade brand', desc: 'Sharper typography, darker materials and stronger visual mass.' },
  { icon: Truck, title: 'Made for movement', desc: 'Large motion blocks and cinematic spacing carry the story down the page.' },
  { icon: ShieldCheck, title: 'Premium without fluff', desc: 'The site feels expensive, but still practical and conversion-driven.' },
];

export const featureReasons = [
  { icon: ShoppingCart, title: 'Product-first design', desc: 'Built to make categories and featured items feel more valuable.' },
  { icon: Truck, title: 'Action-driven sections', desc: 'Quotes, calls, WhatsApp and delivery prompts are placed where attention peaks.' },
  { icon: BadgePercent, title: 'Promo-ready layout', desc: 'Specials, bundles and weekly offers fit naturally into the design system.' },
];
