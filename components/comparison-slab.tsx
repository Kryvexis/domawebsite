'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, ScanSearch, Sparkles } from 'lucide-react';
import { Reveal } from './motion';

export function ComparisonSlab() {
  const [value, setValue] = useState(54);

  return (
    <section className="section-shell py-24 md:py-28">
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-orange-300">Reactive showcase slab</div>
            <h2 className="mt-3 text-4xl font-black leading-[0.95] md:text-6xl">Drag the split and watch the presentation transform.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
              This gives you a highly visual demo moment. It feels custom, interactive and polished while still staying lightweight and mobile friendly.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ['Live split', `${value}%`],
                ['Visual response', 'Instant'],
                ['Presentation factor', 'High'],
              ].map(([label, stat]) => (
                <div key={label} className="steel-panel rounded-2xl p-5">
                  <div className="text-2xl font-black text-orange-400">{stat}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.24em] text-zinc-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="steel-panel rounded-[2rem] p-4 md:p-6">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40" />
              <div className="grid min-h-[360px] md:min-h-[460px] grid-cols-1 md:grid-cols-2">
                <div className="relative border-b border-white/10 p-6 md:border-b-0 md:border-r">
                  <div className="text-xs uppercase tracking-[0.26em] text-zinc-500">Standard site</div>
                  <div className="mt-4 space-y-4">
                    <div className="h-14 rounded-2xl bg-white/5" />
                    <div className="h-36 rounded-[1.5rem] bg-white/5" />
                    <div className="h-20 rounded-[1.5rem] bg-white/5" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 rounded-[1.5rem] bg-white/5" />
                      <div className="h-24 rounded-[1.5rem] bg-white/5" />
                    </div>
                  </div>
                </div>
                <div className="relative p-6">
                  <div className="text-xs uppercase tracking-[0.26em] text-orange-300">Million-dollar demo</div>
                  <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4.6, repeat: Infinity }} className="mt-4 h-14 rounded-2xl border border-orange-500/20 bg-orange-500/10" />
                  <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5.1, repeat: Infinity }} className="mt-4 h-36 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_35%),rgba(255,255,255,0.04)]" />
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.8, repeat: Infinity }} className="mt-4 h-20 rounded-[1.5rem] border border-white/10 bg-white/5" />
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <motion.div whileHover={{ y: -8 }} className="h-24 rounded-[1.5rem] border border-orange-500/20 bg-orange-500/10" />
                    <motion.div whileHover={{ y: -8 }} className="h-24 rounded-[1.5rem] border border-white/10 bg-white/5" />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${value}%` }}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_25%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                <div className="absolute left-0 top-0 grid h-full w-[100vw] min-w-full grid-cols-1 md:grid-cols-2">
                  <div className="p-6 md:border-r md:border-white/10">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-orange-300"><ScanSearch className="h-4 w-4" /> Enhanced intro</div>
                    <div className="mt-4 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-2xl font-black uppercase">Reactive hero</div>
                    <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-lg font-semibold">Motion layers, hover glow and rich panels.</div>
                  </div>
                  <div className="hidden p-6 md:block">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-orange-300"><Sparkles className="h-4 w-4" /> Premium mode</div>
                    <div className="mt-4 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-2xl font-black uppercase">Show-off visuals</div>
                    <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-lg font-semibold">Interactive modules and cinematic motion.</div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 z-10" style={{ left: `calc(${value}% - 16px)` }}>
                <div className="h-full w-px bg-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.75)]" />
                <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-orange-500/30 bg-zinc-950 text-orange-300 shadow-[0_0_24px_rgba(249,115,22,0.25)]">
                  <ArrowLeftRight className="h-5 w-5" />
                </div>
              </div>
            </div>

            <input
              aria-label="Compare presentation modes"
              type="range"
              min={20}
              max={80}
              value={value}
              onChange={(event) => setValue(Number(event.target.value))}
              className="mt-5 h-2 w-full cursor-ew-resize accent-orange-500"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
