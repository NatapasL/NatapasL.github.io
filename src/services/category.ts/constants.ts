export const GET_CATEGORIES_WITH_POST_COUNT_QUERY = `*[_type == "category"]{
  _id,
  title,
  "postCount": count(*[_type == "post" && references(^._id)])
} | order(postCount desc)`;
