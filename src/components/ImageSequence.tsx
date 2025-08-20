'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
  images: { src: string; alt?: string }[];
  interval?: number; // en ms
  className?: string; // pour styler le conteneur
};

export default function ImageSequence({ images, interval = 300, className }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images?.length) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      {/* calque par calque, on joue sur l’opacité */}
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt || ''}
          fill
          priority={i === 0}
          className={`object-cover absolute inset-0 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}