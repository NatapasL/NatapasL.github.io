'use client';

import { JSX } from 'react';

import { CategoryListCard } from '@/components/category-list-card/CategoryListCard';
import { ContentContainer } from '@/components/content-container/ContentContainer';
import { PostCard } from '@/components/post-card/PostCard';
import { RightBar } from '@/components/right-bar/RightBar';
import { StyledCategoryTitle, StyledContent, StyledHomeScreen } from './styles';

import type { HomeScreenProps } from './types';

export function HomeScreen({ posts, categories, currentCategory }: HomeScreenProps): JSX.Element {
  return (
    <StyledHomeScreen>
      <ContentContainer>
        {currentCategory && <StyledCategoryTitle>#{currentCategory}</StyledCategoryTitle>}

        <StyledContent>
          <div className="post-list">
            {posts.map(post => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>

          <RightBar>
            <CategoryListCard categories={categories} />
          </RightBar>
        </StyledContent>
      </ContentContainer>
    </StyledHomeScreen>
  );
}
