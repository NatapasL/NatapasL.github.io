import { JSX, Suspense } from 'react';

import { DynamicPostScreen } from '@/screens/dynamic-post/DynamicPostScreen';

export default async function DynamicPostPage(): Promise<JSX.Element> {
  return (
    <Suspense>
      <DynamicPostScreen />
    </Suspense>
  );
}
