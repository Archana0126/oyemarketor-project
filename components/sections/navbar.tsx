'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 w-full z-50 bg-transparent backdrop-blur-sm h-20 overflow-visible">
      {isScrolled && <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border"></div>}
      <div className="container mx-auto px-4 sm:px-6 flex items-center relative z-10 h-20">

        {/* Logo — far left */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
            <Image
              src="/header.png"
              alt="VIBGYOR Logo"
              width={96}
              height={96}
              className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
              priority
            />
          </div>
        </Link>

        {/* Nav links — pushed to right with ml-auto */}
        <div className="hidden md:flex items-center gap-10 ml-auto h-16">
          <Link
            href="/"
            className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Enquire Now — completely separate, far right */}
        <div className="hidden md:flex ml-10">
          <Link href="/contact">
            <Button
              variant="outline"
              className="rounded-none px-8 text-[11px] font-bold uppercase tracking-widest h-11 transition-all
                text-primary border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Enquire Now
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={(props) => (
                <Button {...props} variant="ghost" size="icon" className="rounded-full">
                  <Menu className="w-6 h-6" />
                </Button>
              )}
            />
            <SheetContent side="right" className="w-[300px] bg-background border-l border-border p-0">
              <div className="flex flex-col h-full">
                <div className="p-10 border-b border-border flex items-center justify-center">
                  <div className="w-40 h-40 flex-shrink-0">
                    <Image
                      src="/logo.png"
                      alt="VIBGYOR Logo"
                      width={160}
                      height={160}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 p-8">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-heading font-bold tracking-tight hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-heading font-bold tracking-tight hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto p-8 border-t border-border">
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="block">
                    <Button className="rounded-xl w-full h-14 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                      Enquire Now
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}