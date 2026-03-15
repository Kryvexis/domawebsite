'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Layers3, ShieldCheck } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { useRef } from 'react';

const scenes = [
  {
    eyebrow: 'Pinned-feel opener',
    title: 'An agency-style first impression built to stop the scroll.',
    body: 'Large panels drift at different speeds, the copy locks in place, and the composition feels more like a premium campaign site than a standard business homepage.',
  },
  {
    eyebrow: 'Mechanical motion',
    title: 'Layered movement that feels deliberate instead of flashy.',
    body: 'Parallax slabs, steel cards, glow sweeps and progress markers create the sense that the page is engineered, not templated.',
  },
  {
    eyebrow: 'Pitch-ready interaction',
    title: 'Made to demo on desktop and still feel sharp on mobile.',
    body: 'Touch-friendly controls, snap sections and responsive stacks keep the drama without breaking the usability.',
  },
];

const featureBadges: Array<{
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}> = [
  { label: 'Pinned feel', Icon: Layers3 },
  { label: 'Lux motion', Icon: Sparkles },
  { label: 'High trust', Icon: ShieldCheck },
];

export function AgencyOpener() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const cardOneY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const cardTwoY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const cardThreeY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const titleScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.98, 0.95]);

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <motion.div style={{ y: titleY, scale: titleScale }}>
            <div className="text-sm uppercase tracking-[0.36em] text-orange-300">Agency opener</div>
            <h2 className="mt-3 max-w-xl text-4xl font-black uppercase leading-[0.92] md:text-6xl">
              Big transitions, deep parallax and a true showpiece opening band.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
              This section is designed for the “show someone and make them go wow” moment. It feels premium because the hierarchy is huge, the movement is layered, and the interaction is controlled.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-5 py-4 font-semibold text-zinc-950 transition hover:bg-orange-400"
              >
                Open product demo <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm uppercase tracking-[0.2em] text-zinc-200">
                Mobile-safe motion
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {featureBadges.map(({ label, Icon }) => (
                <div key={label} className="steel-panel rounded-2xl px-4 py-4">
                  <Icon className="h-5 w-5 text-orange-400" />
                  <div className="mt-3 text-xs uppercase tracking-[0.24em] text-zinc-300">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative min-h-[720px] sm:min-h-[820px]">
          <motion.div style={{ y: cardThreeY }} className="steel-panel absolute inset-x-0 top-0 rounded-[2rem] p-5 sm:p-7">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.6rem] border border-white/10 bg-zinc-950/70 p-6">
                <div className="text-[11px] uppercase tracking-[0.34em] text-zinc-500">Signal</div>
                <div className="mt-4 text-3xl font-black uppercase md:text-5xl">Heavy visual hierarchy.</div>
                <p className="mt-4 max-w-lg text-zinc-300">
                  Large typography and long horizontal surfaces make the composition feel premium before any button is clicked.
                </p>
              </div>
              <div className="flex items-end rounded-[1.6rem] border border-orange-500/20 bg-orange-500/12 p-6">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.34em] text-orange-300">Metric</div>
                  <div className="mt-3 text-5xl font-black text-orange-400 md:text-6xl">01</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: cardTwoY }}
            className="steel-panel absolute inset-x-3 top-[18%] rounded-[2rem] p-5 sm:inset-x-8 sm:p-7"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {scenes.map((scene, index) => (
                <div
                  key={scene.title}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 md:min-h-[280px]"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-orange-300">{scene.eyebrow}</div>
                  <div className="mt-4 text-2xl font-black uppercase leading-[0.96]">{scene.title}</div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">{scene.body}</p>
                  <div className="mt-6 text-6xl font-black text-white/5">0{index + 1}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y: cardOneY }}
            className="absolute inset-x-6 top-[50%] rounded-[2rem] border border-orange-500/20 bg-gradient-to-r from-orange-500/12 via-zinc-950/90 to-white/[0.05] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:inset-x-14 sm:p-8"
          >
            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="text-[11px] uppercase tracking-[0.34em] text-orange-300">Cinematic closer</div>
                <div className="mt-4 text-3xl font-black uppercase leading-[0.95] md:text-5xl">
                  This is the section that makes the site feel custom-built.
                </div>
                <p className="mt-4 max-w-xl text-zinc-300">
                  The layered motion is subtle enough to stay professional but strong enough to clearly say this is not a cheap template.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Parallax cards', 'Responsive scene stack', 'Better scroll rhythm', 'Presentation-ready polish'].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/10 bg-zinc-950/70 px-5 py-5 text-sm uppercase tracking-[0.18em] text-zinc-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}