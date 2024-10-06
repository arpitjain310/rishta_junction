import React from 'react';
import Hero from '../../components/Hero';
import Products from '../../components/Products';
import Partners from '../../components/Partners';
import CallToAction from '../../components/CallToAction';
import Testimonials from '../../components/Testimonials';
import Pricing from '../../components/Pricing';
import FAQ from '../../components/FAQ';
import About from '../../components/About';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Products />
      <Partners />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <FAQ />
      <About />
    </>
  );
};

export default LandingPage;
