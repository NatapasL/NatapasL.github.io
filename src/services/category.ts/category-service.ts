import { client } from '@/lib/sanityClient';
import { GET_CATEGORIES_WITH_POST_COUNT_QUERY, GET_CATEGORY_TITLES_QUERY } from './constants';

import type { CategoryTitle, CategoryWithCount } from '@/types/category';

export async function getCategoriesWithPostCount(): Promise<CategoryWithCount[]> {
  return await client.fetch<CategoryWithCount[]>(GET_CATEGORIES_WITH_POST_COUNT_QUERY);
}

export async function getCategoryTitles(): Promise<CategoryTitle[]> {
  return await client.fetch<CategoryTitle[]>(GET_CATEGORY_TITLES_QUERY);
}
