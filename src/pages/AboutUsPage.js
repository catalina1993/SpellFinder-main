import React from "react";
import SectionContainer from "../components/SectionContainer";
import SectionCard from "../components/SectionCard";
import "../styles/AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <SectionContainer>
      <SectionCard title="About Us">
        <p>
          Welcome to SpellFinder, a passion project created by Elena Ispas and
          Calherbe Valcin, two developers who share a love for magic,
          creativity, and technology.
        </p>
        <p>
          Our goal was to create a simple yet immersive tool for Dungeons &
          Dragons players to explore, organize, and manage spells in a way that
          enhances their gaming experience. From brainstorming ideas to
          designing the interface, every step of this project has been a labor
          of love.
        </p>
      </SectionCard>

      <SectionCard title="Our Vision">
        <p>
          We envisioned SpellFinder as more than just a utility; it’s a resource
          for adventurers, storytellers, and magic enthusiasts. Whether you’re a
          veteran Dungeon Master or a new player exploring the world of magic,
          this tool is designed to make your journey seamless and enjoyable.
        </p>
      </SectionCard>

      <SectionCard title="Meet the Team">
        <p>
          <strong>Elena Ispas:</strong> A talented UI/UX designer and developer
          passionate about creating beautiful and user-friendly digital
          experiences.
        </p>
        <p>
          <strong>Calherbe Valcin:</strong> A skilled full-stack developer and
          problem solver with a love for bringing ideas to life through code.
        </p>
      </SectionCard>

      <SectionCard title="Why We Built This?">
        <p>
          SpellFinder was born out of our shared love for tabletop RPGs and the
          magical worlds they allow us to explore.
        </p>
      </SectionCard>

      <SectionCard title="Closing Note">
        <p>
          We hope you enjoy using SpellFinder as much as we enjoyed building it!
          If you have feedback, questions, or just want to say hello, feel free
          to reach out to us.
        </p>
      </SectionCard>
    </SectionContainer>
  );
};

export default AboutUsPage;
