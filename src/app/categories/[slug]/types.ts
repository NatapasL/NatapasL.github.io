import type { PageProps } from '.next/types/app/layout';

export interface CategoryListPageProps extends PageProps {
  params: Promise<{ slug: string }>;
}
