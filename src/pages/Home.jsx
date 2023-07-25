import React from "react";
import Hero from "../components/Hero";

const Home = ({ selectedLanguage }) => {
  return (
    <div>
      <Hero selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default Home;
