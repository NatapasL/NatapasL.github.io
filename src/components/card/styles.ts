import styled from 'styled-components';

import { COLORS } from '@/configs/colors';

export const StyledCard = styled.div`
  background-color: ${COLORS.content.background};
  width: 100%;
  overflow: hidden;
  box-shadow: rgba(23, 23, 23, 0.03) 0px 0px 0px 1px;
  display: flex;

  @media screen and (min-width: 1024px) {
    border-radius: 6px;
  }
`;
