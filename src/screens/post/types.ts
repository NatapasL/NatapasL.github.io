import type { CategoryWithCount } from '@/types/category';
import type { Post } from '@/types/post';

export interface PostScreenProps {
  post: Post;
  categories: CategoryWithCount[];
}
