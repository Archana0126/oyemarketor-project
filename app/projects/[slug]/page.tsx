import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

const projects = [
  {
    slug: 'podar-school',
    title: 'Podar School',
    location: 'Indore',
    status: 'Completed',
    image: '/images/Podar.png',
    area: 'N/A',
    units: 'N/A',
    startDate: 'N/A',
    description: 'A completed school infrastructure project in Indore.',
    address: 'Satya Sai Circle, Scheme No.74, A.B.Road, behind Shri Panchmukhi Hanuman Mandir, Indore, Madhya Pradesh 452010',
  },
  {
    slug: 'st-pauls-school',
    title: 'ST.Pauls School',
    location: 'Indore',
    status: 'Ongoing',
    image: '/images/Pauls.png',
    area: 'N/A',
    units: 'N/A',
    startDate: 'N/A',
    description: 'An ongoing school construction project in Indore.',
    address: '7, Boundary Road, near Agriculture College, Krishi Nagar, Indore, Madhya Pradesh 452001',
  },
  {
    slug: 'sica-school',
    title: 'SICA School',
    location: 'Indore',
    status: 'Completed',
    image: '/images/SICA.png',
    area: 'N/A',
    units: 'N/A',
    startDate: 'N/A',
    description: 'A completed school infrastructure project in Indore.',
    address: 'Scheme Number 78, Aranya Nagar, Vijay Nagar, Indore, Madhya Pradesh 452010',
  },
  {
    slug: 'gaurishankar',
    title: 'Gaurishankar',
    location: 'Hingne Sinhgad Road, Pune',
    status: 'Ongoing',
    image: '/images/Gaurishankar.png',
    area: 'N/A',
    units: '8 Row Houses',
    startDate: 'N/A',
    description: '8 Row Houses 4BHK with Lift — a premium residential project on Sinhgad Road, Pune.',
    address: 'Plot no: 59B, Shree Gouri Shankar Housing Society, Damodar Nagar, Hingne, Sinhgad Road, Pune 411043',
  },
  {
    slug: 'yakshanagari',
    title: 'Yakshanagari',
    location: 'Kothrud, Pune',
    status: 'Completed',
    image: '/images/Yakshanagri.jpeg',
    area: 'N/A',
    units: 'N/A',
    startDate: 'N/A',
    description: 'A completed residential development near Kothrud Bus Stand, Pune.',
    address: 'Yakshnagari, Near Kothrud Bus Stand, Kothrud, Pune, Maharashtra 411038',
  },
  {
    slug: 'dewas',
    title: 'Dewas',
    location: 'Gomti Nagar, Dewas',
    status: 'Proposed',
    image: 'https://picsum.photos/seed/oasis/800/600',
    area: 'N/A',
    units: '92',
    startDate: 'N/A',
    description: 'Anand Vihar Lake View — a proposed 92-unit residential development in Dewas, Indore.',
    address: 'X369+HHQ, Old Town, Gomti Nagar, Dewas, Madhya Pradesh 455001',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | Vibgyor Inframech` : 'Project Not Found',
    description: project?.description ?? '',
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="bg-background">
      <Navbar />

      <div className="pt-20 pb-8 px-6 container mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

<div className="relative overflow-hidden mb-16 mx-auto" style={{ height: '350px', maxWidth: '900px' }}>        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="px-6 container mx-auto pb-20">
        <div className="max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-2">
                {project.status}
              </span>
              <span className="text-sm text-muted-foreground">{project.location}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-6 uppercase leading-none">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-border">
            {[
              ['Project Area', project.area],
              ['Units', project.units],
              ['Start Date', project.startDate],
              ['Status', project.status],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">{label}</p>
                <p className="text-2xl font-heading font-black">{value}</p>
              </div>
            ))}
          </div>

          {/* Address section */}
          <div className="mt-10 py-8 border-b border-border">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Address</p>
            <p className="text-base text-muted-foreground leading-relaxed">{project.address}</p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-heading font-black mb-6">About This Project</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              This project represents our commitment to delivering exceptional infrastructure and
              residential solutions. With meticulous planning and expert execution, we've created
              spaces that enhance quality of life.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              The project showcases our dedication to innovation, sustainability, and customer
              satisfaction. Every detail has been carefully designed to provide optimal living and
              working environments.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}