import Image from "next/image";
import { Award, GraduationCap, ListChecks, HeartHandshake, Leaf, Compass, Laugh, Mountain } from "lucide-react";

export const metadata = {
  title: "À propos – Benoît Vasse",
  description:
    "Coach professionnel certifié et préparateur mental diplômé. Parcours, diplômes, posture et valeurs.",
};

export default function AProposPage() {
  return (
    <div className="container mx-auto py-16 px-2">
      {/* SECTION 1 — Intro */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h1 className="text-xl font-sans uppercase font-extrabold mb-2">Qui suis‑je&nbsp;?</h1>
          <h2 className="text-5xl font-serif font-extrabold max-w-3xl mx-auto leading-tight">
            Cap Développement&nbsp;!
          </h2>
          <div className="w-24 mx-auto mb-6 mt-6">
            <Image src="/images/logo.png" alt="Logo Benoît Vasse" width={50} height={50} className="object-contain" />
          </div>
        </div>

        {/* Image + chapeau */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative w-full min-h-[300px] aspect-[9/9] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/benoit-vasse-preparateur-approche.webp"
                alt="Benoît Vasse"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2 prose prose-lg max-w-none text-gray-900">
            <p className="mb-4">
            Je m’appelle <strong>Benoît VASSE</strong> – Coach professionnel certifié et <strong>Préparateur Mental</strong> diplômé.
            Je suis le fondateur et le gérant de <strong>vassecommunicant</strong>.
          </p>
            <p>
              Accompagner un athlète ou une équipe, c’est d’abord <strong>bien communiquer</strong>, écouter, puis trouver le bon canal pour
              <strong> faire alliance</strong>. C’est être à la fois en posture d’émetteur et de récepteur. Bien se comprendre est la
              première garantie d’une <strong>confiance mutuelle</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Parcours (timeline) */}
      <section className="mb-20">
        <h2 className="text-5xl font-serif font-extrabold text-center mb-8 leading-tight">Parcours pro</h2>
        <div className="w-24 mx-auto mb-10">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="object-contain mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <ol className="relative border-l-2 border-dashed border-accent/60 pl-6 space-y-10">
            {/* Étape 1 */}
            <li className="relative">
              <span className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-accent ring-4 ring-accent/20" />
              <h3 className="text-xl font-extrabold mb-2">Médias, Communication & Marketing — 25 ans</h3>
              <p className="text-gray-700">
                Directeur de clientèle en agences de communication – Journaliste Reporter à France&nbsp;3 Lille – Responsable du
                Sponsoring chez COFIDIS – Directeur de la Communication (ALTAREA/COGEDIM – GROUPE BARRIÈRE) – Professeur vacataire à
                Sciences&nbsp;Po Lille – <strong>Créateur de vassecommunicant</strong>.
              </p>
            </li>

            {/* Étape 2 */}
            <li className="relative">
              <span className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-accent ring-4 ring-accent/20" />
              <h3 className="text-xl font-extrabold mb-2">Métiers de l’accompagnement</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Coach Professionnel <strong>RNCP / Niveau 2</strong> (depuis 2014)</li>
                <li>Coach <strong>PCC</strong> – Fédération Internationale de Coaching (ICF)</li>
                <li><strong>Mentor</strong> de coachs</li>
                <li>Préparateur Mental – <strong>Université de Lille</strong> (DU Préparation Mentale & Psychologie du Sport, UFR STAPS, 2022)</li>
                <li>Praticien certifié <strong>DISC</strong></li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* SECTION 3 — Diplômes & affiliations (cartes) */}
{/* SECTION 3 — Diplômes & affiliations (cartes avec images) */}
<section className="mb-20 p-4 md:p-8">
  <h2 className="text-4xl font-serif font-extrabold text-center mb-8 leading-tight text-grey-900">
    Diplômes & affiliations
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        img: "/images/rncp.png",
        title: "Coach professionnel",
        text: <>Certification <strong>RNCP / Niveau 2</strong> – depuis 2014</>,
      },
      {
        img: "/images/icf.png",
        title: "ICF – PCC",
        text: <>Membre <strong>PCC</strong>, mentor de coachs</>,
      },
      {
        img: "/images/ufr3s.png",
        title: "Préparateur mental (DU)",
        text: <><strong>Université de Lille</strong> – UFR STAPS (2022)</>,
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="p-6 text-center flex flex-col items-center"
      >
        <div className="relative w-32 h-32 mb-3">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-extrabold mb-2">{item.title}</h3>
        <p className="text-gray-700">{item.text}</p>
      </div>
    ))}
  </div>
</section>

      {/* SECTION 4 — Le mix gagnant */}
      <section className="mb-20">
        <h2 className="text-4xl font-serif font-extrabold text-center mb-6 leading-tight">Le MIX gagnant</h2>
        <div className="w-20 mx-auto mb-8">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="object-contain mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none text-gray-900">
          <p>
            La force de mon savoir‑faire, c’est d’associer <strong>trois postures</strong> : celle du <strong>communicant expérimenté</strong>,
            celle du <strong>coach professionnel certifié</strong>, et celle du <strong>préparateur mental diplômé</strong>.
          </p>
          <p>
            Je peux m’appuyer sur une longue expérience de communicant pour des <strong>grands groupes nationaux</strong>. Collaborer avec un
            athlète, c’est aussi faire preuve de <strong>psychologie</strong> : s’intéresser à sa personnalité et à sa singularité, appréhender
            les sphères professionnelle/scolaire et personnelle, <strong>comprendre ses valeurs et ses croyances</strong>. Mes postures
            actuelles en <em>executive coach</em> et <em>life coaching</em> renforcent cette compréhension de l’humain.
          </p>
          <p>
            Conseiller sur les habiletés mentales demande une <strong>connaissance solide de la pratique sportive</strong>. Maîtriser
            <strong> outils</strong> et <strong>techniques</strong> au service de la performance est indispensable. Travailler avec le haut niveau, préparer et
            participer aux Jeux Olympiques, est une source d’inspiration et le moteur d’une <strong>exigence professionnelle</strong> perpétuelle.
          </p>
        </div>
      </section>

      {/* SECTION 5 — “Cartes” Fil rouge / Terrain / Valeurs / Personnalité */}
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white shadow-lg">
            <HeartHandshake className="w-9 h-9 text-accent mb-3" strokeWidth={1.5} />
            <h3 className="text-xl font-extrabold mb-2">Mon fil rouge</h3>
            <p>Développer des projets <strong>Créatifs</strong>, <strong>Ambitieux</strong> et <strong>Collectifs</strong>.</p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-lg">
            <Compass className="w-9 h-9 text-accent mb-3" strokeWidth={1.5} />
            <h3 className="text-xl font-extrabold mb-2">Mon terrain de jeu préféré</h3>
            <p>L’accompagnement <strong>dans la nature</strong> et <strong>en marchant</strong>.</p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-lg">
            <Leaf className="w-9 h-9 text-accent mb-3" strokeWidth={1.5} />
            <h3 className="text-xl font-extrabold mb-2">Mes valeurs</h3>
            <p><strong>Liberté</strong> – <strong>Engagement</strong> – <strong>Humour</strong>.</p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-lg">
            <Laugh className="w-9 h-9 text-accent mb-3" strokeWidth={1.5} />
            <h3 className="text-xl font-extrabold mb-2">Ma personnalité</h3>
            <p><strong>Énergique</strong>, <strong>Enthousiaste</strong>, <strong>Généreux</strong> et <strong>Exigent</strong>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}