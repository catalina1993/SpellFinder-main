import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import "./styles/styles.css";
import "./App.css";

const API_URL = "https://www.dnd5eapi.co/api/spells";

const App = () => {
  const [spells, setSpells] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await axios.get(API_URL);
        const spellList = response.data.results;

        const spellDetails = await Promise.all(
          spellList.map(async (spell) => {
            const spellResponse = await axios.get(
              `https://www.dnd5eapi.co${spell.url}`
            );
            return spellResponse.data;
          })
        );

        setSpells(spellDetails);
      } catch (error) {
        console.error("Error fetching spells:", error);
      }
    };

    fetchSpells();
  }, []);

  return (
    <div className="main-container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                spells={spells}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
