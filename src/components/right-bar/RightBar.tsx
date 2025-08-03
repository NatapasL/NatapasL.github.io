import { JSX } from 'react';

import { StyledRightBar } from './styles';

import type { RightBarProps } from './types';

export function RightBar({ children }: RightBarProps): JSX.Element {
  return <StyledRightBar>{children}</StyledRightBar>;
}
