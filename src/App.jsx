import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("🇬🇷");

  return (
    <div>
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Hero selectedLanguage={selectedLanguage} />
      <Footer selectedLanguage={selectedLanguage} />
    </div>
  );
}

export default App;
