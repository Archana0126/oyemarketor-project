import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { SubPageHero } from '@/components/sections/sub-page-hero';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Projects | Vibgyor Inframech',
  description: 'Explore all projects by Vibgyor Inframech — from educational institutions to premium residential developments.',
};

const projects = [
  { title: 'Podar School', location: 'Indore', status: 'Completed', image: '/images/Podar.png', slug: 'podar-school' },
  { title: 'ST.Pauls School', location: 'Indore', status: 'Ongoing', image: '/images/Pauls.png', slug: 'st-pauls-school' },
  { title: 'SICA School', location: 'Indore', status: 'Completed', image: '/images/SICA.png', slug: 'sica-school' },
  { title: 'Gaurishankar', location: 'Hingne Sinhgad Road', status: 'Ongoing', image: '/images/Gaurishankar.png', slug: 'gaurishankar' },
  { title: 'Yakshanagari', location: 'Kothrud', status: 'Completed', image: '/images/Yakshanagri.jpeg', slug: 'yakshanagari' },
  { title: 'Dewas', location: 'Anand Vihar Lake View, Dewas', status: 'Proposed', image: 'https://picsum.photos/seed/oasis/800/600', slug: 'dewas' },
];

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

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

      {/* ── Projects Grid ── */}
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 border-l-2 border-primary pl-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter leading-none">
            Landmarks <span className="text-border">of</span> <br />
            <span className="text-primary italic">Excellence.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <div className="group relative h-[320px] overflow-hidden cursor-pointer rounded-lg border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute top-6 left-6 z-20">
                  <Badge
                    className={cn(
                      'rounded-lg px-4 py-1 text-[9px] font-bold uppercase tracking-widest border-none shadow-md',
                      project.status === 'Ongoing'
                        ? 'bg-primary text-white'
                        : project.status === 'Completed'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-400 text-white'
                    )}
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="flex justify-between items-end">
                    <div className="flex-1">
                      <h4 className="text-2xl font-heading font-bold tracking-tight mb-2 text-white">
                        {project.title}
                      </h4>
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-4">
                        {project.location}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/90 transition-colors duration-300 ml-3">
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}