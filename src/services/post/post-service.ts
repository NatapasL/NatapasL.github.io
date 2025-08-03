import { client } from '@/lib/sanityClient';
import {
  GET_POST_BY_SLUG_QUERY,
  GET_POST_SLUGS_QUERY,
  GET_POSTS_BY_CATEGORY_QUERY,
  GET_POSTS_QUERY,
} from './constants';

import type { Post, PostListItem, PostSlug } from '@/types/post';

export async function getPosts(): Promise<PostListItem[]> {
  return await client.fetch<PostListItem[]>(GET_POSTS_QUERY);
}

export async function getPostsByCategory(categoryTitle: string): Promise<PostListItem[]> {
  return await client.fetch<PostListItem[]>(GET_POSTS_BY_CATEGORY_QUERY, { categoryTitle });
}

export async function getPostBySlug(slug: string): Promise<Post> {
  return await client.fetch<Post>(GET_POST_BY_SLUG_QUERY, { slug });
}

export async function getPostSlugs(): Promise<PostSlug[]> {
  return await client.fetch<PostSlug[]>(GET_POST_SLUGS_QUERY);
}
