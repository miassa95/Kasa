
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import "./app.css";

function Error404() {
  return (
    <div className="error-container">      
     <h1>404</h1>      
    <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/" className="error-link">Retourner sur la page d’accueil</Link>
    <Footer />
    </div>
  );
}

export default Error404;