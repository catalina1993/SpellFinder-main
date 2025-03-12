import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Correct way to use Router
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* ✅ This should be the only <BrowserRouter> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
