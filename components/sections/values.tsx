'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Clock, Heart, Lightbulb, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

const values = [
  { title: 'Integrity', icon: Shield, desc: 'Honesty and transparency in every interaction.' },
  { title: 'Quality Excellence', icon: Star, desc: 'Uncompromising standards in every detail.' },
  { title: 'Timely Delivery', icon: Clock, desc: 'Respecting timelines as a core commitment.' },
  { title: 'Customer Commitment', icon: Heart, desc: 'Building relationships that last a lifetime.' },
  { title: 'Innovation', icon: Lightbulb, desc: 'Embracing future-ready technologies.' },
  { title: 'Sustainability', icon: Leaf, desc: 'Creating eco-conscious future communities.' },
];

export function Values() {
  return (
    <section id="values" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full-subtle opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 border-l-2 border-primary pl-4"
          >
            Core Values
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-heading font-black tracking-tighter leading-none"
          >
            The Pillars <span className="text-border">of</span> <br />
            <span className="text-primary italic">Our DNA.</span>
          </motion.h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-12 bg-background hover:bg-secondary/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-12">
                <value.icon className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-heading font-black tracking-tighter mb-4 uppercase">
                {value.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-bold uppercase tracking-widest">
                {value.desc}
              </p>
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 opacity-10 font-heading font-black text-6xl">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
