import 'server-only';

import { JSX } from 'react';

import { HomePage } from '@/screens/home/HomePage';
import { getCategoriesWithPostCount } from '@/services/category.ts/category-service';
import { getPosts } from '@/services/post/post-service';

export default async function Home(): Promise<JSX.Element> {
  const posts = await getPosts();
  const categories = await getCategoriesWithPostCount();

  return <HomePage posts={posts} categories={categories} />;
}
