import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTAContactProps {
  image: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
}

export default function CTAContact({
  image,
  title,
  subtitle,
  buttonText = 'Contactez-moi',
  href = '/contact',
}: CTAContactProps) {
  return (
    <div className="relative w-full h-72 md:h-96 rounded-xl shadow-lg overflow-hidden">
      {/* Image de fond */}
      <Image
        src={image}
        alt="CTA background"
        fill
        className="object-cover object-top object-right"
        priority
      />

      {/* Couche floutée avec mask dégradé */}
      <div className="absolute inset-y-0 left-0 w-2/3 backdrop-blur-md bg-white/70 [mask-image:linear-gradient(to_right,white,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%]" />

      {/* Contenu texte */}
      <div className="absolute inset-y-0 left-0 w-full md:w-2/3 flex flex-col justify-center p-8 md:p-16">
        <h2 className="text-3xl md:text-4xl font-serif font-extrabold mb-4 text-gray-900">{title}</h2>
        {subtitle && (
          <p className="text-lg mb-6 max-w-md font-bold text-white md:text-gray-900">{subtitle}</p>
        )}
        <Link
  href={href}
  className=" w-fit px-6 py-3 bg-accent jaune rounded-full font-medium shadow-xl transition
             hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:shadow-md flex items-center gap-2"
>
  {buttonText}
  <ArrowRight className="w-4 h-4" />
  
</Link>
      </div>
    </div>
  );
}