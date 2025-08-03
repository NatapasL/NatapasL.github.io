import { JSX } from 'react';

import { Link } from '@/components/link/Link';
import { ROUTES } from '@/constants/routes';
import { StyledCategoryTag } from './styles';

import type { CategoryTagProps } from './types';

export function CategoryTag({ title, count, size = 'sm' }: CategoryTagProps): JSX.Element {
  return (
    <Link href={ROUTES.category(title)}>
      <StyledCategoryTag size={size}>
        #{title}
        {typeof count === 'number' && ` (${count})`}
      </StyledCategoryTag>
    </Link>
  );
}
