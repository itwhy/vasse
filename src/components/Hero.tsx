import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '/preparation-mentale', label: "Ce qu'est la préparation mentale" },
  { href: '/approche', label: 'Mon approche terrain' },
  { href: '/a-propos-de-moi', label: 'Qui je suis' },
];

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-16 pt-8 pb-16 container mx-auto ">
      {/* Image côté gauche */}
      <div className="relative w-full md:w-1/3 h-80 md:h-[500px] rounded-xl shadow-xl overflow-hidden">
        <Image
          src="/images/benoit-vasse-preparateur-mental-3.webp"
          alt="Benoît Vasse"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Texte côté droit */}
      <div className="w-full md:w-2/3 flex flex-col justify-center px-4">
        <h1 className="leading-snug text-4xl md:text-5xl font-serif font-[900] text-gray-900 mb-6">
          Préparez votre esprit,<br /> atteignez vos objectifs
        </h1>
        <p className="mb-4 max-w-xl">
          Je suis <strong>Coach professionnel certifié</strong> et <strong>Préparateur Mental diplômé</strong>.<br/>Je m'appelle Benoît Vasse et j’accompagne les athlètes vers le bien-être la performance durable.
        </p>

        {/* Liens menu */}
        <p><strong>Découvrez :</strong> </p>
<div className="flex flex-col gap-4 mt-2 font-bold">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="w-fit bg-link uppercase text-[0.9rem] text-white shadow-lg/5 rounded-full py-1 px-4 font-sans hover:jaune transition  flex items-center gap-2"
    >
      {link.label}<ArrowRight className="w-4 h-4" />
    </Link>
  ))}
</div>
      </div>
    </section>
  );
}