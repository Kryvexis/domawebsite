import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { HomeHero } from '@/components/home-hero';
import { InteractiveCommandCenter } from '@/components/interactive-command-center';
import { ScrollStory } from '@/components/scroll-story';
import { ComparisonSlab } from '@/components/comparison-slab';
import { ImpactCounters } from '@/components/impact-counters';
import { HorizonBand } from '@/components/horizon-band';
import { Reveal } from '@/components/motion';
import { SectionHeading } from '@/components/section-heading';
import { categories, featureReasons, highlights } from '@/components/site-data';

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <ImpactCounters />

      <section className="border-y border-white/5 bg-zinc-900/40 py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Industrial character"
            title="Heavier surfaces. Bigger sections. Stronger hierarchy."
            body="This direction pulls the design away from generic tech cards and closer to a serious trade brand. More steel-panel framing, more negative space, stronger typography and cleaner high-contrast motion."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="steel-panel h-full rounded-[1.8rem] p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
                      <Icon className="h-7 w-7 text-orange-400" />
                    </div>
                    <div className="text-2xl font-black uppercase">{item.title}</div>
                    <div className="mt-3 leading-relaxed text-zinc-300">{item.desc}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-28">
        <SectionHeading
          eyebrow="Why it feels premium"
          title="Everything stacks into place as the page unfolds."
          body="The layout uses motion in layers instead of random effects, so the experience feels richer without getting messy. That is what gives modern hardware, automotive and trade sites their polished high-end feel."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featureReasons.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title}>
                <div className="steel-panel h-full rounded-[1.75rem] p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
                    <Icon className="h-7 w-7 text-orange-400" />
                  </div>
                  <div className="text-2xl font-bold">{item.title}</div>
                  <div className="mt-3 leading-relaxed text-zinc-300">{item.desc}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell py-28">
        <SectionHeading
          eyebrow="Departments"
          title="Browse the store like a modern supply floor."
          body="Each department gets more visual weight, more atmosphere and stronger industrial framing so the site feels like a real hardware destination instead of a normal business page."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.name}>
                <div className="group relative min-h-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-1.5">
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.16),transparent_34%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-orange-500/5 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
                      <Icon className="h-8 w-8 text-orange-400" />
                    </div>
                    <div className="text-2xl font-black uppercase">{item.name}</div>
                    <p className="mt-3 leading-relaxed text-zinc-300">{item.desc}</p>
                    <div className="mt-auto inline-flex items-center gap-2 pt-8 font-medium uppercase tracking-[0.12em] text-orange-300">
                      View department <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-5 text-7xl font-black text-white/5">{item.accent}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ScrollStory />

      <InteractiveCommandCenter />

      <HorizonBand />

      <ComparisonSlab />

      <section className="relative overflow-hidden border-y border-white/5 bg-[linear-gradient(180deg,rgba(249,115,22,0.05),transparent_35%,rgba(255,255,255,0.02))] py-32">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-orange-500/8 to-transparent" />
        <div className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          <SectionHeading
            eyebrow="Showpiece section"
            title="A more cinematic band for featured deals and brand energy."
            body="This is closer to the premium industrial direction: large scale surfaces, wider framing, heavier contrast and movement that feels mechanical rather than playful."
          />
          <Reveal>
            <div className="steel-panel rounded-[2.2rem] bg-zinc-950/75 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="steel-panel min-h-[200px] rounded-[1.5rem] bg-white/5 p-6" />
                <div className="min-h-[200px] rounded-[1.5rem] border border-orange-500/20 bg-orange-500/12 p-6" />
                <div className="steel-panel col-span-2 min-h-[240px] rounded-[1.5rem] bg-gradient-to-r from-zinc-900 to-zinc-950 p-6 flex items-end">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Premium trade experience</div>
                    <div className="mt-3 text-3xl font-black uppercase">Wide promo bands, stronger storytelling and heavier visuals.</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-24">
        <Reveal>
          <div className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 lg:grid-cols-2">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-orange-300">Ready to build</div>
              <h3 className="mt-3 text-4xl font-black md:text-5xl">Turn this concept into your live store website.</h3>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
                This starter already has the premium industrial direction. Replace the sample brand, contact details and categories, then deploy it straight to Vercel.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-start">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-zinc-950 transition hover:bg-orange-400">
                Start the live version <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products" className="rounded-2xl border border-white/10 bg-zinc-900/80 px-6 py-4 font-medium text-white transition hover:bg-zinc-900">
                Browse products page
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
