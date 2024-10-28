import localFont from 'next/font/local';

export const ibmPlexSerif = localFont({
  src: [
    {
      path: '../public/fonts/IBM_Plex_Serif/IBMPlexSerif-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/IBM_Plex_Serif/IBMPlexSerif-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-ibm-plex-serif',
  display: 'swap',
});

export const libreBaskerville = localFont({
  src: [
    {
      path: '../public/fonts/Libre_Baskerville/LibreBaskerville-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Libre_Baskerville/LibreBaskerville-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-libre-baskerville',
  display: 'swap',
});
