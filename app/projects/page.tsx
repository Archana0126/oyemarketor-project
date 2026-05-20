import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { SubPageHero } from '@/components/sections/sub-page-hero';
import { Projects as ProjectsSection } from '@/components/sections/projects';
import { Footer } from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Projects | Vibgyor Inframech - Completed & Ongoing',
  description: 'Explore our portfolio of successful infrastructure and real estate projects. View completed developments and ongoing ventures across India.',
  keywords: 'projects, portfolio, real estate, infrastructure projects, completed developments, ongoing projects',
};

export default function ProjectsPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <SubPageHero
        subtitle="Portfolio"
        title="Our Projects"
        description="Landmark developments that define modern infrastructure. From residential communities to commercial hubs, each project reflects our commitment to excellence."
        breadcrumbs={[{ label: 'Projects', href: '/projects' }]}
      />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
