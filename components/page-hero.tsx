import { SectionHeading } from './section-heading';

export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="section-shell pt-32 pb-8">
      <SectionHeading eyebrow={eyebrow} title={title} body={body} />
    </section>
  );
}
