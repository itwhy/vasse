'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/preparation-mentale', label: 'La préparation mentale' },
  { href: '/approche', label: 'Mon approche' },
  { href: '/a-propos-de-moi', label: 'À propos de moi' },
  { href: '/temoignages', label: 'Témoignages' },
  { href: '/contact', label: 'Contactez‑moi', isButton: true },
];

// Variants pour le conteneur (gère le stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Variants pour chaque lien
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
};

// Variante spéciale pour le bouton (rebond)
const buttonVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut, bounce: 0.3 },
  },
};

export default function BurgerMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <>
      {/* Bouton burger */}
      <button
        aria-label="Ouvrir le menu"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-gray-700"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay plein écran */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-secondary bg-opacity-70 z-50 flex flex-col items-center justify-center"
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Menu centré avec stagger */}
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col space-y-6 text-center"
            >
              {navLinks.map((link) =>
                link.isButton ? (
                  <motion.div key={link.href} variants={buttonVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="mt-6 inline-block px-6 py-3 bg-accent text-accent-foreground rounded-md text-lg font-medium"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`text-2xl font-light ${
                        pathname === link.href
                          ? 'text-accent'
                          : 'text-white hover:text-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}