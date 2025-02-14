import '@/themes/globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { APP_DESCRIPTION, APP_NAME } from '@/app-config';
import Footer from '@/components/footers';
import Header from '@/components/headers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  icons: [
    { rel: 'icon', type: 'image/x-icon', url: '/himemiya-cafe-logo.svg' },
  ],
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} grid min-h-svh grid-rows-[auto,1fr,auto] antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
