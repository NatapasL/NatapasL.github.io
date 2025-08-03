import type { CategoryWithCount } from '@/types/category';
import type { PostListItem } from '@/types/post';

export interface HomeScreenProps {
  posts: PostListItem[];
  categories: CategoryWithCount[];
  currentCategory?: string;
}
