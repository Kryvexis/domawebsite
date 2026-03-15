import { Star } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/motion';
import { featuredProducts } from '@/components/site-data';
import { InteractiveProductWall } from '@/components/interactive-product-wall';
import { ShowcaseLab } from '@/components/showcase-lab';

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A richer catalogue-style page."
        body="This page mockup shows how the store can feel more like a proper digital showroom, with filters, featured deals, best sellers and scroll-rich layouts."
      />
      <InteractiveProductWall />
      <ShowcaseLab />

      <section className="section-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_2fr]">
          <Reveal>
            <div className="steel-panel sticky top-28 rounded-[2rem] p-6">
              <div className="text-lg font-bold uppercase">Quick Filters</div>
              <div className="mt-5 grid gap-3">
                {['Power Tools', 'Plumbing', 'Paint', 'Electrical', 'Safety', 'Garden'].map((item) => (
                  <button key={item} className="rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-left uppercase tracking-[0.12em] transition hover:border-orange-500/30 hover:bg-white/5">
                    {item}
                  </button>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">
                <div className="text-sm uppercase tracking-[0.25em] text-orange-300">Promo</div>
                <div className="mt-2 text-2xl font-black uppercase">Weekend Contractor Deals</div>
                <div className="mt-2 text-zinc-300">Bundle promos and rotating product callouts can live here.</div>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.title}>
                <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 transition duration-300 hover:-translate-y-2 hover:border-orange-500/20">
                  <div className="absolute right-5 top-5 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-950">
                    {product.badge}
                  </div>
                  <div className="steel-panel h-36 rounded-[1.5rem] bg-zinc-900/80" />
                  <div className="mt-6 text-2xl font-bold uppercase">{product.title}</div>
                  <div className="mt-2 text-xl font-semibold text-orange-400">{product.price}</div>
                  <p className="mt-3 text-zinc-300">Modern product card styling with room for specs, ratings and CTA buttons.</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1 text-amber-300">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <button className="rounded-2xl bg-orange-500 px-4 py-3 font-semibold text-zinc-950 transition hover:bg-orange-400">Add to Quote</button>
                  </div>
                  <div className="absolute bottom-4 right-5 text-7xl font-black text-white/5">0{index + 1}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
