import Head from 'next/head';

export interface SeoTitle {
  title: string;
}

export default function Seo({ title }: SeoTitle) {
  return (
    <Head>
      <title>{title} | Kerem Movies</title>
    </Head>
  );
}
