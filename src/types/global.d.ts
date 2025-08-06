// src/types/global.d.ts
export {};

declare global {
  interface Temoin {
    slug: string;
    photo: string;
    nom: string;
    sport: string;
    description: string;
    quote: string;
    contenu: string;
  }

  interface CTA {
    image: string;
    title: string;
    subtitle?: string;
    buttonText?: string;
    href?: string;
  }

  interface MenuItem {
    href: string;
    label: string;
  }
}