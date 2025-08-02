import { PageProps } from '.next/types/app/layout';

async function getPosts() {
  return [{ slug: 'learn-nextjs' }, { slug: 'static-generation' }];
}

async function getPostContent(slug: string) {
  if (slug === 'learn-nextjs') {
    return { title: 'How to Learn Next.js' };
  }
  return { title: 'Understanding Static Generation' };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(post => ({
    slug: post.slug,
  }));
}

interface PostPageProps extends PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const slug = (await params).slug;
  const post = await getPostContent(slug);

  return (
    <article>
      <h1>{post.title}</h1>
      {/* Post content goes here... */}
    </article>
  );
}
