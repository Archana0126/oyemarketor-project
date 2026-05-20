import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Legal Disclaimer | Vibgyor Inframech',
  description: 'Legal Disclaimer for Vibgyor Inframech. Review our legal disclaimers and limitations of liability.',
  keywords: 'disclaimer, legal, limitation of liability, terms',
};

export default function DisclaimerPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-32 pb-24 px-6 container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-12">
          Legal <span className="text-primary-foreground bg-primary px-2">Disclaimer</span>
        </h1>
        <div className="space-y-8 text-xs font-bold uppercase tracking-widest leading-relaxed opacity-70">
          <p>The materials on VIBGYOR INFRAMECH&apos;s website are provided on an &apos;as is&apos; basis. VIBGYOR INFRAMECH makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
