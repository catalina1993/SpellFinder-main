import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage"; // Import FavoritesPage
import AboutUsPage from "./pages/AboutUsPage"; // Import AboutUsPage
import HelpPage from "./pages/HelpPage"; // Import HelpPage
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorite"/>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
