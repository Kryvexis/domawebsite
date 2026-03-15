'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Gauge, Layers2, ShieldCheck, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';

const modes = [
  {
    id: 'contractor',
    label: 'Contractor Mode',
    title: 'Fast-moving supply flow for heavy buyers.',
    body: 'Everything becomes direct and utilitarian: big CTAs, fast stock cues, quote prompts and delivery confidence.',
    points: ['Fast quote routes', 'Job-site urgency', 'Trade-first messaging'],
    icon: Gauge,
  },
  {
    id: 'showroom',
    label: 'Showroom Mode',
    title: 'Polished product discovery for premium display.',
    body: 'Featured cards, motion reveals and richer visual framing make the site feel expensive and presentation-ready.',
    points: ['Hero product spotlight', 'Animated details', 'High-end visual hierarchy'],
    icon: Sparkles,
  },
  {
    id: 'trust',
    label: 'Trust Mode',
    title: 'Industrial confidence built into every section.',
    body: 'Testimonials, service guarantees, delivery coverage and category depth can be woven into interactive layers.',
    points: ['Delivery trust cues', 'Service promise blocks', 'Specification emphasis'],
    icon: ShieldCheck,
  },
  {
    id: 'story',
    label: 'Story Mode',
    title: 'Big narrative bands that make the site feel custom.',
    body: 'Scroll-responsive sections act like a presentation deck, guiding attention from first impact to final CTA.',
    points: ['Sticky storytelling', 'Immersive transitions', 'Large-scale visual moments'],
    icon: Layers2,
  },
] as const;

export function ShowcaseLab() {
  const [active, setActive] = useState<(typeof modes)[number]['id']>('contractor');
  const current = useMemo(() => modes.find((mode) => mode.id === active) ?? modes[0], [active]);
  const Icon = current.icon;

  return (
    <section className="section-shell py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="text-sm uppercase tracking-[0.35em] text-orange-300">Interactive lab</div>
          <h2 className="mt-3 text-4xl font-black leading-[0.95] md:text-6xl">Switch the site personality and watch the presentation change.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
            This makes the concept feel alive in a meeting. Different interaction modes show how the same codebase can lean toward trade, showroom, storytelling or trust.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {modes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActive(mode.id)}
                className={`rounded-full border px-4 py-2 text-sm uppercase tracking-[0.18em] transition ${active === mode.id ? 'border-orange-500/40 bg-orange-500 text-zinc-950' : 'border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10'}`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="steel-panel overflow-hidden rounded-[2.2rem] p-6">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-orange-300">Current presentation mode</div>
              <div className="mt-2 text-3xl font-black uppercase">{current.label}</div>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
              <Icon className="h-8 w-8 text-orange-400" />
            </div>
          </div>

          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <div className="rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_30%)] p-6">
              <div className="text-3xl font-black uppercase">{current.title}</div>
              <p className="mt-4 text-zinc-300">{current.body}</p>
              <div className="mt-6 grid gap-3">
                {current.points.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-zinc-900/75 px-4 py-4 text-sm uppercase tracking-[0.16em] text-zinc-200">
                    {point}
                  </div>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-orange-300">
                Presentation state updated <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
