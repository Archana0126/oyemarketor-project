'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Years Experience', value: 35, suffix: '+' },
  { label: 'Projects Completed', value: 200, suffix: '+' },
  { label: 'Happy Clients', value: 2000, suffix: '+' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-foreground">
      {count}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary border-l-2 border-primary pl-3 mb-12 sm:mb-16 md:mb-20"
        >
          Our Legacy
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-28 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter leading-[1.0] mb-6 sm:mb-8">
              A Journey of<br />
              <span className="text-primary">Visionary</span> Growth.
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-10 sm:mb-12 max-w-lg">
              VIBGYOR INFRAMECH stands at the intersection of heritage and innovation.
              With over 35 years of expertise, we don&apos;t just build structures — we craft
              environments where communities thrive and futures are forged.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-border pt-8 sm:pt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-bold text-primary mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — image stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative hidden sm:block"
          >
            {/* Main image */}
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl border-4 border-background">
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-700 hover:scale-105"
                style={{ backgroundImage: `url('/images/about.jpg')` }}
              />
            </div>

            {/* Floating secondary image */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-8 -right-8 w-40 md:w-52 aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-background z-20 hidden md:block"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-700 hover:scale-105"
                style={{ backgroundImage: `url('/images/about-small.jpg')` }}
              />
            </motion.div>

            {/* Badge card */}
            <div className="absolute -bottom-6 -left-6 bg-primary px-6 sm:px-8 py-5 sm:py-6 rounded-lg shadow-2xl z-20">
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white leading-relaxed">
                35+ Years of<br />
                <span className="opacity-80">Excellence</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
