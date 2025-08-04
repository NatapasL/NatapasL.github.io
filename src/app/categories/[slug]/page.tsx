import 'server-only';

import { Metadata } from 'next';
import { JSX } from 'react';

import { HomeScreen } from '@/screens/home/HomeScreen';
import { getCategoriesWithPostCount, getCategoryTitles } from '@/services/category/category-service';
import { getPostsByCategory } from '@/services/post/post-service';

import type { CategoryListPageProps } from './types';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return (await getCategoryTitles()).map(({ title }) => ({ slug: title }));
}

export async function generateMetadata({ params }: CategoryListPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const categoryTitle = decodeURIComponent(slug);

  return {
    title: `#${categoryTitle}`,
  };
}

export default async function CategoryListPage({ params }: CategoryListPageProps): Promise<JSX.Element> {
  const category = (await params).slug;
  const posts = await getPostsByCategory(category);
  const categories = await getCategoriesWithPostCount();

  return <HomeScreen posts={posts} categories={categories} currentCategory={category} />;
}
