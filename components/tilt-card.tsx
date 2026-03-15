'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import type { MouseEvent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  glare?: boolean;
};

export function TiltCard({ children, className = '', glare = true }: Props) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 16 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 16 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const bg = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(249,115,22,0.18), rgba(249,115,22,0.03) 24%, rgba(255,255,255,0.02) 52%, transparent 70%)`;

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    glowX.set(px * 100);
    glowY.set(py * 100);
    rotateX.set((0.5 - py) * 10);
    rotateY.set((px - 0.5) * 10);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.01, y: -4 }}
      className={className}
    >
      {glare ? <motion.div aria-hidden style={{ background: bg }} className="pointer-events-none absolute inset-0 rounded-[inherit]" /> : null}
      <div className="relative h-full" style={{ transform: 'translateZ(22px)' }}>
        {children}
      </div>
    </motion.div>
  );
}
