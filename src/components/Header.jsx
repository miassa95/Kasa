

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


function Menu() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="menu">
      <nav>
        {/* Logo */}
        <img src="/image/LOGO KASA.png" alt="Logo Kasa" className="logo" />

        {/* Liens */}
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              to="/apropos" 
              className={location.pathname === "/apropos" ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;