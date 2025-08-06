import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import CardTemoignage from '@/components/CardTemoignage';
import Link from 'next/link';
import path from 'path';
import { promises as fs } from 'fs';
import { Temoignage } from '@/types/temoignage';

export const metadata = {
  title: 'Accueil – Benoît Vasse',
  description: 'Préparateur mental diplômé et coach certifié. Découvrez mon approche et mon parcours.',
};

async function getTemoignages() {
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
        <section className="container mx-auto py-20 px-8 rounded-xl bg-[#f9f5f0]">
          <h2 className="text-3xl font-serif text-center mb-4">Ils m’ont fait confiance</h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Découvrez les témoignages de sportifs et dirigeants que j’ai accompagnés vers leurs objectifs.
          </p>

          {/* 3 cartes témoignages */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 mb-12">
            {temoignages.slice(0, 3).map((t: Temoignage) => (
  <CardTemoignage
    key={t.slug}
    href={`/temoignages/${t.slug}`}
    photo={t.photo}
    nom={t.nom}
    sport={t.sport}
    quote={t.quote}
  />
))}
          </div>

          {/* Bouton voir plus */}
          <div className="text-center">
            <Link
              href="/temoignages"
              className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium shadow-md hover:shadow-lg hover:-translate-y-1 transition"
            >
              Voir tous les témoignages
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}