import styled from 'styled-components';

import { COLORS } from '@/configs/colors';

export const StyledLink = styled.a`
  cursor: pointer;

  :hover {
    color: ${COLORS.link.hover};
  }
`;
