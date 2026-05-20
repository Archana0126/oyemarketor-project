import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { SubPageHero } from '@/components/sections/sub-page-hero';
import { Services as ServicesSection } from '@/components/sections/services';
import { Footer } from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Services | Vibgyor Inframech - Infrastructure Solutions',
  description: 'Comprehensive infrastructure and construction services including development, design, consulting, and project management. Expert solutions for modern communities.',
  keywords: 'infrastructure services, construction, design services, consulting, project management, engineering',
};

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <SubPageHero
        subtitle="What We Offer"
        title="Our Services"
        description="Comprehensive infrastructure and construction services designed to transform your vision into reality. From concept to completion, we deliver excellence."
        breadcrumbs={[{ label: 'Services', href: '/services' }]}
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
      />
      <ServicesSection />
      <Footer />
    </main>
  );
}
