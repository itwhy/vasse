
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import CardTemoignage from '@/components/CardTemoignage';
import Link from 'next/link';
import path from 'path';
import { promises as fs } from 'fs';

export const metadata = {
  title: 'Accueil – Benoît Vasse',
  description:
    'Préparateur mental diplômé et coach certifié. Découvrez mon approche et mon parcours.',
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
        <section className="container mx-auto py-20 px-8 rounded-xl bg-[#1F344F]">
          <p className="font-serif italic text-center text-2xl jaune mb-4">
"Chaque rendez-vous apportait quelque chose de nouveau,<br/>ce qui permettait
une vraie progression."</p>
<p className="text-center text-gray-200 mb-12">Sarah Toulemonde – Cavalière saut d’obstacle</p>
          <h2 className="text-4xl font-serif font-extrabold jaune text-center mb-8">
            Ils m’ont fait confiance
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
              className="inline-block px-6 py-3 bg-accent jaune rounded-md font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
            >
              Voir tous les témoignages
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}