import type { Post, PostBodyCode, PostBodyImage } from '@/types/post';

export interface PostMainProps {
  post: Post;
}

export interface CodeComponentProps {
  value: PostBodyCode | undefined;
}

export interface ImageComponentProps {
  value: PostBodyImage | undefined;
}
