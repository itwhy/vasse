import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import CTAContact from '@/components/CTAContact';
import Image from 'next/image';


const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/approche', label: 'Approche' },
  { href: '/parcours', label: 'Parcours' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="w-full mt-4 px-2">
      {/* Bloc CTA clair (utilise le composant CTAContact) */}
      <div className="container mx-auto mb-4">
        <CTAContact
          image="/images/benoit-vasse-contact-1.jpeg" // Mets ici une image adaptée (ex: portrait, décor)
          title="Parlez-moi de vos objectifs"
          subtitle="Contactez-moi dès aujourd’hui et préparons votre réussite."
          buttonText="Rencontrons‑nous"
          href="/contact"
        />
      </div>

      {/* Bloc foncé (footer principal) */}
      <div className="container mx-auto mb-4">
        <div className="bg-[#152438] text-white py-12 px-4 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {/* Colonne 1 : Nom & contacts */}
            <div>
              <Image
              src="/images/logo.png"
              alt="Logo Benoît Vasse"
              width={50}
              height={50}
              className="object-contain mb-4"
            />
              <h3 className="text-xl font-semibold mb-4">Benoît Vasse</h3>
              <p className="mb-2">Préparateur Mental & Coach</p>
              <p className="mb-2">
                <a href="mailto:benoit@vassecommunicant.fr" className="hover:underline font-serif italic jaune">
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
                  className="hover:opacity-80 jaune"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="hover:opacity-80 jaune"
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
      </div>
    </footer>
  );
}