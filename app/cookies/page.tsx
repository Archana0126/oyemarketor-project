import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Cookie Policy | Vibgyor Inframech',
  description: 'Cookie Policy for Vibgyor Inframech. Learn about how we use cookies and similar technologies.',
  keywords: 'cookie policy, cookies, data tracking, website analytics',
};

export default function CookiesPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-32 pb-24 px-6 container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-12">
          Cookie <span className="text-primary-foreground bg-primary px-2">Policy</span>
        </h1>
        <div className="space-y-8 text-xs font-bold uppercase tracking-widest leading-relaxed opacity-70">
          <p>We use cookies to help improve your experience of our website. This cookie policy is part of VIBGYOR INFRAMECH&apos;s privacy policy, and covers the use of cookies between your device and our site.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
