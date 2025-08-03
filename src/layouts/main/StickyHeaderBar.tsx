'use client';

import { JSX } from 'react';
import styled from 'styled-components';

import { HeaderBar } from '@/components/header-bar/HeaderBar';
import { environments } from '@/configs/environments';

export function StickyHeaderBar(): JSX.Element {
  return (
    <StyledStickyHeaderBar>
      <HeaderBar
        title="NatapasL"
        githubUrl={environments.GITHUB_URL}
        linkedinUrl={environments.LINKEDIN_URL}
        email={environments.EMAIL}
      />
    </StyledStickyHeaderBar>
  );
}

const StyledStickyHeaderBar = styled.div`
  position: sticky;
  top: 0;
`;
