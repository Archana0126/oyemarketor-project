import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Visava Project | Vibgyor Inframech - Premium Residential Development',
  description: 'Explore the Visava project - A premium 25-acre residential development with 450+ units on Hingne Sinhgad Road. Modern architecture and sustainable living.',
  keywords: 'Visava, project details, residential development, 25 acres, premium homes',
};

export default function ProjectDetailPage() {
  const project = {
    title: 'Visava',
    location: 'Hingne Sinhgad Road',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?q=80&w=2070&auto=format&fit=crop',
    description: 'A premium residential development project featuring modern architecture and sustainable living spaces.',
    area: '25 Acres',
    units: '450+',
    startDate: '2022',
  };

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

      <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-background/30" />
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
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Project Area</p>
              <p className="text-2xl font-heading font-black">{project.area}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Units</p>
              <p className="text-2xl font-heading font-black">{project.units}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Start Date</p>
              <p className="text-2xl font-heading font-black">{project.startDate}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Status</p>
              <p className="text-2xl font-heading font-black">{project.status}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-heading font-black mb-6">About This Project</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              This project represents our commitment to delivering exceptional infrastructure and residential solutions.
              With meticulous planning and expert execution, we've created spaces that enhance quality of life.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              The project showcases our dedication to innovation, sustainability, and customer satisfaction.
              Every detail has been carefully designed to provide optimal living and working environments.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}