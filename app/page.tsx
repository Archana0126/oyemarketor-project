import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Projects } from '@/components/sections/projects';
import { Leadership } from '@/components/sections/leadership';
import { Values } from '@/components/sections/values';
import { Achievements } from '@/components/sections/achievements';
import { Process } from '@/components/sections/process';
import { USPHighlight } from '@/components/sections/usp-highlight';
import { FAQ } from '@/components/sections/faq';
import { Testimonials } from '@/components/sections/testimonials';
import { LatestBlog } from '@/components/sections/latest-blog';
import { Partners } from '@/components/sections/partners';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { ScrollToTop } from '@/components/sections/scroll-to-top';

export default function Home() {
  return (
    <main className="relative bg-background text-foreground">
      <Navbar />
      <div className="-mt-20">
        <Hero />
      </div>
      <About />
      <Services />
      <Projects />
      <Leadership />
      <Values />
      <Process />
      <Achievements />
      <Testimonials />
      <LatestBlog />
      <USPHighlight />
      <Partners />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
