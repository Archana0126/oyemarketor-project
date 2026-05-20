'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col">
      {/* Video */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent pointer-events-none" />

      {/* Content — pushed down with pt to clear navbar */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-8 lg:px-16 pb-4 pt-24 sm:pt-28">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 sm:mb-7"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-3 bg-background/60 backdrop-blur-sm text-primary text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.25em] border border-border rounded-full">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse flex-shrink-0" />
            Est. 1994 · Architecting Future
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black tracking-tight text-foreground leading-[1.0] mb-5 sm:mb-6
            text-[clamp(2.2rem,9vw,5.5rem)]"
        >
          Crafting<br />
          <span className="text-primary">Legacy</span><br />
          Infrastructure.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md mb-7 sm:mb-9"
        >
          Three decades of engineering excellence, building spaces that define generations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-row items-center gap-3"
        >
          <Link href="/projects">
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider px-5 sm:px-7 h-10 sm:h-11 rounded-sm transition-all hover:scale-105 shadow-lg shadow-primary/30">
              Explore Projects
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
            </button>
          </Link>
          <Link href="/contact">
            {/* Enquire Now — now in primary/gold color to match Legacy */}
            <button className="flex items-center gap-2 bg-transparent hover:bg-primary/10 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider px-5 sm:px-7 h-10 sm:h-11 rounded-sm border border-primary transition-all hover:scale-105">
              Enquire Now
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Stats — bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 px-5 sm:px-8 lg:px-16 pb-6 sm:pb-10"
      >
        <div className="border-t border-border/50 pt-4 sm:pt-6 grid grid-cols-3 gap-4 sm:gap-10 max-w-md sm:max-w-none">
          {[
            { value: '35+', label: 'Years Legacy' },
            { value: '200+', label: 'Projects Done' },
            { value: '100%', label: 'Stability' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl sm:text-3xl md:text-4xl font-heading font-black text-foreground tracking-tighter">
                {stat.value}
              </p>
              <p className="text-[7px] sm:text-[9px] uppercase tracking-[0.15em] text-primary font-bold mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 right-6 sm:right-10 z-10 hidden sm:flex flex-col items-center gap-1"
      >
        <span className="text-[8px] uppercase tracking-widest text-muted-foreground font-bold">Scroll</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}