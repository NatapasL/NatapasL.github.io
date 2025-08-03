import 'server-only';

import { JSX } from 'react';

import { HomeScreen } from '@/screens/home/HomeScreen';
import { getCategoriesWithPostCount } from '@/services/category/category-service';
import { getPosts } from '@/services/post/post-service';

export default async function Home(): Promise<JSX.Element> {
  const posts = await getPosts();
  const categories = await getCategoriesWithPostCount();

  return <HomeScreen posts={posts} categories={categories} />;
}
