'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { type ReactNode } from 'react';

export function MagneticButton({ href, children, variant = 'primary', className = '' }: { href: string; children: ReactNode; variant?: 'primary' | 'ghost'; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 });

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.14);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.14);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-flex"
    >
      <Link
        href={href}
        className={`inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-semibold transition ${
          variant === 'primary'
            ? 'bg-orange-500 text-zinc-950 shadow-glow hover:bg-orange-400'
            : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
        } ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
