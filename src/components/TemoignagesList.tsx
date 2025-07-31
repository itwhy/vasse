'use client';

import { motion } from 'framer-motion';

interface Temoin {
  nom: string;
  sport: string;
  description: string;
  quote: string;
}

export default function TemoignagesList({ temoignages }: { temoignages: Temoin[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {temoignages.map((t, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="p-6 bg-white shadow rounded-lg"
        >
          <p className="text-lg italic text-gray-700 mb-4">“{t.quote}”</p>
          <div className="text-sm text-gray-500">
            <p className="font-medium text-gray-800">{t.nom}</p>
            <p>{t.sport}</p>
            <p>{t.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}