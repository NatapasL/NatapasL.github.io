import 'server-only';

import { JSX } from 'react';

import { PostScreen } from '@/screens/post/PostScreen';
import { getCategoriesWithPostCount } from '@/services/category/category-service';
import { getPostBySlug, getPostSlugs } from '@/services/post/post-service';

import type { PostSlug } from '@/types/post';
import type { PostPageProps } from './types';

export async function generateStaticParams(): Promise<PostSlug[]> {
  return (await getPostSlugs()).map(({ slug }) => ({ slug }));
}

export default async function PostPage({ params }: PostPageProps): Promise<JSX.Element> {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  const categories = await getCategoriesWithPostCount();

  return <PostScreen post={post} categories={categories} />;
}
