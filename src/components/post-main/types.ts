import type { Post, PostBodyCode } from '@/types/post';

export interface PostMainProps {
  post: Post;
}

export interface CodeComponentProps {
  value: PostBodyCode | undefined;
}
