'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

export function USPHighlight() {
  return (
    <section className="py-24 md:py-48 relative overflow-hidden bg-foreground text-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-heading font-bold leading-[1.1] tracking-tight mb-12">
            Personal attention <br />
            to every project with <br />
            <span className="text-muted-foreground italic">uncompromised</span> <br />
            quality and timelines.
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
