'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface SubPageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; href: string }>;
  backgroundImage?: string;
}

export function SubPageHero({
  title,
  subtitle,
  description,
  breadcrumbs,
  backgroundImage = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop',
}: SubPageHeroProps) {
  const words = title.split(' ');
  const lastWord = words[words.length - 1];
  const mainTitle = words.slice(0, -1).join(' ');

  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] pt-20 sm:pt-28 md:pt-32 pb-10 sm:pb-16 md:pb-20 flex items-center overflow-hidden bg-background w-full max-w-[100vw]">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Building background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Same overlays as Hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex items-center gap-2 text-sm"
          >
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.href}>
                <ChevronRight className="w-4 h-4 text-border" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-primary font-bold">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}

        {/* Main content */}
        <div className="max-w-4xl">
          {/* Subtitle */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary border-l-2 border-primary pl-4">
                {subtitle}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black uppercase tracking-tighter leading-none mb-4 sm:mb-6 md:mb-8"
          >
            {mainTitle} <br />
            <span className="text-border bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {lastWord}
            </span>
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl font-medium"
            >
              {description}
            </motion.p>
          )}

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-border/50"
          >
            <div>
              <div className="text-2xl md:text-3xl font-heading font-black text-primary mb-2">35+</div>
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-black text-primary mb-2">200+</div>
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Projects Done</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-black text-primary mb-2">2000+</div>
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}