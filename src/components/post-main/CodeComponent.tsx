import { JSX } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { FONT_SIZE } from '@/configs/fonts';
import { StyledCodeComponent } from './styles';

import type { CodeComponentProps } from './types';

export function CodeComponent({ value }: CodeComponentProps): JSX.Element | null {
  if (!value?.code) {
    return null;
  }

  return (
    <StyledCodeComponent>
      <SyntaxHighlighter
        style={atomDark}
        language={value.language || 'text'}
        showLineNumbers
        customStyle={{ fontSize: FONT_SIZE.md }}
      >
        {value.code}
      </SyntaxHighlighter>
    </StyledCodeComponent>
  );
}
