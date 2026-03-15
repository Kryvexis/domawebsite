import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/motion';
import { AboutTimeline } from '@/components/about-timeline';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A bold story page for the brand."
        body="This sample gives space for the company story, why customers trust the store, trade focus, delivery reach and what makes the business different."
      />
      <AboutTimeline />
      <section className="section-shell pb-24">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="steel-panel min-h-[420px] rounded-[2rem] p-8">
              <div className="text-sm uppercase tracking-[0.25em] text-orange-300">Who we are</div>
              <div className="mt-4 text-4xl font-black uppercase">Built for trade buyers, homeowners and serious projects.</div>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300">
                A live version could introduce the store history, service promise, local reputation and brand personality in a way that feels premium rather than generic.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Trusted local supplier', 'Fast quote turnaround', 'Strong category coverage', 'Support that feels personal'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-4">
                    <CheckCircle2 className="h-5 w-5 text-orange-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="steel-panel min-h-[420px] rounded-[2rem] bg-gradient-to-b from-zinc-900 to-zinc-950 p-8">
              <div className="flex h-full flex-col justify-end rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)] p-6">
                <div className="text-sm uppercase tracking-[0.25em] text-zinc-400">Visual story block</div>
                <div className="mt-3 text-3xl font-black uppercase">Space for team photos, store imagery or brand video.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
