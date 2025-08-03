'use client';

import { JSX } from 'react';

import { PostCard } from '@/components/post-card/PostCard';
import { StyledHomePage } from './styles';

import type { HomePageProps } from './types';

export function HomePage({ posts }: HomePageProps): JSX.Element {
  return (
    <StyledHomePage>
      <div className="post-list">
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </StyledHomePage>
  );
}
