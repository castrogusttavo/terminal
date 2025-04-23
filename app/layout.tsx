import type { Metadata } from 'next';
import { Geist, Roboto_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'code.dev - Waitlist',
  description: 'A new way to code in the browser',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geist.variable} ${robotoMono.variable} antialiased bg-black text-zinc-50 font-sans leading-relaxed m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
