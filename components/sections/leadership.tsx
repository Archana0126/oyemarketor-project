'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail } from 'lucide-react';

export function Leadership() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/4 h-full-subtle opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 border-l-2 border-primary pl-4">Leadership</h2>
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black mb-10 tracking-tighter leading-none">
              The Visionary <br />
              <span className="text-border">Behind</span> <span className="text-primary italic">VIBGYOR.</span>
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed font-medium">
              Mr. Nitin Shirpurkar, founder of VIBGYOR INFRAMECH, brings over 30 years of 
              unparalleled experience. His leadership is the driving force behind our 
              commitment to quality, integrity, and visionary growth.
            </p>
            <div className="flex gap-16">
              <div className="flex flex-col">
                <span className="text-5xl font-heading font-black text-foreground tracking-tighter leading-none">35+</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-primary mt-3">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-heading font-black text-foreground tracking-tighter leading-none">20+</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-primary mt-3">Projects Led</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group max-w-[450px] mx-auto">
              <div className="aspect-[4/5] rounded-none overflow-hidden shadow-2xl border-8 border-background">
                <div className="w-full h-full bg-[url('https://picsum.photos/seed/founder-minimal/800/1000')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              
              <div className="absolute -bottom-10 -right-6 md:-right-10 bg-primary p-10 rounded-none shadow-2xl border-none max-w-[320px]">
                <h4 className="text-2xl font-heading font-black tracking-tighter text-primary-foreground mb-1 uppercase">Mr. Nitin Shirpurkar</h4>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary-foreground/70 mb-8">Founder & Chairman</p>
                <div className="flex gap-6">
                  <Linkedin className="w-5 h-5 text-primary-foreground/70 hover:text-primary-foreground cursor-pointer transition-colors" />
                  <Mail className="w-5 h-5 text-primary-foreground/70 hover:text-primary-foreground cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
