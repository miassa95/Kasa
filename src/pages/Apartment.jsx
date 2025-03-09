import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tags"; 
import Rating from "../components/Rating"; 
import "../App.css";

const Apartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
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
      
      .catch(() => {
        navigate("/404"); 
      });

  }, [id, navigate]);

  if (loading){
     return <p>Chargement...</p>; 
  }

  return (
    <>
      <div className="property-details">
      <Slideshow pictures={property.pictures} />

        <div className="property-header">
          <div>
            <h1>{property.title}</h1>
            <p className="location">{property.location}</p>
                        <Tags tags={property.tags} /> 
          </div>

          <div className="host-info">
            <p>{property.host.name}</p>
            <img src={property.host.picture} alt={property.host.name} className="host-img" />
          </div>
        </div>

        <Rating rating={property.rating} /> {/* Utilisation du composant Rating */}


        <div className="property-details-container">
         <div className="section">
             <Collapse title="Description" content={property.description} />
         </div>
         <div className="section">
            <Collapse title="Équipements" content={property.equipments} />
         </div>
        </div>
      </div>
      
    </>
  );
};

export default Apartment;