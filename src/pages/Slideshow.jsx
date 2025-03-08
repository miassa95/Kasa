import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./footer";
import Collapse from "./Collapse";
import "./App.css";

const Slideshow = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des détails");
        }
        return response.json();
      })
      .then((data) => {
        setProperty(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (!property) return <p>Aucun logement trouvé</p>;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.pictures.length) % property.pictures.length);
  };

  return (
    <>
      <div className="property-details">
        <div className="carousel">
          {property.pictures.length > 1 && (
            <button className="arrow left" onClick={prevImage}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          )}
          <img src={property.pictures[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
          {property.pictures.length > 1 && (
            <button className="arrow right" onClick={nextImage}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}
          <p className="image-counter">{currentImageIndex + 1} / {property.pictures.length}</p>
        </div>

        <div className="property-header">
          <div>
            <h1>{property.title}</h1>
            <p className="location">{property.location}</p>
            <div className="tags">
              {property.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="host-info">
            <p>{property.host.name}</p>
            <img src={property.host.picture} alt={property.host.name} className="host-img" />
          </div>
        </div>

        <div className="rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <img 
              key={index} 
              src={index < property.rating ? "/image/etoile-remplie.png" : "/image/etoile-vide.png"} 
              alt={index < property.rating ? "Étoile remplie" : "Étoile vide"} 
              className="star"
            />
          ))}
        </div>

        <div className="property-details-container">
         <div className="section">
             <Collapse title="Description" content={property.description} />
         </div>
         <div className="section">
            <Collapse title="Équipements" content={property.equipments} />
         </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Slideshow;