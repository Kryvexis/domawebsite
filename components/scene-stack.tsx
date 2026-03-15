'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Layers3, MousePointerClick, Smartphone, Sparkles } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

const scenes = [
  {
    id: 'hero',
    tag: 'Hero scene',
    title: 'Pinned-feel campaign section',
    body: 'Use this style to create the sense that the first act of the homepage is unfolding in chapters as the user scrolls.',
    bullets: ['Massive typography', 'Slow parallax surfaces', 'Strong CTA framing'],
  },
  {
    id: 'products',
    tag: 'Product scene',
    title: 'Horizontal rail with live spotlight',
    body: 'A wide band that can be swiped on touch and navigated on desktop, with the active slab updating a detail area live.',
    bullets: ['Touch-safe scrolling', 'Clickable spotlight state', 'Live detail sync'],
  },
  {
    id: 'mobile',
    tag: 'Mobile scene',
    title: 'Responsive motion without breaking layout',
    body: 'The cards stack neatly, sticky effects only appear where they help, and nothing depends purely on hover to make sense.',
    bullets: ['Touch targets', 'Stacked hierarchy', 'No hover dependence'],
  },
];

const detailBadges: Array<{
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}> = [
  { label: 'Layered', Icon: Layers3 },
  { label: 'Clickable', Icon: MousePointerClick },
  { label: 'Mobile', Icon: Smartphone },
  { label: 'Polished', Icon: Sparkles },
];

export function SceneStack() {
  const [activeId, setActiveId] = useState(scenes[0].id);
  const active = useMemo(
    () => scenes.find((scene) => scene.id === activeId) ?? scenes[0],
    [activeId]
  );

  return (
    <section className="section-shell py-24 md:py-28">
      <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
        <div>
          <div className="text-sm uppercase tracking-[0.35em] text-orange-300">
            Scene stack
          </div>
          <h2 className="mt-3 text-4xl font-black uppercase leading-[0.94] md:text-6xl">
            Big layered scenes that feel expensive on every page.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
            This block is built for presenting the concept. Click through the scenes to
            show different directions, then let the cards and detail panel animate
            between states.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {scenes.map((scene, index) => (
              <motion.button
                key={scene.id}
                onClick={() => setActiveId(scene.id)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.985 }}
                className={`relative overflow-hidden rounded-[1.8rem] border p-5 text-left transition ${
                  activeId === scene.id
                    ? 'border-orange-500/40 bg-orange-500/10'
                    : 'border-white/10 bg-white/[0.04]'
                }`}
              >
                <div className="text-[11px] uppercase tracking-[0.3em] text-orange-300">
                  {scene.tag}
                </div>
                <div className="mt-4 text-2xl font-black uppercase leading-[0.96]">
                  {scene.title}
                </div>
                <div className="absolute bottom-3 right-4 text-6xl font-black text-white/5">
                  0{index + 1}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.985 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="steel-panel rounded-[2rem] p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] uppercase tracking-[0.34em] text-orange-300">
                Active direction
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-zinc-300">
                Demo interaction
              </div>
            </div>

            <div className="mt-5 text-3xl font-black uppercase leading-[0.95] md:text-5xl">
              {active.title}
            </div>

            <p className="mt-4 text-zinc-300 md:text-lg">{active.body}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {active.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-4 text-sm uppercase tracking-[0.16em] text-zinc-200"
                >
                  {bullet}
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              {detailBadges.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <Icon className="h-5 w-5 text-orange-400" />
                  <div className="mt-3 text-xs uppercase tracking-[0.24em] text-zinc-300">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
              Presentation-ready showcase <ArrowUpRight className="h-4 w-4" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}