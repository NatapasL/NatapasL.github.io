import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import dayjs from 'dayjs';
import { JSX } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Card } from '@/components/card/Card';
import { CategoryTag } from '@/components/category-tag/CategoryTag';
import { FONT_SIZE } from '@/configs/fonts';
import { StyledCodeContainer, StyledPostMain } from './styles';

import type { PostBodyCode } from '@/types/post';
import type { PostMainProps } from './types';

const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value }: { value: PostBodyCode | undefined }) => {
      if (!value?.code) {
        return null;
      }

      return (
        <StyledCodeContainer>
          <SyntaxHighlighter
            style={atomDark}
            language={value.language || 'text'}
            showLineNumbers
            customStyle={{ fontSize: FONT_SIZE.md }}
          >
            {value.code}
          </SyntaxHighlighter>
        </StyledCodeContainer>
      );
    },
  },
};

export function PostMain({ post }: PostMainProps): JSX.Element {
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
