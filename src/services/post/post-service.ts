import { client } from '@/lib/sanityClient';
import { GET_POSTS_BY_CATEGORY_QUERY, GET_POSTS_QUERY } from './constants';

import type { PostListItem } from '@/types/post';

export async function getPosts(): Promise<PostListItem[]> {
  return await client.fetch<PostListItem[]>(GET_POSTS_QUERY);
}

export async function getPostsByCategory(categoryTitle: string): Promise<PostListItem[]> {
  return await client.fetch<PostListItem[]>(GET_POSTS_BY_CATEGORY_QUERY, { categoryTitle });
}
