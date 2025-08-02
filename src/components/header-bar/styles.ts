import styled from 'styled-components';

import { COLORS } from '@/configs/colors';
import { FONT_SIZE } from '@/configs/fonts';

export const StyledHeaderBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${COLORS.header.background};

  .section {
    padding: 8px 16px;
    width: 100%;
    max-width: 1348px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${COLORS.white};
  }

  .title {
    font-size: ${FONT_SIZE.lg};
  }

  .icon-container {
    display: grid;
    grid-template-columns: 44px 40px 40px;
  }
`;
