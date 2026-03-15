'use client';

import { motion } from 'framer-motion';
import { Drill, Layers3, Radar, Sparkles } from 'lucide-react';
import { useMemo, useState, type ComponentType } from 'react';

const storySteps: Array<{ id: string; title: string; body: string; icon: ComponentType<{ className?: string }>; metric: string }> = [
  {
    id: 'surface',
    title: 'Massive visual surfaces',
    body: 'Oversized panels, deep contrast and strong spacing create the expensive first impression before the user reads a single word.',
    icon: Layers3,
    metric: 'Hero depth +82%',
  },
  {
    id: 'motion',
    title: 'Mechanical motion language',
    body: 'Movement is layered like machinery: slide, lock, hover, glow and reveal. It feels precise instead of decorative.',
    icon: Radar,
    metric: 'Motion richness +4 layers',
  },
  {
    id: 'products',
    title: 'Showroom product interaction',
    body: 'Products respond to clicks, spotlight states and hover transitions so the whole site behaves more like a premium sales tool.',
    icon: Drill,
    metric: 'Engagement states x12',
  },
  {
    id: 'wow',
    title: 'Agency-level polish',
    body: 'Cursor glow, magnetic CTAs, animated rails, sticky scenes and cinematic bands turn the concept into something you can show off with confidence.',
    icon: Sparkles,
    metric: 'Show-off factor maxed',
  },
];

export function ScrollStory() {
  const [active, setActive] = useState(storySteps[0].id);
  const current = useMemo(() => storySteps.find((step) => step.id === active) ?? storySteps[0], [active]);
  const CurrentIcon = current.icon;

  return (
    <section className="section-shell py-28">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <div className="text-sm uppercase tracking-[0.35em] text-orange-300">Scroll story</div>
          <h2 className="mt-3 max-w-xl text-4xl font-black leading-[0.95] md:text-6xl">Sections that feel engineered as you move down the page.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
            This block is designed to mimic premium scrollytelling. Click each stage, then keep scrolling to see the panels stack underneath it.
          </p>

          <motion.div layout className="steel-panel mt-8 rounded-[2rem] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Current focus</div>
                <div className="mt-2 text-2xl font-black uppercase">{current.title}</div>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
                <CurrentIcon className="h-7 w-7 text-orange-400" />
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-zinc-900/80 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-orange-300">Motion readout</div>
              <div className="mt-2 text-lg font-semibold">{current.metric}</div>
              <p className="mt-3 text-zinc-300">{current.body}</p>
            </div>
          </motion.div>
        </div>

        <div className="space-y-5">
          {storySteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.id === active;
            return (
              <motion.button
                key={step.id}
                type="button"
                onClick={() => setActive(step.id)}
                whileHover={{ y: -6 }}
                className={`steel-panel w-full rounded-[2rem] p-7 text-left transition ${isActive ? 'border-orange-500/40 bg-orange-500/[0.08]' : ''}`}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
                      <Icon className="h-7 w-7 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Stage 0{index + 1}</div>
                      <div className="mt-2 text-2xl font-black uppercase">{step.title}</div>
                      <p className="mt-3 max-w-xl leading-relaxed text-zinc-300">{step.body}</p>
                    </div>
                  </div>
                  <div className="text-sm uppercase tracking-[0.2em] text-orange-300">{isActive ? 'Active' : 'Preview'}</div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
