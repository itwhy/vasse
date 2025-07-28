import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Accueil – Benoît Vasse',
  description: 'Préparateur mental diplômé et coach certifié. Découvrez mon approche et mon parcours.',
};

export default function HomePage() {
  return (
    <AnimatedSection>
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold text-primary mb-6">
          La performance commence dans la tête
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Préparateur mental diplômé et coach certifié. J’accompagne les athlètes,
          équipes et dirigeants vers la performance durable.
        </p>
      </section>
    </AnimatedSection>
  );
}