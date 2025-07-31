import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Image côté gauche */}
      <div className="relative w-full md:w-1/3 h-64 md:h-auto">
        <Image
          src="/images/benoit.jpg"
          alt="Benoît Vasse"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Texte côté droit */}
      <div className="w-full md:w-2/3 flex items-center justify-center p-8 md:p-16">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Préparez votre esprit,<br /> atteignez vos objectifs
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Coaching et préparation mentale pour sportifs de haut niveau et dirigeants.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:opacity-90 transition"
          >
            Rencontrons‑nous
          </Link>
        </div>
      </div>
    </section>
  );
}