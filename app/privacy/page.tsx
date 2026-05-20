import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vibgyor Inframech',
  description: 'Vibgyor Inframech Privacy Policy - Learn how we collect, use, and protect your personal information.',
  keywords: 'privacy policy, data protection, personal information',
};

export default function PrivacyPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-32 pb-24 px-6 container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-12">
          Privacy <span className="text-primary-foreground bg-primary px-2">Policy</span>
        </h1>
        <div className="space-y-8 text-xs font-bold uppercase tracking-widest leading-relaxed opacity-70">
          <p>Your privacy is important to us. It is VIBGYOR INFRAMECH&apos;s policy to respect your privacy regarding any information we may collect from you across our website.</p>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
          <p>We don&apos;t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
