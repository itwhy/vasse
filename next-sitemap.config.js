// next-sitemap.config.js
const path = require('path');
const fs = require('fs/promises');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://benoitvasse.com',
  generateRobotsTxt: true,
  outDir: 'public',
  changefreq: 'weekly',
  priority: 0.7,

  // 1) Empêche l’auto-liste des routes (qui change l’ordre)
  exclude: ['*'],

  // 2) Tu fournis toutes les URLs, dans l’ordre voulu
  additionalPaths: async (config) => {
    // D’abord la home
    const ordered = ['/', '/a-propos-de-moi', '/preparation-mentale', '/approche', '/temoignages', '/contact'];

    // Ajoute les témoignages dynamiques (après les pages statiques)
    try {
      const file = await fs.readFile(path.join(process.cwd(), 'data', 'temoignages.json'), 'utf-8');
      const items = JSON.parse(file);
      for (const t of items) {
        if (t?.slug) ordered.push(`/temoignages/${t.slug}`);
      }
    } catch (e) {
      console.warn('next-sitemap: data/temoignages.json introuvable ou invalide:', e?.message);
    }

    // Transform pour régler les priorités (home plus haute)
    return Promise.all(
      ordered.map((url) =>
        config.transform(config, url, {
          changefreq: url.startsWith('/temoignages/') ? 'monthly' : 'weekly',
          priority: url === '/' ? 1.0 : url.startsWith('/temoignages/') ? 0.6 : 0.8,
        })
      )
    );
  },
};