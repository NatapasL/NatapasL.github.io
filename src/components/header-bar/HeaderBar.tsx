'use client';

import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';

import { Link } from '@/components/link/Link';
import { StyledHeaderBar } from './styles';

import type { HeaderBarProps } from './types';

export function HeaderBar({ title, githubUrl, linkedinUrl, email }: HeaderBarProps): JSX.Element {
  return (
    <StyledHeaderBar>
      <div className="section">
        <div className="title">{title}</div>

        <div className="icon-container">
          <Link href={`mailto:${email}`} target="_blank">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </Link>
          <Link href={githubUrl} target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} size="2x" />
          </Link>
          <Link href={linkedinUrl} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>
        </div>
      </div>
    </StyledHeaderBar>
  );
}
