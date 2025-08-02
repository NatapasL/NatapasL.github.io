import { createClient } from '@sanity/client';

import { environments } from '@/configs/environments';

export const client = createClient({
  projectId: environments.SANITY_PROJECT_ID,
  dataset: environments.SANITY_DATASET,
  useCdn: true,
  apiVersion: environments.SANITY_API_VERSION,
});
