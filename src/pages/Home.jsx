
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import "../App.css";

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
     
     <Hero image="/image/imgkasa1.png"  text="Chez vous, partout et ailleurs" />

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
      

    </div>
    
  );
}


export default Home;
