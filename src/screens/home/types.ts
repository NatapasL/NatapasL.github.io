import type { CategoryWithCount } from '@/types/category';
import type { PostListItem } from '@/types/post';

export interface HomePageProps {
  posts: PostListItem[];
  categories: CategoryWithCount[];
}
