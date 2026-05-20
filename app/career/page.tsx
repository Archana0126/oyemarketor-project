import type { Metadata } from 'next';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { CareerForm } from '@/components/sections/career-form';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | Vibgyor Inframech - Join Our Team',
  description: 'Explore career opportunities at Vibgyor Inframech. Join our team of talented professionals building the future of infrastructure.',
  keywords: 'careers, jobs, employment, hiring, infrastructure careers',
};

const jobs = [
  {
    title: 'Senior Project Manager',
    location: 'Pune, India',
    type: 'Full-time',
    description: 'Lead large-scale infrastructure projects with a team of engineers and architects.',
  },
  {
    title: 'Civil Engineer',
    location: 'Pune, India',
    type: 'Full-time',
    description: 'Design and oversee construction of residential and commercial infrastructure projects.',
  },
  {
    title: 'Architect',
    location: 'Pune, India',
    type: 'Full-time',
    description: 'Create innovative designs for modern sustainable buildings and communities.',
  },
  {
    title: 'Business Development Executive',
    location: 'Pune, India',
    type: 'Full-time',
    description: 'Identify and develop new business opportunities and client relationships.',
  },
];

export default function CareerPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-16 px-6 container mx-auto">
        <h1 className="text-6xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-none mb-4">
          Build Your <br />
          <span className="text-primary-foreground bg-primary px-4">Career</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium mt-8">
          Join a team of talented professionals dedicated to creating innovative infrastructure and building communities for the future.
        </p>
      </div>

      {/* Why Join Us */}
      <section className="py-20 md:py-32 px-6 container mx-auto">
        <div className="mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 border-l-2 border-primary pl-4">
            Why Join Us
          </h2>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter leading-none">
            Grow With <br />
            <span className="text-border">VIBGYOR</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Innovation', desc: 'Work on cutting-edge infrastructure projects' },
            { title: 'Growth', desc: 'Continuous learning and career development' },
            { title: 'Culture', desc: 'Collaborative and inclusive work environment' },
            { title: 'Impact', desc: 'Build communities that shape the future' },
          ].map((item) => (
            <div key={item.title} className="p-8 border border-border rounded-none hover:bg-secondary/20 transition-all duration-300">
              <h4 className="text-xl font-heading font-black mb-3 uppercase">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-32 px-6 container mx-auto">
        <div className="mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 border-l-2 border-primary pl-4">
            Opportunities
          </h2>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter leading-none">
            Open <br />
            <span className="text-border">Positions</span>
          </h3>
        </div>

        <div className="space-y-4 max-w-4xl">
          {jobs.map((job, index) => (
            <Link key={index} href="#" className="block group">
              <div className="p-8 border border-border hover:border-primary hover:bg-secondary/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
                  <div className="flex-1">
                    <h4 className="text-2xl font-heading font-black uppercase mb-4 group-hover:text-primary transition-colors">
                      {job.title}
                    </h4>
                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mb-4">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                        📍 {job.location}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>
                  <div className="mt-6 md:mt-0 md:flex-shrink-0">
                    <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <CareerForm />

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 container mx-auto">
        <div className="bg-primary p-12 md:p-20 rounded-none text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-primary-foreground">
            Don't see your fit?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's explore opportunities together.
          </p>
          <Link
            href="mailto:careers@vibgyorinframech.com"
            className="inline-block px-12 py-4 bg-primary-foreground text-primary font-bold uppercase tracking-widest text-[11px] hover:opacity-90 transition-opacity rounded-none"
          >
            Send Your Resume
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
