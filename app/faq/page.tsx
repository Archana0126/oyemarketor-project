import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { SubPageHero } from '@/components/sections/sub-page-hero';
import { FAQ as FAQSection } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'FAQ | Vibgyor Inframech - Frequently Asked Questions',
  description: 'Find answers to common questions about Vibgyor Inframech services, projects, and processes.',
  keywords: 'faq, frequently asked questions, help, support, information',
};

export default function FAQPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <SubPageHero
        subtitle="Common Questions"
        title="FAQs"
        description="Find answers to frequently asked questions about our services, projects, and processes. Can't find what you're looking for? Contact us directly."
        breadcrumbs={[{ label: 'FAQ', href: '/faq' }]}
      />
      <FAQSection />
      <Footer />
    </main>
  );
}
