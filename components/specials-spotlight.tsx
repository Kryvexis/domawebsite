'use client';

import { motion } from 'framer-motion';
import { BadgePercent, Flame, Package2, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';

const offers = [
  {
    id: 'bundle',
    label: 'Bundle Drop',
    title: 'Tool + accessory bundles with strong visual urgency.',
    body: 'Use this spotlight for pairings like drill kits, blades, bits, PPE and site bags.',
    icon: Package2,
  },
  {
    id: 'flash',
    label: 'Flash Sale',
    title: 'Short-run promos that feel premium, not cheap.',
    body: 'The design keeps limited-time campaigns polished while still feeling urgent and exciting.',
    icon: Flame,
  },
  {
    id: 'trade',
    label: 'Trade Savings',
    title: 'Contractor-focused discounts that feel substantial.',
    body: 'Great for volume pricing, account-only perks or site-order promotions.',
    icon: BadgePercent,
  },
  {
    id: 'hero',
    label: 'Hero Offer',
    title: 'One massive showcase deal that anchors the whole page.',
    body: 'This is the dramatic promo band that makes the whole site look custom-built.',
    icon: Sparkles,
  },
] as const;

export function SpecialsSpotlight() {
  const [active, setActive] = useState<(typeof offers)[number]['id']>('bundle');
  const current = useMemo(() => offers.find((offer) => offer.id === active) ?? offers[0], [active]);
  const Icon = current.icon;

  return (
    <section className="section-shell pb-20">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div layout className="steel-panel rounded-[2.2rem] p-8">
          <motion.div key={current.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8 md:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-orange-300">Promo spotlight</div>
              <div className="mt-3 text-5xl font-black leading-[0.95] uppercase">{current.label}</div>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">{current.title}</p>
              <p className="mt-4 max-w-xl text-zinc-400">{current.body}</p>
            </div>
            <div className="rounded-[1.8rem] border border-orange-500/20 bg-orange-500/[0.08] p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
                <Icon className="h-8 w-8 text-orange-400" />
              </div>
              <div className="mt-6 h-40 rounded-[1.5rem] border border-white/10 bg-zinc-950/80" />
              <div className="mt-4 text-sm uppercase tracking-[0.18em] text-zinc-300">Active showcase mode</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="space-y-3">
          {offers.map((offer) => (
            <button
              key={offer.id}
              type="button"
              onClick={() => setActive(offer.id)}
              className={`steel-panel w-full rounded-[1.6rem] px-5 py-5 text-left transition ${active === offer.id ? 'border-orange-500/40 bg-orange-500/[0.08]' : ''}`}
            >
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Offer mode</div>
              <div className="mt-2 font-semibold uppercase tracking-[0.12em]">{offer.label}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
