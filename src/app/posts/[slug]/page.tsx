import { PageProps } from '.next/types/app/layout';
import type { PortableTextReactComponents } from '@portabletext/react';
import { PortableText } from '@portabletext/react';
import { JSX } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { client } from 'src/lib/sanityClient';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const query = `*[_type == "post"]{
    "slug": slug.current
  }`;

  const slugs: { slug: string }[] = await client.fetch(query);

  return slugs.map(({ slug }) => ({
    slug,
  }));
}

interface PostPageProps extends PageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{ title, body }`;
  const post = await client.fetch(query, { slug });
  return post;
}

const ptComponents: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value }) => {
      if (!value || !value.code) {
        return null;
      }
      return (
        <SyntaxHighlighter style={atomDark} language={value.language || 'text'} showLineNumbers>
          {value.code}
        </SyntaxHighlighter>
      );
    },
  },
};

export default async function PostPage({ params }: PostPageProps): Promise<JSX.Element> {
  const slug = (await params).slug;
  const post = await getPost(slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <div className="prose">
        <PortableText value={post.body} components={ptComponents} />
      </div>
    </article>
  );
}
