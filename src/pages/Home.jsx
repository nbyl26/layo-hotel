import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Service from "../components/ServiceComponent";
import BlogNews from "../components/BlogNews";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Service />
      <BlogNews />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
