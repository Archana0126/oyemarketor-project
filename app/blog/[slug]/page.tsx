'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { blogPosts } from '@/lib/blog-data';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-4">Article not found</p>
          <Link href="/blog" className="text-primary font-bold hover:underline text-sm">← Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero image banner */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[3/1] overflow-hidden bg-secondary">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Article */}
      <article className="pb-20 md:pb-32">
        <div className="container mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-8 mt-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Articles
            </Link>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 bg-primary text-white text-[8px] font-bold uppercase tracking-widest rounded-sm">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <User className="w-3 h-3" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight leading-tight mb-4">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-10 border-l-2 border-primary pl-4">
              {post.excerpt}
            </p>

            {/* Divider */}
            <div className="border-t border-border mb-10" />

            {/* Content */}
            <div
              className="prose prose-sm sm:prose-base max-w-none
                prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
                prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-base prose-h3:sm:text-lg prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-foreground prose-strong:font-bold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-ul:text-muted-foreground prose-li:mb-1"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </article>

      {/* More articles */}
      {otherPosts.length > 0 && (
        <section className="border-t border-border py-16 md:py-24 bg-background">
          <div className="container mx-auto px-5 sm:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary border-l-2 border-primary pl-3 mb-8">
              More Articles
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col bg-white border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-primary mb-2">{related.category}</span>
                    <h3 className="text-sm font-bold leading-snug text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2 flex-1">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-primary group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
