import 'next';
// src/types/next.d.ts
declare module 'next' {
  export interface PageParams {
    [key: string]: string;
  }

  // On override le type des pages dynamiques pour forcer params à être un objet simple
  export interface PageProps<T extends PageParams = PageParams> {
    params: T;
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}