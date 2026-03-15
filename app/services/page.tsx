import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/motion';
import { services } from '@/components/site-data';
import { ServicesControl } from '@/components/services-control';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Hardware store services with stronger visual weight."
        body="A real live site could use this page for quotes, deliveries, contractor accounts, key cutting, paint mixing, installations or repair-related service flows."
      />
      <ServicesControl />
      <section className="section-shell pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title}>
                <div className="steel-panel min-h-[250px] rounded-[2rem] p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500/20">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/15">
                    <Icon className="h-8 w-8 text-orange-400" />
                  </div>
                  <div className="text-3xl font-black uppercase">{service.title}</div>
                  <p className="mt-4 text-lg leading-relaxed text-zinc-300">{service.desc}</p>
                  <div className="mt-8 inline-flex items-center gap-2 font-semibold uppercase tracking-[0.12em] text-orange-300">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
