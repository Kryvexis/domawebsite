import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MouseGlow } from '@/components/mouse-glow';
import { PageIntro } from '@/components/page-intro';
import { FloatingDemoDock } from '@/components/floating-demo-dock';

export const metadata: Metadata = {
  title: 'Ironridge Hardware',
  description: 'Premium industrial hardware store website concept.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PageIntro />
        <MouseGlow />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingDemoDock />
      </body>
    </html>
  );
}
