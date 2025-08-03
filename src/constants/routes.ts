export const ROUTES = {
  home: '/',
  category: (slug: string): string => `/categories/${slug}`,
  post: (slug: string): string => `/posts/${slug}`,
};
