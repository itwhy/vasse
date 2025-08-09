"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import { Brain, Target, Activity } from "lucide-react";

const navLinks = [
  { href: "#convictions", label: "La préparation mentale … c’est quoi au juste ?" },
  { href: "#etapes", label: "Un team performant pour quoi ?" },
  { href: "#outils", label: "La préparation mentale … c’est pour qui ?" },
];

export default function PreparationMentalePageClient() {
  return (
    <div className="container mx-auto py-16 px-2">
      {/* SECTION 1 — Intro */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h1 className="text-xl font-sans uppercase font-extrabold mb-2">
            LA PRÉPARATION MENTALE CA VOUS PARLE ?
          </h1>
          <h2 className="text-5xl font-serif font-extrabold max-w-2xl mx-auto leading-tight">
            « Quand tu auras désappris à espérer, je t’apprendrai à vouloir »
          </h2>
            <p className="mt-2 text-gray-500 mx-auto">Sénèque</p>
          <div className="w-12 mx-auto mb-6 mt-4">
            <Image
              src="/images/logo.png"
              alt="Logo Benoît Vasse"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative w-full min-h-[400px] aspect-[9/11] rounded-lg overflow-hidden bigshadow">
              <Image
                src="/images/benoit-3.webp"
                alt="Athlète en préparation mentale"
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
              Parce que l’on a « trop de … »,<br /> ou à l’inverse « pas assez de … ».<br />Parce que tout seul on a essayé … et on n’y arrive toujours pas !
            </p>
            <p className="mb-4 text-justify">
              Manque de motivation – Blessures répétitives – Estime de soi en baisse – Agacements intempestifs –
              Peur de ne pas y arriver – Perte de confiance – Envie de tout envoyer balader – Perte de repères –
              Mauvaise gestion du stress – Manque de concentration – Difficulté à se fixer des objectifs clairs –
              Perte de contrôle – Gestion des émotions – Difficulté d’attention – Fatigue chronique – Manque de
              combativité – Sommeil compliqué…
            </p>

            <p className="mt-4 font-bold">Découvrez :</p>
            <div className="flex flex-col gap-4 mt-2 font-bold">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="w-fit bg-link text-[0.9rem] text-white shadow-lg/5 rounded-full py-1 px-4 font-sans hover:jaune transition  flex items-center gap-2"
    >
      {link.label}<ArrowRight className="w-4 h-4" />
    </Link>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — La préparation mentale, c’est quoi ? */}
      <section id="convictions" className="py-16 rounded-xl bg-background-navi px-4 md:px-8 mb-16 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold jaune leading-tight mb-6">
            La préparation mentale…<br />c’est quoi au juste ?
          </h2>
          <blockquote className="relative">
            <p className="font-serif text-xl text-white md:text-2xl italic">
              On définit la préparation mentale comme une « préparation à la compétition par un apprentissage
              d’habiletés mentales et d’habiletés d’organisation, dont le but principal est d’optimiser la
              performance personnelle de l’athlète tout en promouvant le plaisir de la pratique et l’atteinte de
              l’autonomie ».
            </p>
            <footer className="mt-4 text-sm text-gray-400">
              <cite>Jean Fournier – <em>Les cahiers de l’INSEP n°22</em>, 1998</cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* SECTION 3 — Un team performant pour quoi ? */}
      <section id="etapes" className="py-16 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold leading-tight">
            Un team performant pour quoi&nbsp;?
          </h2>
          <div className="w-20 mx-auto my-6">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="mx-auto" />
          </div>
          <p className="max-w-3xl mx-auto text-gray-700">
            C’est une collaboration efficace entre <strong>trois domaines d’expertise</strong> qui propulsent l’athlète vers une
            <strong> performance durable</strong>.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          <div className="p-6 rounded-xl shadow-md bg-white/70 text-center">
            <Target className="w-12 h-12 mx-auto mb-4 text-accent" strokeWidth={1.5} />
            <h3 className="text-xl font-extrabold mb-3">L’entraîneur / coach</h3>
            <p className="text-gray-700">
              Mission&nbsp;: <strong>atteindre les résultats</strong> à l’entraînement et en compétition, via la <strong>technique</strong> et la <strong>tactique</strong> propres à la discipline.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md bg-white/70 text-center">
            <Activity className="w-12 h-12 mx-auto mb-4 text-accent" strokeWidth={1.5} />
            <h3 className="text-xl font-extrabold mb-3">Préparation physique & médicale</h3>
            <p className="text-gray-700">
              Mission&nbsp;: développer les <strong>habiletés physiques</strong> et <strong>physiologiques</strong> pour un corps <strong>tonique</strong> et <strong>résistant</strong>.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md bg-white/70 text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-accent" strokeWidth={1.5} />
            <h3 className="text-xl font-extrabold mb-3">Le préparateur mental</h3>
            <p className="text-gray-700">
              Mission&nbsp;: développer les <strong>habiletés mentales</strong> et <strong>psychologiques</strong> pour aligner <strong>émotions</strong> et <strong>mental</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — La préparation mentale, c’est pour qui ? */}
      <section id="outils" className="px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold leading-tight">
            La préparation mentale… c’est pour qui ?
          </h2>
          <div className="w-20 mx-auto my-6">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="mx-auto" />
          </div>
          <p className="max-w-3xl mx-auto text-gray-900">
            Historiquement, elle s’adresse aux <strong>militaires</strong> et aux <strong>athlètes de haut niveau</strong>.
            <br />Aujourd’hui, elle concerne aussi les <strong>sportifs amateurs</strong>, les <strong>dirigeants</strong>, les <strong>cadres</strong>, les
            <strong> étudiants</strong> (concours/examens) <strong>et toutes les personnes</strong> souhaitant améliorer leurs pratiques et atteindre leurs objectifs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Athlètes de haut niveau",
            "Sportifs amateurs",
            "Dirigeants & cadres",
            "Étudiants (concours/examens)",
            "Artistes & performeurs",
            "Enfants, ados, adultes",
            "Individuel & équipe",
          ].map((item) => (
            <div
              key={item}
              className="px-4 py-2 rounded-full bg-background-navi shadow-sm text-center jaune font-bold"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* JSON‑LD: Article */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Qu’est‑ce que la préparation mentale ?",
            mainEntityOfPage: "/preparation-mentale",
            author: { "@type": "Person", name: "Benoît Vasse" },
            publisher: { "@type": "Organization", name: "Benoît Vasse" },
            articleSection: ["Définition", "Rôles dans l’équipe", "Pour qui ?"],
          }),
        }}
      />
      {/* JSON‑LD: Breadcrumbs */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
              { "@type": "ListItem", position: 2, name: "Préparation mentale", item: "/preparation-mentale" },
            ],
          }),
        }}
      />
    </div>
  );
}