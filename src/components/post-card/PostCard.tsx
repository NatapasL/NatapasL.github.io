import dayjs from 'dayjs';
import Image from 'next/image';
import { JSX } from 'react';

import { Card } from '@/components/card/Card';
import { CategoryTag } from '@/components/category-tag/CategoryTag';
import { Link } from '@/components/link/Link';
import { ROUTES } from '@/constants/routes';
import { StyledPostCard } from './styles';

import type { PostCardProps } from './types';

export function PostCard({ post }: PostCardProps): JSX.Element {
  const postUrl = ROUTES.post(post.slug || '');
  const imageUrl = post.thumbnailUrl || post.imageUrl;

  return (
    <Card>
      <StyledPostCard>
        {imageUrl && (
          <div className="image-container">
            <Image src={imageUrl} alt={post.title || ''} fill style={{ objectFit: 'cover' }} />
          </div>
        )}
        <div className="content-container">
          <div className="published-date">{dayjs(post.publishedAt).format('MMM DD, YYYY')}</div>
          <Link href={postUrl}>
            <h2>{post.title}</h2>
          </Link>
          <div className="excerpt-container">{post.excerpt}</div>
          <span className="read-more">
            <Link href={postUrl}>Read more</Link>
          </span>

          <div className="category-list-container">
            {post.categories?.map(category => (
              <CategoryTag key={category} title={category} />
            ))}
          </div>
        </div>
      </StyledPostCard>
    </Card>
  );
}
