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
  body?: (PostBodyCode | PostBodyBlock)[];
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

export interface PostSlug {
  slug: string;
}
