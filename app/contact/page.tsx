import { ArrowRight, Clock3, MapPin, Phone, type LucideIcon } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/motion';
import { QuoteBuilder } from '@/components/quote-builder';

const contactCards: Array<{ label: string; value: string; icon: LucideIcon }> = [
  { label: 'Phone', value: '+27 00 000 0000', icon: Phone },
  { label: 'Location', value: '123 Builder Street, Johannesburg', icon: MapPin },
  { label: 'Hours', value: 'Mon - Sat | 07:30 - 17:30', icon: Clock3 },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A stronger contact and conversion page."
        body="This could be adapted into contact forms, WhatsApp CTAs, quote requests, map blocks and branch details."
      />
      <section className="section-shell pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="steel-panel rounded-[2rem] p-8">
              <div className="grid gap-4">
                {contactCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900/80 px-5 py-4">
                      <Icon className="h-5 w-5 text-orange-400" />
                      <div>
                        <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">{item.label}</div>
                        <div className="mt-1">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-orange-500/10 to-white/5 p-8">
              <div className="text-sm uppercase tracking-[0.25em] text-orange-300">Get a quote</div>
              <div className="mt-4 text-4xl font-black">A premium form section would sit here.</div>
              <p className="mt-5 text-lg leading-relaxed text-zinc-300">
                This sample keeps things visual, but the live version can include quote forms, WhatsApp buttons, branch routing and delivery area prompts.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-zinc-950 transition hover:bg-orange-400">
                Start Request <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell pb-24">
        <QuoteBuilder />
      </section>
    </>
  );
}
