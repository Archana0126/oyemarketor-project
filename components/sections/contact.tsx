'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
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
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();

        // Save to localStorage
        const existingLeads = JSON.parse(localStorage.getItem('vibgyor_leads') || '[]');
        existingLeads.push(result.lead);
        localStorage.setItem('vibgyor_leads', JSON.stringify(existingLeads));

        router.push('/thank-you');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'An error occurred. Please try again later.';
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Contact Us</h2>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tight leading-tight">
              Start Your <br />
              <span className="text-muted-foreground">Next Project.</span>
            </h3>
            
            <div className="space-y-10 mt-16">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Email Us</p>
                  <p className="text-lg md:text-xl font-heading font-bold tracking-tight">info@vibgyorinframach.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Call Us</p>
                  <p className="text-lg md:text-xl font-heading font-bold tracking-tight">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-12 bg-secondary/50 rounded-3xl border border-border"
          >
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-xl">
                <p className="text-sm font-bold text-red-600">{error}</p>
              </div>
            )}
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Full Name</label>
                <Input
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="rounded-xl h-14 bg-background border-border focus:border-primary transition-all px-6"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="rounded-xl h-14 bg-background border-border focus:border-primary transition-all px-6"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Mobile Number</label>
                  <Input
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    className="rounded-xl h-14 bg-background border-border focus:border-primary transition-all px-6"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Message</label>
                <Textarea
                  name="message"
                  required
                  placeholder="Enter your message or inquiry"
                  className="rounded-xl min-h-[150px] bg-background border-border focus:border-primary transition-all px-6 py-4"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl h-16 text-base font-medium group transition-all disabled:opacity-50"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
