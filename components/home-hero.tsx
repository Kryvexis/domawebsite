'use client';

import Link from 'next/link';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MagneticLink } from './magnetic-link';
import { FloatTag } from './motion';

const floatingBadges = [
  { label: 'Forged', x: '7%', y: '18%', delay: 0 },
  { label: 'Steel', x: '82%', y: '15%', delay: 0.7 },
  { label: 'Trade', x: '12%', y: '74%', delay: 1.1 },
  { label: 'Industrial', x: '86%', y: '58%', delay: 1.8 },
  { label: 'Supply', x: '48%', y: '10%', delay: 1.4 },
];

export function HomeHero() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  const heroY = useTransform(progress, [0, 0.2], [0, 170]);
  const heroScale = useTransform(progress, [0, 0.2], [1, 1.08]);
  const textY = useTransform(progress, [0, 0.18], [0, -90]);
  const beamWidth = useTransform(progress, [0, 0.25], ['10%', '82%']);

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-orange-500" />
      <section className="relative flex min-h-screen items-center overflow-hidden bg-grid bg-[size:64px_64px] pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.06),transparent_18%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />

        {floatingBadges.map((tool) => (
          <FloatTag key={tool.label} {...tool} />
        ))}

        <div className="section-shell relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div style={{ y: textY }}>
            <motion.div style={{ width: beamWidth }} className="orange-line mb-6 h-1.5 rounded-full bg-orange-500" />
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-orange-200">
              <span className="h-2 w-2 rounded-full bg-orange-400" /> Premium industrial concept
            </div>
            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl xl:text-8xl">
              Forged for <span className="text-orange-400">builders, contractors</span> and serious work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              A darker, more industrial hardware store experience with steel-panel styling, cinematic spacing, layered scroll motion and bold full-width sections that feel stronger and more expensive.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <MagneticLink href="/products" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 font-semibold uppercase tracking-[0.12em] text-zinc-950 shadow-2xl shadow-orange-500/20 transition hover:bg-orange-400">
                Explore Products <ArrowRight className="h-4 w-4" />
              </MagneticLink>
              <MagneticLink href="/services" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold uppercase tracking-[0.12em] transition hover:bg-white/10">
                Trade Services
              </MagneticLink>
            </div>
            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                ['18K+', 'Store items & materials'],
                ['Same Day', 'Quotes & local dispatch'],
                ['Trade Ready', 'Built for pro buyers'],
              ].map(([a, b]) => (
                <div key={a} className="steel-panel rounded-2xl bg-zinc-900/70 px-5 py-4">
                  <div className="text-2xl font-black text-orange-400">{a}</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.12em] text-zinc-300">{b}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ y: heroY, scale: heroScale }} className="relative">
            <div className="absolute -inset-6 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="hero-metal relative overflow-hidden rounded-[2rem] border border-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="relative grid grid-cols-2 gap-4">
                <div className="steel-panel min-h-[200px] rounded-[1.5rem] bg-zinc-950/90 p-5 flex flex-col justify-between">
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Featured Loadout</div>
                  <div>
                    <div className="text-2xl font-bold uppercase">Contractor Drill Set</div>
                    <div className="mt-2 text-lg font-semibold text-orange-400">R1,299</div>
                  </div>
                </div>
                <div className="min-h-[200px] rounded-[1.5rem] bg-orange-500 p-5 text-zinc-950 flex flex-col justify-between">
                  <div className="text-xs font-black uppercase tracking-[0.25em]">Field Rated</div>
                  <div className="text-5xl font-black">4.9</div>
                  <div className="text-sm uppercase tracking-[0.12em]">Trusted by contractors</div>
                </div>
                <div className="steel-panel min-h-[150px] rounded-[1.5rem] bg-gradient-to-r from-zinc-950 to-zinc-900 p-6">
                  <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Fast Quote Flow</div>
                  <div className="mt-3 text-3xl font-black uppercase">Big builds. Fast pricing.</div>
                </div>
                <div className="steel-panel min-h-[150px] rounded-[1.5rem] p-6 flex flex-col justify-between">
                  <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Dispatch</div>
                  <div className="text-3xl font-black uppercase">Same Day</div>
                </div>
                <div className="col-span-2 min-h-[210px] rounded-[1.5rem] border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-white/5 p-6 flex items-end">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-zinc-400">Store Presence</div>
                    <div className="mt-2 text-3xl font-black uppercase">Industrial, premium and built to convert.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
