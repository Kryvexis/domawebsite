import { Clock3 } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/motion';

export default function SpecialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Specials"
        title="A page built for promos and high-attention offers."
        body="This kind of page is ideal for rotating weekly deals, bundle offers, contractor discounts and seasonal campaigns."
      />
      <section className="section-shell pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Reveal key={i}>
              <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-orange-500/20 bg-gradient-to-b from-orange-500/12 to-white/5 p-7 transition hover:-translate-y-1.5">
                <div className="text-sm uppercase tracking-[0.28em] text-orange-300">Limited Deal</div>
                <div className="mt-4 text-4xl font-black">Up to 30% Off</div>
                <div className="mt-4 leading-relaxed text-zinc-300">
                  Use this block for striking promotional campaigns with timers, bundle messaging or product combinations.
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
                  <div className="flex items-center gap-3"><Clock3 className="h-5 w-5 text-orange-400" /> <span>Ends Sunday</span></div>
                </div>
                <button className="mt-8 rounded-2xl bg-orange-500 px-5 py-4 font-semibold text-zinc-950 transition hover:bg-orange-400">Claim Deal</button>
                <div className="absolute -bottom-8 -right-8 text-[9rem] font-black text-white/5">0{i}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
