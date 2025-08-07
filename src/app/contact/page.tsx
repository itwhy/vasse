'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Erreur lors de l’envoi');
      setStatus('sent');
      setFormData({ nom: '', email: '', message: '', phone: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="container mx-auto py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Formulaire 2/3 */}
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-serif font-bold mb-4">Me contacter</h1>
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-3"
          />
          <input
            type="phone"
            name="phone"
            placeholder="Votre téléphone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-3"
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-3"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-accent text-white px-6 py-3 rounded-md shadow hover:shadow-lg transition"
          >
            {status === 'loading' ? 'Envoi...' : 'Envoyer'}
          </button>
          {status === 'sent' && <p className="text-green-600">Message envoyé !</p>}
          {status === 'error' && <p className="text-red-600">Erreur lors de l’envoi.</p>}
        </form>

        {/* Infos de contact 1/3 */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-semibold">Coordonnées</h2>
          <p><strong>Email :</strong> benoit@email.fr</p>
          <p><strong>Téléphone :</strong> 06 12 34 56 78</p>
          <p><strong>Adresse :</strong><br />123 Rue du Coaching<br />75000 Paris</p>
        </div>
      </div>
    </section>
  );
}