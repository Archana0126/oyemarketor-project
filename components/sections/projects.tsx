'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 relative z-10">

        {/* ── Heading ── */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 border-l-2 border-primary pl-4"
            >
              Portfolio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-8xl font-heading font-black tracking-tighter leading-none"
            >
              Landmarks <span className="text-border">of</span> <br />
              <span className="text-primary italic">Excellence.</span>
            </motion.h3>
          </div>
        </div>

        {/* ── Flagship Spotlight ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-lg border border-gray-200"
        >
          {/* Left: Image */}
          <div className="relative h-[160px] lg:h-auto overflow-hidden">
            <img
              src="/images/Yakshanagri.jpeg"
              alt="Yakshanagari CHS"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10" />
            <span className="absolute top-6 left-6 text-[9px] font-bold uppercase tracking-widest bg-blue-500 text-white px-4 py-1.5 rounded-lg shadow-md">
              Completed
            </span>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center px-10 py-12 bg-background border-t lg:border-t-0 lg:border-l border-gray-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-5 border-l-2 border-primary pl-4">
              Flagship Project
            </p>
            <h3 className="text-3xl md:text-4xl font-heading font-black tracking-tighter leading-none mb-3 uppercase">
              Yakshanagari CHS
            </h3>
            <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-5">
              Kothrud, Pune &nbsp;·&nbsp; Redevelopment
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-sm">
              A landmark commercial-cum-residential redevelopment in the heart of Kothrud —
              featuring shops, offices &amp; premium flats with prices starting from ₹90 Lacs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects/yakshanagari"
                className="inline-flex items-center gap-2 bg-primary text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-primary/90 transition-colors"
              >
                View Project <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-border text-[11px] font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-muted transition-colors text-foreground"
              >
                See All Projects <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}