import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import dayjs from 'dayjs';
import { JSX } from 'react';

import { Card } from '@/components/card/Card';
import { CategoryTag } from '@/components/category-tag/CategoryTag';
import { CodeComponent } from './CodeComponent';
import { ImageComponent } from './ImageComponent';
import { StyledPostMain } from './styles';

import type { PostMainProps } from './types';

const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    code: CodeComponent,
    image: ImageComponent,
  },
};

export function PostMain({ post }: PostMainProps): JSX.Element {
  console.log(post);

  return (
    <Card>
      <StyledPostMain>
        <div className="published-date">{dayjs(post.publishedAt).format('MMM DD, YYYY')}</div>

        <h1 className="title">{post.title}</h1>

        <div className="category-list-container">
          {post.categories?.map(category => (
            <CategoryTag key={category} title={category} size="md" />
          ))}
        </div>

        <div className="body-container">
          <PortableText value={post.body || []} components={portableTextComponents} />
        </div>
      </StyledPostMain>
    </Card>
  );
}
