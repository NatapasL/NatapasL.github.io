import { JSX } from 'react';

import { HeaderBar } from '@/components/header-bar/HeaderBar';
import { environments } from '@/configs/environments';
import StyledComponentsRegistry from '@/lib/registry';

import type { MainLayoutProps } from './types';

export function LayoutMain({ children }: MainLayoutProps): JSX.Element {
  return (
    <StyledComponentsRegistry>
      <main>
        <HeaderBar
          title="NatapasL"
          githubUrl={environments.GIT_URL}
          linkedinUrl={environments.LINKEDIN_URL}
          email={environments.EMAIL}
        />
        {children}
      </main>
    </StyledComponentsRegistry>
  );
}
