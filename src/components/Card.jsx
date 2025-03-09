

import React from "react";
import { Link} from "react-router-dom";
import "../App.css" 

function Card({ title, image, id }) {
  return (
    <Link to={`/property/${id}`} className="property-card">
    <div className="card">
           <img src={image} alt={title} className="card-image" /> 
      <h3 className="card-title">{title}</h3>
    </div>
    </Link>
  );
}

export default Card;
