import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Technologies from '../components/Technologies';
import ProjectCTA from '../components/ProjectCTA';
import Clients from '../components/Clients';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Technologies />
      <ProjectCTA />
      <Clients />
      <Stats />
      <Testimonials />
      <Contact />
    </main>
  );
}
