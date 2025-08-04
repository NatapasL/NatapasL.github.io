import mermaid from 'mermaid';
import { JSX, useEffect, useRef } from 'react';

import { StyledMermaidComponent } from './styles';

import type { MermaidComponentProps } from './types';

export function MermaidComponent({ value }: MermaidComponentProps): JSX.Element | null {
  const divRef = useRef<HTMLDivElement | null>(null);
  const code = value?.code;

  useEffect(() => {
    if (code && divRef.current) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
      });

      mermaid.run({
        nodes: [divRef.current],
      });
    }
  }, [code]);

  if (!code) {
    return null;
  }

  return (
    <StyledMermaidComponent>
      <div ref={divRef} className="mermaid">
        {value.code}
      </div>
    </StyledMermaidComponent>
  );
}
