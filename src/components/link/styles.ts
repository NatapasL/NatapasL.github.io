import NextLink from 'next/link';
import styled from 'styled-components';

import { COLORS } from '@/configs/colors';

export const StyledLink = styled(NextLink)`
  cursor: pointer;

  :hover {
    color: ${COLORS.link.hover};
  }
`;
