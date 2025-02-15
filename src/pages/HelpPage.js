import React from "react";
import SectionContainer from "../components/SectionContainer";
import SectionCard from "../components/SectionCard";
import "../styles/HelpPage.css";

const HelpPage = () => {
  return (
    <SectionContainer>
      <SectionCard title="Help">
        <p>Welcome to the D&D Spell Finder! Here’s how you can use this app:</p>
        <ul>
          <li>Search for spells using the search bar on the Home page.</li>
          <li>Filter spells by class, level, school, and casting time.</li>
          <li>Add spells to your Favorites by clicking "Add to Favorites."</li>
          <li>View your saved spells in the Favorites section.</li>
        </ul>
      </SectionCard>
    </SectionContainer>
  );
};

export default HelpPage;
