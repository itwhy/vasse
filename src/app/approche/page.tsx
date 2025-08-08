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
  { href: "#convictions", label: "mes convictions" },
  { href: "#etapes", label: "Comment va se passer notre collaboration ?" },
  {
    href: "#outils",
    label: "Avoir un outil c’est bien… savoir s’en servir c’est mieux !",
  },
];
export default function ApprochePage() {
  return (
    <div className="container mx-auto py-16 px-2">
      {/* SECTION 1 — Introduction + image + texte */}
      <section className="mb-20">
        {/* Titre et sous-titre en pleine largeur */}
        <div className="text-center mb-12">
          <h1 className="text-xl font-sans uppercase font-extrabold mb-2">
            Mon approche terrain
          </h1>
          <h2 className="text-5xl font-serif font-extrabold max-w-2xl mx-auto leading-tight">
            Êtes-vous prêts à vous créer des espaces de croissance ?
          </h2>
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
            <div className="relative w-full min-h-[400px] aspect-[9/11] rounded-lg overflow-hidden shadow-xl">
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
              Points forts – Plaisir – Performance :
              <br />
              Le chemin de la réussite
            </h3>
            <p className="mb-4">
              Mon accompagnement aura toujours et en premier lieu, pour but de
              révéler les <strong>Points forts</strong>, ce qui aura pour
              conséquence de générer automatiquement la notion de{" "}
              <strong>Plaisir</strong>, et favorisera tout naturellement de la{" "}
              <strong>Performance</strong>.
            </p>
            <p>
              Au travers des exercices de préparation mentale et de la
              découverte de soi, l’athlète{" "}
              <strong>connait mieux ses talents</strong>. Il{" "}
              <strong>localise et développe les forces</strong> sur lesquelles
              il peut s’appuyer. Il{" "}
              <strong>travaille de nouvelles habiletés</strong> qui le rendent
              plus stable et serein. L’athlète, plus sûr de lui et de ses
              compétences, va <strong>prendre du plaisir</strong> à
              l’entrainement comme en compétition. Il{" "}
              <strong>
                franchira les épreuves avec confiance et efficacité
              </strong>
              .
            </p>
            {/* Liens menu */}
            <p className="mt-4 font-bold">Découvrez : </p>
            <div className="flex flex-wrap gap-4 mb-8 font-bold">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className=" font-serif  font-bold italic underline underline-offset-2 hover:text-primary transition rouge"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Convictions */}
      <section id="convictions">
        <h2 className="text-5xl font-serif font-extrabold text-center mb-8 mx-auto leading-tight">
          Mes convictions
        </h2>
        <div className="w-24 mx-auto mb-6 mt-4">
          <Image
            src="/images/logo.png"
            alt="Logo Benoît Vasse"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <div className="space-y-15">
          {[
            {
              title: "LE MOTEUR, C’EST L’ENVIE",
              quote: "« Vouloir c’est pouvoir ».",
              text: "Pour qu’il y ait accompagnement, il faut une demande explicite. Avoir envie de s’en donner les moyens pour progresser est essentiel. C’est la condition sine qua non de la réussite du projet.",
            },
            {
              title: "LA DISCIPLINE COMME GUIDE",
              quote: "« Pouvoir, c’est vouloir ».",
              text: "L’utilisation régulière des outils et des techniques favorise la mise en place de rituels et développe progressivement un nouvel état d’esprit.",
            },
            {
              title: "ENSEMBLE, FOCUS SUR L’OBJECTIF",
              quote: "« Ce qui est visible est atteignable ».",
              text: "Se fixer des objectifs clairs et pouvoir les mesurer est la base de mon approche.",
            },
            {
              title: "RIEN N’EST DÉFINITIF",
              quote: "Changer : oui peut-être ? Évoluer : oui sûrement !",
              text: "Je crois à la politique des petits pas et à la puissance des feedbacks pour s’extraire d’une situation qui paraissait définitive.",
            },
            {
              title: "DE LA PSYCHOLOGIE AVANT TOUT",
              quote: "La performance oui… mais pas à n’importe quel prix !",
              text: "Je suis convaincu que le bien-être et le plaisir sont les fondements de la construction de la performance.",
            },
            {
              title: "L’ÉTHIQUE : ÇA VA DE SOI",
              quote: "Confidentialité, proximité, alliance.",
              text: "On parle ici de confidentialité dans tous les échanges et interactions. Cela crée une proximité forte et une alliance pérenne.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-start`}
            >
              <div className="md:w-3/4  p-6 rounded-xl bg-white">
                <h3 className="text-xl font-extrabold mb-2">{item.title}</h3>
                <p className="font-serif italic font-extrabold text-lg text-accent mb-4">
                  {item.quote}
                </p>
                <p>{item.text}</p>
              </div>
              <div className="md:w-1/4"></div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — Collaboration */}
      <section className="mt-20 relative" id="etapes">
        <h2 className="text-5xl font-serif font-extrabold text-center mb-8 mx-auto leading-tight">
          Comment va se passer notre collaboration ?
        </h2>
        <h3 className="text-center mb-8 mx-auto">
          Chaque accompagnement est unique. Voici les grandes étapes que nous
          suivrons ensemble pour construire un travail sur mesure, adapté à
          votre discipline, votre réalité et vos objectifs.
        </h3>
        <div className="w-24 mx-auto">
          <Image
            src="/images/logo.png"
            alt="Logo Benoît Vasse"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Trait horizontal pointillé */}
        <div className="py-12 px-4">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            navigation={true}
            className="overflow-visible relative z-1 !pb-12"
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
            }}
          >
            {[
              {
                icon: (
                  <MessagesSquare
                    className="w-20 h-20 text-accent"
                    strokeWidth={1}
                  />
                ),
                desc: (
                  <>
                    <strong>
                      Je m’adapte aux spécificités de votre sport.
                    </strong>{" "}
                    J’en comprends les règles et les enjeux.
                  </>
                ),
              },
              {
                icon: (
                  <Handshake
                    className="w-20 h-20 text-accent"
                    strokeWidth={1}
                  />
                ),
                desc: (
                  <>
                    <strong>J’écoute et analyse les difficultés</strong> que
                    vous rencontrez = <strong>votre état présent</strong>. Je
                    réalise des <strong>entretiens semi directifs</strong> pour
                    aborder et comprendre votre réalité dans les sphères{" "}
                    <strong>personnelles</strong>,{" "}
                    <strong>
                      professionnelles / scolaires / universitaires
                    </strong>{" "}
                    et <strong>sportives</strong>.
                  </>
                ),
              },
              {
                icon: (
                  <BicepsFlexed
                    className="w-20 h-20 text-accent"
                    strokeWidth={1}
                  />
                ),
                desc: (
                  <>
                    Je propose <strong>toute une gamme de tests</strong> qui
                    analyseront avec précision vos <strong>habiletés</strong> à
                    l’entrainement comme en compétition.
                  </>
                ),
              },
              {
                icon: (
                  <ChevronsRight
                    className="w-20 h-20 text-accent"
                    strokeWidth={1}
                  />
                ),
                desc: (
                  <>
                    Je fixe avec vous <strong>votre objectif global</strong> ={" "}
                    <strong>votre état désiré</strong>. Je définis et propose
                    les <strong>outils</strong> pour renforcer et développer les{" "}
                    <strong>capacités mentales</strong> à acquérir.
                  </>
                ),
              },
              {
                icon: (
                  <RefreshCcw
                    className="w-20 h-20 text-accent"
                    strokeWidth={1}
                  />
                ),
                desc: (
                  <>
                    J’établis un <strong>plan d’action</strong> reposant sur des{" "}
                    <strong>séances d’accompagnement régulières</strong>.
                  </>
                ),
              },
            ].map((step, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-xl bg-white  p-6 min-h-[500px] shadow-lg flex flex-col text-center">
                  <div className="w-full flex items-center text-center justify-center w-24 h-24 mb-4">
                    {step.icon}
                  </div>
                  <span className="text-6xl w-full text-center  px-3 py-1 font-extrabold">
                    {index + 1}
                  </span>
                  <p>{step.desc}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </div>
      </section>

      <section className="mb-20" id="outils">
        {/* Titre et sous-titre en pleine largeur */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif font-extrabold max-w-2xl mx-auto leading-tight">
            Avoir un outil c’est bien…
            <br />
            savoir s’en servir c’est mieux !
          </h2>
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
          <div className="md:w-1/2 prose prose-lg max-w-none text-gray-900">
            <h3 className="text-xl font-extrabold mb-4">
              En fonction des objectifs à travailler, je propose des outils
              adaptés et éprouvés.
            </h3>
            <p className="mb-4">
              J’explique leurs choix, j’éclaire sur les bienfaits, j’accompagne
              dans leurs découvertes et leurs pratiques.
              <br />
              <strong>L’essentiel est de faire sens !</strong>
            </p>

            <div className="flex flex-col md:flex-row md:gap-12">
              {/* Colonne de gauche */}
              <div className="flex-1 space-y-3">
                {[
                  "Fixation d’objectifs",
                  "Dialogue interne",
                  "Relaxation",
                  "Imagerie mentale",
                  "Méditation",
                  "Contrôle respiratoire",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Colonne de droite */}
              <div className="flex-1 space-y-3 mt-6 md:mt-0">
                {[
                  "Switch",
                  "Routines de performance",
                  "Coaching de vie",
                  "Communication non verbale",
                  "DISC",
                  "Rythmes biologiques",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full min-h-[400px] aspect-[9/11] rounded-lg overflow-hidden bigshadow">
              <Image
                src="/images/benoit-outils.webp"
                alt="Mon approche"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
