import React, { useState, useEffect } from "react";
import "../styles/SpellCard.css";
import Button from "./Button";
import favoriteIcon from "../assets/img/favorite.svg";
import favoriteFilledIcon from "../assets/img/favorite-filled.svg";

const SpellCard = ({ spell }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteSpells")) || [];
    setIsFavorite(savedFavorites.some((fav) => fav.index === spell.index));
  }, [spell.index]);

  const toggleFavorite = () => {
    let savedFavorites =
      JSON.parse(localStorage.getItem("favoriteSpells")) || [];

    if (isFavorite) {
      savedFavorites = savedFavorites.filter(
        (fav) => fav.index !== spell.index
      );
    } else {
      savedFavorites.push(spell);
    }

    localStorage.setItem("favoriteSpells", JSON.stringify(savedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="spell-card">
      <div className="spell-card-header">
        <h3 className="spell-title">{spell.name}</h3>
        <img
          src={isFavorite ? favoriteFilledIcon : favoriteIcon}
          alt="Favorite"
          className="favorite-icon"
          onClick={toggleFavorite}
        />
      </div>
      <p className="spell-level">Level: {spell.level || "Unknown"}</p>
      <p className="spell-description">
        {spell.desc ? spell.desc[0] : "No description available"}
      </p>
      <div className="button-container">
        <Button type="button" variant="primary">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default SpellCard;
