import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { SubPageHero } from '@/components/sections/sub-page-hero';
import { Contact as ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Contact Us | Vibgyor Inframech - Get In Touch',
  description: 'Contact Vibgyor Inframech for project inquiries, partnerships, and more. Reach out to our team today.',
  keywords: 'contact, enquiry, partnership, get in touch, customer service',
};

export default function ContactPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <SubPageHero
        subtitle="We're Here to Help"
        title="Get In Touch"
        description="Have questions or ready to start your project? We'd love to hear from you. Reach out and let's create something amazing together."
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop"
      />
      <ContactSection />
      <Footer />
    </main>
  );
}
