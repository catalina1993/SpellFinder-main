import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import SpellSearch from "../components/SpellSearch";
import SpellCard from "../components/SpellCard";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const [spells, setSpells] = useState([]);
  const [filteredSpells, setFilteredSpells] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const spellsPerPage = 4;

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch("https://www.dnd5eapi.co/api/spells");
        const data = await response.json();
        setSpells(data.results);
        setFilteredSpells(data.results);
      } catch (error) {
        console.error("Error fetching spells:", error);
      }
    };
    fetchSpells();
  }, []);

  const totalPages = Math.ceil(filteredSpells.length / spellsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastSpell = currentPage * spellsPerPage;
  const indexOfFirstSpell = indexOfLastSpell - spellsPerPage;
  const currentSpells = filteredSpells.slice(
    indexOfFirstSpell,
    indexOfLastSpell
  );

  return (
    <div className="home-container">
      <div className="paragraph-container">
        <h1>Discover Your Spells</h1>
        <p>
          Explore a vast collection of D&D spells tailored for every adventurer
          and magic user. Cast a search or weave a filter to reveal hidden
          magic!
        </p>
      </div>
      <div className="filter-results-container">
        <div>
          <div className="spell-filter">
            <SpellSearch
              setFilteredSpells={setFilteredSpells}
              spells={spells}
            />
          </div>
          <p className="no-spells-text">
            {filteredSpells.length === 0
              ? "No spells found. Use the filter to search."
              : ""}
          </p>
        </div>

        {/* Right Side: Spell Cards */}
        <div className="spell-cards-container">
          {currentSpells.map((spell) => (
            <SpellCard key={spell.index} spell={spell} />
          ))}

          {/* Move Pagination Inside */}
          {filteredSpells.length > spellsPerPage && (
            <div className="pagination-wrapper">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
