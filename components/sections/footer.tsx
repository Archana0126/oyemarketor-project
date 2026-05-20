'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const [year, setYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const col1 = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
  ];
  const col2 = [
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ];
  const col3 = [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ];

  const socials = [
    { Icon: Facebook, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Linkedin, href: '#' },
    { Icon: Youtube, href: '#' },
  ];

  return (
    <footer style={{ backgroundColor: '#1a1008' }} className="text-white">

      {/* Main Grid */}
      <div className="container mx-auto px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Col 0 — Logo + tagline */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              <div className="w-28 h-20 transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="VIBGYOR Logo"
                  width={112}
                  height={80}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold mb-4">
              Solapur Company
            </p>
            <p className="text-xs text-white/40 leading-relaxed">
              Three decades of engineering excellence, building spaces that define generations.
            </p>
          </div>

          {/* Col 1 */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 border-b border-white/10 pb-3">
              Company
            </h5>
            <ul className="space-y-4">
              {col1.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[11px] text-white/50 hover:text-primary transition-colors duration-200 uppercase tracking-widest font-bold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 border-b border-white/10 pb-3">
              Support
            </h5>
            <ul className="space-y-4">
              {col2.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[11px] text-white/50 hover:text-primary transition-colors duration-200 uppercase tracking-widest font-bold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 border-b border-white/10 pb-3">
              Legal
            </h5>
            <ul className="space-y-4">
              {col3.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[11px] text-white/50 hover:text-primary transition-colors duration-200 uppercase tracking-widest font-bold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom */}
      <div className="container mx-auto px-10 py-8 flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          {socials.map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center text-white/40 hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Architecting the</span>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Future</span>
        </div>
        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-white/20 text-center">
          © Copyright {year || 2026} · VIBGYOR Inframech · All rights reserved
        </p>
      </div>

    </footer>
  );
}