import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-soft py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-0">
        {/* Texte */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Préparez votre esprit, atteignez vos objectifs
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Coaching et préparation mentale pour sportifs de haut niveau, dirigeants et équipes.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:opacity-90 transition"
          >
            Rencontrons‑nous
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <Image
            src="/images/benoit.jpg"
            alt="Préparateur mental avec un sportif"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover"
            priority // optimise le chargement
          />
        </div>
      </div>
    </section>
  );
}