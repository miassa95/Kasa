
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./footer";
import image1 from "../public/image/imgkasa1.png";
import "./App.css";

function Home() {
    const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties") 
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
    })

      .then((data) => setAppartements(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  return (
    <div className="container">
     
     <Hero image={image1} text="Chez vous, partout et ailleurs" />

      <div className="cards-container">
        <div className="grid">
        {appartements.map((app) => (
         
         <Card 
             key={app.id} 
             id={app.id} 
             title={app.title} 
             image={app.cover} 
           />
        ))}
        </div>
      </div>
      <Footer />

    </div>
    
  );
}


export default Home;
