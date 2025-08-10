import Image from "next/image";
import Script from "next/script";
import { ArrowDown, HeartHandshake, Leaf, Compass, Laugh } from "lucide-react";

export const metadata = {
  metadataBase: new URL("https://benoitvasse.com"),
  title: "Qui suis‑je ? – Benoît Vasse, coach professionnel & préparateur mental",
  description:
    "Coach professionnel certifié (RNCP) et préparateur mental diplômé (DU Lille – STAPS). Parcours, diplômes, valeurs et posture d’accompagnement.",
  keywords: [
    "préparateur mental Lille",
    "coach professionnel RNCP",
    "coaching sportif",
    "préparation mentale",
    "Benoît Vasse",
  ],
  alternates: {
    canonical: "/a-propos-de-moi",
  },
  openGraph: {
    title: "Qui suis‑je ? – Benoît Vasse",
    description:
      "Coach professionnel certifié et préparateur mental diplômé. Parcours, diplômes, valeurs et posture.",
    url: "https://benoit.vassecommunicant.fr/a-propos-de-moi",
    siteName: "Benoît Vasse",
    locale: "fr_FR",
    type: "profile",
    images: [
      {
        url: "/images/og/benoit-vasse-preparateur-mental.jpg",
        width: 1200,
        height: 630,
        alt: "Benoît Vasse – Coach professionnel & préparateur mental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qui suis‑je ? – Benoît Vasse",
    description:
      "Coach professionnel certifié et préparateur mental diplômé. Parcours, diplômes, valeurs et posture.",
    images: ["/images/og/benoit-vasse-preparateur-mental.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AProposPage() {
  return (
    <div className="container mx-auto py-12 px-2">
      {/* JSON-LD Person */}
      <Script id="ld-person" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Benoît Vasse",
          jobTitle: "Coach professionnel & Préparateur mental",
          url: "https://benoit.vassecommunicant.fr/a-propos-de-moi",
          image: "https://benoit.vassecommunicant.fr/images/og/benoit-vasse-preparateur-mental.jpg",
          sameAs: [
            "https://www.linkedin.com/", // remplace par ton profil
            "https://www.instagram.com/", // remplace par ton profil
          ],
          worksFor: { "@type": "Organization", name: "vassecommunicant" },
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              name: "RNCP – Coach professionnel",
            },
            {
              "@type": "EducationalOccupationalCredential",
              name: "DU Préparation Mentale – Université de Lille (STAPS)",
            },
          ],
        })}
      </Script>

      {/* JSON-LD Fil d’Ariane */}
      <Script id="ld-breadcrumb" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Accueil",
              item: "https://benoit.vassecommunicant.fr/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "À propos",
              item: "https://benoit.vassecommunicant.fr/a-propos-de-moi",
            },
          ],
        })}
      </Script>

      {/* SECTION 1 — Intro */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h1 className="text-xl font-sans uppercase font-extrabold mb-2">Qui suis‑je&nbsp;?</h1>
          <h2 className="text-5xl font-serif font-extrabold max-w-3xl mx-auto leading-tight">
            Cap Développement&nbsp;!
          </h2>
          <div className="w-24 mx-auto mb-6 mt-6">
            <Image
              src="/images/logo.png"
              alt="Logo Benoît Vasse"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        {/* Image + chapeau */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative w-full min-h-[300px] aspect-[12/9] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/benoit-5.webp"
                alt="Benoît Vasse, coach professionnel et préparateur mental à Lille"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2 prose prose-lg max-w-none text-gray-900">
            <p className="mb-4">
              Je m’appelle <strong>Benoît VASSE</strong> – Coach professionnel certifié et{" "}
              <strong>Préparateur Mental</strong> diplômé. Je suis le fondateur et le gérant de{" "}
              <strong><a href="https://vassecommunicant.fr" className="text-accent">vassecommunicant</a></strong>.
            </p>
            <p>
              Accompagner un athlète ou une équipe, c’est d’abord <strong>bien communiquer,
              bien écouter</strong>, puis trouver le bon canal pour<strong> faire alliance</strong>. C’est être à la fois
              en posture d’émetteur et de récepteur. Bien se comprendre est la première garantie d’une{" "}
              <strong>confiance mutuelle</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Parcours (timeline) */}
      <section className="mb-20 bg-background-navi p-6 rounded-xl shadow-lg">
        <h2 className="text-5xl font-serif font-extrabold jaune text-center mb-8 leading-tight">
          Parcours pro
        </h2>
        <div className="w-24 mx-auto mb-10">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="object-contain mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <ol className="relative border-l-2 border-dashed border-accent/60 pl-6 space-y-10">
            {/* Étape 1 */}
            <li className="relative">
              <span className="absolute -left-[35px] top-1.5 h-5 w-5 rounded-full bg-accent" />
              <h3 className="text-xl jaune font-extrabold mb-2">Médias, Communication & Marketing — 25 ans</h3>
              <ul className="space-y-2 text-white">
                {[
                  "Directeur de clientèle en agences de communication",
                  "Journaliste Reporter à France 3 Lille",
                  "Responsable du Sponsoring chez COFIDIS",
                  "Directeur de la Communication (ALTAREA/COGEDIM – GROUPE BARRIÈRE)",
                  "Professeur vacataire à Sciences Po Lille",
                  <>
                    <strong>Créateur de vassecommunicant</strong>
                  </>,
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowDown className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </li>

            {/* Étape 2 */}
            <li className="relative">
              <span className="absolute -left-[35px] top-1.5 h-5 w-5 rounded-full bg-accent" />
              <h3 className="text-xl jaune font-extrabold mb-2">Métiers de l’accompagnement</h3>
              <ul className="space-y-2 text-white mb-6">
                {[
                  <>
                    Coach Professionnel <strong>RNCP / Niveau 2</strong> (depuis 2014)
                  </>,
                  <>
                    Coach <strong>PCC</strong> – Fédération Internationale de Coaching (ICF)
                  </>,
                  <>
                    <strong>Mentor</strong> de coachs
                  </>,
                  <>
                    Préparateur Mental – <strong>Université de Lille</strong> (DU Préparation Mentale & Psychologie du Sport, UFR STAPS, 2022)
                  </>,
                  <>
                    Praticien certifié <strong>DISC</strong>
                  </>,
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowDown className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* SECTION 3 — Diplômes & affiliations (cartes avec images) */}
      <section className="mb-20 p-4 md:p-0">
        <h2 className="text-4xl font-serif font-extrabold text-center mb-8 leading-tight text-grey-900">
          Diplômes & affiliations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: "/images/rncp.png",
              title: "Coach professionnel",
              text: (
                <>
                  Certification <strong>RNCP / Niveau 2</strong> – depuis 2014
                </>
              ),
            },
            {
              img: "/images/icf.png",
              title: "ICF – PCC",
              text: (
                <>
                  Membre <strong>PCC</strong>, mentor de coachs
                </>
              ),
            },
            {
              img: "/images/ufr3s.png",
              title: "Préparateur mental (DU)",
              text: (
                <>
                  <strong>Université de Lille</strong> – UFR STAPS (2022)
                </>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 text-center flex flex-col items-center bg-white/60 rounded-xl shadow-lg"
            >
              <div className="relative w-full h-16 mb-3">
                <Image src={item.img} alt={item.title} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-extrabold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — Le MIX gagnant */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h1 className="text-xl font-sans uppercase font-extrabold mb-2">Le MIX gagnant</h1>
          <h2 className="text-5xl font-serif font-extrabold max-w-3xl mx-auto leading-tight">
            Une force en trois postures
          </h2>
          <div className="w-24 mx-auto mb-6 mt-6">
            <Image
              src="/images/logo.png"
              alt="Logo Benoît Vasse"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative w-full min-h-[300px] aspect-[9/9] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/mix-gagnant.webp"
                alt="Le MIX gagnant : communicant, coach professionnel et préparateur mental"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 prose prose-lg max-w-none text-gray-900">
            <p>
              La force de mon savoir-faire, c’est d’associer <strong>trois postures</strong> :<br /> celle du{" "}
              <strong>communicant expérimenté</strong>,<br />celle du <strong>coach professionnel certifié</strong>, <br />et celle du{" "}
              <strong>préparateur mental diplômé</strong>.
            </p>
            <p className="mt-4">
              Je peux m’appuyer sur une longue expérience de communicant pour des{" "}
              <strong>grands groupes nationaux</strong>. Collaborer avec un athlète, c’est aussi faire preuve de{" "}
              <strong>psychologie</strong> : s’intéresser à sa personnalité et à sa singularité, appréhender les sphères
              professionnelle/scolaire et personnelle, <strong>comprendre ses valeurs et ses croyances</strong>. 
              </p><p className="mt-4">Mes postures
              actuelles en <em>executive coach</em> et <em>life coaching</em> renforcent cette compréhension de l’humain.
            </p>
            <p className="mt-4">
              Conseiller sur les habiletés mentales demande une{" "}
              <strong>connaissance solide de la pratique sportive</strong>. Maîtriser <strong>outils</strong> et{" "}
              <strong>techniques</strong> au service de la performance est indispensable. Travailler avec le haut niveau, préparer et
              participer aux Jeux Olympiques, est une source d’inspiration et le moteur d’une{" "}
              <strong>exigence professionnelle</strong> perpétuelle.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — “Cartes” Fil rouge / Terrain / Valeurs / Personnalité */}
      <section className="mb-8">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-serif font-extrabold text-center mb-4 leading-tight text-gray-900">
            Benoît Vasse, c’est…
          </h2>
          <div className="my-4 h-[30px] border-l-2 border-dotted border-accent" />

          <div className="p-4 w-full text-center">
            <HeartHandshake className="w-10 h-10 text-accent mb-3 mx-auto" strokeWidth={1.5} />
            <h3 className="text-5xl font-serif font-extrabold mb-2">Un fil rouge</h3>
            <p>
              Développer des projets <strong>Créatifs</strong>, <strong>Ambitieux</strong> et <strong>Collectifs</strong>.
            </p>
          </div>

          <div className="h-[30px] border-l-2 border-dotted border-accent" />

          <div className="p-4 w-full text-center">
            <Compass className="w-10 h-10 text-accent mb-3 mx-auto" strokeWidth={1.5} />
            <h3 className="text-5xl font-serif font-extrabold mb-2">Un terrain de jeu préféré</h3>
            <p>
              L’accompagnement <strong>dans la nature</strong> et <strong>en marchant</strong>.
            </p>
          </div>

          <div className="h-[30px] border-l-2 border-dotted border-accent" />

          <div className="p-4 w-full text-center">
            <Leaf className="w-10 h-10 text-accent mb-3 mx-auto" strokeWidth={1.5} />
            <h3 className="text-5xl font-serif font-extrabold mb-2">Des valeurs</h3>
            <p>
              <strong>Liberté</strong> – <strong>Engagement</strong> – <strong>Humour</strong>.
            </p>
          </div>

          <div className="h-[30px] border-l-2 border-dotted border-accent" />

          <div className="p-4 w-full text-center">
            <Laugh className="w-10 h-10 text-accent mb-3 mx-auto" strokeWidth={1.5} />
            <h3 className="text-5xl font-serif font-extrabold mb-2">Une personnalité</h3>
            <p>
              <strong>Énergique</strong>, <strong>Enthousiaste</strong>, <strong>Généreux</strong> et{" "}
              <strong>Exigent</strong>.
            </p>
          </div>

          <div className="h-[30px] border-l-2 border-dotted border-accent" />
        </div>
      </section>

    </div>
  );
}