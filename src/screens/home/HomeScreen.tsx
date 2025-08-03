'use client';

import { JSX } from 'react';

import { CategoryListCard } from '@/components/category-list-card/CategoryListCard';
import { ContentContainer } from '@/components/content-container/ContentContainer';
import { PostCard } from '@/components/post-card/PostCard';
import { StyledCategoryTitle, StyledContent, StyledHomePage } from './styles';

import type { HomeScreenProps } from './types';

export function HomeScreen({ posts, categories, currentCategory }: HomeScreenProps): JSX.Element {
  return (
    <StyledHomePage>
      <ContentContainer>
        {currentCategory && <StyledCategoryTitle>#{currentCategory}</StyledCategoryTitle>}

        <StyledContent className="content-container">
          <div className="post-list">
            {posts.map(post => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>

          <div className="category-list">
            <CategoryListCard categories={categories} />
          </div>
        </StyledContent>
      </ContentContainer>
    </StyledHomePage>
  );
}
