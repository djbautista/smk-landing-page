import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-serif',
  display: 'swap',
});

const canelaThin = localFont({
  src: './fonts/Canela-Thin.otf',
  variable: '--font-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${canelaThin.variable}`}>
        {children}
      </body>
    </html>
  );
}
