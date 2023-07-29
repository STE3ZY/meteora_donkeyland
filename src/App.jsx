import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("🇬🇷");

  return (
    <Router>
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Routes>
        <Route
          path="/"
          element={<Home selectedLanguage={selectedLanguage} />}
        />
        <Route
          path="/products"
          element={<Products selectedLanguage={selectedLanguage} />}
        />
        <Route
          path="/gallery"
          element={<Gallery selectedLanguage={selectedLanguage} />}
        />
        <Route
          path="/contact"
          element={<Contact selectedLanguage={selectedLanguage} />}
        />
      </Routes>
      <Footer selectedLanguage={selectedLanguage} />
    </Router>
  );
}

export default App;
