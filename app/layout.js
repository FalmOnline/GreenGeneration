
import { ibmPlexSerif, libreBaskerville } from './fonts';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { RECAPTCHA_SITE_KEY } from '../lib/recaptcha'; // Import your keys
import Script from 'next/script';

export const metadata = {
  title: "Green Generation",
  description: "Acționează local, să salvezi Global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={`${ibmPlexSerif.variable} ${libreBaskerville.variable}`}>
      <body className="z-30 bg-[#FFF6E7]">
        {/* CookieYes Banner - placed before Google Analytics */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/d00fe1a30bf11647fa2f0c36/script.js"
          type="text/javascript"
          async
        />

        {/* Google Analytics - placed after CookieYes */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-E90HRFH5BV`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E90HRFH5BV', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Header */}
        <Header />
        
        {/* Main content */}
        <main className='overflow-hidden'>
          <ReCaptchaProvider siteKey={RECAPTCHA_SITE_KEY}>
            {children}
          </ReCaptchaProvider>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
