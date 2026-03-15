'use client';

import { motion } from 'framer-motion';
import { Building2, HardHat, Rocket, Shield } from 'lucide-react';
import { useState } from 'react';

const milestones = [
  { year: '2014', title: 'Foundation', body: 'A story block like this makes the business feel established and rooted in real trade history.', icon: Building2 },
  { year: '2018', title: 'Contractor Growth', body: 'Use this state to show larger supply capacity, deliveries and stronger category depth.', icon: HardHat },
  { year: '2022', title: 'Premium Upgrade', body: 'The visual direction shifts from ordinary business site to intentional premium hardware brand.', icon: Rocket },
  { year: 'Today', title: 'Trusted Local Presence', body: 'Modern trust cues, service confidence and polished product storytelling make the site feel current.', icon: Shield },
];

export function AboutTimeline() {
  const [active, setActive] = useState(0);
  const current = milestones[active];
  const Icon = current.icon;

  return (
    <section className="section-shell pb-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="steel-panel rounded-[2rem] p-8">
          <div className="text-sm uppercase tracking-[0.3em] text-orange-300">Story timeline</div>
          <div className="mt-3 text-4xl font-black uppercase">Interactive brand milestones.</div>
          <div className="mt-6 space-y-3">
            {milestones.map((milestone, index) => (
              <button
                key={milestone.year}
                type="button"
                onClick={() => setActive(index)}
                className={`w-full rounded-2xl border px-4 py-4 text-left transition ${active === index ? 'border-orange-500/40 bg-orange-500/[0.08]' : 'border-white/10 bg-zinc-900/70 hover:bg-white/5'}`}
              >
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{milestone.year}</div>
                <div className="mt-2 font-semibold uppercase tracking-[0.12em]">{milestone.title}</div>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="steel-panel rounded-[2rem] p-8">
          <motion.div key={current.year} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
              <Icon className="h-8 w-8 text-orange-400" />
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.28em] text-orange-300">{current.year}</div>
            <div className="mt-3 text-4xl font-black uppercase">{current.title}</div>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">{current.body}</p>
            <div className="mt-8 h-52 rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_30%)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
