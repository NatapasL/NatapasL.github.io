import { JSX } from 'react';

import { StyledContentContainer } from './styles';

import type { ContentContainerProps } from './types';

export function ContentContainer({ children, className }: ContentContainerProps): JSX.Element {
  return <StyledContentContainer className={className}>{children}</StyledContentContainer>;
}
