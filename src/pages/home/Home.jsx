import React from "react";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Join from "../../components/join/Join";
import FAQ from "../../components/faq/Faq";
import ServicesOffered from "../../components/whatWeOffer/ServicesOffered";
import guruji from "../../assets/guruji1.png";
const Home = () => {
  return (
    <div >
      <Hero />
      <About />
      <ServicesOffered />
      <Join />
      <FAQ />
    </div>
  );
};

export default Home;
