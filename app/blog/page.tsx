'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { blogPosts } from '@/lib/blog-data';

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-5 sm:px-8">

          {/* Page header */}
          <div className="mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary border-l-2 border-primary pl-3 mb-6"
            >
              Journal
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight leading-tight mb-4 max-w-2xl"
            >
              Insights on Infrastructure,<br className="hidden sm:block" /> Real Estate & Design
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-sm text-muted-foreground max-w-xl leading-relaxed"
            >
              Expert perspectives from the Vibgyor Inframech team on construction, urban planning, and the Pune real estate market.
            </motion.p>
          </div>

          {/* Blog grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">

                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-primary text-white text-[8px] font-bold uppercase tracking-widest rounded-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-4 text-[9px] text-muted-foreground uppercase tracking-wider mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-sm sm:text-base font-bold leading-snug text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-primary group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
