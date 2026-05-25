'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Visava",
    text: "VIBGYOR INFRAMECH delivered more than just a house; they delivered a masterpiece of modern living. The attention to detail is unparalleled.",
  },
  {
    name: "Anjali Sharma",
    role: "Commercial Partner",
    text: "Working with Nitin and his team has been a revelation. Their commitment to timelines and quality is a rarity in today's market.",
  },
  {
    name: "Vikram Singh",
    role: "Investor",
    text: "The visionary approach of VIBGYOR is what sets them apart. They don't just build structures; they build the future of our city.",
  },
  {
    name: "Priya Desai",
    role: "Residential Client",
    text: "From the first meeting to final handover, every step was seamless. VIBGYOR truly understands what a family needs in a home.",
  },
  {
    name: "Suresh Patil",
    role: "Business Owner",
    text: "The commercial space they built for us has exceeded every expectation. Professional, precise, and truly world-class execution.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = React.useState(0);
  const total = testimonials.length;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  const indices = [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            Voices of Trust
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold tracking-tight leading-tight"
          >
            Client <span className="text-muted-foreground">Testimonials.</span>
          </motion.h3>
        </div>

        {/* Slider */}
        <div className="flex items-center gap-4">

          {/* Left arrow */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-primary hover:text-primary/70 transition-all duration-200"
          >
            <ChevronLeft className="w-7 h-7 md:w-9 md:h-9" />
          </button>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {indices.map((idx, position) => {
              const t = testimonials[idx];
              const isActive = position === 1;
              const isSide = position !== 1;
              return (
                <motion.div
                  key={idx}
                  animate={{
                    opacity: isActive ? 1 : 0.75,
                    scale: isActive ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`p-8 flex flex-col gap-5 border min-h-[280px] transition-colors duration-300 ${
                    isSide ? 'hidden md:flex' : 'flex'
                  } ${
                    isActive
                      ? 'border-border bg-background shadow-sm'
                      : 'border-border/40 bg-transparent'
                  }`}
                >
                  {/* Name + Role */}
                  <div>
                    <h4 className={`text-xl font-heading font-bold tracking-tight mb-1 ${
                      isActive ? 'text-foreground' : 'text-foreground/70'
                    }`}>
                      {t.name}
                    </h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {t.role}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-border" />

                  {/* Text */}
                  <p className={`text-base leading-relaxed italic flex-1 ${
                    isActive ? 'text-foreground font-medium' : 'text-foreground/60'
                  }`}>
                    {t.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-primary hover:text-primary/70 transition-all duration-200"
          >
            <ChevronRight className="w-7 h-7 md:w-9 md:h-9" />
          </button>

        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-8 h-2 bg-primary'
                  : 'w-2 h-2 bg-border hover:bg-primary/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}