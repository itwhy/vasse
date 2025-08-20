import type { Metadata } from "next";
import ApprochePageClient from "./ApprochePageClient";

export const metadata: Metadata = {
  title: "Mon approche terrain | Benoît Vasse",
  description:
    "Points forts, plaisir, performance : découvrez mon approche de la préparation mentale et les convictions qui guident mes accompagnements.",
  alternates: { canonical: "/approche" },
  openGraph: {
    title: "Mon approche terrain",
    description:
      "Ma méthode : révéler les points forts, installer le plaisir et construire une performance durable.",
    url: "/approche",
    type: "article",
    images: [
      {
        url: "/images/benoit-vasse-preparateur-approche.webp",
        width: 1200,
        height: 630,
        alt: "Benoît Vasse – Coach professionnel & préparateur mental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mon approche terrain",
    images: ["images/benoit-vasse-preparateur-approche.webp"],

    description:
      "Ma méthode : points forts, plaisir, performance — pour une progression durable.",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ApprochePageClient />;
}