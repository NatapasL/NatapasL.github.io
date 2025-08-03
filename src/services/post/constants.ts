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

export const GET_POSTS_BY_CATEGORY_QUERY = `
*[_type == "post" && references(*[_type == "category" && title == $categoryTitle]._id)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "categories": categories[]->title,
    "imageUrl": mainImage.asset->url,
    "authorName": author->name,
    excerpt,
  }`;
