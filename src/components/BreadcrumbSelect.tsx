'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface Temoin {
  slug: string;
  nom: string;
}

export default function BreadcrumbSelect({ temoignages, currentSlug }: { temoignages: Temoin[], currentSlug: string }) {
  const router = useRouter();

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Accueil</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/temoignages">Témoignages</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Select
            defaultValue={currentSlug}
            onValueChange={(value) => router.push(`/temoignages/${value}`)}
          >
            <SelectTrigger className="w-auto px-0 py-0 text-gray-800 font-medium bg-transparent border-0 shadow-none focus:ring-0 hover:text-accent transition">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="shadow-md border rounded-md">
              {temoignages.map((t) => (
                <SelectItem key={t.slug} value={t.slug}>
                  {t.nom}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}