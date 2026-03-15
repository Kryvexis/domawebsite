import Link from 'next/link';
import { navItems } from './site-data';

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="text-2xl font-black">IRONRIDGE HARDWARE</div>
          <p className="mt-3 max-w-sm text-zinc-400">
            A premium industrial hardware-store concept built for Vercel with Next.js, Tailwind CSS and Framer Motion.
          </p>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">Pages</div>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-zinc-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">Store promise</div>
          <div className="mt-4 grid gap-3 text-zinc-300">
            <div>Fast quotes</div>
            <div>Premium product discovery</div>
            <div>Modern interactive browsing</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
