'use client';

import { QueryClient, useQueries } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { JSX } from 'react';

import { PostScreen } from '@/screens/post/PostScreen';
import { getCategoriesWithPostCount } from '@/services/category/category-service';
import { getPostBySlug } from '@/services/post/post-service';

import type { CategoryWithCount } from '@/types/category';
import type { Post } from '@/types/post';

const queryClient = new QueryClient();

export function DynamicPostScreen(): JSX.Element | null {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  const [{ data: post }, { data: categories }] = useQueries(
    {
      queries: [
        {
          queryKey: ['post', slug],
          queryFn: (): Promise<Post> => getPostBySlug(slug || ''),
          retry: 2,
        },
        {
          queryKey: ['categories'],
          queryFn: (): Promise<CategoryWithCount[]> => getCategoriesWithPostCount(),
          retry: 2,
        },
      ],
    },
    queryClient
  );

  if (!post) {
    return null;
  }

  return <PostScreen post={post} categories={categories || []} />;
}
