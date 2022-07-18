import React from "react";
import Extension from "../Components/Extension";
import Faqs from "../Components/Faqs";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Extension />
      <Faqs />
      <Footer />
    </div>
  );
};

export default HomePage;
