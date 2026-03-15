'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Reveal } from './motion';
import { TiltCard } from './tilt-card';

type Product = {
  name: string;
  category: 'Tools' | 'Electrical' | 'Paint' | 'Plumbing';
  price: string;
  highlight: string;
};

const products: Product[] = [
  { name: 'Impact Drill X90', category: 'Tools', price: 'R1,299', highlight: 'Torque-led hero product' },
  { name: 'Workshop LED Grid', category: 'Electrical', price: 'R649', highlight: 'Strong visual promo card' },
  { name: 'Contractor Coat Pro', category: 'Paint', price: 'R799', highlight: 'Premium finish bundle' },
  { name: 'Plumber Rapid Kit', category: 'Plumbing', price: 'R1,599', highlight: 'Great for quote requests' },
  { name: 'Hammer Forge Set', category: 'Tools', price: 'R549', highlight: 'Display-ready combo pack' },
  { name: 'Circuit Guard Box', category: 'Electrical', price: 'R899', highlight: 'Ideal for service pages' },
];

const filters: Array<'All' | Product['category']> = ['All', 'Tools', 'Electrical', 'Paint', 'Plumbing'];

export function InteractiveProductWall() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [selected, setSelected] = useState(products[0].name);

  const visibleProducts = useMemo(
    () => products.filter((product) => filter === 'All' || product.category === filter),
    [filter]
  );

  const current = visibleProducts.find((product) => product.name === selected) ?? visibleProducts[0];

  return (
    <section className="section-shell pb-24">
      <Reveal>
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.35em] text-orange-300">Interactive product wall</div>
            <h2 className="mt-3 text-4xl font-black leading-[0.95] md:text-5xl">Filter, click and spotlight products instantly.</h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-300">
              This makes the products page feel much more alive in a presentation. It shows filtering, focused detail and motion-heavy card behavior without needing a full ecommerce backend.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setFilter(item);
                  if (item !== 'All') {
                    const firstMatch = products.find((product) => product.category === item);
                    if (firstMatch) setSelected(firstMatch.name);
                  }
                }}
                className={`rounded-full px-4 py-3 text-sm uppercase tracking-[0.18em] transition ${
                  filter === item ? 'bg-orange-500 font-bold text-zinc-950' : 'border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {visibleProducts.map((product) => (
            <Reveal key={product.name}>
              <TiltCard
                className={`relative rounded-[1.9rem] border p-6 text-left transition ${
                  current?.name === product.name
                    ? 'border-orange-500/40 bg-orange-500/10'
                    : 'border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]'
                }`}
              >
                <motion.button whileTap={{ scale: 0.98 }} onClick={() => setSelected(product.name)} className="relative block w-full text-left">
                  <div className="steel-panel h-32 rounded-[1.4rem]" />
                  <div className="mt-5 text-xs uppercase tracking-[0.25em] text-orange-300">{product.category}</div>
                  <div className="mt-2 text-2xl font-black">{product.name}</div>
                  <div className="mt-2 text-lg font-semibold text-orange-400">{product.price}</div>
                  <p className="mt-3 text-zinc-300">{product.highlight}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                    Quick spotlight <ArrowRight className="h-4 w-4" />
                  </div>
                </motion.button>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          {current ? (
            <motion.div layout className="steel-panel sticky top-28 rounded-[2rem] p-8">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-orange-300">Selected product</div>
                  <div className="mt-2 text-3xl font-black uppercase">{current.name}</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300">
                  Click-responsive
                </div>
              </div>
              <div className="steel-panel mt-6 h-56 rounded-[1.7rem] bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_30%)]" />
              <div className="mt-6 flex items-center gap-3 text-orange-300">
                <Zap className="h-5 w-5" />
                <span className="text-sm uppercase tracking-[0.22em]">{current.highlight}</span>
              </div>
              <p className="mt-4 text-zinc-300">
                Use this side panel for bigger product imagery, richer specs, promo tags, quote CTAs, bundled accessories or even short explainer videos.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ['Price band', current.price],
                  ['Audience', current.category],
                  ['Motion state', 'Active'],
                  ['Demo impact', 'High'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</div>
                    <div className="mt-2 text-lg font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
