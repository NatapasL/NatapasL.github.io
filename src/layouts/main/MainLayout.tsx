import { JSX } from 'react';

import StyledComponentsRegistry from '@/lib/registry';

import { StickyHeaderBar } from './StickyHeaderBar';

import type { MainLayoutProps } from './types';

export function LayoutMain({ children }: MainLayoutProps): JSX.Element {
  return (
    <StyledComponentsRegistry>
      <main>
        <StickyHeaderBar />
        {children}
      </main>
    </StyledComponentsRegistry>
  );
}
