import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import { JSX } from 'react';

import { client } from '@/lib/sanityClient';
import { imageStyles, StyledImageComponent } from './styles';

import type { ImageComponentProps } from './types';

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource): ImageUrlBuilder {
  return builder.image(source);
}

export function ImageComponent({ value }: ImageComponentProps): JSX.Element | null {
  if (!value?.asset?._ref) {
    return null;
  }

  const url = urlFor(value).url();

  return (
    <StyledImageComponent>
      <Image
        src={url}
        alt={value.alt || ''}
        loading="lazy"
        width={value.dimensions.width}
        height={value.dimensions.height}
        style={imageStyles}
      />
    </StyledImageComponent>
  );
}
