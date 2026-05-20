import type {Metadata} from 'next';
import './globals.css';
import { Inter, Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import { Suspense } from 'react';
import Loading from './loading';
import { SplashScreen } from '@/components/splash-screen';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Vibgyor Inframech | Infrastructure & Construction Excellence',
  description: 'Leading infrastructure and construction company with 3%+ years of excellence. Building innovative communities through expert engineering, design, and sustainable development.',
  keywords: 'infrastructure, construction, real estate, architecture, engineering, projects',
  authors: [{ name: 'Vibgyor Inframech' }],
  openGraph: {
    title: 'Vibgyor Inframech | Infrastructure & Construction Excellence',
    description: 'Leading infrastructure and construction company with 35+ years of excellence.',
    url: 'https://vibgyorinframech.com',
    siteName: 'Vibgyor Inframech',
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
        sizes: 'any',
      },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable, outfit.variable)}>
      <body suppressHydrationWarning className="antialiased">
        <SplashScreen>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </SplashScreen>
      </body>
    </html>
  );
}
