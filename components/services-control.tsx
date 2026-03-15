'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock3, Package, ShieldCheck, Truck, Wrench } from 'lucide-react';
import { useMemo, useState } from 'react';

const serviceModes = [
  {
    id: 'quotes',
    title: 'Quotes in motion',
    body: 'Use this state to demonstrate how quote workflows can feel premium with progress visuals and response SLAs.',
    bullets: ['Rapid RFQ intake', 'Contractor urgency', 'Project-scale CTAs'],
    icon: Package,
  },
  {
    id: 'delivery',
    title: 'Delivery confidence',
    body: 'A live site can use this panel for delivery area animation, dispatch timing and fulfillment messaging.',
    bullets: ['Same-day zones', 'Pickup vs delivery', 'Coverage maps'],
    icon: Truck,
  },
  {
    id: 'support',
    title: 'Trusted support layer',
    body: 'Interactive trust modules help the store feel established and reliable without looking old-fashioned.',
    bullets: ['Service guarantees', 'Advice prompts', 'After-sales reassurance'],
    icon: ShieldCheck,
  },
  {
    id: 'repairs',
    title: 'Hands-on trade services',
    body: 'This mode suggests key cutting, repairs, paint mixing or installation bookings with stronger personality.',
    bullets: ['Workshop energy', 'Bookable service states', 'Tool-room character'],
    icon: Wrench,
  },
] as const;

export function ServicesControl() {
  const [active, setActive] = useState<(typeof serviceModes)[number]['id']>('quotes');
  const current = useMemo(() => serviceModes.find((mode) => mode.id === active) ?? serviceModes[0], [active]);
  const Icon = current.icon;

  return (
    <section className="section-shell pb-20">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="steel-panel rounded-[2rem] p-6 lg:sticky lg:top-28">
          <div className="text-sm uppercase tracking-[0.25em] text-orange-300">Service selector</div>
          <div className="mt-3 text-3xl font-black uppercase">Click through the service layers.</div>
          <div className="mt-4 space-y-3">
            {serviceModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActive(mode.id)}
                className={`w-full rounded-2xl border px-4 py-4 text-left transition ${active === mode.id ? 'border-orange-500/40 bg-orange-500/[0.08]' : 'border-white/10 bg-zinc-900/70 hover:bg-white/5'}`}
              >
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Mode</div>
                <div className="mt-2 font-semibold uppercase tracking-[0.12em]">{mode.title}</div>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="steel-panel rounded-[2rem] p-8">
          <motion.div key={current.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8 md:grid-cols-[1fr_0.7fr]">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
                <Icon className="h-8 w-8 text-orange-400" />
              </div>
              <div className="mt-5 text-4xl font-black uppercase">{current.title}</div>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300">{current.body}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {current.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-white/10 bg-zinc-900/75 px-4 py-4 text-sm uppercase tracking-[0.16em] text-zinc-200">
                    {bullet}
                  </div>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-orange-300">
                Service mode live <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Demo response window</div>
              <div className="mt-3 flex items-center gap-3 text-orange-300"><Clock3 className="h-5 w-5" /> <span className="text-sm uppercase tracking-[0.18em]">Under 2 hours</span></div>
              <div className="mt-5 h-32 rounded-[1.5rem] border border-white/10 bg-zinc-950/80" />
              <div className="mt-5 text-sm leading-relaxed text-zinc-300">Perfect for a meeting demo: it looks like there is a responsive service system behind the page.</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
