import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0066CC' },
    { media: '(prefers-color-scheme: dark)', color: '#0A84FF' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://utilityflow.app'),
  title: 'UtilityFlow: Offline Tools | 100% Offline Android Utility Suite',
  description:
    'Calculate. Convert. Simplify. UtilityFlow is an all-in-one 100% offline Android utility app with scientific calculators, unit & currency converters, GPA manager, loan EMI tools, and dual English & Urdu RTL support.',
  keywords: [
    'UtilityFlow',
    'com.utilityflow.app',
    'UtilityFlow Offline Tools',
    'Android Utility App',
    'Scientific Calculator',
    'Unit Converter',
    'GPA Calculator',
    'EMI Calculator',
    'JSON Formatter',
    'Urdu RTL App',
    'Privacy First Utility',
  ],
  authors: [{ name: 'UtilityFlow Engineering Team' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://utilityflow.app',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'UtilityFlow: Offline Tools | Calculate. Convert. Simplify.',
    description:
      'All-in-one 100% offline Android utility suite with 100+ calculators, converters, finance tools, GPA manager, developer tools, and privacy protection.',
    url: 'https://utilityflow.app',
    siteName: 'UtilityFlow',
    images: [
      {
        url: '/feature-graphic.png',
        width: 1024,
        height: 500,
        alt: 'UtilityFlow Play Store Feature Graphic',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UtilityFlow: Offline Tools',
    description: '100% offline unit converter, GPA manager & finance tools for Android.',
    images: ['/feature-graphic.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased selection:bg-[var(--primary)] selection:text-white">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
