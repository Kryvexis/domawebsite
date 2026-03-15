'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const packageOptions = [
  { label: 'Starter refresh', value: 'starter', price: 1200 },
  { label: 'Contractor loadout', value: 'contractor', price: 3800 },
  { label: 'Full site supply', value: 'site', price: 8900 },
] as const;

const serviceOptions = [
  { label: 'Same-day delivery', value: 'delivery', price: 650 },
  { label: 'Priority quote desk', value: 'priority', price: 350 },
  { label: 'Trade account setup', value: 'account', price: 500 },
  { label: 'Installation support', value: 'install', price: 1200 },
] as const;

export function QuoteBuilder() {
  const [pack, setPack] = useState<(typeof packageOptions)[number]['value']>('contractor');
  const [services, setServices] = useState<string[]>(['delivery', 'priority']);
  const [urgency, setUrgency] = useState(2);

  const selectedPackage = packageOptions.find((item) => item.value === pack) ?? packageOptions[1];

  const total = useMemo(() => {
    const serviceTotal = serviceOptions
      .filter((item) => services.includes(item.value))
      .reduce((sum, item) => sum + item.price, 0);
    return selectedPackage.price + serviceTotal + urgency * 220;
  }, [selectedPackage, services, urgency]);

  const toggleService = (value: string) => {
    setServices((current) => (current.includes(value) ? current.filter((item) => item !== value) : [...current, value]));
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="steel-panel rounded-[2rem] p-6 md:p-8">
        <div className="text-sm uppercase tracking-[0.25em] text-orange-300">Reactive quote builder</div>
        <div className="mt-3 text-3xl font-black uppercase md:text-4xl">Click options and watch the quote update live.</div>
        <p className="mt-4 max-w-xl text-zinc-300">
          Perfect for demos. It makes the contact page feel functional, custom and premium even before you connect a real backend.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-500">Package</div>
            <div className="grid gap-3 md:grid-cols-3">
              {packageOptions.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setPack(item.value)}
                  className={`rounded-[1.4rem] border p-4 text-left transition ${pack === item.value ? 'border-orange-500/40 bg-orange-500/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                >
                  <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">Package</div>
                  <div className="mt-2 text-lg font-black">{item.label}</div>
                  <div className="mt-2 text-orange-400">R{item.price.toLocaleString()}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-500">Add-on services</div>
            <div className="grid gap-3 sm:grid-cols-2">
              {serviceOptions.map((item) => {
                const active = services.includes(item.value);
                return (
                  <button
                    key={item.value}
                    onClick={() => toggleService(item.value)}
                    className={`flex items-center justify-between rounded-[1.3rem] border p-4 text-left transition ${active ? 'border-orange-500/40 bg-orange-500/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                  >
                    <div>
                      <div className="font-semibold">{item.label}</div>
                      <div className="mt-1 text-sm text-zinc-400">R{item.price.toLocaleString()}</div>
                    </div>
                    <CheckCircle2 className={`h-5 w-5 ${active ? 'text-orange-400' : 'text-zinc-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-zinc-500">
              <span>Urgency</span>
              <span>{urgency}/3</span>
            </div>
            <input type="range" min={0} max={3} value={urgency} onChange={(event) => setUrgency(Number(event.target.value))} className="h-2 w-full accent-orange-500" />
          </div>
        </div>
      </div>

      <motion.div layout className="rounded-[2rem] border border-orange-500/20 bg-gradient-to-b from-orange-500/12 to-white/5 p-6 md:p-8">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-orange-300">Live summary</div>
            <div className="mt-2 text-3xl font-black uppercase">Presentation-ready quote card</div>
          </div>
          <div className="rounded-full border border-white/10 bg-zinc-950/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300">Reactive</div>
        </div>

        <div className="steel-panel mt-6 rounded-[1.75rem] p-6">
          <div className="flex items-center gap-3 text-orange-300">
            <Sparkles className="h-5 w-5" />
            <span className="text-xs uppercase tracking-[0.24em]">Estimated package</span>
          </div>
          <div className="mt-4 text-4xl font-black">R{total.toLocaleString()}</div>
          <div className="mt-2 text-zinc-300">{selectedPackage.label}</div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="steel-panel rounded-[1.5rem] p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Included services</div>
            <div className="mt-3 space-y-2 text-zinc-300">
              {serviceOptions.filter((item) => services.includes(item.value)).map((item) => (
                <div key={item.value}>{item.label}</div>
              ))}
              {services.length === 0 ? <div>No extras selected</div> : null}
            </div>
          </div>
          <div className="steel-panel rounded-[1.5rem] p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Next action</div>
            <div className="mt-3 text-zinc-300">Turn this into a real form, WhatsApp handoff or CRM lead route when you go live.</div>
          </div>
        </div>

        <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-zinc-950 transition hover:bg-orange-400">
          Launch request flow <ArrowRight className="h-4 w-4" />
        </button>
      </motion.div>
    </div>
  );
}
