import path from 'path';
import { promises as fs } from 'fs';
import Link from 'next/link';
import Image from 'next/image';

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
      <div className="grid gap-8 md:grid-cols-2">
        {temoignages.map((t) => (
          <Link key={t.slug} href={`/temoignages/${t.slug}`} className="p-6 bg-white shadow rounded-lg hover:shadow-md transition flex gap-4">
            <Image
              src={t.photo}
              alt={`Photo de ${t.nom}`}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-lg italic text-gray-700 mb-2">“{t.quote}”</p>
              <div className="text-sm text-gray-500">
                <p className="font-medium text-gray-800">{t.nom}</p>
                <p>{t.sport}</p>
                <p>{t.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}