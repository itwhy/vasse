import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/approche', label: 'Approche' },
  { href: '/parcours', label: 'Parcours' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Bloc CTA clair */}
      <div className="bg-soft py-12 text-center">
        <h2 className="text-2xl font-serif text-primary mb-4">
          Envie de travailler ensemble ?
        </h2>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:opacity-90 transition"
        >
          Rencontrons‑nous
        </Link>
      </div>

      {/* Bloc foncé */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Colonne 1 : Nom & contacts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Benoît Vasse</h3>
            <p className="mb-2">Préparateur Mental & Coach</p>
            <p className="mb-2">
              <a href="mailto:benoit@vassecommunicant.fr" className="hover:underline">
                benoit@vassecommunicant.fr
              </a>
            </p>
            <p>06 12 34 56 78</p>
          </div>

          {/* Colonne 2 : Menu */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Réseaux sociaux</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="hover:opacity-80"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="hover:opacity-80"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="text-center text-sm text-gray-400 mt-12">
          &copy; {new Date().getFullYear()} Benoît Vasse – Tous droits réservés
        </div>
      </div>
    </footer>
  );
}