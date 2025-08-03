'use client';

import { JSX } from 'react';

import { CategoryListCard } from '@/components/category-list-card/CategoryListCard';
import { ContentContainer } from '@/components/content-container/ContentContainer';
import { PostMain } from '@/components/post-main/PostMain';
import { RightBar } from '@/components/right-bar/RightBar';
import { StyledContent, StyledPostScreen } from './styles';

import type { PostScreenProps } from './types';

export function PostScreen({ post, categories }: PostScreenProps): JSX.Element {
  return (
    <StyledPostScreen>
      <ContentContainer>
        <StyledContent>
          <PostMain post={post} />

          <RightBar>
            <CategoryListCard categories={categories} />
          </RightBar>
        </StyledContent>
      </ContentContainer>
    </StyledPostScreen>
  );
}
