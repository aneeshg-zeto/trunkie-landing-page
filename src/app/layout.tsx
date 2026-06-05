import type {Metadata} from 'next';
import './globals.css';
import {Providers} from './providers';
import { Space_Grotesk, Nunito_Sans } from 'next/font/google';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const body = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Trunkie — One system. Every school.',
  description: "India's leading school management platform. A full school operating system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased selection:bg-yellow selection:text-navy">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
