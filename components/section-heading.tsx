import { Reveal } from './motion';

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
}) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div className="text-sm uppercase tracking-[0.35em] text-orange-300">{eyebrow}</div>
      <h2 className="mt-3 text-4xl font-black leading-[0.95] md:text-6xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-relaxed text-zinc-300">{body}</p> : null}
    </Reveal>
  );
}
