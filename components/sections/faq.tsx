'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What is the legacy of VIBGYOR INFRAMECH?",
    answer: "VIBGYOR INFRAMECH boasts over 30 years of excellence in the infrastructure and real estate sector, founded on principles of integrity and visionary leadership."
  },
  {
    question: "Which are your major ongoing projects?",
    answer: "Currently, we are focusing on premier residential and commercial developments like Visava, which redefine modern living standards."
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow a rigorous quality control process, using premium materials and advanced construction technologies, overseen by industry veterans."
  },
  {
    question: "What is your commitment to sustainability?",
    answer: "Sustainability is at our core. We integrate eco-friendly materials, energy-efficient designs, and green spaces into all our future-ready communities."
  },
  {
    question: "How can I get in touch for a project?",
    answer: "You can reach us through our contact page, email us at info@vibgyorinframach.com, or visit our corporate office for a personal consultation."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 md:gap-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6"
            >
              Common Questions
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight leading-tight"
            >
              Frequently Asked <br />
              <span className="text-muted-foreground">Knowledge.</span>
            </motion.h3>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border last:border-none">
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-lg md:text-xl font-heading font-bold tracking-tight group-hover:text-primary transition-colors pr-8">
                    {faq.question}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      key={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-12 text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
