// src/app/temoignages/page.tsx
import path from "path";
import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";
import CardTemoignage from "@/components/CardTemoignage";

export const metadata = {
  title: "Témoignages – Benoît Vasse",
  description:
    "Découvrez les témoignages d'athlètes et de dirigeants accompagnés par Benoît Vasse, préparateur mental et coach professionnel.",
  alternates: { canonical: "/temoignages" },
  openGraph: {
    title: "Témoignages – Benoît Vasse",
    description:
      "Ils m'ont fait confiance : retours d’expérience d’athlètes et de dirigeants.",
    url: "/temoignages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Témoignages – Benoît Vasse",
    description:
      "Ils m'ont fait confiance : retours d’expérience d’athlètes et de dirigeants.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Temoin = {
  slug: string;
  nom: string;
  sport: string;
  photo: string;
};

async function getTemoignages(): Promise<Temoin[]> {
  const filePath = path.join(process.cwd(), "data", "temoignages.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContents) as Temoin[];
}

export default async function TemoignagesPage() {
  const temoignages = await getTemoignages();

  // JSON-LD ItemList (collection de témoignages)
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Témoignages",
    itemListElement: temoignages.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `/temoignages/${t.slug}`,
      item: {
        "@type": "CreativeWork",
        name: `${t.nom} — ${t.sport}`,
        image: t.photo?.startsWith("http") ? t.photo : undefined,
      },
    })),
  };

  return (
    <section className="container mx-auto py-16 px-6">
      {/* H1 unique pour la page */}
      <div className="text-center mb-12">
        <p className="text-xl font-sans uppercase font-extrabold mt-4">
          Témoignages
        </p>
        <h1 className="text-5xl font-serif font-extrabold max-w-2xl mx-auto leading-tight">
          Ils/Elles m&apos;ont fait confiance, et vous en parlent
        </h1>

        {/* Sous-titre en paragraphe (évite H2 juste pour du style) */}

        <div className="w-24 mx-auto mb-6 mt-4">
          <Image
            src="/images/logo.png"
            alt="Logo Benoît Vasse"
            width={50}
            height={50}
            className="object-contain"
            priority={false}
          />
        </div>
      </div>

      {/* Grille des cartes */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {temoignages.map((t) => (
          <CardTemoignage
            key={t.slug}
            href={`/temoignages/${t.slug}`}
            photo={t.photo}
            nom={t.nom}
            sport={t.sport}
            // 👉 si tu ajoutes ariaLabel au composant, passe: ariaLabel={`Lire le témoignage de ${t.nom}, ${t.sport}`}
          />
        ))}
        <Link
          href="/contact"
          className="group bg-rouge relative rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition h-100"
        >
<div className="absolute inset-0">

        {/* Dégradé flou de bas en haut */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-black/30 backdrop-blur-lg [mask-image:linear-gradient(to_top,white,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%]" />
      </div>
          {/* Contenu en bas */}
          <div className="absolute top-[20%] p-4 text-white z-10">
            <h2 className="text-4xl font-serif font-extrabold">Soyez le prochain à témoigner</h2>
            <p className="text-sm text-gray-200 mt-6">Rencontrons-nous ;)</p>
          </div>
        </Link>
      </div>

      {/* Données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </section>
  );
}
