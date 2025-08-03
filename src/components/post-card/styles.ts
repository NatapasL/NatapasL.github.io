import styled from 'styled-components';

import { COLORS } from '@/configs/colors';
import { FONT_SIZE } from '@/configs/fonts';

export const StyledPostCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .image-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    overflow: hidden;
  }

  .content-container {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }

  .excerpt-container {
    font-size: ${FONT_SIZE.md};
    max-height: 66px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .read-more {
    font-size: ${FONT_SIZE.xs};
    color: ${COLORS.link.hover};
  }

  .category-list-container {
    margin-top: 8px;
    display: flex;
    column-gap: 8px;
    flex-wrap: wrap;
  }

  .published-date {
    font-size: ${FONT_SIZE.xs};
    color: ${COLORS.text.gray[3]};
    text-align: right;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;

    .image-container {
      min-width: 240px;
      width: 240px;
      height: 240px;
      max-height: 240px;
    }

    .content-container {
      height: 100%;
    }
  }
`;
