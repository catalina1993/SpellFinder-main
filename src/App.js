import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import AboutUsPage from "./pages/AboutUsPage";
import HelpPage from "./pages/HelpPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorite" element={<FavoritesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
