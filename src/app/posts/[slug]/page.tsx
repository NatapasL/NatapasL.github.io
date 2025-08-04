import 'server-only';

import { Metadata } from 'next';
import { JSX } from 'react';

import { PostScreen } from '@/screens/post/PostScreen';
import { getCategoriesWithPostCount } from '@/services/category/category-service';
import { getPostBySlug, getPostSlugs } from '@/services/post/post-service';

import type { PostSlug } from '@/types/post';
import type { PostPageProps } from './types';

export async function generateStaticParams(): Promise<PostSlug[]> {
  return (await getPostSlugs()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      type: 'article',
      tags: post.categories || [],
    },
  };
}

export default async function PostPage({ params }: PostPageProps): Promise<JSX.Element> {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  const categories = await getCategoriesWithPostCount();

  return <PostScreen post={post} categories={categories} />;
}
