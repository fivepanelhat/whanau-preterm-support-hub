import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Whānau Preterm Support Hub NZ | He waka eke noa',
  description: 'Culturally safe, trauma-informed support for whānau and families of preterm twin newborns in Aotearoa New Zealand. Resources, peer connection, funding pathways, and community.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Whānau Preterm Support Hub NZ',
    description: 'Supporting whānau of preterm twins with culturally grounded, evidence-based resources and connection.',
    images: [{ url: '/og-image.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-700 focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>

        {/* Simple accessible header */}
        <header className="border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-teal-700 flex items-center justify-center text-white font-semibold text-lg" aria-hidden="true">
                W
              </div>
              <div>
                <span className="font-semibold tracking-tight text-xl">Whānau Preterm Support Hub</span>
                <span className="ml-2 text-xs text-teal-700 font-medium">Aotearoa NZ</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#resources" className="hover:text-teal-700 transition-colors">Resources</a>
              <a href="#peer-support" className="hover:text-teal-700 transition-colors">Peer Support</a>
              <a href="#funding" className="hover:text-teal-700 transition-colors">Funding &amp; Services</a>
              <a href="#about" className="hover:text-teal-700 transition-colors">About</a>
            </nav>

            <div className="flex items-center gap-3">
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 bg-teal-700 text-white hover:bg-teal-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                aria-label="Contact or get support"
              >
                Get Support
              </button>
            </div>
          </div>
        </header>

        <main id="main-content">
          {children}
        </main>

        <footer className="bg-slate-950 text-slate-300 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-y-10 text-sm">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm font-semibold">W</div>
                <span className="font-semibold text-white">Whānau Preterm Support Hub</span>
              </div>
              <p className="text-slate-400 max-w-xs">
                He waka eke noa. Supporting whānau of preterm twins across Aotearoa with aroha, cultural safety, and evidence-based resources.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-white mb-3">Important</div>
              <p className="text-xs leading-relaxed text-slate-400">
                This platform is <strong>not a substitute for professional medical advice</strong>. Always consult your midwife, doctor, or lead maternity carer. In emergency call 111.
              </p>
              <p className="text-xs mt-4 text-slate-500">
                Healthline: 0800 611 116
              </p>
            </div>

            <div className="text-xs text-slate-400 space-y-1.5">
              <div>© {new Date().getFullYear()} Whānau Preterm Support Hub NZ</div>
              <div>Licensed under Apache 2.0 with cultural &amp; health disclaimers</div>
              <div className="pt-2">
                Built with <span className="text-teal-500">Aether v0.6.2</span> sovereign agentic orchestration<br />
                Te Tiriti o Waitangi • Te Mana Raraunga aligned
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
