'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layers3, Sparkles, Smartphone, Wand2 } from 'lucide-react';

const items = [
  { href: '/', label: 'Intro', icon: Layers3 },
  { href: '/products', label: 'Motion', icon: Sparkles },
  { href: '/contact', label: 'Mobile', icon: Smartphone },
  { href: '/specials', label: 'Showcase', icon: Wand2 },
];

export function FloatingDemoDock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-[720px] -translate-x-1/2 px-1 sm:bottom-6"
    >
      <div className="rounded-[1.6rem] border border-white/10 bg-zinc-950/80 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/70">
        <div className="grid grid-cols-4 gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="group rounded-[1.1rem] border border-white/5 bg-white/[0.03] px-2 py-3 text-center text-zinc-300 transition hover:-translate-y-0.5 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-white sm:px-4"
              >
                <div className="flex items-center justify-center">
                  <Icon className="h-4 w-4 text-orange-400 transition group-hover:scale-110" />
                </div>
                <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] sm:text-[11px]">{item.label}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
