import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";

const Home = ({ selectedLanguage }) => {
  return (
    <div>
      <Hero selectedLanguage={selectedLanguage} />
      <About selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default Home;
