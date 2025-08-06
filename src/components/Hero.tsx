import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/preparation-mentale', label: 'La préparation mentale' },
  { href: '/approche', label: 'Mon approche' },
  { href: '/a-propos-de-moi', label: 'À propos de moi' },
];

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-8 py-16 container mx-auto px-6">
      {/* Image côté gauche */}
      <div className="relative w-full md:w-1/3 h-80 md:h-[500px] rounded-xl shadow-lg overflow-hidden">
        <Image
          src="/images/benoit-2.jpg"
          alt="Benoît Vasse"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Texte côté droit */}
      <div className="w-full md:w-2/3 flex flex-col justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
          Préparez votre esprit,<br /> atteignez vos objectifs
        </h1>
        <p className="text-base mb-4 max-w-xl">
          Je m’appelle Benoît VASSE – je suis Coach professionnel certifié et Préparateur Mental diplômé. J’accompagne les athlètes, équipes et dirigeants vers la performance durable.
        </p>

        {/* Liens menu */}
<div className="flex flex-wrap gap-4 mb-8 text-base font-serif font-bold italic text-gray-700">
  <p>
          Découvrez : 
        </p>
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="underline underline-offset-2 hover:text-primary transition"
    >
      {link.label}
    </Link>
  ))}
</div>
      </div>
    </section>
  );
}