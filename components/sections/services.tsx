'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Home, Building, School, Map } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Residential Infrastructure',
    description: 'Bespoke living spaces designed for modern comfort and sustainable living.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Commercial Infrastructure',
    description: 'State-of-the-art business hubs that foster innovation and productivity.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Institutional Infrastructure',
    description: 'Educational and public spaces built with a focus on community and growth.',
    icon: School,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Planning & Development',
    description: 'Strategic urban planning and development for future-ready cities.',
    icon: Map,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070&auto=format&fit=crop',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full-subtle opacity-50" />

      {/* Full width container with equal padding left and right */}
      <div className="w-full px-6 md:px-10 relative z-10">

        <div className="mb-20 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 border-l-2 border-primary pl-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-heading font-black tracking-tighter leading-none"
          >
            Infrastructure <br />
            <span className="text-border">for a</span> <span className="text-primary italic">New Era.</span>
          </motion.h3>
        </div>

        {/* Equal gap on all sides, cards stretch full available width */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[360px] overflow-hidden rounded-none border border-border"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-colors duration-700" />
              <div className="relative h-full p-8 flex flex-col justify-end text-white pb-6">
                <div className="w-14 h-14 bg-background group-hover:bg-primary-foreground rounded-none flex items-center justify-center mb-6 border border-border shadow-xl group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-xl font-heading font-black tracking-tighter mb-3 uppercase text-white">
                  {service.title}
                </h4>
                <p className="text-xs text-white/80 leading-relaxed font-bold uppercase tracking-widest">
                  {service.description}
                </p>
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-4xl font-heading font-black text-primary-foreground opacity-20">0{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}