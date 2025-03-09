import React from "react";

const Rating = ({ rating }) => {
    const totalStars = 5;

    return (
        <div className="rating">
            {Array.from({ length: totalStars }).map((_, index) => (
                <img 
                    key={index} 
                    src={index < rating ? "/image/etoile-remplie.png" : "/image/etoile-vide.png"} 
                    alt={index < rating ? "Étoile remplie" : "Étoile vide"} 
                    className="star"
                />
            ))}
        </div>
    );
};

export default Rating;