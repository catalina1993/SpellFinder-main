import React from "react";
import "../styles/Filters.css";

const Filters = ({
  searchTerm,
  setSearchTerm,
  filterLevel,
  setFilterLevel,
  filterSchool,
  setFilterSchool,
  filterClass,
  setFilterClass,
  filterCastingTime,
  setFilterCastingTime,
  resetFilters,
}) => {
  return (
    <div className="filters">
      <label>
        Spell Name:
        <input
          type="text"
          placeholder="Search Spell Names"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>

      <label>
        Class:
        <select
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
        >
          <option value="all">Select All</option>
          <option value="bard">Bard</option>
          <option value="cleric">Cleric</option>
          <option value="druid">Druid</option>
          <option value="paladin">Paladin</option>
          <option value="ranger">Ranger</option>
          <option value="sorcerer">Sorcerer</option>
          <option value="warlock">Warlock</option>
          <option value="wizard">Wizard</option>
          <option value="artificer">Artificer</option>
        </select>
      </label>

      <label>
        Spell Level:
        <select
          value={filterLevel}
          onChange={(e) => setFilterLevel(e.target.value)}
        >
          <option value="all">Select All</option>
          <option value="0">Cantrip</option>
          {[...Array(9).keys()].map((lvl) => (
            <option key={lvl + 1} value={lvl + 1}>{`${lvl + 1} Level`}</option>
          ))}
        </select>
      </label>

      <label>
        Spell School:
        <select
          value={filterSchool}
          onChange={(e) => setFilterSchool(e.target.value)}
        >
          <option value="all">Select All</option>
          <option value="Abjuration">Abjuration</option>
          <option value="Conjuration">Conjuration</option>
          <option value="Divination">Divination</option>
          <option value="Enchantment">Enchantment</option>
          <option value="Evocation">Evocation</option>
          <option value="Illusion">Illusion</option>
          <option value="Necromancy">Necromancy</option>
          <option value="Transmutation">Transmutation</option>
        </select>
      </label>

      <label>
        Casting Time:
        <select
          value={filterCastingTime}
          onChange={(e) => setFilterCastingTime(e.target.value)}
        >
          <option value="all">Select All</option>
          <option value="1 Action">1 Action</option>
          <option value="1 Bonus Action">1 Bonus Action</option>
          <option value="1 Reaction">1 Reaction</option>
          <option value="1 Minute">1 Minute</option>
          <option value="10 Minutes">10 Minutes</option>
          <option value="1 Hour">1 Hour</option>
          <option value="8 Hours">8 Hours</option>
        </select>
      </label>

      {/* Button moved inside its own div */}
      <div className="reset-container">
        <button className="reset-btn" onClick={resetFilters}>
          Reset All Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
