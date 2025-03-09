import React, { useState, useRef } from "react";
import "../App.css";

const Collapse = ({ title, content }) => {
const [isOpen, setIsOpen] = useState(false);
const ref= useRef ()
  
  return (
    <div className="collapsible-section-wrapper">
      <div className="collapsible-section">
        <button className="section-header" onClick={() => setIsOpen(!isOpen)}>
          <h3>{title}</h3>
          <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </button>
        <div
          className="section-content"
          style={{
            opacity: isOpen ? 1 : 0,
            maxHeight: isOpen ?(ref.current.offsetHeight +10) +"px" : "0px",
            overflow: "hidden",
            padding:"15px" ,
            transition: "300ms"

          }}
        >
          <div ref= {ref}>

           {Array.isArray(content) && content.length > 0 ? (
    <ul>
      {content.map((item, index) => (
        <li key={index}>{String(item)}</li> 
      ))}
    </ul>
          
          ) : (
            <p className="collapse__text">{content}</p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;