// app/posts/[slug]/page.tsx

// Dummy function to get all post slugs
async function getPosts() {
  return [
    { slug: 'learn-nextjs' },
    { slug: 'static-generation' }
  ];
}

// Dummy function to get a single post's content
async function getPostContent(slug: string) {
  // In a real app, you'd fetch this from a CMS or database
  if (slug === 'learn-nextjs') {
    return { title: 'How to Learn Next.js' };
  }
  return { title: 'Understanding Static Generation' };
}

// 1. Tell Next.js which paths to generate
export async function generateStaticParams() {
  const posts = await getPosts();

  // Returns: [{ slug: 'learn-nextjs' }, { slug: 'static-generation' }]
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. The page component fetches data for one post and renders it
export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostContent(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      {/* Post content goes here... */}
    </article>
  );
}
