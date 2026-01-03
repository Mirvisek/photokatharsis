import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { getSiteSettings } from '@/app/lib/data';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});



export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: settings.site_title || 'Szymon - Fotografia, Grafika, Marketing',
    description: settings.site_description || 'Profesjonalne usługi: Fotografia, Grafika, Marketing.',
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        {/* Custom CSS */}
        {settings.custom_css && (
          <style dangerouslySetInnerHTML={{ __html: settings.custom_css }} />
        )}

        {/* Google Analytics */}
        {settings.google_analytics_id && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${settings.google_analytics_id}`}></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${settings.google_analytics_id}');
                `
            }} />
          </>
        )}
      </head>
      <body className={`${poppins.variable} font-sans antialiased text-dark bg-white`}>
        {children}

        {/* Custom JS */}
        {settings.custom_js && (
          <script dangerouslySetInnerHTML={{ __html: settings.custom_js }} />
        )}
      </body>
    </html>
  );
}
