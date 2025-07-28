export const metadata = {
  title: 'Contact – Benoît Vasse',
  description: 'Contactez-moi pour un accompagnement en préparation mentale ou coaching.',
};

export default function ContactPage() {
  return (
    <section className="py-20 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">Contact</h1>
      <p className="mb-6">
        Vous souhaitez discuter de votre projet ou d’un accompagnement ? Contactez-moi :
      </p>
      <div className="space-y-2">
        <p>
          <strong>Email :</strong>{' '}
          <a href="mailto:benoit@vassecommunicant.fr" className="text-accent">
            benoit@vassecommunicant.fr
          </a>
        </p>
        <p>
          <strong>Téléphone :</strong> 06 12 34 56 78
        </p>
      </div>
    </section>
  );
}