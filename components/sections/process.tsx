'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Hammer, Key } from 'lucide-react';

const steps = [
  {
    title: "Discovery",
    desc: "Understanding the landscape and community needs.",
    icon: Search
  },
  {
    title: "Design",
    desc: "Architecting future-ready, sustainable structures.",
    icon: PenTool
  },
  {
    title: "Build",
    desc: "Precision engineering with premium materials.",
    icon: Hammer
  },
  {
    title: "Deliver",
    desc: "Handing over the keys to your future home.",
    icon: Key
  }
];

export function Process() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            Our Methodology
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold tracking-tight leading-tight"
          >
            The Path to <br />
            <span className="text-muted-foreground">Excellence.</span>
          </motion.h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
                <span className="text-5xl font-heading font-bold opacity-5 group-hover:opacity-10 transition-opacity">0{i + 1}</span>
              </div>
              <h4 className="text-xl font-heading font-bold tracking-tight mb-4">{step.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
