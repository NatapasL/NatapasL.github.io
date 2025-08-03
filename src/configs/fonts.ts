import { IBM_Plex_Sans_Thai_Looped, Prompt, Sarabun } from 'next/font/google';

const sarabun = Sarabun({
  variable: '--font-sarabun',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const ibmPlexSansThaiLooped = IBM_Plex_Sans_Thai_Looped({
  variable: '--font-ibm-plex-sans-thai',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const prompt = Prompt({
  variable: '--font-prompt',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const fontClasses = [sarabun, ibmPlexSansThaiLooped, prompt].map(font => font.variable).join(' ');

export const FONT_SIZE = {
  xs: 'var(--font-size-xs)',
  sm: 'var(--font-size-sm)',
  md: 'var(--font-size-md)',
  lg: 'var(--font-size-lg)',
  xl: 'var(--font-size-xl)',
};
