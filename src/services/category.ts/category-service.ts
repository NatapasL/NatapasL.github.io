import { client } from '@/lib/sanityClient';
import { GET_CATEGORIES_WITH_POST_COUNT_QUERY } from './constants';

import type { CategoryWithCount } from '@/types/category';

export async function getCategoriesWithPostCount(): Promise<CategoryWithCount[]> {
  return await client.fetch<CategoryWithCount[]>(GET_CATEGORIES_WITH_POST_COUNT_QUERY);
}
