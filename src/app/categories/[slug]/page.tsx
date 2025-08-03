import { JSX } from 'react';

import { HomeScreen } from '@/screens/home/HomeScreen';
import { getCategoriesWithPostCount, getCategoryTitles } from '@/services/category.ts/category-service';
import { getPostsByCategory } from '@/services/post/post-service';

import type { CategoryListPageProps } from './types';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return (await getCategoryTitles()).map(({ title }) => ({ slug: title }));
}

export default async function CategoryListPage({ params }: CategoryListPageProps): Promise<JSX.Element> {
  const category = (await params).slug;
  const posts = await getPostsByCategory(category);
  const categories = await getCategoriesWithPostCount();

  return <HomeScreen posts={posts} categories={categories} currentCategory={category} />;
}
