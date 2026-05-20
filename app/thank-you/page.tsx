import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You | Vibgyor Inframech',
  description: 'Thank you for contacting Vibgyor Inframech. We have received your inquiry.',
};

export default function ThankYouPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <CheckCircle className="w-20 h-20 text-primary" />
          </div>

          <h1 className="text-6xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-none mb-6">
            Thank You!
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            We have received your inquiry and appreciate your interest in Vibgyor Inframech.
          </p>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Our team will review your message and get back to you shortly. You can expect to hear from us within 24-48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-12 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-[11px] hover:opacity-90 transition-opacity rounded-none"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-12 py-4 border-2 border-primary text-primary font-bold uppercase tracking-widest text-[11px] hover:bg-secondary transition-all rounded-none"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
