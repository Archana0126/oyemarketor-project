'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "UltraTech Cement", "Tata Steel", "Asian Paints", "Jaquar", "Schneider Electric", "Saint-Gobain"
];

export function Partners() {
  return (
    <section className="py-20 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Our Network</h2>
            <h3 className="text-3xl font-heading font-bold tracking-tight">Strategic <br /><span className="text-muted-foreground">Partners.</span></h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-base md:text-lg font-heading font-bold tracking-tight hover:text-primary transition-colors cursor-default"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
