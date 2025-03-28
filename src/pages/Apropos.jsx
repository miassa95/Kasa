import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Collapse from "../components/Collapse";
import "../App.css";

const Apropos = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("/apropos.json")
      .then((response) => response.json())
      .then((data) => setSections(data))
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);

  return (
    <div className="apropos-container">
      <Hero image="/image/imgkasa2.png" text="" />
      <div className="accordion">
        {sections.map((section, index) => (
          <Collapse key={index} title={section.title} content={section.content} />
        ))}
      </div>
     
    </div>
  );
};

export default Apropos;