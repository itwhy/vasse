import Link from 'next/link';
import BurgerMenu from './BurgerMenu';

export default function Header() {
  return (
    <header className="p-4 sticky top-0 z-50 bg-background ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-serif text-xl text-gray-700">
          Benoît Vasse
        </Link>
        <BurgerMenu />
      </div>
    </header>
  );
}