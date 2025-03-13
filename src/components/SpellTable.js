import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaPlus, FaMinus } from "react-icons/fa";
import Pagination from "./Pagination";
import "../styles/SpellTable.css";

const SpellTable = ({
  spells,
  favorites,
  toggleFavorite,
  toggleExpand,
  expandedSpell,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const spellsPerPage = 10;

  const indexOfLastSpell = currentPage * spellsPerPage;
  const indexOfFirstSpell = indexOfLastSpell - spellsPerPage;
  const currentSpells = spells.slice(indexOfFirstSpell, indexOfLastSpell);
  const totalPages = Math.ceil(spells.length / spellsPerPage);

  return (
    <div className="spell-table-container">
      {spells.length === 0 ? (
        <p className="no-spells-message">NO SPELLS FOUND WITH THOSE FILTERS</p>
      ) : (
        <>
          <div className="spell-table-wrapper">
            <table className="spell-table">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Name</th>
                  <th>Casting Time</th>
                  <th>Duration</th>
                  <th>Range/Area</th>
                  <th>Attack/Save</th>
                  <th>Damage/Effect</th>
                  <th>Favorite</th>
                  <th>Expand</th>
                </tr>
              </thead>
              <tbody>
                {currentSpells.map((spell) => (
                  <React.Fragment key={spell.index}>
                    <tr>
                      <td>
                        {spell.level === 0 ? "Cantrip" : `${spell.level} Level`}
                      </td>
                      <td>{spell.name}</td>
                      <td>{spell.casting_time}</td>
                      <td>{spell.duration}</td>
                      <td>{spell.range}</td>
                      <td>{spell.attack_type || "—"}</td>
                      <td>{spell.damage?.damage_type?.name || "—"}</td>
                      <td>
                        <button
                          className="favorite-btn"
                          onClick={() => toggleFavorite(spell)}
                        >
                          {favorites.some(
                            (fav) => fav.index === spell.index
                          ) ? (
                            <FaHeart color="white" />
                          ) : (
                            <FaRegHeart />
                          )}
                        </button>
                      </td>
                      <td>
                        <button
                          className="expand-btn"
                          onClick={() => toggleExpand(spell)}
                        >
                          {expandedSpell === spell ? <FaMinus /> : <FaPlus />}
                        </button>
                      </td>
                    </tr>
                    {expandedSpell === spell && (
                      <tr className="spell-details">
                        <td colSpan={9}>
                          <div className="spell-details-content">
                            <h3>{spell.name}</h3>
                            <p>
                              <strong>Level:</strong>{" "}
                              {spell.level === 0
                                ? "Cantrip"
                                : `${spell.level} Level`}
                            </p>
                            <p>
                              <strong>School:</strong> {spell.school?.name}
                            </p>
                            <p>
                              <strong>Casting Time:</strong>{" "}
                              {spell.casting_time}
                            </p>
                            <p>
                              <strong>Range:</strong> {spell.range}
                            </p>
                            <p>
                              <strong>Components:</strong>{" "}
                              {spell.components.join(", ")}
                            </p>
                            <p>
                              <strong>Duration:</strong> {spell.duration}
                            </p>
                            <p>
                              <strong>Description:</strong>{" "}
                              {spell.desc?.join(" ")}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {spells.length > spellsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SpellTable;
