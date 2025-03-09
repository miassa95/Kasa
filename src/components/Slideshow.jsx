import React, { useState } from "react";

const Slideshow = ({ pictures }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!pictures || pictures.length === 0) {
        return null; 
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="carousel">
            {pictures.length > 1 && (
                <button className="arrow left" onClick={prevImage}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
            )}
            <img src={pictures[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
            {pictures.length > 1 && (
                <button className="arrow right" onClick={nextImage}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            )}
            <p className="image-counter">{currentImageIndex + 1} / {pictures.length}</p>
        </div>
    );
};

export default Slideshow;