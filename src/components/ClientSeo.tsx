'use client';
import { NextSeo } from 'next-seo';

export default function ClientSeo({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url?: string;
}) {
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