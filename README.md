#  Spell Finder
A magical tool for discovering, filtering, and managing D&D spells.

##  Overview
Spell Finder is a React-based web application designed for Dungeons & Dragons (D&D) players to easily search, filter, and explore spells. Whether you're a Wizard, Cleric, or Sorcerer, this tool helps you quickly find spells that fit your character’s needs.

##  Features
- Spell Search & Filtering – Find spells by name, class, level, school, and casting time.
-  Interactive Spell Cards – View spell details, descriptions, and casting requirements.
-  Live API Data – Spells are fetched dynamically from the D&D 5E API.
-  Favorite Spells List – Save your favorite spells for quick access.
-  Mobile-Responsive UI – A clean and modern dark-themed interface.

##  Screens
- **Home Page** – Search & filter spells.
- **Spell Table Grid** – Displays a grid of spells matching the filter.
- **Favorites Page** – Save and view favorite spells.

##  Tech Stack
-  **React.js** – Frontend framework
-  D&D 5E API – Fetches live spell data
-  **React Router** – Navigation
-  **CSS (Custom Styling)** – No Bootstrap, fully custom UI

##  Challenges & Lessons Learned
-  **API Data Formatting:**
The API response structure required additional parsing to display spell details correctly.
Some spells had missing attributes, requiring dynamic handling of empty values.
-  **UI Responsiveness:**
The spell filter and results layout needed multiple refinements for desktop and mobile views.
Ensured that filter and table grid adapted to all screen sizes.
-  **Dropdown & Form Styling:**
Without Bootstrap, I had to custom-style dropdowns, form inputs, and buttons to fit the dark theme.
Focused on accessibility and responsiveness.
-  **Performance Optimization:**
Fetching API data in real time initially caused slow load times.
Optimized caching API requests and reducing re-renders for better performance.
Despite these challenges, problem-solving helped me refine the app into a functional and user-friendly tool.

