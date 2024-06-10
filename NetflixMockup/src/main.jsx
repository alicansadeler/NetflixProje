import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import { NetflixContextProvider } from "./context/NetflixContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <NetflixContextProvider>
      <App />
    </NetflixContextProvider>
  </Router>
);
