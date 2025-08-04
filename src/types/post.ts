import type { TypedObject } from '@portabletext/types';

export interface PostListItem {
  _id: string;
  title?: string;
  slug?: string;
  publishedAt?: string;
  imageUrl?: string;
  authorName?: string;
  categories?: string[];
  excerpt?: string;
}

export interface Post {
  _id: string;
  title?: string;
  slug?: string;
  publishedAt?: string;
  imageUrl?: string;
  authorName?: string;
  categories?: string[];
  body?: (PostBodyCode | PostBodyBlock | PostBodyImage | PostBodyMermaid)[];
  excerpt?: string;
}

export interface PostBodyCode extends TypedObject {
  _type: 'code';
  code?: string;
  language?: string;
}

export interface PostBodyBlock extends TypedObject {
  _type: 'block';
  children?: TypedObject[];
  style?: string;
}

export interface PostBodyImage extends TypedObject {
  _type: 'image';
  asset?: {
    _type: 'reference';
    _ref: string;
  };
  alt?: string;
  dimensions: {
    aspectRatio: number;
    height: number;
    width: number;
  };
}

export interface PostBodyMermaid extends TypedObject {
  _type: 'mermaid';
  code?: string;
}

export interface PostSlug {
  slug: string;
}
