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

export const GET_POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  publishedAt,
  "categories": categories[]->title,
  "imageUrl": mainImage.asset->url,
  "authorName": author->name,
  body[]{
    ...,
    _type == "image" => {
      "dimensions": asset->metadata.dimensions
    }
  }
}`;

export const GET_POST_SLUGS_QUERY = `*[_type == "post"]{
    "slug": slug.current
  }`;
