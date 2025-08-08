'use client';

import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from './BurgerMenu';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 px-2 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/20 backdrop-blur-md'
          : 'bg-transparent'
      } ${isScrolled ? 'py-2' : 'py-4 md:py-6'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`relative transition-all duration-300 ${
              isScrolled ? 'w-10 h-10' : 'w-14 h-14 md:w-16 md:h-16'
            }`}
          >
            <Image
              src="/images/logo.png"
              alt="Logo Benoît Vasse"
              fill
              sizes="64px"
              className="object-contain"
              priority
            />
          </div>

          <span
            className={`font-serif font-extrabold leading-none text-grey-800 transition-all duration-300 ${
              isScrolled ? 'text-2xl' : 'text-3xl md:text-4xl'
            }`}
          >
            Benoit<br />Vasse
          </span>
        </Link>

        <BurgerMenu />
      </div>
    </header>
  );
}