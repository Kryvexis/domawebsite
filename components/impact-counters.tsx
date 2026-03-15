'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, ChartColumnBig, HardHat, Sparkles } from 'lucide-react';

const counters = [
  { value: 240, suffix: '+', label: 'Interactive states', blurb: 'Hover, tap, drag, glow and reactive content moments.', icon: Sparkles },
  { value: 18, suffix: 'x', label: 'Visual depth layers', blurb: 'Layered gradients, steel textures, stickies and moving light.', icon: Activity },
  { value: 96, suffix: '%', label: 'Mobile readiness', blurb: 'Touch-friendly controls, stacked layouts and snap rails.', icon: HardHat },
  { value: 7, suffix: '', label: 'Demo zones', blurb: 'Hero, story, rail, dock, quote builder and more.', icon: ChartColumnBig },
];

function CountNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1100;
    const startedAt = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (value - start) * eased));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export function ImpactCounters() {
  const tape = useMemo(() => ['Motion', 'Reactive', 'Premium', 'Industrial', 'Mobile-first', 'Showpiece'], []);

  return (
    <section className="py-16 md:py-22">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="flex min-w-max border-b border-white/10 bg-white/[0.03] py-3"
          >
            {[...tape, ...tape].map((item, index) => (
              <div key={`${item}-${index}`} className="px-6 text-[11px] font-semibold uppercase tracking-[0.38em] text-zinc-400">
                {item}
              </div>
            ))}
          </motion.div>

          <div className="grid gap-4 p-4 sm:grid-cols-2 xl:grid-cols-4 md:p-6">
            {counters.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="steel-panel rounded-[1.6rem] p-5 md:p-6"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="rounded-2xl border border-orange-500/20 bg-orange-500/15 p-3">
                      <Icon className="h-5 w-5 text-orange-400" />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Demo stat</div>
                  </div>
                  <div className="text-4xl font-black text-orange-400 md:text-5xl">
                    <CountNumber value={item.value} suffix={item.suffix} />
                  </div>
                  <div className="mt-3 text-sm uppercase tracking-[0.18em] text-zinc-300">{item.label}</div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">{item.blurb}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
