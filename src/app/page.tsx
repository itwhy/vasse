
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import { ArrowRight } from 'lucide-react';

import CardTemoignage from '@/components/CardTemoignage';
import Link from 'next/link';
import path from 'path';
import { promises as fs } from 'fs';

export const metadata = {
  title: 'Accueil – Benoît Vasse',
  description: 'Préparateur mental diplômé et coach certifié à Lille et partout en France. Découvrez mon approche, mes outils et des témoignages d’athlètes.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Benoît Vasse – Préparateur mental & Coach professionnel',
    description: 'Préparateur mental diplômé et coach certifié. Découvrez mon approche et mon parcours.',
    url: 'https://benoitvasse.com/',
    siteName: 'Benoît Vasse',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/benoit-vasse-preparateur-mental-3.webp', // << place ton image ici (1200x630 conseillé)
        width: 1200,
        height: 630,
        alt: 'Benoît Vasse – Préparateur mental & Coach professionnel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benoît Vasse – Préparateur mental & Coach professionnel',
    description: 'Préparateur mental diplômé et coach certifié. Découvrez mon approche et mon parcours.',
    images: ['/images/benoit-vasse-preparateur-mental-3.webp'],
  },
  robots: { index: true, follow: true },
  keywords: [
    'préparateur mental Lille',
    'coach professionnel',
    'préparation mentale',
    'coaching sportif',
    'accompagnement performance',
  ],
};

async function getTemoignages(): Promise<Temoin[]> {
  const filePath = path.join(process.cwd(), 'data', 'temoignages.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContents);
}

export default async function HomePage() {
  const temoignages = await getTemoignages();

  return (
    <>
      <Hero />

      {/* Section Témoignages */}
      <AnimatedSection>
        <section className="container mx-auto py-20 px-8 rounded-xl bg-background-navi">
          <p className="font-serif italic text-center text-2xl jaune mb-4">
"Chaque rendez-vous apportait quelque chose de nouveau,<br/>ce qui permettait
une vraie progression."</p>
<p className="text-center text-gray-200 mb-12">Sarah Toulemonde – Cavalière saut d’obstacle</p>
          <h2 className="text-4xl font-serif font-extrabold jaune text-center mb-8">
            Ils/Elles m’ont fait confiance <br />et vous en parlent
          </h2>

          {/* 3 cartes témoignages */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 mb-12">
            {temoignages.slice(0, 3).map((t) => (
              <CardTemoignage
                key={t.slug}
                href={`/temoignages/${t.slug}`}
                photo={t.photo}
                nom={t.nom}
                sport={t.sport}
              />
            ))}
          </div>

          {/* Bouton voir plus */}
          <div className="text-center">
            <Link
              href="/temoignages"
                className=" w-fit mx-auto px-6 py-3 bg-accent jaune rounded-full font-medium shadow-xl transition
             hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:shadow-md flex items-center gap-2"
            >
              Parcourez tous les témoignages
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}