import { JSX } from 'react';

import { Card } from '@/components/card/Card';
import { CategoryTag } from '@/components/category-tag/CategoryTag';
import { StyledCategoryListCard } from './styles';

import type { CategoryListCardProps } from './types';

export function CategoryListCard({ categories }: CategoryListCardProps): JSX.Element {
  return (
    <Card>
      <StyledCategoryListCard>
        <h4>Categories</h4>
        <div className="list-container">
          {categories.map(category => (
            <CategoryTag key={category._id} title={category.title} count={category.postCount} />
          ))}
        </div>
      </StyledCategoryListCard>
    </Card>
  );
}
