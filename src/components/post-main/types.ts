import type { Post, PostBodyCode, PostBodyImage, PostBodyMermaid } from '@/types/post';

export interface PostMainProps {
  post: Post;
}

export interface CodeComponentProps {
  value: PostBodyCode | undefined;
}

export interface ImageComponentProps {
  value: PostBodyImage | undefined;
}

export interface MermaidComponentProps {
  value: PostBodyMermaid | undefined;
}
