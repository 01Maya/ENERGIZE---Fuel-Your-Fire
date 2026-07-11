'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Products from '../components/Products';
import Reviews from '../components/Reviews';
import CTA from '../components/CTA';

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Products />
      <Reviews />
      <CTA />
    </main>
  );
}
