import { JSX } from 'react';

import StyledComponentsRegistry from '@/lib/registry';

import { HeaderBar } from '@/components/header-bar/HeaderBar';
import { environments } from '@/configs/environments';
import { TITLE } from '@/constants/meatadata';
import { headerBarContainerStyles } from './styles';

import type { MainLayoutProps } from './types';

export function LayoutMain({ children }: MainLayoutProps): JSX.Element {
  return (
    <StyledComponentsRegistry>
      <main>
        <div style={headerBarContainerStyles}>
          <HeaderBar
            title={TITLE}
            githubUrl={environments.GITHUB_URL}
            linkedinUrl={environments.LINKEDIN_URL}
            email={environments.EMAIL}
          />
        </div>
        {children}
      </main>
    </StyledComponentsRegistry>
  );
}
