import { JSX } from 'react';

import { StyledLink } from './styles';

import type { LinkProps } from './types';

export function Link({ href, target, children }: LinkProps): JSX.Element {
  return (
    <StyledLink href={href} target={target}>
      {children}
    </StyledLink>
  );
}
