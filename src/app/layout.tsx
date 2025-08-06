import type { Metadata } from 'next';
import { Noto_Sans, Playfair_Display, Amatic_SC } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-noto-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '900'],
});

export const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700'], // Choisis les poids nécessaires
  variable: '--font-amatic', // pour l'utiliser en variable
});

export const metadata: Metadata = {
  title: 'Benoît Vasse – Préparateur Mental',
  description:
    'Préparateur mental diplômé et coach certifié. Accompagnement des sportifs de haut niveau et dirigeants vers la performance durable.',
  openGraph: {
    title: 'Benoît Vasse – Préparateur Mental',
    description:
      'Préparateur mental diplômé et coach certifié. Accompagnement des sportifs de haut niveau et dirigeants vers la performance durable.',
    url: 'https://benoit-vasse.fr',
    siteName: 'Benoît Vasse',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <SpeedInsights/>
      <body suppressHydrationWarning className={`${notoSans.variable} ${playfair.variable} ${amatic.variable} flex flex-col min-h-screen bg-background`}>
        <Header />
        <main className="flex-1 container mx-auto px-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}