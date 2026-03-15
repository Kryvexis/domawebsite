'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      animate={{
        x: pos.x - 160,
        y: pos.y - 160,
        opacity: visible ? 0.5 : 0,
      }}
      transition={{ type: 'spring', damping: 28, stiffness: 180, mass: 0.6 }}
      className="pointer-events-none fixed left-0 top-0 z-30 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"
    />
  );
}
