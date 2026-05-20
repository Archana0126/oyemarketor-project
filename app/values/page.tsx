import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { SubPageHero } from '@/components/sections/sub-page-hero';
import { Values as ValuesSection } from '@/components/sections/values';
import { Footer } from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Core Values | Vibgyor Inframech - Integrity, Quality, Innovation',
  description: 'Our core values guide every project: Integrity, Quality Excellence, Timely Delivery, Customer Commitment, Innovation, and Sustainability.',
  keywords: 'core values, integrity, quality, innovation, sustainability, customer commitment',
};

export default function ValuesPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <SubPageHero
        subtitle="Our Foundation"
        title="Core Values"
        description="The principles that guide our every decision and action. These values form the foundation of everything we do and who we are."
        breadcrumbs={[{ label: 'Values', href: '/values' }]}
      />
      <ValuesSection />
      <Footer />
    </main>
  );
}
