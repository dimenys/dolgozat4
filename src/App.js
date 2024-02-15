import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import './App.css';
import { SzallasListPage } from "./SzallasListPage";
import { SzallasSinglePage } from "./SzallasSinglePage";
import { SzallasCreatePage } from "./SzallasCreatePage";
import { SzallasModPage } from "./SzallasModPage";
import { SzallasDeletePage } from "./SzallasDeletePage";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
           <NavLink to={`/`} className="nav-link">
              <span className="nav-link">Szállás</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={`/uj-szallas`} className="nav-link">
              <span className="nav-link">Új szállás</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<SzallasListPage />} />
          <Route path="/szallas/:szallasId" element={<SzallasSinglePage />} />
          <Route path="uj-szallas" element={<SzallasCreatePage />} />
          <Route path="mod-szallas/:szallasId" element={<SzallasModPage />} />
          <Route path="del-szallas/:szallasId" element={<SzallasDeletePage />} />
      </Routes>
    </Router>
  );
}

export default App;
