import Link from 'next/link';
import Image from 'next/image';

interface CardTemoignageProps {
  href: string;
  photo: string;
  nom: string;
  sport: string;
  quote: string;
}

export default function CardTemoignage({ href, photo, nom, sport, quote }: CardTemoignageProps) {
  return (
    <Link
      href={href}
      className="group relative rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition h-100"
    >
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src={photo}
          alt={`Photo de ${nom}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        {/* Dégradé flou de bas en haut */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-black/60 backdrop-blur-lg [mask-image:linear-gradient(to_top,white,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%]" />
      </div>

      {/* Contenu en bas */}
      <div className="absolute bottom-0 p-4 text-white z-10">
        <h2 className="text-4xl font-serif font-semibold">{nom}</h2>
        <p className="text-sm text-gray-200">{sport}</p>
      </div>
    </Link>
  );
}