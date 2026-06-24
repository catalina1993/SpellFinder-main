import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import "./App.css";

const API_URL = "https://www.dnd5eapi.co/api/spells";

const App = () => {
  const [spells, setSpells] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 new

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await axios.get(API_URL);
        const spellList = response.data.results;

        // 👇 replaced Promise.all with batched fetching
        const batchSize = 10;
        const spellDetails = [];
        for (let i = 0; i < spellList.length; i += batchSize) {
          const batch = spellList.slice(i, i + batchSize);
          const results = await Promise.all(
            batch.map((spell) =>
              axios.get(`https://www.dnd5eapi.co${spell.url}`)
            )
          );
          spellDetails.push(...results.map((r) => r.data));
          await new Promise((r) => setTimeout(r, 500));
        }

        setSpells(spellDetails);
      } catch (error) {
        console.error("Error fetching spells:", error);
      } finally {
        setLoading(false); // 👈 done loading either way
      }
    };

    fetchSpells();
  }, []);

  return (
    <div className="main-container">
      <Navbar />
      <div className="content">
        {loading ? ( // 👈 show spinner while fetching
          <p style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>
            Loading spells...
          </p>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  spells={spells}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <FavoritesPage
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
          </Routes>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import axios from "axios";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import FavoritesPage from "./pages/FavoritesPage";
// import "./App.css";

// const API_URL = "https://www.dnd5eapi.co/api/spells";

// const App = () => {
//   const [spells, setSpells] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const fetchSpells = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         const spellList = response.data.results;

//         const spellDetails = await Promise.all(
//           spellList.map(async (spell) => {
//             const spellResponse = await axios.get(
//               `https://www.dnd5eapi.co${spell.url}`
//             );
//             return spellResponse.data;
//           })
//         );

//         setSpells(spellDetails);
//       } catch (error) {
//         console.error("Error fetching spells:", error);
//       }
//     };

//     fetchSpells();
//   }, []);

//   return (
//     <div className="main-container">
//       <Navbar />
//       <div className="content">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <HomePage
//                 spells={spells}
//                 favorites={favorites}
//                 setFavorites={setFavorites}
//               />
//             }
//           />
//           <Route
//             path="/favorites"
//             element={
//               <FavoritesPage
//                 favorites={favorites}
//                 setFavorites={setFavorites}
//               />
//             }
//           />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;
