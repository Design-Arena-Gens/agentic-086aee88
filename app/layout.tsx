import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '???????? AI???????? | Evidence-Based ?????',
  description:
    '??????????????????????????AI?????????????AI??????????????????????????',
  metadataBase: new URL('https://agentic-086aee88.vercel.app'),
  openGraph: {
    title: '???????? AI????????',
    description:
      '??????????????????????????AI??????????',
    url: 'https://agentic-086aee88.vercel.app',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="border-b border-white/10 bg-black/10 backdrop-blur">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="text-white font-semibold tracking-wide">
              Evidence AI Consulting
            </Link>
            <nav className="flex items-center gap-6 text-sm text-slate-200">
              <Link href="/approach">?????</Link>
              <Link href="/process">????</Link>
              <Link href="/evidence">?????</Link>
              <Link href="/pricing">??</Link>
              <Link href="/contact" className="btn-primary">????</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10 mt-20">
          <div className="container py-10 text-sm text-slate-300/80 flex items-center justify-between">
            <p>? {new Date().getFullYear()} Evidence AI Consulting</p>
            <div className="flex gap-6">
              <Link href="/approach">?????</Link>
              <Link href="/pricing">??</Link>
              <Link href="/contact">??????</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
