'use client';

import Link from 'next/link';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FloatTag } from './motion';
import { MagneticButton } from './magnetic-button';

const floatingBadges = [
  { label: 'Forged', x: '7%', y: '18%', delay: 0 },
  { label: 'Steel', x: '82%', y: '15%', delay: 0.7 },
  { label: 'Trade', x: '12%', y: '74%', delay: 1.1 },
  { label: 'Industrial', x: '86%', y: '58%', delay: 1.8 },
  { label: 'Supply', x: '48%', y: '10%', delay: 1.4 },
];

const meters = [
  ['Motion', 'Interactive'],
  ['Depth', 'Cinematic'],
  ['Demo', 'Show-off ready'],
];

export function HomeHero() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  const heroY = useTransform(progress, [0, 0.2], [0, 170]);
  const heroScale = useTransform(progress, [0, 0.2], [1, 1.08]);
  const textY = useTransform(progress, [0, 0.18], [0, -90]);
  const beamWidth = useTransform(progress, [0, 0.25], ['10%', '82%']);
  const plateRotate = useTransform(progress, [0, 0.3], [0, 4]);

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-orange-500" />
      <section className="relative flex min-h-screen items-center overflow-hidden bg-grid bg-[size:64px_64px] pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.06),transparent_18%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
        <div className="absolute right-[-10rem] top-[-6rem] h-[32rem] w-[32rem] rounded-full bg-orange-500/10 blur-3xl" />

        {floatingBadges.map((tool) => (
          <FloatTag key={tool.label} {...tool} />
        ))}

        <div className="section-shell relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div style={{ y: textY }}>
            <motion.div style={{ width: beamWidth }} className="orange-line mb-6 h-1.5 rounded-full bg-orange-500" />
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-[0.16em] text-orange-200">
              <Sparkles className="h-4 w-4" /> Million-dollar demo concept
            </div>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] md:text-7xl xl:text-8xl">
              A hardware website that <span className="text-orange-400">reacts, moves and sells</span> like a premium brand showcase.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Built to impress on scroll and on click — with layered motion, magnetic CTAs, reactive demo modules, cinematic product panels and enough polish to feel custom-built.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <MagneticButton href="/products">Explore Products <ArrowRight className="h-4 w-4" /></MagneticButton>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10">
                Build my live version
              </Link>
            </div>
            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {meters.map(([label, value]) => (
                <div key={label} className="steel-panel rounded-2xl px-5 py-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{label}</div>
                  <div className="mt-2 text-xl font-black uppercase text-orange-300">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ y: heroY, scale: heroScale, rotate: plateRotate }} className="relative">
            <div className="absolute -inset-8 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="hero-metal glow-border relative overflow-hidden rounded-[2.4rem] border border-white/10 p-5 shadow-2xl">
              <div className="absolute inset-0 opacity-40 metal-grid" />
              <div className="relative grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -10 }} className="steel-panel min-h-[210px] rounded-[1.6rem] bg-zinc-950/90 p-5">
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Featured loadout</div>
                  <div className="mt-16 text-3xl font-black uppercase">Contractor drill set</div>
                  <div className="mt-3 text-lg font-semibold text-orange-400">R1,299</div>
                </motion.div>
                <motion.div whileHover={{ y: -10 }} className="min-h-[210px] rounded-[1.6rem] bg-orange-500 p-5 text-zinc-950">
                  <div className="text-xs font-black uppercase tracking-[0.25em]">Engagement score</div>
                  <div className="mt-16 text-6xl font-black">4.9</div>
                  <div className="mt-3 text-sm uppercase tracking-[0.15em]">Built to impress live</div>
                </motion.div>
                <motion.div whileHover={{ y: -10 }} className="steel-panel min-h-[170px] rounded-[1.6rem] bg-gradient-to-r from-zinc-950 to-zinc-900 p-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Reactive quote flow</div>
                  <div className="mt-4 text-3xl font-black uppercase">Clicks update in real time.</div>
                </motion.div>
                <motion.div whileHover={{ y: -10 }} className="steel-panel min-h-[170px] rounded-[1.6rem] bg-white/5 p-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Scroll scene</div>
                  <div className="mt-4 text-3xl font-black uppercase">Pinned story bands.</div>
                </motion.div>
                <motion.div whileHover={{ y: -10 }} className="col-span-2 rounded-[1.8rem] border border-orange-500/20 bg-gradient-to-r from-orange-500/[0.14] to-white/5 p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-zinc-400">Presentation layer</div>
                  <div className="mt-3 text-4xl font-black uppercase">Premium industrial, cinematic and reactive.</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
