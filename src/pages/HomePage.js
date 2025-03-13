import React, { useState, useEffect } from "react";
import SpellTable from "../components/SpellTable";
import Filters from "../components/Filters";
import "../styles/HomePage.css";
import "../components/Pagination"

const HomePage = ({ spells, favorites, setFavorites }) => {
  const [expandedSpell, setExpandedSpell] = useState(null);
  const [filteredSpells, setFilteredSpells] = useState(spells);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState("all");
  const [filterSchool, setFilterSchool] = useState("all");
  const [filterClass, setFilterClass] = useState("all");
  const [filterCastingTime, setFilterCastingTime] = useState("all");

  useEffect(() => {
    let filtered = [...spells];

    if (searchTerm) {
      filtered = filtered.filter((spell) =>
        spell.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterLevel !== "all") {
      filtered = filtered.filter(
        (spell) => spell.level.toString() === filterLevel
      );
    }

    if (filterSchool !== "all") {
      filtered = filtered.filter(
        (spell) =>
          spell.school &&
          spell.school.name.toLowerCase() === filterSchool.toLowerCase()
      );
    }

    if (filterClass !== "all") {
      filtered = filtered.filter(
        (spell) =>
          spell.classes &&
          spell.classes.some(
            (cls) => cls.name.toLowerCase() === filterClass.toLowerCase()
          )
      );
    }

    if (filterCastingTime !== "all") {
      filtered = filtered.filter(
        (spell) =>
          spell.casting_time &&
          spell.casting_time.toLowerCase() === filterCastingTime.toLowerCase()
      );
    }

    setFilteredSpells(filtered);
  }, [
    searchTerm,
    filterLevel,
    filterSchool,
    filterClass,
    filterCastingTime,
    spells,
  ]);

  const toggleFavorite = (spell) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.index === spell.index)
        ? prev.filter((fav) => fav.index !== spell.index)
        : [...prev, spell]
    );
  };

  const toggleExpand = (spell) => {
    setExpandedSpell(expandedSpell === spell ? null : spell);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setFilterLevel("all");
    setFilterSchool("all");
    setFilterClass("all");
    setFilterCastingTime("all");
  };

  return (
    <div className="container">
      <h1>D&D Spell Finder</h1>
      <p>
        Explore a vast collection of D&D spells tailored for every adventurer
        and magic user Cast a search or weave a filter to reveal hidden magic!
      </p>
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterLevel={filterLevel}
        setFilterLevel={setFilterLevel}
        filterSchool={filterSchool}
        setFilterSchool={setFilterSchool}
        filterClass={filterClass}
        setFilterClass={setFilterClass}
        filterCastingTime={filterCastingTime}
        setFilterCastingTime={setFilterCastingTime}
        resetFilters={resetFilters}
      />
      <SpellTable
        spells={filteredSpells}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        toggleExpand={toggleExpand}
        expandedSpell={expandedSpell}
      />
    </div>
  );
};

export default HomePage;
