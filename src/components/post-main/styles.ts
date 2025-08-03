import { CSSProperties } from 'react';
import styled from 'styled-components';

import { COLORS } from '@/configs/colors';
import { FONT_SIZE } from '@/configs/fonts';

export const StyledPostMain = styled.div`
  padding: 12px 8px;

  @media screen and (min-width: 1024px) {
    padding: 32px 64px;
  }

  .title {
    margin-bottom: 16px;
  }

  .body-container {
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    @media screen and (min-width: 1024px) {
      row-gap: 16px;
    }
  }

  .category-list-container {
    margin-bottom: 16px;
    display: flex;
    column-gap: 8px;
    flex-wrap: wrap;
  }

  .published-date {
    font-size: ${FONT_SIZE.xs};
    color: ${COLORS.text.gray[3]};
    margin-bottom: 32px;
  }
`;

export const StyledCodeComponent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100vw - 24px);

  @media screen and (min-width: 1024px) {
    max-width: calc(100vw - 454px);
  }
`;

export const StyledImageComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 360px;
  overflow: hidden;
`;

export const imageStyles: CSSProperties = {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
};
