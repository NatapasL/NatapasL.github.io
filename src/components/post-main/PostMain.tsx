import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { JSX } from 'react';

import { Card } from '@/components/card/Card';
import { CategoryTag } from '@/components/category-tag/CategoryTag';
import { CodeComponent } from './CodeComponent';
import { ImageComponent } from './ImageComponent';
import { MermaidComponent } from './MermaidComponent';
import { StyledPostMain } from './styles';

import type { PostMainProps } from './types';

const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    code: CodeComponent,
    image: ImageComponent,
    mermaid: MermaidComponent,
  },
};

export function PostMain({ post }: PostMainProps): JSX.Element {
  return (
    <Card>
      <StyledPostMain>
        {post.imageUrl && (
          <div className="main-image-container">
            <Image src={post.imageUrl} alt={post.title || ''} fill objectFit="cover" loading="lazy" />
          </div>
        )}

        <div className="content-container">
          <div className="published-date">{dayjs(post.publishedAt).format('MMM DD, YYYY')}</div>

          <h1 className="title">{post.title}</h1>

          <div className="category-list-container">
            {post.categories?.map(category => (
              <CategoryTag key={category} title={category} size="md" />
            ))}
          </div>

          <div className="post-body">
            <PortableText value={post.body || []} components={portableTextComponents} />
          </div>
        </div>
      </StyledPostMain>
    </Card>
  );
}
