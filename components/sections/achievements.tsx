'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';

const awards = [
  { title: 'Best Infrastructure Project', year: '2023' },
  { title: 'Excellence in Design', year: '2023' },
  { title: 'Sustainability Excellence', year: '2022' },
  { title: 'Best Residential Development', year: '2022' },
];

export function Achievements() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 border-l-2 border-primary pl-4"
          >
            Award Winning Excellence
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-heading font-black tracking-tighter leading-none"
          >
            Recognized <br />
            <span className="text-border">for</span> <span className="text-primary italic">Excellence.</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 border border-border"
          >
            <Trophy className="w-8 h-8 text-primary mb-8" />
            <div className="text-5xl md:text-6xl font-heading font-black mb-4">35+</div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground">Awards & Recognition</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 border border-border"
          >
            <Award className="w-8 h-8 text-primary mb-8" />
            <div className="text-5xl md:text-6xl font-heading font-black mb-4">2000+</div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground">Happy Clients</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 border border-border"
          >
            <div className="w-8 h-8 bg-primary/20 flex items-center justify-center mb-8">
              <span className="text-lg font-black text-primary">★</span>
            </div>
            <div className="text-5xl md:text-6xl font-heading font-black mb-4">20+</div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground">Projects Completed</p>
          </motion.div>
        </div>

        {/* Awards Grid */}
        <div className="border-t border-border pt-20">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-12"
          >
            Recent Awards
          </motion.h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-border hover:border-primary hover:bg-secondary/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Trophy className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">{award.year}</span>
                </div>
                <h5 className="text-sm font-heading font-black uppercase tracking-tight leading-tight">
                  {award.title}
                </h5>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
