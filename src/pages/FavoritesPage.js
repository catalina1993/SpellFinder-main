import React, { useState, useEffect } from "react";
import SpellTable from "../components/SpellTable";
import Footer from "../components/Footer";

const FavoritesPage = ({ favorites, setFavorites }) => {
  const [expandedSpell, setExpandedSpell] = useState(null);
  const [filteredFavorites, setFilteredFavorites] = useState([]);

  useEffect(() => {
    setFilteredFavorites(favorites);
  }, [favorites]);

  const toggleFavorite = (spell) => {
    setFavorites((prev) => prev.filter((fav) => fav.index !== spell.index));
  };

  const toggleExpand = (spell) => {
    setExpandedSpell(expandedSpell === spell ? null : spell);
  };

  return (
    <div className="container favorites-page">
      <h1>Favorite Spells</h1>
      {filteredFavorites.length > 0 ? (
        <SpellTable
          spells={filteredFavorites}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          toggleExpand={toggleExpand}
          expandedSpell={expandedSpell}
        />
      ) : (
        <p>No favorite spells found.</p>
      )}
    </div>
  );
};

export default FavoritesPage;