'use client';

import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import type { ReactNode, MouseEvent } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function MagneticLink({ href, children, className = '' }: Props) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 18, mass: 0.24 });
  const y = useSpring(my, { stiffness: 180, damping: 18, mass: 0.24 });
  const glowX = useMotionValue(120);
  const glowY = useMotionValue(40);
  const background = useMotionTemplate`radial-gradient(120px circle at ${glowX}px ${glowY}px, rgba(255,255,255,0.18), rgba(255,255,255,0) 70%)`;

  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;
    glowX.set(px);
    glowY.set(py);
    mx.set((px - rect.width / 2) * 0.12);
    my.set((py - rect.height / 2) * 0.12);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div style={{ x, y }} className="relative inline-flex">
      <motion.div aria-hidden style={{ background }} className="pointer-events-none absolute inset-0 rounded-[inherit]" />
      <Link href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
