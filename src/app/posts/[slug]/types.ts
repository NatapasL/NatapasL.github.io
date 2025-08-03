import { PageProps } from '.next/types/app/layout';

export interface PostPageProps extends PageProps {
  params: Promise<{ slug: string }>;
}
