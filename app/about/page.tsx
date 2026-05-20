import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { SubPageHero } from '@/components/sections/sub-page-hero';
import { About as AboutSection } from '@/components/sections/about';
import { Leadership } from '@/components/sections/leadership';
import { Footer } from '@/components/sections/footer';


export const metadata: Metadata = {
  title: 'About Us | Vibgyor Inframech - 35+ Years of Excellence',
  description: 'Discover our journey, vision, and leadership. Vibgyor Inframech brings 35+ years of expertise in infrastructure development and modern architecture.',
  keywords: 'about us, infrastructure company, construction expertise, leadership team, company history',
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <SubPageHero
        subtitle="Our Story"
        title="About Us"
        description="Discover our journey, vision, and leadership. With 35+ years of expertise, we're redefining the landscape of modern infrastructure through innovation and excellence."
        breadcrumbs={[{ label: 'About', href: '/about' }]}
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
      />
      <AboutSection />
      <Leadership />
      <Footer />
    </main>
  );
}
