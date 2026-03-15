'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BellRing, Box, Drill, Gauge, Layers3, ShieldCheck, Sparkles, Wrench, type LucideIcon } from 'lucide-react';
import { Reveal } from './motion';

type Segment = {
  id: string;
  name: string;
  kicker: string;
  title: string;
  body: string;
  stats: { label: string; value: string }[];
  cards: { title: string; detail: string; icon: LucideIcon }[];
};

const segments: Segment[] = [
  {
    id: 'trade',
    name: 'Trade Buyers',
    kicker: 'Interactive mode',
    title: 'Switch the whole experience depending on who is shopping.',
    body: 'This demo block changes content on click, uses hover-lifted cards, and gives the site a more agency-style interactive feel for presentations.',
    stats: [
      { label: 'Bulk account readiness', value: '98%' },
      { label: 'Fast quote turnaround', value: '< 2h' },
      { label: 'Priority dispatch lanes', value: '4' },
    ],
    cards: [
      { title: 'Site supply packs', detail: 'Pre-built bundles for fast moving teams.', icon: Box },
      { title: 'Heavy-duty tools', detail: 'Higher-ticket hero products for trade buyers.', icon: Drill },
      { title: 'Compliance and PPE', detail: 'Safety gear blocks with stronger visual weight.', icon: ShieldCheck },
    ],
  },
  {
    id: 'diy',
    name: 'DIY Shoppers',
    kicker: 'Interactive mode',
    title: 'The same site can pivot into inspiration and guided shopping.',
    body: 'Useful for showing how the design can become more friendly and discovery-led without losing the premium industrial look.',
    stats: [
      { label: 'Starter bundles', value: '24' },
      { label: 'Project guides', value: '12' },
      { label: 'Weekend promos', value: '7' },
    ],
    cards: [
      { title: 'Room refresh kits', detail: 'Paint, prep and tools combined in one journey.', icon: Sparkles },
      { title: 'Quick fixes', detail: 'Repair-first cards for plumbing and electrical.', icon: Wrench },
      { title: 'Easy compare', detail: 'Clear product differences for non-trade users.', icon: Layers3 },
    ],
  },
  {
    id: 'ops',
    name: 'Operations',
    kicker: 'Interactive mode',
    title: 'Or make it feel like a command center for a serious supply company.',
    body: 'This version leans into dashboards, alerts, quote flow and fulfilment visuals for a more enterprise-style presentation.',
    stats: [
      { label: 'Live stock alerts', value: '128' },
      { label: 'Delivery windows', value: '6' },
      { label: 'Order tracking states', value: '9' },
    ],
    cards: [
      { title: 'Performance panels', detail: 'Animated metric blocks and motion-driven summaries.', icon: Gauge },
      { title: 'Notification center', detail: 'Clickable updates and operational activity.', icon: BellRing },
      { title: 'Workflow cards', detail: 'Quote, confirm, dispatch and deliver experiences.', icon: Layers3 },
    ],
  },
];

export function InteractiveCommandCenter() {
  const [activeId, setActiveId] = useState(segments[0].id);
  const active = useMemo(() => segments.find((segment) => segment.id === activeId) ?? segments[0], [activeId]);

  return (
    <section className="section-shell py-28">
      <Reveal>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-orange-300">Interactive command center</div>
            <h2 className="mt-3 text-4xl font-black leading-[0.95] md:text-6xl">
              Click, drag and switch the presentation live.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
              This block is made specifically to impress someone in a demo. The content changes on click, the cards respond to hover, and the track can be dragged like a real product rail.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {segments.map((segment) => (
                <button
                  key={segment.id}
                  onClick={() => setActiveId(segment.id)}
                  className={`rounded-full px-4 py-3 text-sm uppercase tracking-[0.18em] transition ${
                    activeId === segment.id
                      ? 'bg-orange-500 font-bold text-zinc-950'
                      : 'border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10'
                  }`}
                >
                  {segment.name}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {active.stats.map((stat) => (
                <motion.div key={stat.label} layout className="steel-panel rounded-2xl p-5">
                  <div className="text-3xl font-black text-orange-400">{stat.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div layout className="steel-panel overflow-hidden rounded-[2rem] p-6">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-orange-300">{active.kicker}</div>
                <div className="mt-2 text-3xl font-black uppercase">{active.title}</div>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-zinc-300">
                Live demo mode
              </div>
            </div>
            <p className="mt-5 max-w-2xl text-zinc-300">{active.body}</p>

            <motion.div drag="x" dragConstraints={{ left: -220, right: 0 }} className="mt-8 flex cursor-grab gap-4 active:cursor-grabbing">
              {active.cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    whileHover={{ y: -10, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                    whileTap={{ scale: 0.98 }}
                    className="min-w-[260px] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
                      <Icon className="h-7 w-7 text-orange-400" />
                    </div>
                    <div className="text-2xl font-black">{card.title}</div>
                    <p className="mt-3 text-zinc-300">{card.detail}</p>
                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                      Open module <ArrowRight className="h-4 w-4" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
