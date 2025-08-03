import styled from 'styled-components';

import { COLORS } from '@/configs/colors';
import { FONT_SIZE } from '@/configs/fonts';

export const StyledCategoryTag = styled.span<{ size: 'sm' | 'md' }>`
  font-size: ${({ size }): string => FONT_SIZE[size]};
  color: ${COLORS.text.gray[2]};
`;
