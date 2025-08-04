import { Metadata } from 'next';
import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';
import { JSX } from 'react';

import { fontClasses } from '@/configs/fonts';
import { TITLE } from '@/constants/meatadata';
import { LayoutMain } from '@/layouts/main/MainLayout';
import { getCategoriesWithPostCount } from '@/services/category/category-service';

import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const categories = await getCategoriesWithPostCount();
  const tags = categories.slice(0, 5).map(({ title }) => title);

  const title: TemplateString = {
    template: `%s | ${TITLE}`,
    default: `${TITLE}`,
  };

  return {
    title,
    openGraph: {
      title,
      tags: tags,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={fontClasses}>
        <LayoutMain>{children}</LayoutMain>
      </body>
    </html>
  );
}
