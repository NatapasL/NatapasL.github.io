import { JSX } from 'react';

import { StyledCard } from './styles';

import type { CardProps } from './types';

export function Card({ children }: CardProps): JSX.Element {
  return <StyledCard>{children}</StyledCard>;
}
