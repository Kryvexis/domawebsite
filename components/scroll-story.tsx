'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Boxes, PackageCheck, ShieldCheck, Truck, type LucideIcon } from 'lucide-react';

const phases: Array<{ title: string; body: string; icon: LucideIcon; metric: string }> = [
  {
    title: 'Discover the right loadout',
    body: 'Big hero products, bold categories and guided bundles animate into focus as the visitor moves down the page.',
    icon: Boxes,
    metric: '01',
  },
  {
    title: 'Build the quote in real time',
    body: 'Interactive selection panels, live totals and click-responsive modules make the site feel custom-built and premium.',
    icon: PackageCheck,
    metric: '02',
  },
  {
    title: 'Confirm and dispatch fast',
    body: 'Delivery status, dispatch bands and trade-first action blocks make the experience feel operational and high trust.',
    icon: Truck,
    metric: '03',
  },
  {
    title: 'Keep buyers confident',
    body: 'Support, warranties, stock certainty and service reassurance appear with strong industrial visual language.',
    icon: ShieldCheck,
    metric: '04',
  },
];

export function ScrollStory() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const next = Math.min(phases.length - 1, Math.floor(value * phases.length));
    setActiveIndex(next);
  });

  const active = phases[activeIndex] ?? phases[0];

  return (
    <section ref={ref} className="relative border-y border-white/5 bg-zinc-900/40 py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="text-sm uppercase tracking-[0.35em] text-orange-300">Scroll story system</div>
          <h2 className="mt-3 text-4xl font-black leading-[0.95] md:text-6xl">A sticky narrative that feels engineered, not generic.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
            This section is built to impress on desktop and remain clean on mobile. Each stage snaps visually into the story while the right panel updates like a live industrial dashboard.
          </p>

          <div className="steel-panel relative mt-8 hidden min-h-[320px] overflow-hidden rounded-[2rem] p-8 lg:block">
            <div className="absolute bottom-6 right-6 text-[8rem] font-black text-white/5">{active.metric}</div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
              <active.icon className="h-8 w-8 text-orange-400" />
            </div>
            <div className="max-w-md text-3xl font-black uppercase">{active.title}</div>
            <p className="mt-4 max-w-md text-zinc-300">{active.body}</p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
              Premium motion system <ArrowRight className="h-4 w-4" />
            </div>
            <div className="absolute bottom-0 left-0 top-0 w-px bg-white/10" />
            <motion.div style={{ height: progressHeight }} className="absolute left-0 top-0 w-px bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {phases.map((phase, index) => {
            const start = index / phases.length;
            const end = (index + 1) / phases.length;
            const opacity = useTransform(scrollYProgress, [start, start + 0.08, end - 0.08, end], [0.35, 1, 1, 0.35]);
            const y = useTransform(scrollYProgress, [start, end], [36, -18]);
            return (
              <motion.div key={phase.metric} style={{ opacity, y }} className="steel-panel rounded-[2rem] p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
                      <phase.icon className="h-7 w-7 text-orange-400" />
                    </div>
                    <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Stage {phase.metric}</div>
                  </div>
                  <div className="text-4xl font-black text-white/10">{phase.metric}</div>
                </div>
                <div className="text-2xl font-black uppercase md:text-3xl">{phase.title}</div>
                <p className="mt-4 max-w-2xl text-zinc-300 md:text-lg">{phase.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
