'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatTag({ label, x, y, delay }: { label: string; x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full border border-white/10 bg-zinc-900/70 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-zinc-300 backdrop-blur-md md:text-xs"
      style={{ left: x, top: y }}
      animate={{ y: [0, -16, 0], rotate: [0, 2, 0, -2, 0], scale: [1, 1.03, 1] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {label}
    </motion.div>
  );
}
