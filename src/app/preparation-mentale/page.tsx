import type { Metadata } from "next";
import PreparationMentalePageClient from "./PreparationMentalePageClient";

export const metadata: Metadata = {
  title: "Préparation mentale – définition, rôles et publics | Benoît Vasse",
  description:
    "Qu’est‑ce que la préparation mentale ? Définition, rôles dans une équipe (coach, physique/médical, préparateur mental) et pour qui elle s’adresse.",
  alternates: { canonical: "/preparation-mentale" },
  openGraph: {
    title: "Préparation mentale – définition, rôles et publics",
    description:
      "Comprendre la préparation mentale : définition, rôles et bénéficiaires.",
    url: "/preparation-mentale",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Préparation mentale – définition, rôles et publics",
    description:
      "Comprendre la préparation mentale : définition, rôles et bénéficiaires.",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PreparationMentalePageClient />;
}