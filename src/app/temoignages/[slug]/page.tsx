import path from 'path';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import BreadcrumbSelect from '@/components/BreadcrumbSelect';

export default async function SingleTemoignage(props: any) {
  const { slug } = await props.params; // ← on attend le Promise

  const filePath = path.join(process.cwd(), 'data', 'temoignages.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const temoignages: Temoin[] = JSON.parse(fileContents);

  const temoin = temoignages.find((t) => t.slug === slug);
  if (!temoin) return notFound();

  return (
    <article className="container mx-auto py-16 px-6">
      <BreadcrumbSelect temoignages={temoignages} currentSlug={temoin.slug} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
        {/* Colonne gauche : photo sticky */}
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <Image
              src={temoin.photo}
              alt={`Photo de ${temoin.nom}`}
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Colonne droite : contenu */}
        <div className="md:col-span-2">
          <h1 className="text-5xl font-bold font-serif mb-4">{temoin.nom}</h1>
          <p className="text-gray-500 mb-6">
            {temoin.sport}
          </p>
          <blockquote className="italic font-serif text-2xl text-gray-800 mb-8">
            “{temoin.quote}”
          </blockquote>
          <div
            className="prose prose-lg max-w-none temoignage-content"
            dangerouslySetInnerHTML={{ __html: temoin.contenu }}
          />
        </div>
      </div>
    </article>
  );
}