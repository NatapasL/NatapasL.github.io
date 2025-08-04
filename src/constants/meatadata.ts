import { Person, WithContext } from 'schema-dts';

import { environments } from '@/configs/environments';

export const TITLE = 'natapasl';
export const FULL_NAME = 'Natapas Luebangyai';

export const JSON_LD: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: FULL_NAME,
  alternateName: TITLE,
  url: environments.BLOG_URL,
  sameAs: [environments.GITHUB_URL, environments.LINKEDIN_URL],
};
