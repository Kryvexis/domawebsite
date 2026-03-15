'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Box, Cable, Drill, Flame, ShieldCheck, Sparkles, Truck } from 'lucide-react';

const slides = [
  {
    id: 'tools',
    title: 'Contractor tool wall',
    tag: 'Power zone',
    accent: 'R1,299',
    copy: 'A hero-driven product wall with spotlight states, light sweeps and a richer product story for higher-ticket gear.',
    bullets: ['Interactive spotlight', 'Touch-friendly rail', 'High-margin product framing'],
    icon: Drill,
  },
  {
    id: 'cables',
    title: 'Electrical systems lane',
    tag: 'Trade stock',
    accent: '240 SKUs',
    copy: 'Use it to show dense categories cleanly with progressive disclosure, hover reveals and guided comparisons.',
    bullets: ['Spec-first display', 'Clean product density', 'Fast compare states'],
    icon: Cable,
  },
  {
    id: 'delivery',
    title: 'Dispatch and delivery feed',
    tag: 'Operations',
    accent: 'Same day',
    copy: 'A more enterprise-feeling surface for service levels, delivery windows and live operational confidence.',
    bullets: ['Status overlays', 'Interactive delivery cards', 'Operations-led trust'],
    icon: Truck,
  },
  {
    id: 'safety',
    title: 'Safety and compliance block',
    tag: 'Protection',
    accent: '98% ready',
    copy: 'An ideal section for PPE, signage, bundles and professional reassurance that feels expensive and deliberate.',
    bullets: ['Strong badge language', 'Bold reassurance copy', 'Bundle-first upsell'],
    icon: ShieldCheck,
  },
];

export function HorizonBand() {
  const [activeId, setActiveId] = useState(slides[0].id);
  const active = useMemo(() => slides.find((slide) => slide.id === activeId) ?? slides[0], [activeId]);

  return (
    <section className="border-y border-white/5 bg-zinc-900/35 py-24 md:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="text-sm uppercase tracking-[0.35em] text-orange-300">Horizontal demo band</div>
          <h2 className="mt-3 text-4xl font-black uppercase leading-[0.95] md:text-6xl">A scrollable showcase built for the pitch moment.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
            Swipe it on mobile, drag through it on desktop, then click any slab to update the live detail panel. This is the kind of interaction that makes the site feel custom-built.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {slides.map((slide) => (
              <button
                key={slide.id}
                onClick={() => setActiveId(slide.id)}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${activeId === slide.id ? 'bg-orange-500 font-bold text-zinc-950' : 'border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10'}`}
              >
                {slide.tag}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="-mx-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-4 snap-x snap-mandatory">
              {slides.map((slide, index) => {
                const Icon = slide.icon;
                const selected = slide.id === activeId;
                return (
                  <motion.button
                    key={slide.id}
                    onClick={() => setActiveId(slide.id)}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.985 }}
                    className={`group relative min-h-[360px] w-[80vw] max-w-[360px] snap-center overflow-hidden rounded-[2rem] border p-6 text-left transition md:min-h-[420px] ${selected ? 'border-orange-500/40 bg-orange-500/10' : 'border-white/10 bg-white/[0.04]'}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.16),transparent_32%)] opacity-70" />
                    <div className="absolute bottom-4 right-4 text-[5rem] font-black text-white/5">0{index + 1}</div>
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-center justify-between gap-4">
                        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/15 p-3">
                          <Icon className="h-6 w-6 text-orange-400" />
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.28em] text-zinc-400">{slide.tag}</div>
                      </div>
                      <div className="mt-8 text-3xl font-black uppercase leading-[0.95]">{slide.title}</div>
                      <p className="mt-4 max-w-sm text-zinc-300">{slide.copy}</p>
                      <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                        <div>
                          <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Hero stat</div>
                          <div className="mt-2 text-3xl font-black text-orange-400">{slide.accent}</div>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-zinc-400 transition group-hover:text-orange-300" />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="steel-panel rounded-[2rem] p-6 md:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-orange-300">Live detail panel</div>
                  <div className="mt-2 text-3xl font-black uppercase md:text-4xl">{active.title}</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-zinc-300">
                  {active.accent}
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-zinc-300 md:text-lg">{active.copy}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {active.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-4 text-sm uppercase tracking-[0.16em] text-zinc-200">
                    {bullet}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {[Box, Flame, Sparkles].map((Icon, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300">
                    <Icon className="h-4 w-4 text-orange-400" /> Demo-ready interaction
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
