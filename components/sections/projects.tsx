'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Visava',
    location: 'Hingne Sinhgad Road',
    status: 'Ongoing',
    image: 'https://picsum.photos/seed/visava/800/600',
  },
  {
    title: 'Yakshanagari',
    location: 'Kothrud',
    status: 'Completed',
    image: 'https://picsum.photos/seed/yaksha/800/600',
  },
  {
    title: 'Dewas Colony',
    location: 'Dewas',
    status: 'Completed',
    image: 'https://picsum.photos/seed/dewas/800/600',
  },
  {
    title: 'Riverside Elite',
    location: 'Baner',
    status: 'Ongoing',
    image: 'https://picsum.photos/seed/riverside/800/600',
  },
  {
    title: 'Sky Garden Towers',
    location: 'Aundh',
    status: 'Completed',
    image: 'https://picsum.photos/seed/sky/800/600',
  },
  {
    title: 'Urban Oasis',
    location: 'Viman Nagar',
    status: 'Proposed',
    image: 'https://picsum.photos/seed/oasis/800/600',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-8">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={project.title} href="/projects/detail">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[450px] overflow-hidden cursor-pointer rounded-lg border border-gray-200 bg-white hover:border-primary/50 hover:shadow-lg transition-all duration-500"
              >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/50 transition-all duration-500" />

              <div className="absolute top-6 left-6 z-20">
                <Badge className={cn(
                  "rounded-lg px-4 py-1 text-[9px] font-bold uppercase tracking-widest border-none shadow-md",
                  project.status === 'Ongoing' ? "bg-primary text-white" : project.status === 'Completed' ? "bg-blue-500 text-white" : "bg-gray-400 text-white"
                )}>
                  {project.status}
                </Badge>
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-background via-background/60 to-transparent">
                <div className="flex justify-between items-end">
                  <div className="flex-1">
                    <h4 className="text-2xl font-heading font-bold tracking-tight mb-2 text-foreground">{project.title}</h4>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-4">{project.location}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/90 transition-colors duration-300 ml-3">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
