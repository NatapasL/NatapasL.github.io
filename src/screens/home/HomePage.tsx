'use client';

import { JSX, useEffect } from 'react';
import { useImmer } from 'use-immer';

import { PostCard } from '@/components/post-card/PostCard';
import { getPosts } from '@/services/post/post';
import { StyledHomePage } from './styles';

import type { PostListItem } from '@/types/post';

export function HomePage(): JSX.Element {
  const [posts, setPosts] = useImmer<PostListItem[] | undefined>(undefined);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts(): Promise<void> {
    setPosts(await getPosts());
  }

  return (
    <StyledHomePage>
      <div className="post-list">
        {posts?.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </StyledHomePage>
  );
}
