'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

export function LatestBlog() {
  // Take the latest 3 posts
  const latestPosts = blogPosts.slice(0, 3);

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
            Our Journal
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold tracking-tight leading-tight"
            >
              Latest from <br />
              <span className="text-muted-foreground">the Field.</span>
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors group mb-2"
              >
                View All Stories
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block space-y-6">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-secondary">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-heading font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
