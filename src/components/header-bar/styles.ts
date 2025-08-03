import styled from 'styled-components';

import { COLORS } from '@/configs/colors';
import { FONT_SIZE } from '@/configs/fonts';

export const StyledHeaderBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${COLORS.header.background};
  height: 56px;

  .section {
    padding: 4px 8px;
    width: 100%;
    max-width: 1136px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${COLORS.white};

    @media screen and (min-width: 1024px) {
      padding: 8px 16px;
    }
  }

  .title {
    font-size: ${FONT_SIZE.lg};
  }

  .icon-container {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  .email-icon-container,
  .github-icon-container,
  .linkedin-icon-container {
    svg,
    path {
      &:hover {
        color: ${COLORS.link.hoverLight};
      }
    }
  }

  .email-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 24px;
    overflow: hidden;
  }

  .github-icon-container,
  .linkedin-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    overflow: hidden;
  }
`;
