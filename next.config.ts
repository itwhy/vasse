import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Exemple : ancien slug -> nouveau slug
      {
        source: '/temoignages/sarah-toulemonde-equitation',
        destination: '/temoignages/cavaliere-saut-obstacle', // ton nouveau slug
        permanent: true, // 301 permanent
      },
      {
        source: '/temoignages/ines-lardeur-hockey',
        destination: '/temoignages/hockey',
        permanent: true,
      },
      {
        source: '/temoignages/lena-thorez-epeiste',
        destination: '/temoignages/epeiste',
        permanent: true,
      },
      {
        source: '/temoignages/fanny-dumur-interne-medecine',
        destination: '/temoignages/interne-medecine',
        permanent: true,
      },
      {
        source: '/temoignages/mateo-colsenet-bmx',
        destination: '/temoignages/pilote-equipe-de-france-bmx',
        permanent: true,
      },
      {
        source: '/temoignages/driss-mlahfi-sprinteur',
        destination: '/temoignages/sprint-saut-handisport',
        permanent: true,
      },
      // tu peux en mettre autant que tu veux
    ];
  },
};

export default nextConfig;
