import { JSX } from 'react';

import { Card } from '@/components/card/Card';
import { Link } from '@/components/link/Link';
import { StyledCategoryListCard } from './styles';

import type { CategoryListCardProps } from './types';

export function CategoryListCard({ categories }: CategoryListCardProps): JSX.Element {
  return (
    <Card>
      <StyledCategoryListCard>
        <h4>Categories</h4>
        <div className="list-container">
          {categories.map(category => (
            <div key={category._id} className="category">
              <Link href="#">
                #{category.title} ({category.postCount})
              </Link>
            </div>
          ))}
        </div>
      </StyledCategoryListCard>
    </Card>
  );
}
