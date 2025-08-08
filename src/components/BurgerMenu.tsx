'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const navLinks = [
  { href: '/preparation-mentale', label: 'La préparation mentale, ça vous parle ?' },
  { href: '/approche', label: 'Mon approche terrain' },
  { href: '/a-propos-de-moi', label: 'Qui suis-je ?' },
  { href: '/temoignages', label: 'Les témoignages' },
  { href: '/contact', label: 'Contactez‑moi', isButton: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: easeOut } },
};

const buttonVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut, bounce: 0.3 } },
};

export default function BurgerMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [btnRect, setBtnRect] = useState<{top:number; left:number; width:number; height:number} | null>(null);

  useEffect(() => setMounted(true), []);

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // mesure la position du bouton burger au moment de l'ouverture
  useEffect(() => {
    if (open && btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setBtnRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    } else {
      setBtnRect(null);
    }
  }, [open]);

  const overlay = open ? (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] bg-background-navi flex flex-col items-center justify-center"
      >
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="Logo Benoît Vasse"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Menu centré */}
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
                  className="mt-6 inline-block px-6 py-3 bg-accent jaune rounded-md text-lg font-medium"
                >
                  {link.label}
                </Link>
              </motion.div>
            ) : (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-2xl font-extrabold ${
                    pathname === link.href ? 'text-accent' : 'text-white hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            )
          )}
        </motion.nav>
      </motion.div>

      {/* Bouton "X" FIXE aux mêmes coordonnées que le burger */}
      {btnRect && (
        <button
          aria-label="Fermer le menu"
          onClick={() => setOpen(false)}
          className="fixed z-[90] text-white"
          style={{
            top: btnRect.top,
            left: btnRect.left,
            width: btnRect.width,
            height: btnRect.height,
          }}
        >
          <X className="h-8 w-8" />
        </button>
      )}
    </AnimatePresence>
  ) : null;

  return (
    <>
      {/* Bouton burger (dans le header) */}
      <button
        ref={btnRef}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        onClick={() => setOpen(!open)}
        className="relative z-[90] flex items-center gap-2 text-grey-800"
      >
        {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </button>

      {/* Overlay via portal (au niveau de <body>) */}
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}