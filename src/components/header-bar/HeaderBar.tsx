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
        <div className="title">
          <Link href="/">{title}</Link>
        </div>

        <div className="icon-container">
          <Link href={`mailto:${email}`} target="_blank">
            <div className="email-icon-container">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </div>
          </Link>
          <Link href={githubUrl} target="_blank">
            <div className="github-icon-container">
              <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </div>
          </Link>
          <Link href={linkedinUrl} target="_blank">
            <div className="linkedin-icon-container">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </div>
          </Link>
        </div>
      </div>
    </StyledHeaderBar>
  );
}
