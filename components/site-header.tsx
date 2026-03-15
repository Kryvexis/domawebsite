'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from './site-data';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="text-left">
          <div className="text-xl font-black tracking-wide md:text-2xl">IRONRIDGE HARDWARE</div>
          <div className="text-xs uppercase tracking-[0.25em] text-zinc-400">Built for builders</div>
        </Link>

        <nav className="hidden lg:flex gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${active ? 'bg-orange-500 font-bold text-zinc-950' : 'text-zinc-300 hover:bg-white/5 hover:text-white'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition">WhatsApp</Link>
          <Link href="/contact" className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-zinc-950 hover:bg-orange-400 transition">Get Quote</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-2xl border border-white/10 bg-white/5 p-3 lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950/95 px-6 pb-5 lg:hidden">
          <div className="grid gap-2 pt-4">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 transition ${active ? 'bg-orange-500 font-bold text-zinc-950' : 'bg-white/5 text-zinc-200'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
