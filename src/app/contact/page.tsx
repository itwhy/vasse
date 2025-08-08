'use client';

import { useState } from 'react';
import { Instagram, Linkedin } from 'lucide-react';

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
            className="w-full border rounded-md p-3 bg-white/70"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-3 bg-white/70"
          />
          <input
            type="phone"
            name="phone"
            placeholder="Votre téléphone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-3 bg-white/70"
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-3 bg-white/70"
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

        {/* Infos + Réseaux sociaux 1/3 */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-semibold">Informations</h2>
          <p className="text-lg"><strong>Nom :</strong> Benoît Vasse</p>
          <p className="text-lg"><strong>Téléphone :</strong> 06 12 12 17 10</p>

          <h2 className="text-2xl font-serif font-semibold mt-8">Réseaux sociaux</h2>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.instagram.com/benoit.vasse/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-800 hover:text-accent transition"
            >
              <Instagram className="w-6 h-6" />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/beno%C3%AEt-vasse-b09948a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-800 hover:text-accent transition"
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}