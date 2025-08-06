import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from './BurgerMenu';

export default function Header() {
  return (
    <header className="p-4 sticky top-0 z-50 bg-background px-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="Logo Benoît Vasse"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
          <span className="font-serif text-3xl text-gray-700">Benoît Vasse</span>
        </Link>
        <BurgerMenu />
      </div>
    </header>
  );
}