import { HTMLAttributeAnchorTarget } from 'react';

export interface LinkProps {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  children: React.ReactNode;
  className?: string;
}
