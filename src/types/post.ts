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
