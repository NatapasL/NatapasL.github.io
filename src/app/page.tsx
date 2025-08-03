import 'server-only';

import { JSX } from 'react';

import { HomePage } from '@/screens/home/HomePage';
import { getPosts } from '@/services/post/post';

export default async function Home(): Promise<JSX.Element> {
  const posts = await getPosts();

  return <HomePage posts={posts} />;
}
