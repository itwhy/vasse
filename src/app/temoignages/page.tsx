import path from 'path';
import { promises as fs } from 'fs';
import CardTemoignage from '@/components/CardTemoignage';
import { Temoignage } from '@/types/temoignage';


interface Temoin {
  slug: string;
  nom: string;
  sport: string;
  description: string;
  quote: string;
  photo: string;
}

export default async function TemoignagesPage() {
  const filePath = path.join(process.cwd(), 'data', 'temoignages.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const temoignages: Temoin[] = JSON.parse(fileContents);

  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-serif text-center mb-12">Témoignages</h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {temoignages.map((t: Temoignage) => (
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
    </section>
  );
}