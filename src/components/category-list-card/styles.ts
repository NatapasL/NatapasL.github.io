import styled from 'styled-components';

import { COLORS } from '@/configs/colors';
import { FONT_SIZE } from '@/configs/fonts';

export const StyledCategoryListCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 12px;
  font-size: ${FONT_SIZE.sm};
  color: ${COLORS.text.gray[2]};
  width: 100%;

  .list-container {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: 100%;
  }
`;
