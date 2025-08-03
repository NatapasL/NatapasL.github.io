import styled from 'styled-components';

import { FONT_SIZE } from '@/configs/fonts';

export const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${FONT_SIZE.lg};
  padding: 4px;

  .post-list {
    width: 100%;
    max-width: 1024px;
    row-gap: 8px;
    display: flex;
    flex-direction: column;
  }
`;
