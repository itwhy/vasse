"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import {
  MessagesSquare,
  Check,
  Handshake,
  BicepsFlexed,
  ChevronsRight,
  RefreshCcw,
} from "lucide-react";
import "swiper/css";

const navLinks = [
  { href: "#convictions", label: "La préparation mentale … c’est quoi au juste ?" },
  { href: "#etapes", label: "Un team performant pour quoi ?" },
  {
    href: "#outils",
    label: "La préparation mentale … c’est pour qui ?",
  },
];
export default function PreparationMentalePage() {
  return (
    <div className="container mx-auto py-16 px-2">
      {/* SECTION 1 — Introduction + image + texte */}
      <section className="mb-20">
        {/* Titre et sous-titre en pleine largeur */}
        <div className="text-center mb-12">
          <h1 className="text-xl font-sans uppercase font-extrabold mb-2">
            LA PRÉPARATION MENTALE CA VOUS PARLE ?
          </h1>
          <h2 className="text-5xl font-serif font-extrabold max-w-2xl mx-auto leading-tight">
            « Quand tu auras désappris à espérer, je t’apprendrai à
vouloir » 
          </h2><p>Sénèque</p>
          <div className="w-24 mx-auto mb-6 mt-4">
            <Image
              src="/images/logo.png"
              alt="Logo Benoît Vasse"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        {/* Contenu avec image + paragraphe */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative w-full min-h-[400px] aspect-[9/11] rounded-lg overflow-hidden bigshadow">
              <Image
                src="/images/benoit-vasse-preparateur-approche.webp"
                alt="Mon approche"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 prose prose-lg max-w-none text-gray-900">
            <h3 className="text-xl font-extrabold mb-4">
              Pourquoi faire appel à un préparateur mental ?
            </h3>
            <p className="mb-4">
             Parce que l’on a « trop de … » … ou à l’inverse « pas assez de … », Parce que tout seul on a essayé … et on y arrive toujours pas !
            </p>
            <p className="mb-4">
              Manque de motivation - Blessures répétitives - Estime de soi en baisse - Agacements intempestifs -
Peur de ne pas y arriver - Perte de confiance - Envie de tout envoyer balader - Perte de repères -
Mauvaise gestion du stress - Manque de concentration - Difficulté à se fixer des objectifs clairs -
Perte de contrôle - Gestion des émotions - Difficulté d’attention - Fatigue chronique - Manque de
combativité Sommeil compliqué …
            </p>
            {/* Liens menu */}
            <p className="mt-4 font-bold">Découvrez : </p>
            <div className="flex flex-wrap gap-4 mb-8 font-bold">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className=" font-serif bg-[#FFF9C7] italic underline underline-offset-2 hover:text-primary transition rouge font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
