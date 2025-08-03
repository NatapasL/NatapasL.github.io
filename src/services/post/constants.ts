export const GET_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "categories": categories[]->title,
    "imageUrl": mainImage.asset->url,
    "authorName": author->name,
    excerpt,
  }`;
