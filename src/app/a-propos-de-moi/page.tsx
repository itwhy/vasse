export const metadata = {
  title: 'Parcours – Benoît Vasse',
  description: 'Mon expérience professionnelle et mes certifications en coaching et préparation mentale.',
};

export default function ParcoursPage() {
  return (
    <section className="py-20 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">Mon Parcours</h1>
      <p className="mb-4">
        25 ans d’expérience dans les médias, la communication et le marketing :
        Directeur de clientèle, Journaliste Reporter (France 3), Responsable Sponsoring
        (COFIDIS), Directeur de la Communication (ALTAREA/COGEDIM – Groupe BARRIERE),
        Professeur vacataire à Sciences Po Lille.
      </p>
      <p className="mb-4">
        Depuis 2014, Coach Professionnel certifié RNCP (Niveau 2) et membre ICF (niveau PCC).
        Diplômé en préparation mentale et psychologie du sport (Université de Lille – UFR STAPS).
        Praticien certifié DISC.
      </p>
    </section>
  );
}