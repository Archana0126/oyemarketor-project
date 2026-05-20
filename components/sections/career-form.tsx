'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const positions = [
  'Senior Project Manager',
  'Civil Engineer',
  'Architect',
  'Business Development Executive',
];

export function CareerForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      position: formData.get('position'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send-career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();

        // Save to localStorage
        const existingLeads = JSON.parse(localStorage.getItem('vibgyor_leads') || '[]');
        existingLeads.push(result.application);
        localStorage.setItem('vibgyor_leads', JSON.stringify(existingLeads));

        router.push('/thank-you');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to submit application. Please try again.');
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'An error occurred. Please try again later.';
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-32 px-6 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 border-l-2 border-primary pl-4">
            Apply Now
          </h2>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter leading-none">
            Join Our <br />
            <span className="text-border">Team</span>
          </h3>
        </div>

        <div className="p-8 md:p-12 bg-secondary/50 border border-border">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-xl">
              <p className="text-sm font-bold text-red-600">{error}</p>
            </div>
          )}

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground ml-1">
                Full Name
              </label>
              <Input
                name="name"
                required
                placeholder="Enter your full name"
                className="rounded-xl h-14 bg-background border-border focus:border-primary transition-all px-6"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground ml-1">
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="rounded-xl h-14 bg-background border-border focus:border-primary transition-all px-6"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground ml-1">
                  Mobile Number
                </label>
                <Input
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  className="rounded-xl h-14 bg-background border-border focus:border-primary transition-all px-6"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground ml-1">
                Position Applied For
              </label>
              <select
                name="position"
                required
                className="w-full rounded-xl h-14 bg-background border border-border focus:border-primary transition-all px-6 font-medium"
              >
                <option value="">Select a position</option>
                {positions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground ml-1">
                Cover Letter / Additional Info
              </label>
              <Textarea
                name="message"
                required
                placeholder="Tell us about yourself and why you're interested in this position"
                className="rounded-xl min-h-[150px] bg-background border-border focus:border-primary transition-all px-6 py-4"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl h-16 text-base font-medium group transition-all disabled:opacity-50"
            >
              {isLoading ? 'Submitting...' : 'Submit Application'}
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
