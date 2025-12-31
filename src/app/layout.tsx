import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Szymon - Fotografia, Grafika, Marketing',
  description: 'Profesjonalne usługi: Fotografia, Grafika, Marketing.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased text-dark bg-white`}>
        {children}
      </body>
    </html>
  );
}
