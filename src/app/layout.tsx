import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from '@/components/header';
import { CatsContextProvider } from '@/providers/cats-context';
import './globals.css';

const roboto = Roboto({
  weight: ['400'],
  variable: '--roboto',
  preload: false
});

export const metadata: Metadata = {
  title: 'Кошачий пинтерест'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={roboto.variable}>
        <Header />
        <CatsContextProvider>{children}</CatsContextProvider>
      </body>
    </html>
  );
}
