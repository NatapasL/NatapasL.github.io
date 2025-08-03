'use client';

import { JSX } from 'react';

import { CategoryListCard } from '@/components/category-list-card/CategoryListCard';
import { PostCard } from '@/components/post-card/PostCard';
import { StyledHomePage } from './styles';

import type { HomePageProps } from './types';

export function HomePage({ posts, categories }: HomePageProps): JSX.Element {
  return (
    <StyledHomePage>
      <div className="post-list">
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

      <div className="category-list">
        <CategoryListCard categories={categories} />
      </div>
    </StyledHomePage>
  );
}
