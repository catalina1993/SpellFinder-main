import "../styles/HomePage.css";
import SpellSearch from "../components/SpellSearch";

const HomePage = () => {
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

      {/* Main Layout: Filter on Left, Spell Cards on Right */}
      <div className="filter-results-container">
        {/* Left Side: Spell Search Filter */}
        <div>
          <div className="spell-filter">
            <SpellSearch />
          </div>
          <p className="no-spells-text">
            No spells found. Use the filter to search.
          </p>
        </div>

        {/* Right Side: Placeholder for Future Spell Cards */}
        <div className="spell-cards-container"></div>
      </div>
    </div>
  );
};

export default HomePage;
