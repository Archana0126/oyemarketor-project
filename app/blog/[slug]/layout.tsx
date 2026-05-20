import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Vibgyor Inframech',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  return {
    title: `${post.title} | Vibgyor Inframech Blog`,
    description: post.excerpt,
    keywords: `${post.category}, blog, article, infrastructure, architecture`,
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return children;
}
