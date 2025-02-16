import React, { useState, useEffect } from "react";
import "../styles/FavoritesPage.css"; 
import SpellCard from "../components/SpellCard";
import Pagination from "../components/Pagination";
import favoriteIcon from "../assets/img/favorite-page-header.svg";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const spellsPerPage = 6; // 3 spells per row, 2 rows

  // Load favorites from local storage 
  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteSpells")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(favorites.length / spellsPerPage);
  const indexOfLastSpell = currentPage * spellsPerPage;
  const indexOfFirstSpell = indexOfLastSpell - spellsPerPage;
  const currentSpells = favorites.slice(indexOfFirstSpell, indexOfLastSpell);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="favorites-container">
      {/* Favorite Header */}
      <div className="favorite-header">
        <img src={favoriteIcon} alt="Favorite Icon" className="favorite-icon" />
        <h1>Your Favorite Spells</h1>
      </div>

      {/* Display Favorite Spells */}
      <div className="favorite-spells-grid">
        {currentSpells.length > 0 ? (
          currentSpells.map((spell) => (
            <SpellCard key={spell.index} spell={spell} />
          ))
        ) : (
          <p className="no-favorites">No favorite spells yet. Add some!</p>
        )}
      </div>

      {/* Pagination */}
      {favorites.length > spellsPerPage && (
        <div className="pagination-wrapper">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
