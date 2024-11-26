import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedHotels from '../components/FeaturedHotels';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedHotels />
      <Footer />
    </>
  );
};

export default Home;
