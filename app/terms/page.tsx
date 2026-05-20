import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Vibgyor Inframech',
  description: 'Terms of Service for Vibgyor Inframech. Read our terms and conditions for using our website and services.',
  keywords: 'terms of service, terms and conditions, legal terms',
};

export default function TermsPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-32 pb-24 px-6 container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-12">
          Terms of <span className="text-primary-foreground bg-primary px-2">Service</span>
        </h1>
        <div className="space-y-8 text-xs font-bold uppercase tracking-widest leading-relaxed opacity-70">
          <p>By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          <p>The materials contained in this website are protected by applicable copyright and trademark law.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
