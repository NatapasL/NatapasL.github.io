import styled from 'styled-components';

import { FONT_SIZE } from '@/configs/fonts';

export const StyledHomePage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: ${FONT_SIZE.lg};
  padding: 16px 4px;

  & > .content-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 16px;

    & > .post-list {
      width: 100%;
      row-gap: 8px;
      display: flex;
      flex-direction: column;
    }

    & > .category-list {
      display: none;
      width: 320px;

      @media screen and (min-width: 1024px) {
        display: block;
        position: sticky;
        top: 72px;
        height: fit-content;
      }
    }
  }
`;
