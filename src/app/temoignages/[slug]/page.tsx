import path from 'path';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import BreadcrumbSelect from '@/components/BreadcrumbSelect';

interface Temoin {
  slug: string;
  nom: string;
  sport: string;
  description: string;
  quote: string;
  contenu: string;
  photo: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function SingleTemoignage({ params }: PageProps) {
  // Lecture des données
  const filePath = path.join(process.cwd(), 'data', 'temoignages.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const temoignages: Temoin[] = JSON.parse(fileContents);

  // Récupération du bon témoignage
  const temoin = temoignages.find((t) => t.slug === params.slug);
  if (!temoin) return notFound();

  return (
    <article className="container mx-auto py-16 px-6 max-w-3xl">
      {/* Fil d’Ariane + select */}
      <BreadcrumbSelect temoignages={temoignages} currentSlug={temoin.slug} />

      {/* En-tête */}
      <div className="flex flex-col items-center text-center mb-8">
        <Image
          src={temoin.photo}
          alt={`Photo de ${temoin.nom}`}
          width={200}
          height={200}
          className="rounded-full object-cover mb-6"
        />
        <h1 className="text-3xl font-serif mb-2">{temoin.nom}</h1>
        <p className="text-gray-500">
          {temoin.sport} – {temoin.description}
        </p>
      </div>

      {/* Citation */}
      <blockquote className="italic text-lg text-gray-700 mb-8">
        “{temoin.quote}”
      </blockquote>

      {/* Contenu HTML */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: temoin.contenu }}
      />
    </article>
  );
}