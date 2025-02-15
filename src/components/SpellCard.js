import "../styles/SpellCard.css";
import { useState } from "react";
import Button from "./Button";
import favoriteIcon from "../assets/img/favorite.svg";
import favoriteFilledIcon from "../assets/img/favorite-filled.svg";

const SpellCard = ({ spell }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Function to truncate description safely
  const truncateText = (text, maxLength) => {
    if (!text || text.length === 0) return "No description available.";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="spell-card">
      {/* Header: Title & Favorite Icon */}
      <div className="spell-card-header">
        <h3 className="spell-title">{spell.name}</h3>
        <img
          src={isFavorite ? favoriteFilledIcon : favoriteIcon}
          alt="Favorite"
          className="favorite-icon"
          onClick={toggleFavorite}
        />
      </div>

      {/* Spell Level */}
      <p className="spell-level">Level: {spell.level || "Unknown"}</p>

      {/* Spell Description */}
      <p
        className="spell-description"
        data-placeholder="No description available"
      >
        {spell.desc ? spell.desc[0].substring(0, 120) + "..." : ""}
      </p>

      {/* Left-Aligned Button */}
      <div className="button-container">
        <Button type="button" variant="primary">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default SpellCard;
