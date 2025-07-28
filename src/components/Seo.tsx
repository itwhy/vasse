'use client';

import { NextSeo } from 'next-seo';

type SeoProps = {
  title: string;
  description: string;
  url?: string;
};

export default function Seo({ title, description, url }: SeoProps) {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        url,
        type: 'website',
        siteName: 'Benoît Vasse - Préparateur Mental',
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
  );
}