'use client';

import { motion } from 'framer-motion';
import { Calculator, CheckCircle2, Package, Truck, Wrench } from 'lucide-react';
import { useMemo, useState } from 'react';

const projectTypes = [
  { id: 'renovation', label: 'Renovation', multiplier: 1.1 },
  { id: 'site', label: 'Site Supply', multiplier: 1.45 },
  { id: 'maintenance', label: 'Maintenance', multiplier: 0.85 },
] as const;

const categories = [
  { id: 'tools', label: 'Tools', value: 2800, icon: Wrench },
  { id: 'materials', label: 'Materials', value: 4200, icon: Package },
  { id: 'delivery', label: 'Delivery', value: 650, icon: Truck },
] as const;

export function QuoteBuilder() {
  const [projectType, setProjectType] = useState<(typeof projectTypes)[number]['id']>('site');
  const [selected, setSelected] = useState<string[]>(['tools', 'materials']);

  const multiplier = projectTypes.find((item) => item.id === projectType)?.multiplier ?? 1;
  const subtotal = categories.filter((item) => selected.includes(item.id)).reduce((acc, item) => acc + item.value, 0);
  const total = Math.round(subtotal * multiplier);

  const responseLabel = useMemo(() => {
    if (total > 7000) return 'Priority contractor callback';
    if (total > 4000) return 'Fast quote turnaround';
    return 'Standard same-day response';
  }, [total]);

  return (
    <section className="section-shell pb-24">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="steel-panel rounded-[2rem] p-8">
          <div className="flex items-center gap-3 text-orange-300"><Calculator className="h-5 w-5" /> <span className="text-sm uppercase tracking-[0.22em]">Interactive quote builder</span></div>
          <div className="mt-4 text-4xl font-black uppercase">Click the options and build a live demo quote.</div>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300">
            This is perfect for showing someone the site is not just animated — it responds. Every click updates the summary panel in real time.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setProjectType(type.id)}
                className={`rounded-2xl border px-4 py-4 text-left transition ${projectType === type.id ? 'border-orange-500/40 bg-orange-500/[0.08]' : 'border-white/10 bg-zinc-900/70 hover:bg-white/5'}`}
              >
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Project type</div>
                <div className="mt-2 font-semibold uppercase tracking-[0.12em]">{type.label}</div>
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const checked = selected.includes(category.id);
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelected((prev) => (prev.includes(category.id) ? prev.filter((item) => item !== category.id) : [...prev, category.id]))}
                  className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${checked ? 'border-orange-500/40 bg-orange-500/[0.08]' : 'border-white/10 bg-zinc-900/70 hover:bg-white/5'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
                      <Icon className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Include category</div>
                      <div className="mt-1 font-semibold uppercase tracking-[0.1em]">{category.label}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm uppercase tracking-[0.18em] text-zinc-500">Demo value</div>
                    <div className="mt-1 font-semibold text-orange-300">R{category.value.toLocaleString()}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="steel-panel rounded-[2rem] p-8 lg:sticky lg:top-28">
          <div className="text-sm uppercase tracking-[0.25em] text-orange-300">Live summary</div>
          <div className="mt-4 text-5xl font-black">R{total.toLocaleString()}</div>
          <div className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-400">Estimated response: {responseLabel}</div>
          <div className="mt-6 space-y-3">
            {selected.length ? selected.map((id) => {
              const item = categories.find((category) => category.id === id);
              if (!item) return null;
              return (
                <div key={item.id} className="rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Included</div>
                  <div className="mt-1 font-semibold uppercase tracking-[0.1em]">{item.label}</div>
                </div>
              );
            }) : <div className="rounded-2xl border border-dashed border-white/10 px-4 py-6 text-zinc-400">Select at least one category.</div>}
          </div>
          <div className="mt-6 rounded-[1.7rem] border border-orange-500/20 bg-orange-500/[0.08] p-5">
            <div className="flex items-center gap-3 text-orange-300"><CheckCircle2 className="h-5 w-5" /> <span className="text-sm uppercase tracking-[0.18em]">Interactive and reactive demo state</span></div>
            <p className="mt-3 text-zinc-300">This gives you something tangible to click during a presentation, not just passive visuals.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
